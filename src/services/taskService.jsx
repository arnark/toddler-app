import data from './dataImporter';


function getNextId() {
  if (data.tasks.length > 0) {
    return data.tasks[data.tasks.length - 1].id + 1;
  } return 0;
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

export function createNewTask(taskInput, listid) {
  const newTask = {
    id: getNextId(),
    name: taskInput.title,
    description: taskInput.description,
    isFinished: true,
    listId: listid
  }
  // Push new task to the main array
  data.tasks.push(newTask);
}

export function deleteTask(taskId) {
  // Find task in main array and remove
  for (let i = 0; i < data.tasks.length; i += 1) {
    if (data.tasks[i].id === taskId) {
      data.tasks.splice(i, 1);
      break;
    }
  }
}

export function editTask(taskId, taskTitle, taskDescription, taskIsFinished) {
  for (let i = 0; i < data.tasks.length; i += 1) {
    if (data.tasks[i].id === taskId) {
      data.tasks[i].name = taskTitle
      data.tasks[i].description = taskDescription
      data.tasks[i].taskIsFinished = taskIsFinished
      break;
    }
  }
}
