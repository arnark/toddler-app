import data from './dataImporter';
import * as boardService from './boardService'

function getNextId() {
  if (data.lists.length > 0) {
    return data.lists[data.lists.length - 1].id + 1;
  } return 0;
}

function validateTaskList(taskListInput) {
  let statusMessage = 'valid';
  if (taskListInput.name === '') {
    statusMessage = 'Title can not be empty.';
  }

  if (statusMessage === 'valid') {
    return { status: true, message: statusMessage }
  } return { status: false, message: statusMessage }
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

export function getAllTaskListsAsKeyValuePairs() {
  let taskListIdAndName = {};
  for (let i = 0; i < data.lists.length; i += 1) {
    let concatedBoardTaskList = `${boardService.getBoardNameById(data.lists[i].boardId)} / ${data.lists[i].name}`;
    taskListIdAndName[data.lists[i].id] = concatedBoardTaskList;
  }
  return taskListIdAndName;
}

export function createNewTaskList(taskListInput, boardid) {
  const newTaskList = {
    id: getNextId(),
    name: taskListInput.title,
    color: '#ffffff',
    boardId: boardid
  }

  // Push new taskList to the main array if OK
  const statusMessage = validateTaskList(newTaskList);
  if (statusMessage.status === true) {
    data.lists.push(newTaskList);
  } return statusMessage;
}

export function editTaskList(taskListId, taskListTitle, taskListColor) {
  const editedTaskList = {
    id: taskListId,
    name: taskListTitle,
    color: taskListColor
  }

  const statusMessage = validateTaskList(editedTaskList);
  if (statusMessage.status === true) {
    for (let i = 0; i < data.lists.length; i += 1) {
      if (data.lists[i].id === taskListId) {
        data.lists[i].name = taskListTitle
        data.lists[i].color = ''
        data.lists[i].color = taskListColor
        break;
      }
    }
  }
  return statusMessage;
}

export function deleteTaskList(listId) {
  // Find taskList in main array and remove
  for (let i = 0; i < data.lists.length; i += 1) {
    if (data.lists[i].id === listId) {
      data.lists.splice(i, 1);
      break;
    }
  }
  // Find all tasks that belonged to the list
  const childTasksIndex = [];
  for (let i = 0; i < data.tasks.length; i += 1) {
    if (data.tasks[i] === listId) {
      childTasksIndex.push(i);
    }
  }
  // Remove the childTasks
  childTasksIndex.forEach((index) => {
    data.tasks.splice(index);
  });
}
