function createProjectElement(project) {}

function createTaskElement(task) {}

function updateProjectElements(projects) {
  for (const project in projects) {
    createProjectElement(project);
  }
}

function updateTaskElements(projects) {
  for (const project in projects) {
    for (const task in project.tasks) {
      createTaskElement(task);
    }
  }
}

export { updateProjectElements, updateTaskElements };
