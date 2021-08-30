// TODO: write code here

const getRandomCell = () => {
  const gameCells = document.querySelectorAll('.gameboard__cell');
  const randomCell = gameCells[Math.round(gameCells.length * Math.random())];
  return randomCell;
};
getRandomCell().classList.add('gameboard__cell_active');


const changeCell = () => {
  const activeCell = document.querySelector('.gameboard__cell_active');
  const newCell = getRandomCell();
  do {
    getRandomCell();
  } while (newCell === activeCell);
  activeCell.classList.remove('gameboard__cell_active');
  newCell.classList.add('gameboard__cell_active');
};

setInterval(changeCell, 1000);
document.querySelector('.gameboard__cell_active').addEventListener('click', changeCell);
