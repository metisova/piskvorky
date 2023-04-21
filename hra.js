let currentPlayer = 'circle';
const playerIcon = document.getElementById('player_icon');

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    playerIcon.classList.replace('circle', 'cross');
    event.target.disabled = true;
    return (currentPlayer = 'cross');
  } else if (currentPlayer === 'cross') {
    event.target.classList.add('board__field--cross');
    playerIcon.classList.replace('cross', 'circle');
    event.target.disabled = true;
    return (currentPlayer = 'circle');
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
  .forEach((button) => button.addEventListener('click', addClass));
