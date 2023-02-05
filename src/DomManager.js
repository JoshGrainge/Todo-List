import {
  clearTaskInputFields,
  populateTaskFieldsWithTaskText,
  submitTaskFields,
  submitUpdatesTaskFields,
} from "./inputs";
import {
  editTask,
  getCurrentProject,
  getProjectAtIndex,
  getProjectLength,
  removeTask,
  setCurrentProjectIndex,
} from "./projects";
import { saveProjectsPersistentData } from "./storage";
import { createTask } from "./tasks";

const projectContainer = document.querySelector(".projects-panel");
const projectTitle = document.querySelector("#project-title");
const taskContainer = document.querySelector(".task-container");

const modalBg = document.querySelector(".modal-bg");
const addProjectModal = document.querySelector(".add-project-modal");
const addTaskModal = document.querySelector(".add-task-modal");

const openTaskModalButton = document.querySelector("#open-task-modal-btn");
const taskModalTitle = document.querySelector("#task-modal-title");

const settingsModal = document.querySelector("#settings-modal");
const aboutModal = document.querySelector("#about-info-modal");

function _createProjectElement(index) {
  const project = getProjectAtIndex(index);

  const btn = document.createElement("button");
  btn.classList.add("project-button");
  btn.textContent = project.title;

  // Updates project panel when project button is pressed
  btn.addEventListener("click", () => {
    // Set add task button to be visible
    openTaskModalButton.classList.add("show");

    setCurrentProjectIndex(index);
    _updateProjectContainer(project);
  });

  return btn;
}

function _createTaskElement(task, taskIndex) {
  const taskDiv = document.createElement("div");
  const checkbox = document.createElement("input");
  const dataSection = document.createElement("div");
  const topSection = document.createElement("div");
  const taskTitle = document.createElement("h3");
  const taskInputSection = document.createElement("div");
  const dueText = document.createElement("p");
  const buttonContainer = document.createElement("div");
  const editBtn = document.createElement("button");
  const editIcon = document.createElement("i");
  const deleteBtn = document.createElement("button");
  const deleteIcon = document.createElement("i");
  const bottomSection = document.createElement("div");
  const taskDescription = document.createElement("p");

  // Add classes
  taskDiv.classList.add("task");
  checkbox.classList.add("checkbox");
  dataSection.classList.add("data-sections");
  topSection.classList.add("top-section");
  taskInputSection.classList.add("task-input-section");
  buttonContainer.classList.add("task-buttons");
  editBtn.classList.add("task-button");
  editIcon.classList.add("fa", "fa-edit");
  deleteBtn.classList.add("task-button");
  deleteIcon.classList.add("fa", "fa-trash");
  bottomSection.classList.add("bottom-section");

  checkbox.type = "checkbox";

  //Update task when checked
  checkbox.addEventListener("change", () => {
    let newTask = createTask(
      task.title,
      task.description,
      task.dueDate,
      task.priority
    );
    newTask.checked = checkbox.checked;
    editTask(taskIndex, newTask);

    saveProjectsPersistentData();
  });

  editBtn.addEventListener("click", () => {
    _showEditTaskModal(taskIndex);
  });

  deleteBtn.addEventListener("click", () => {
    removeTask(taskIndex);
    _updateTaskElements();
    saveProjectsPersistentData();
  });

  // Set task values to element
  checkbox.checked = task.checked;
  taskTitle.textContent = task.title;
  dueText.textContent = task.dueDate;
  taskDescription.textContent = task.description;
  taskDiv.classList.add(task.priority);

  bottomSection.appendChild(taskDescription);
  deleteBtn.appendChild(deleteIcon);
  editBtn.appendChild(editIcon);
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);
  taskInputSection.appendChild(dueText);
  taskInputSection.appendChild(buttonContainer);
  topSection.appendChild(taskTitle);
  topSection.appendChild(taskInputSection);
  dataSection.appendChild(topSection);
  dataSection.appendChild(bottomSection);
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(dataSection);

  return taskDiv;
}

function _updateProjectContainer() {
  const currentProject = getCurrentProject();
  projectTitle.textContent = currentProject.title;
  _updateTaskElements();
}

function clearProjectPanel() {
  projectTitle.textContent = "";
  _updateTaskElements();
  openTaskModalButton.classList.remove("show");
}

function _clearElements(parent) {
  while (parent.lastElementChild) {
    parent.removeChild(parent.lastElementChild);
  }
}

function updateProjectSidebarElements() {
  _clearElements(projectContainer);

  let length = getProjectLength();
  for (let i = 0; i < length; i++) {
    projectContainer.appendChild(_createProjectElement(i));
  }
}

function _updateTaskElements() {
  _clearElements(taskContainer);
  let index = 0;
  if (getCurrentProject()) {
    for (const task of getCurrentProject().tasks) {
      taskContainer.appendChild(_createTaskElement(task, index));
      index++;
    }
  }
}

function showAddProjectModal() {
  _showModalBackground();
  addProjectModal.classList.add("show");
}

function hideProjectModal() {
  _hideModalBackground();
  addProjectModal.classList.remove("show");
}

function showAddTaskModal() {
  _openTaskModal();

  clearTaskInputFields();

  taskModalTitle.textContent = "Add Task";

  document
    .querySelector("#add-task-modal-btn")
    .addEventListener("click", () => {
      submitTaskFields();
      _updateTaskElements();
      hideAddTaskModal();
      saveProjectsPersistentData();
    });
}

function hideAddTaskModal() {
  _hideModalBackground();
  addTaskModal.classList.remove("show");
}

function _showEditTaskModal(taskIndex) {
  _openTaskModal();

  taskModalTitle.textContent = "Edit Task";

  populateTaskFieldsWithTaskText(taskIndex);

  document
    .querySelector("#add-task-modal-btn")
    .addEventListener("click", () => {
      submitUpdatesTaskFields(taskIndex);
      _updateTaskElements();
      hideAddTaskModal();
      saveProjectsPersistentData();
    });
}

function _openTaskModal() {
  _showModalBackground();
  addTaskModal.classList.add("show");

  _resetModalEventListeners();
}

function _resetModalEventListeners() {
  let btn = document.querySelector("#add-task-modal-btn");
  btn.replaceWith(btn.cloneNode(true));
}

function showAboutModal() {
  _showModalBackground();
  aboutModal.classList.add("show");
}

function hideAboutModal() {
  _hideModalBackground();
  aboutModal.classList.remove("show");
}

function showSettingsModal() {
  _showModalBackground();
  settingsModal.classList.add("show");
}

function hideSettingsModal() {
  _hideModalBackground();
  settingsModal.classList.remove("show");
}

function _showModalBackground() {
  modalBg.classList.add("show");
}
function _hideModalBackground() {
  modalBg.classList.remove("show");
}

export {
  clearProjectPanel,
  updateProjectSidebarElements,
  showAddProjectModal,
  hideProjectModal,
  showAddTaskModal,
  hideAddTaskModal,
  showSettingsModal,
  hideSettingsModal,
  showAboutModal,
  hideAboutModal,
};
