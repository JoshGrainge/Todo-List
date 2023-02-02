import { addProject, getCurrentProject } from "./projects";
import { createTask } from "./tasks";
import { updateProjectElements, updateTaskElements } from "./DomManager";

const addProjectBtn = document.querySelector("#add-project-button");
const addTaskBtn = document.querySelector("#add-task-button");

addProjectBtn.addEventListener("click", () => {
  addProject("Important Project");
  updateProjectElements();
});

addTaskBtn.addEventListener("click", () => {
  getCurrentProject().tasks.push(
    createTask("test", "this is a test", "02/02/22", "red")
  );
  updateTaskElements();
});
