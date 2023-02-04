let _projects = [];
let _currentProjectIndex = -1;

function _createProject(title) {
  return {
    title,
    tasks: [],
  };
}

function addProject(title) {
  _projects.push(_createProject(title));
  _currentProjectIndex++;
}

function overrideProjectObject(project) {
  _projects[_currentProjectIndex] = project;
}

function updateCurrentProjectValues(newTitle, newTasks) {
  getCurrentProject().title = newTitle;
  getCurrentProject().tasks = newTasks;
}

function getCurrentProject() {
  return _projects[_currentProjectIndex];
}

function setCurrentProjectIndex(newIndex) {
  _currentProjectIndex = newIndex;
}

function getProjectAtIndex(index) {
  if (index >= _projects.length) return;

  return _projects[index];
}

function getProjectLength() {
  return _projects.length;
}

function getTask(taskIndex) {
  return getCurrentProject().tasks[taskIndex];
}

function addTask(newTask) {
  _projects[_currentProjectIndex].tasks.push(newTask);
}

function removeTask(index) {
  _projects[_currentProjectIndex].tasks.splice(index, 1);
}

function editTask(index, newTask) {
  _projects[_currentProjectIndex].tasks[index] = newTask;
}

export {
  addProject,
  overrideProjectObject,
  updateCurrentProjectValues,
  getCurrentProject,
  setCurrentProjectIndex,
  getProjectAtIndex,
  getProjectLength,
  getTask,
  addTask,
  removeTask,
  editTask,
};
