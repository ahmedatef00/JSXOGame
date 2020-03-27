let originalBoard;
let humanPlayer = 'x';
let aiPlayer = 'o';
let x0counter = 0;
let winingCobonations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]




];
const cells = document.querySelectorAll('.cell');
//reply
function startGame() {
  document.getElementsByClassName('endgame')[0].style.display = "none";
  originalBoard = Array.from(Array(9).keys());
  console.log(originalBoard);
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty('background-color');
    cells[i].addEventListener('click', turnClick, false);

  }

}

function turnClick(square) {
  //  console.log(square.target.id);

  turn(square.target.id, humanPlayer);


}
function turn(squareid, player) {

  originalBoard[squareid] = player;
  document.getElementById(squareid).innerHTML = player;
  let gameWon =
    checkWin(originalBoard, player);
  console.log(gameWon);
  if (gameWon !== undefined) {
    gameOver(gameWon);

  }


}


//plays : Array of indexes 
//[] i:index, e:element  a:array  accumulator,curvalue,currindex,soiurcearray


//Win Array of indecies elly htk 3leha 5d awl index mn el wincombos


function checkWin(board, player) {
  let playsArray = originalBoard.reduce((accumulator, elementValue, currentIndex) =>
    elementValue === player ? accumulator.concat(currentIndex) : accumulator

    , [])

  let gameWon;
  for (let [index, win] of winingCobonations.entries()) {

    if (win.every(elementValue => playsArray.indexOf(elementValue) > -1)) {
      gameWon = { index: index, player: player };
      break;
    }

  }
  return gameWon;

  // console.log(playsArray);


}
function gameOver(gameWon) {

  for (const index of winingCobonations[gameWon.index]) {
    // console.log(cells[index]);

    cells[index].style.backgroundColor =
      gameWon.player === humanPlayer ? "blue" : "red";
    for (let i = 0; i < cells.length; i++) {


      cells[i].removeEventListener('click', turnClick, false);

    }
  }


}



