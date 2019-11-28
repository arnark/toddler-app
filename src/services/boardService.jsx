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
  for (let i = data.lists.length - 1; i >= 0; i -= 1) {
    if (data.lists[i].boardId === boardId) {
      // Delete children tasks
      for (let j = data.tasks.length - 1; j >= 0; j -= 1) {
        if (data.tasks[j].listId === data.lists[i].id) {
          data.tasks.splice(j, 1);
        }
      }
      // Delete the taskList
      data.lists.splice(i, 1);
    }
  }
}

export function editBoard(boardId, boardTitle, boardThumbnailPhoto) {
  for (let i = 0; i < data.boards.length; i += 1) {
    if (data.boards[i].id === boardId) {
      data.boards[i].name = boardTitle
      data.boards[i].thumbnailPhoto = ''
      data.boards[i].thumbnailPhoto = boardThumbnailPhoto
      break;
    }
  }
}
