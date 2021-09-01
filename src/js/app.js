// TODO: write code here

const getRandomCell = () => {
  const gameCells = document.querySelectorAll('.gameboard__cell');
  const randomCell = gameCells[Math.round(gameCells.length * Math.random())];
  return randomCell;
};
getRandomCell().classList.add('gameboard__cell_active');


const changeCell = () => {
  const activeCell = document.querySelector('.gameboard__cell_active');
  let newCell = getRandomCell();
  while (newCell === activeCell) {
    newCell = getRandomCell();
  }
  console.log('Текущая ячейка', activeCell);
  console.log('Следующая ячейка', newCell);
  activeCell.classList.remove('gameboard__cell_active');
  newCell.classList.add('gameboard__cell_active');
};

setInterval(changeCell, 1000);
