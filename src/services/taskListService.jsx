import data from './dataImporter';


function getNextId() {
  return data.lists[data.lists.length - 1].id + 1;
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

export function createNewTaskList(taskListInput, boardid) {
  const newTaskList = {
    id: getNextId(),
    name: taskListInput.title,
    color: '#ffffff',
    boardId: boardid
  }
  // Push new taskList to the main array
  data.lists.push(newTaskList);
}
