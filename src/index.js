import {
  hideAboutModal,
  hideAddTaskModal,
  hideProjectModal,
  showAboutModal,
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
const closeTaskModalBtn = document.querySelector("#close-task-modal-btn");

const openAboutModalBtn = document.querySelector("#open-about-btn");
const closeAboutModalBtn = document.querySelector("#close-about-btn");

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

openAboutModalBtn.addEventListener("click", showAboutModal);
closeAboutModalBtn.addEventListener("click", hideAboutModal);
