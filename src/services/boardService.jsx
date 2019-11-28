import data from './dataImporter';


function getNextId() {
  return data.boards[data.boards.length - 1].id + 1;
}

export function getAllBoards() {
  const boardArr = [];
  for (let i = 0; i < data.boards.length; i += 1) {
    boardArr.push(data.boards[i]);
  }
  return boardArr;
}

export function createNewBoard(boardInput) {
  const newBoard = {
    id: getNextId(),
    name: boardInput.title,
    thumbnailPhoto: boardInput.thumbnailPhoto
  }
  // Push new board to the main array
  data.boards.push(newBoard);
}
