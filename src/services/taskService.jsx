import data from './dataImporter';


function getNextId() {
  return data.tasks[data.tasks.length - 1].id + 1;
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
