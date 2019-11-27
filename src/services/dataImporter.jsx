const data = require('../resources/data.json');

export function getAllBoards() {
  const boardArr = [];
  for (let i = 0; i < data.boards.length; i += 1) {
    boardArr.push(data.boards[i]);
  }
  return boardArr;
}

export function getTaskListsByBoardId(boardId) {
  const taskListsArr = [];
  for (let i = 0; i < data.lists.length; i += 1) {
    if (data.lists[i].boardId === boardId) {
      taskListsArr.push(data.lists[i]);
    }
  }
  return taskListsArr;
}

export function getTasksByListId(listId) {
  const taskArr = [];
  for (let i = 0; i < data.tasks.length; i += 1) {
    if (data.tasks[i].listId === listId) {
      taskArr.push(data.tasks[i]);
    }
  }
  return taskArr;
}

export default data;
