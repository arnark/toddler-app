import data from './dataImporter';


function getNextId() {
  if (data.lists.length > 0) {
    return data.lists[data.lists.length - 1].id + 1;
  } return 0;
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

export function editTaskList(taskListId, taskListTitle, taskListColor) {
  for (let i = 0; i < data.lists.length; i += 1) {
    if (data.lists[i].id === taskListId) {
      data.lists[i].name = taskListTitle
      data.lists[i].color = ''
      data.lists[i].color = taskListColor
      break;
    }
  }
}
