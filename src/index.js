import { addProject, getCurrentProject } from "./projects";
import { createTask } from "./tasks";
import {
  hideAddTaskModal,
  hideProjectModal,
  showAddProjectModal,
  showAddTaskModal,
  updateProjectSidebarElements,
  updateTaskElements,
} from "./DomManager";

const addProjectBtn = document.querySelector("#add-project-button");
const addTaskBtn = document.querySelector("#add-task-button");

const addProjectModalBtn = document.querySelector("#add-project-btn");
const closeAddProjectModalBtn = document.querySelector(
  "#close-project-modal-btn"
);

const addTaskModalBtn = document.querySelector("#add-task-modal-btn");
const closeTaskModalBtn = document.querySelector("#close-task-modal-btn");

addProjectBtn.addEventListener("click", showAddProjectModal);
addProjectModalBtn.addEventListener("click", () => {
  addProject("Important project");
  updateProjectSidebarElements();
  hideProjectModal();
});
closeAddProjectModalBtn.addEventListener("click", hideProjectModal);

addTaskBtn.addEventListener("click", () => {
  console.log("Add task button clicked");
  showAddTaskModal();
});
addTaskModalBtn.addEventListener("click", () => {
  getCurrentProject().tasks.push(
    createTask("test", "this is a test", "02/02/22", "red")
  );

  updateTaskElements();

  hideAddTaskModal();
});
closeTaskModalBtn.addEventListener("click", hideAddTaskModal);
