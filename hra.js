import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

let currentPlayer = 'circle';

const playerIcon = document.getElementById('player_icon');

const squares = document.querySelectorAll('.square');

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    playerIcon.classList.replace('circle', 'cross');
    event.target.disabled = true;
    currentPlayer = 'cross';
  } else if (currentPlayer === 'cross') {
    event.target.classList.add('board__field--cross');
    playerIcon.classList.replace('cross', 'circle');
    event.target.disabled = true;
    currentPlayer = 'circle';
  }

  const squaresArray = Array.from(squares).map((button) => {
    if (button.classList.contains('board__field--circle')) {
      return 'o';
    } else if (button.classList.contains('board__field--cross')) {
      return 'x';
    } else {
      return '_';
    }
  });

  const winner = findWinner(squaresArray);

  if (winner === 'o') {
    setTimeout(() => {
      alert('Vyhrálo kolečko!');
      location.reload();
    }, 250);
  } else if (winner === 'x') {
    setTimeout(() => {
      alert('Vyhrál křížek!');
      location.reload();
    }, 250);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('Hra skončila nerozhodně.');
      location.reload();
    }, 250);
  }
};

const confirmReload = (event) => {
  if (confirm('Opravdu chceš začít znovu?') === true) {
    location.reload();
  } else {
    event.preventDefault();
  }
};

document.querySelector('.restart').addEventListener('click', confirmReload);

document
  .querySelectorAll('.square')
  .forEach((btn) => btn.addEventListener('click', addClass));
