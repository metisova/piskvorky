let currentPlayer = 'circle';

const addClass = (event) => {
  if (currentPlayer === 'circle') {
    event.target.classList.add('board__field--circle');
    return (currentPlayer = 'cross');
  } else if (currentPlayer === 'cross') {
    event.target.classList.add('board__field--cross');
    return (currentPlayer = 'circle');
  }
};

document
  .querySelector('button:nth-child(1)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(2)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(3)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(4)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(5)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(6)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(7)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(8)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(9)')
  .addEventListener('click', addClass);
document
  .querySelector('button:nth-child(10)')
  .addEventListener('click', addClass);

/*   document
  .querySelectorAll('button:nth-child(-n+10)')
  .forEach(button => button.addEventListener('click', addClass)); */
