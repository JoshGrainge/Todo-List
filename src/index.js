import {
  hideAddTaskModal,
  hideProjectModal,
  showAddProjectModal,
  showAddTaskModal,
  updateProjectSidebarElements,
} from "./DomManager";
import { submitProjectFields, submitTaskFields } from "./inputs";

// Open model buttons
const openProjectModalBtn = document.querySelector("#open-project-modal-btn");
const openTaskModalBtn = document.querySelector("#open-task-modal-btn");

// Add and Close buttons for project and task modals
const addProjectModalBtn = document.querySelector("#add-project-btn");
const closeAddProjectModalBtn = document.querySelector(
  "#close-project-modal-btn"
);
//const addTaskModalBtn = document.querySelector("#add-task-modal-btn");
const closeTaskModalBtn = document.querySelector("#close-task-modal-btn");

// Project modal event listeners
openProjectModalBtn.addEventListener("click", showAddProjectModal);
addProjectModalBtn.addEventListener("click", () => {
  submitProjectFields();
  updateProjectSidebarElements();
  hideProjectModal();
});
closeAddProjectModalBtn.addEventListener("click", hideProjectModal);

// Task modal event listeners
openTaskModalBtn.addEventListener("click", () => {
  console.log("Add task button clicked");
  showAddTaskModal();
});

closeTaskModalBtn.addEventListener("click", hideAddTaskModal);
