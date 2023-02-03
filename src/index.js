import { addProject, getCurrentProject } from "./projects";
import { createTask } from "./tasks";
import {
  hideProjectModal,
  showAddProjectModal,
  updateProjectElements,
  updateTaskElements,
} from "./DomManager";

const addProjectBtn = document.querySelector("#add-project-button");
const addTaskBtn = document.querySelector("#add-task-button");

const addProjectModalBtn = document.querySelector("#add-project-btn");
const closeAddProjectModalBtn = document.querySelector(
  "#close-project-modal-btn"
);

addProjectBtn.addEventListener("click", showAddProjectModal);

closeAddProjectModalBtn.addEventListener("click", hideProjectModal);

addTaskBtn.addEventListener("click", () => {
  getCurrentProject().tasks.push(
    createTask("test", "this is a test", "02/02/22", "red")
  );
  updateTaskElements();
});
