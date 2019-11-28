import data from './dataImporter';


function getNextId() {
  if (data.boards.length > 0) {
    return data.boards[data.boards.length - 1].id + 1;
  } return 0;
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

export function deleteBoard(boardId) {
  // Find board in main array and remove
  for (let i = 0; i < data.boards.length; i += 1) {
    if (data.boards[i].id === boardId) {
      data.boards.splice(i, 1);
      break;
    }
  }
  // Find all task lists that belonged to the board
  const childTaskLists = []
  for (let i = 0; i < data.lists.length; i += 1) {
    if (data.lists[i].boardId === boardId) {
      childTaskLists.push(data.lists[i].id);
      data.lists.splice(i, 1);
    }
  }
  // Find all tasks that belonged to the lists
  for (let i = 0; i < data.tasks.length; i += 1) {
    for (let j = 0; j < childTaskLists.length; j += 1) {
      if (childTaskLists[j] === data.tasks[i].listId) {
        data.tasks.splice(i, 1);
      }
    }
  }
}
