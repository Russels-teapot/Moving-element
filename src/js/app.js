// TODO: write code here

const getRandomCell = () => {
  const gameCells = document.querySelectorAll('.gameboard__cell');
  let randomCell = gameCells[Math.round(gameCells.length * Math.random())];
  while (!randomCell) {
    randomCell = gameCells[Math.round(gameCells.length * Math.random())]
  }
  return randomCell;
};
getRandomCell().classList.add('gameboard__cell_active');


const changeCell = () => {
  const activeCell = document.querySelector('.gameboard__cell_active');
  let newCell = getRandomCell();
  while (newCell === activeCell) {
    newCell = getRandomCell();
  }
  activeCell.classList.remove('gameboard__cell_active');
  newCell.classList.add('gameboard__cell_active');
};

setInterval(changeCell, 1000);
