import data from './dataImporter';


function getNextId() {
  if (data.tasks.length > 0) {
    return data.tasks[data.tasks.length - 1].id + 1;
  } return 0;
}

function validateTask(taskInput) {
  let statusMessage = 'valid';
  if (taskInput.name === '') {
    statusMessage = 'Title can not be empty.';
  } else if (taskInput.description === '') {
    statusMessage = 'Description can not be empty.';
  }

  if (statusMessage === 'valid') {
    return { status: true, message: statusMessage }
  } return { status: false, message: statusMessage }
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

  // Push new task to the main array if OK
  const statusMessage = validateTask(newTask);
  if (statusMessage.status === true) {
    data.tasks.push(newTask);
  } return statusMessage;
}

export function editTask(taskId, taskTitle, taskDescription, taskIsFinished) {
  const editedTask = {
    id: taskId,
    name: taskTitle,
    description: taskDescription,
    isFinished: taskIsFinished
    // listId: listid
  }

  const statusMessage = validateTask(editedTask);
  if (statusMessage.status === true) {
    for (let i = 0; i < data.tasks.length; i += 1) {
      if (data.tasks[i].id === taskId) {
        data.tasks[i].name = taskTitle
        data.tasks[i].description = taskDescription
        data.tasks[i].taskIsFinished = taskIsFinished
        break;
      }
    }
  }
  return statusMessage;
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

export function moveTask(taskId, taskListId) {
  for (let i = 0; i < data.tasks.length; i += 1) {
    if (data.tasks[i].id === taskId) {
      data.tasks[i].listId = Number(taskListId);
    }
  }
}
