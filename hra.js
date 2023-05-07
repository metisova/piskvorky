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

  if (currentPlayer === 'cross') {
    squares.forEach((btn) => (btn.disabled = true));

    fetch('https://piskvorky.czechitas-podklady.cz/api/suggest-next-move', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        board: squaresArray,
        player: 'x',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { x, y } = data.position;
        const index = x + y * 10;
        const field = squares[index];
        field.click();
      });

    squares.forEach((btn) => {
      if (
        !btn.classList.contains('board__field--circle') &&
        !btn.classList.contains('board__field--cross')
      ) {
        btn.disabled = false;
      }
    });
  }
};

const confirmReload = () => {
  if (confirm('Opravdu chceš začít znovu?') === true) {
    location.reload();
  }
};

document.querySelector('.restart').addEventListener('click', confirmReload);

squares.forEach((btn) => btn.addEventListener('click', addClass));
