let currentPlayer = 'circle';
const playerIcon = document.getElementById('player_icon');

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    playerIcon.classList.replace('circle', 'cross');
    event.target.disabled = true
    return (currentPlayer = 'cross');
  } else if (currentPlayer === 'cross') {
    event.target.classList.add('board__field--cross');
    playerIcon.classList.replace('cross', 'circle');
    event.target.disabled = true
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

document
  .querySelector('.square:nth-child(1)')
  .addEventListener('click', addClass);
document
  .querySelector('.square:nth-child(2)')
  .addEventListener('click', addClass);
document
  .querySelector('.square:nth-child(3)')
  .addEventListener('click', addClass);
document
  .querySelector('.square:nth-child(4)')
  .addEventListener('click', addClass);
document
  .querySelector('.square:nth-child(5)')
  .addEventListener('click', addClass);
document
  .querySelector('.square:nth-child(6)')
  .addEventListener('click', addClass);
document
  .querySelector('.square:nth-child(7)')
  .addEventListener('click', addClass);
document
  .querySelector('.square:nth-child(8)')
  .addEventListener('click', addClass);
document
  .querySelector('.square:nth-child(9)')
  .addEventListener('click', addClass);
document
  .querySelector('.square:nth-child(10)')
  .addEventListener('click', addClass);


  document.querySelector('.restart').addEventListener('click', confirmReload);

/*   document
  .querySelectorAll('.square:nth-child(-n+10)')
  .forEach(button => button.addEventListener('click', addClass)); */
