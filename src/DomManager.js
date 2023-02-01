const projectContainer = document.querySelector(".projects-panel");

function _createProjectElement(project) {
  const btn = document.createElement("button");
  btn.classList.add("project-button");
  console.log("Project title: " + project.title);
  btn.textContent = project.title;

  return btn;
}

function _createTaskElement(task) {}

function _clearElements(parent) {
  while (parent.lastElementChild) {
    parent.removeChild(parent.lastElementChild);
  }
}

function updateProjectElements(projects) {
  _clearElements(projectContainer);

  for (const project of projects) {
    projectContainer.appendChild(_createProjectElement(project));
  }
}

function updateTaskElements(currentProject, projects) {
  for (const project of projects) {
    for (const task of project.tasks) {
      _createTaskElement(currentProject, task);
    }
  }
}

export { updateProjectElements, updateTaskElements };
