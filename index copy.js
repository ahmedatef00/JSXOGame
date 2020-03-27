//- gra do 3 zwycięstw
//- gra z komputerem
//- gomoku (plansze by się już rysowało JS)


var TicTacToe = {
    board: document.getElementsByClassName('board')[0],
    fields: document.getElementsByClassName('field'),
    currentPlayer: document.getElementById('current'),
    checkedFields: Array(9).fill(''),
    win: [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ],
    init: function() {
      this.current = 'O';
      this.currentPlayer.textContent = this.current;
      for (var i = 0; i < this.fields.length; i++) {
        this.fields[i].textContent = '';
        this.checkedFields[i] = '';
      }
    },
    checkWin: function() {
      for(var i = 0; i < this.win.length; i++) {
        if (this.checkedFields[this.win[i][0]] === this.current && this.checkedFields[this.win[i][1]] === this.current && this.checkedFields[this.win[i][2]] === this.current) {
          alert(this.current + ' won!');
          this.init();
          return true;
        } else if (this.checkedFields.indexOf('') === -1) {
          alert('Tie');
          this.init();
          return true;
        }
      }
    },
    handleClick: function(e) {
      var currentField = e.target;
      var currentFieldNumber = Array.prototype.indexOf.call(this.fields,currentField);
      if (!currentField.textContent) {
        currentField.textContent = this.current;
        this.checkedFields[currentFieldNumber] = this.current;
        if (!this.checkWin()) {
          this.current = this.current === 'O' ? 'X' : 'O';
          this.currentPlayer.textContent = this.current;
        }
      }
    }
  }
  TicTacToe.init();
  TicTacToe.board.addEventListener('click',function(e) {
    TicTacToe.handleClick(e);
  });
  
  console.log(TicTacToe.checkedFields);
  //Zmienne: referencje do miejsca elementów w DOM
  //- plansza
  var board = document.getElementsByClassName('board')[0];
  //- pola
  var fields = document.getElementsByClassName('field');
  //- pole wyświetlania aktualnego gracza
  var currentPlayer = document.getElementById('current');
  
  var current = 'O';
  //var singlePlayer = true;
  var checkedFields = Array(9).fill('');
  //console.log(checkedFields);
  
//   var win = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
//   ];
  
//   currentPlayer.textContent = current;
  
//   function checkWin() {
//     for(var i = 0; i < win.length; i++) {
//       if (checkedFields[win[i][0]] === current && checkedFields[win[i][1]] === current && checkedFields[win[i][2]] === current) {
//         alert(current + ' won!');
//         gameOver();
//         return true;
//       } else if (checkedFields.indexOf('') === -1) {
//         alert('Tie');
//         gameOver();
//         return true;
//       }
//   }
//   }
//   board.addEventListener('click',function(e) {
//     //alert(Array.prototype.indexOf.call(fields,e.target));
//     var currentField = e.target;
//     var currentFieldNumber = Array.prototype.indexOf.call(fields,currentField);
//     if (!currentField.textContent) {
//       currentField.textContent = current;
//       checkedFields[currentFieldNumber] = current;
//       if (!checkWin()) {
//         current = current === 'O' ? 'X' : 'O';
//         currentPlayer.textContent = current;
//       }
//     }
    
//   }, false);
  
//   for (var i = 0; i < fields.length; i++) {
//     (function(j) {
//       fields[j].addEventListener('click', function() {
//       if (!this.textContent) {
//         this.textContent = current;
//         checkedFields[j] = current;
//         if (!checkWin()) {
//           current = current === 'O' ? 'X' : 'O';
//           currentPlayer.textContent = current;
//         }
//       }
//     });
//     checkedFields.push('');
//     })(i);
    
    
//   }
  
//   function gameOver() {
//     for (var i = 0; i < fields.length; i++) {
//       fields[i].textContent = '';
//       checkedFields[i] = '';
//     }
//     current = 'O';
//     currentPlayer.textContent = current;
//   }