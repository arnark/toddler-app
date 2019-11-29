import data from './dataImporter';


function getNextId() {
  if (data.boards.length > 0) {
    return data.boards[data.boards.length - 1].id + 1;
  } return 0;
}

function validateBoard(boardInput) {
  let statusMessage = 'valid';
  if (boardInput.name === '') {
    statusMessage = 'Title can not be empty.';
  } else if (boardInput.thumbnailPhoto === '') {
    statusMessage = 'Image URL can not be empty.';
  } else if (!boardInput.thumbnailPhoto.match(/.(jpg|jpeg|png|gif)$/i)) {
    statusMessage = 'Invalid url format. Valid formats: jpg, jpeg, png, gif.'
  }

  if (statusMessage === 'valid') {
    return { status: true, message: statusMessage }
  } return { status: false, message: statusMessage }
}

export function getBoardNameById(boardId) {
  for (let i = 0; i < data.boards.length; i += 1) {
    if (data.boards[i].id === boardId) {
      return data.boards[i].name;
    }
  }
  return 'None';
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

  // Push new board to the main array if OK
  const statusMessage = validateBoard(newBoard);
  if (statusMessage.status === true) {
    data.boards.push(newBoard);
  }
  return statusMessage;
}

export function editBoard(boardId, boardTitle, boardThumbnailPhoto) {
  const editedBoard = {
    id: boardId,
    name: boardTitle,
    thumbnailPhoto: boardThumbnailPhoto
  }
  // Edit the values for the board
  const statusMessage = validateBoard(editedBoard);
  if (statusMessage.status === true) {
    for (let i = 0; i < data.boards.length; i += 1) {
      if (data.boards[i].id === boardId) {
        data.boards[i].name = boardTitle
        data.boards[i].thumbnailPhoto = ''
        data.boards[i].thumbnailPhoto = boardThumbnailPhoto
      }
    }
  }
  return statusMessage;
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
