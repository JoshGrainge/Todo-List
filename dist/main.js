/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DomManager.js":
/*!***************************!*\
  !*** ./src/DomManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearProjectPanel": () => (/* binding */ clearProjectPanel),
/* harmony export */   "hideAboutModal": () => (/* binding */ hideAboutModal),
/* harmony export */   "hideAddTaskModal": () => (/* binding */ hideAddTaskModal),
/* harmony export */   "hideProjectModal": () => (/* binding */ hideProjectModal),
/* harmony export */   "hideSettingsModal": () => (/* binding */ hideSettingsModal),
/* harmony export */   "showAboutModal": () => (/* binding */ showAboutModal),
/* harmony export */   "showAddProjectModal": () => (/* binding */ showAddProjectModal),
/* harmony export */   "showAddTaskModal": () => (/* binding */ showAddTaskModal),
/* harmony export */   "showSettingsModal": () => (/* binding */ showSettingsModal),
/* harmony export */   "updateProjectSidebarElements": () => (/* binding */ updateProjectSidebarElements)
/* harmony export */ });
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ "./src/inputs.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");





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
  const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getProjectAtIndex)(index);

  const btn = document.createElement("button");
  btn.classList.add("project-button");
  btn.textContent = project.title;

  // Updates project panel when project button is pressed
  btn.addEventListener("click", () => {
    // Set add task button to be visible
    openTaskModalButton.classList.add("show");

    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.setCurrentProjectIndex)(index);
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
    let newTask = (0,_tasks__WEBPACK_IMPORTED_MODULE_3__.createTask)(
      task.title,
      task.description,
      task.dueDate,
      task.priority
    );
    newTask.checked = checkbox.checked;
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.editTask)(taskIndex, newTask);
  });

  editBtn.addEventListener("click", () => {
    _showEditTaskModal(taskIndex);
  });

  deleteBtn.addEventListener("click", () => {
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.removeTask)(taskIndex);
    _updateTaskElements();
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
  const currentProject = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)();
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

  let length = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getProjectLength)();
  for (let i = 0; i < length; i++) {
    projectContainer.appendChild(_createProjectElement(i));
  }
}

function _updateTaskElements() {
  _clearElements(taskContainer);
  let index = 0;
  if ((0,_projects__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)()) {
    for (const task of (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().tasks) {
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

  (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.clearTaskInputFields)();

  taskModalTitle.textContent = "Add Task";

  document
    .querySelector("#add-task-modal-btn")
    .addEventListener("click", () => {
      (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.submitTaskFields)();
      _updateTaskElements();
      hideAddTaskModal();
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsPersistentData)();
    });
}

function hideAddTaskModal() {
  _hideModalBackground();
  addTaskModal.classList.remove("show");
}

function _showEditTaskModal(taskIndex) {
  _openTaskModal();

  taskModalTitle.textContent = "Edit Task";

  (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.populateTaskFieldsWithTaskText)(taskIndex);

  document
    .querySelector("#add-task-modal-btn")
    .addEventListener("click", () => {
      (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.submitUpdatesTaskFields)(taskIndex);
      _updateTaskElements();
      hideAddTaskModal();
      (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsPersistentData)();
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




/***/ }),

/***/ "./src/inputs.js":
/*!***********************!*\
  !*** ./src/inputs.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTaskInputFields": () => (/* binding */ clearTaskInputFields),
/* harmony export */   "populateTaskFieldsWithTaskText": () => (/* binding */ populateTaskFieldsWithTaskText),
/* harmony export */   "submitProjectFields": () => (/* binding */ submitProjectFields),
/* harmony export */   "submitTaskFields": () => (/* binding */ submitTaskFields),
/* harmony export */   "submitUpdatesTaskFields": () => (/* binding */ submitUpdatesTaskFields)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



// Add project fields
const projectTitleInput = document.querySelector("#project-name");

// Add task fields
const taskTitleInput = document.querySelector("#task-title");
const taskDescriptionInput = document.querySelector("#task-description");
const taskDueDateInput = document.querySelector("#task-date");
let taskPriorityInput = document.querySelector(
  "input[name='priority']:checked"
);

// Radio inputs
const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");
const red = document.querySelector("#red");

// Default checked radio
const defaultPriorityRadio = document.querySelector(
  "input[name='priority']:checked"
);

function clearProjectInputFields() {
  _resetProjectFields();
}

function submitProjectFields() {
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectTitleInput.value);
  _resetProjectFields();
}

function clearTaskInputFields() {
  _resetTaskFields();
}

function submitTaskFields() {
  _updateTaskPriorityInput();

  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.addTask)(
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createTask)(
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskDueDateInput.value,
      taskPriorityInput.value
    )
  );

  _resetTaskFields();
}

function populateTaskFieldsWithTaskText(taskIndex) {
  const task = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getTask)(taskIndex);
  taskTitleInput.value = task.title;
  taskDescriptionInput.value = task.description;
  taskDueDateInput.value = task.dueDate;
  switch (task.priority) {
    case "green":
      green.checked = true;
      break;
    case "yellow":
      yellow.checked = true;
      break;
    case "red":
      red.checked = true;
      break;
  }
}

function submitUpdatesTaskFields(taskIndex) {
  _updateTaskPriorityInput();

  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.editTask)(
    taskIndex,
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createTask)(
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskDueDateInput.value,
      taskPriorityInput.value
    )
  );

  _resetTaskFields();
}

function _updateTaskPriorityInput() {
  taskPriorityInput = document.querySelector("input[name='priority']:checked");
}

function _resetProjectFields() {
  projectTitleInput.value = "";
}

function _resetTaskFields() {
  taskTitleInput.value = "";
  taskDescriptionInput.value = "";
  taskDueDateInput.value = "";
  taskPriorityInput.checked = false;

  defaultPriorityRadio.checked = true;
}




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addTask": () => (/* binding */ addTask),
/* harmony export */   "clearProjets": () => (/* binding */ clearProjets),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "getAllProjects": () => (/* binding */ getAllProjects),
/* harmony export */   "getCurrentProject": () => (/* binding */ getCurrentProject),
/* harmony export */   "getProjectAtIndex": () => (/* binding */ getProjectAtIndex),
/* harmony export */   "getProjectLength": () => (/* binding */ getProjectLength),
/* harmony export */   "getTask": () => (/* binding */ getTask),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "overrideProjectObject": () => (/* binding */ overrideProjectObject),
/* harmony export */   "removeTask": () => (/* binding */ removeTask),
/* harmony export */   "setCurrentProjectIndex": () => (/* binding */ setCurrentProjectIndex),
/* harmony export */   "updateCurrentProjectValues": () => (/* binding */ updateCurrentProjectValues)
/* harmony export */ });
let _projects = [];
let _currentProjectIndex = -1;

function _createProject(title) {
  return {
    title,
    tasks: [],
  };
}

function loadProjects(newProjects) {
  _projects = newProjects;
}

function clearProjets() {
  _projects = [];
  _currentProjectIndex = -1;
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

function getAllProjects() {
  return _projects;
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




/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearLocalStorage": () => (/* binding */ clearLocalStorage),
/* harmony export */   "loadPersistentData": () => (/* binding */ loadPersistentData),
/* harmony export */   "saveProjectsPersistentData": () => (/* binding */ saveProjectsPersistentData),
/* harmony export */   "saveThemePersistenData": () => (/* binding */ saveThemePersistenData)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes */ "./src/themes.js");



const projectsKey = "projects";
const themeKey = "theme";

const themeSelector = document.querySelector("#themes");

function loadPersistentData() {
  if (localStorage.getItem(projectsKey)) {
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.loadProjects)(JSON.parse(localStorage.getItem(projectsKey)));
  }

  if (localStorage.getItem(themeKey)) {
    const val = localStorage.getItem(themeKey);
    (0,_themes__WEBPACK_IMPORTED_MODULE_1__.loadTheme)(val);
    themeSelector.value = val;
  }
}

function saveProjectsPersistentData() {
  const projects = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getAllProjects)();
  localStorage.setItem(projectsKey, JSON.stringify(projects));
}

function saveThemePersistenData() {
  localStorage.setItem(themeKey, themeSelector.value);
}

function clearLocalStorage() {
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.clearProjets)();
  localStorage.clear();
}




/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
function createTask(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
    checked: false,
  };
}

// TODO make update task function




/***/ }),

/***/ "./src/themes.js":
/*!***********************!*\
  !*** ./src/themes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeTheme": () => (/* binding */ changeTheme),
/* harmony export */   "loadTheme": () => (/* binding */ loadTheme)
/* harmony export */ });
const lightThemeBackgroundColor = "#fff";
const lightThemeModalBackgroundColor = "#0003";
const lightThemeTextColor = "#000";
const lightThemeButtonColor = "rgb(0, 174, 255)";
const lightThemeButtonTextColor = "#fff";
const lightThemeButtonHoverColor = "rgb(79, 199, 255)";
const lightThemeButtonClickColor = "rgb(0, 137, 201)";

const darkThemeBackgroundColor = "#000";
const darkThemeModalBackgroundColor = "#ffffff75";
const darkThemeTextColor = "#fff";
const darkThemeButtonColor = "#230046";
const darkThemeButtonTextColor = "#fff";
const darkThemeButtonHoverColor = "#420085";
const darkThemeButtonClickColor = "#1e013b";

const joshThemeBackgroundColor = "#000";
const joshThemeModalBackgroundColor = "#ffffff75";
const joshThemeTextColor = "#fff";
const joshThemeButtonColor = "#230046";
const joshThemeButtonTextColor = "#fff";
const joshThemeButtonHoverColor = "#420085";
const joshThemeButtonClickColor = "#1e013b";

const root = document.querySelector(":root");

function changeTheme(newThemeValue) {
  switch (newThemeValue) {
    case "light":
      _setThemeValues(
        lightThemeBackgroundColor,
        lightThemeModalBackgroundColor,
        lightThemeTextColor,
        lightThemeButtonColor,
        lightThemeButtonTextColor,
        lightThemeButtonHoverColor,
        lightThemeButtonClickColor
      );
      break;
    case "dark":
      _setThemeValues(
        darkThemeBackgroundColor,
        darkThemeModalBackgroundColor,
        darkThemeTextColor,
        darkThemeButtonColor,
        darkThemeButtonTextColor,
        darkThemeButtonHoverColor,
        darkThemeButtonClickColor
      );
      break;
    case "josh":
      _setThemeValues(
        joshThemeBackgroundColor,
        joshThemeModalBackgroundColor,
        joshThemeTextColor,
        joshThemeButtonColor,
        joshThemeButtonTextColor,
        joshThemeButtonHoverColor,
        joshThemeButtonClickColor
      );
      break;
  }
}

function _setThemeValues(
  backgroundColor,
  modalBackgroundClor,
  textColor,
  buttonColor,
  buttonTextColor,
  buttonHoverColor,
  buttonClickColor
) {
  root.style.setProperty("--background-color", backgroundColor);
  root.style.setProperty("--modal-background-color", modalBackgroundClor);
  root.style.setProperty("--text-color", textColor);
  root.style.setProperty("--button-color", buttonColor);
  root.style.setProperty("--button-text-color", buttonTextColor);
  root.style.setProperty("--button-hover-color", buttonHoverColor);
  root.style.setProperty("--button-click-color", buttonClickColor);
}

function loadTheme(themeString) {
  changeTheme(themeString);
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DomManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomManager */ "./src/DomManager.js");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputs */ "./src/inputs.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themes */ "./src/themes.js");





// Load persistent data
(0,_storage__WEBPACK_IMPORTED_MODULE_2__.loadPersistentData)();
(0,_DomManager__WEBPACK_IMPORTED_MODULE_0__.updateProjectSidebarElements)();

// Open model buttons
const openProjectModalBtn = document.querySelector("#open-project-modal-btn");
const openTaskModalBtn = document.querySelector("#open-task-modal-btn");

// Add and Close buttons for project and task modals
const addProjectModalBtn = document.querySelector("#add-project-btn");
const closeAddProjectModalBtn = document.querySelector(
  "#close-project-modal-btn"
);
const closeTaskModalBtn = document.querySelector("#close-task-modal-btn");

// Settings buttons
const openSettingsModalBtn = document.querySelector("#open-settings-btn");
const closeSettingsModalBtn = document.querySelector("#close-settings-btn");

// About buttons
const openAboutModalBtn = document.querySelector("#open-about-btn");
const closeAboutModalBtn = document.querySelector("#close-about-btn");

// Project modal event listeners
openProjectModalBtn.addEventListener("click", _DomManager__WEBPACK_IMPORTED_MODULE_0__.showAddProjectModal);
addProjectModalBtn.addEventListener("click", () => {
  (0,_inputs__WEBPACK_IMPORTED_MODULE_1__.submitProjectFields)();
  (0,_DomManager__WEBPACK_IMPORTED_MODULE_0__.updateProjectSidebarElements)();
  (0,_DomManager__WEBPACK_IMPORTED_MODULE_0__.hideProjectModal)();
  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsPersistentData)();
});
closeAddProjectModalBtn.addEventListener("click", _DomManager__WEBPACK_IMPORTED_MODULE_0__.hideProjectModal);

// Task modal event listeners
openTaskModalBtn.addEventListener("click", () => {
  console.log("Add task button clicked");
  (0,_DomManager__WEBPACK_IMPORTED_MODULE_0__.showAddTaskModal)();
});

closeTaskModalBtn.addEventListener("click", _DomManager__WEBPACK_IMPORTED_MODULE_0__.hideAddTaskModal);

openSettingsModalBtn.addEventListener("click", _DomManager__WEBPACK_IMPORTED_MODULE_0__.showSettingsModal);
closeSettingsModalBtn.addEventListener("click", _DomManager__WEBPACK_IMPORTED_MODULE_0__.hideSettingsModal);

openAboutModalBtn.addEventListener("click", _DomManager__WEBPACK_IMPORTED_MODULE_0__.showAboutModal);
closeAboutModalBtn.addEventListener("click", _DomManager__WEBPACK_IMPORTED_MODULE_0__.hideAboutModal);

// Theme selector
const themeSelector = document.querySelector("#themes");

themeSelector.addEventListener("change", () => {
  (0,_themes__WEBPACK_IMPORTED_MODULE_3__.changeTheme)(themeSelector.value);
  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveThemePersistenData)();
});

const clearStorageBtn = document.querySelector("#clear-storage-btn");
clearStorageBtn.addEventListener("click", () => {
  (0,_storage__WEBPACK_IMPORTED_MODULE_2__.clearLocalStorage)();
  (0,_DomManager__WEBPACK_IMPORTED_MODULE_0__.updateProjectSidebarElements)();
  (0,_DomManager__WEBPACK_IMPORTED_MODULE_0__.clearProjectPanel)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBUUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFpQkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZzRTtBQUNuQzs7QUFFckM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx1REFBWTtBQUNoQjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxrREFBUztBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix5REFBYztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsdURBQVk7QUFDZDtBQUNBOztBQU9FOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7OztBQ1p0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFa0M7Ozs7Ozs7VUN0RmxDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNLc0I7QUFDMkM7QUFNOUM7QUFDb0I7O0FBRXZDO0FBQ0EsNERBQWtCO0FBQ2xCLHlFQUE0Qjs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLDREQUFtQjtBQUNqRTtBQUNBLEVBQUUsNERBQW1CO0FBQ3JCLEVBQUUseUVBQTRCO0FBQzlCLEVBQUUsNkRBQWdCO0FBQ2xCLEVBQUUsb0VBQTBCO0FBQzVCLENBQUM7QUFDRCxrREFBa0QseURBQWdCOztBQUVsRTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFnQjtBQUNsQixDQUFDOztBQUVELDRDQUE0Qyx5REFBZ0I7O0FBRTVELCtDQUErQywwREFBaUI7QUFDaEUsZ0RBQWdELDBEQUFpQjs7QUFFakUsNENBQTRDLHVEQUFjO0FBQzFELDZDQUE2Qyx1REFBYzs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBLEVBQUUsb0RBQVc7QUFDYixFQUFFLGdFQUFzQjtBQUN4QixDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLDJEQUFpQjtBQUNuQixFQUFFLHlFQUE0QjtBQUM5QixFQUFFLDhEQUFpQjtBQUNuQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2lucHV0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90aGVtZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNsZWFyVGFza0lucHV0RmllbGRzLFxuICBwb3B1bGF0ZVRhc2tGaWVsZHNXaXRoVGFza1RleHQsXG4gIHN1Ym1pdFRhc2tGaWVsZHMsXG4gIHN1Ym1pdFVwZGF0ZXNUYXNrRmllbGRzLFxufSBmcm9tIFwiLi9pbnB1dHNcIjtcbmltcG9ydCB7XG4gIGVkaXRUYXNrLFxuICBnZXRDdXJyZW50UHJvamVjdCxcbiAgZ2V0UHJvamVjdEF0SW5kZXgsXG4gIGdldFByb2plY3RMZW5ndGgsXG4gIHJlbW92ZVRhc2ssXG4gIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgsXG59IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBzYXZlUHJvamVjdHNQZXJzaXN0ZW50RGF0YSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1wYW5lbFwiKTtcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuXG5jb25zdCBtb2RhbEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbmNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtbW9kYWxcIik7XG5jb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLW1vZGFsXCIpO1xuXG5jb25zdCBvcGVuVGFza01vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXRhc2stbW9kYWwtYnRuXCIpO1xuY29uc3QgdGFza01vZGFsVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbW9kYWwtdGl0bGVcIik7XG5cbmNvbnN0IHNldHRpbmdzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NldHRpbmdzLW1vZGFsXCIpO1xuY29uc3QgYWJvdXRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWJvdXQtaW5mby1tb2RhbFwiKTtcblxuZnVuY3Rpb24gX2NyZWF0ZVByb2plY3RFbGVtZW50KGluZGV4KSB7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QXRJbmRleChpbmRleCk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAvLyBVcGRhdGVzIHByb2plY3QgcGFuZWwgd2hlbiBwcm9qZWN0IGJ1dHRvbiBpcyBwcmVzc2VkXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFNldCBhZGQgdGFzayBidXR0b24gdG8gYmUgdmlzaWJsZVxuICAgIG9wZW5UYXNrTW9kYWxCdXR0b24uY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG5cbiAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KGluZGV4KTtcbiAgICBfdXBkYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVRhc2tFbGVtZW50KHRhc2ssIHRhc2tJbmRleCkge1xuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGRhdGFTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9wU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFza0lucHV0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGR1ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgY29uc3QgYm90dG9tU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIC8vIEFkZCBjbGFzc2VzXG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgZGF0YVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImRhdGEtc2VjdGlvbnNcIik7XG4gIHRvcFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRvcC1zZWN0aW9uXCIpO1xuICB0YXNrSW5wdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0LXNlY3Rpb25cIik7XG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25zXCIpO1xuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ1dHRvblwiKTtcbiAgZWRpdEljb24uY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtZWRpdFwiKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ1dHRvblwiKTtcbiAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS10cmFzaFwiKTtcbiAgYm90dG9tU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYm90dG9tLXNlY3Rpb25cIik7XG5cbiAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICAvL1VwZGF0ZSB0YXNrIHdoZW4gY2hlY2tlZFxuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICBsZXQgbmV3VGFzayA9IGNyZWF0ZVRhc2soXG4gICAgICB0YXNrLnRpdGxlLFxuICAgICAgdGFzay5kZXNjcmlwdGlvbixcbiAgICAgIHRhc2suZHVlRGF0ZSxcbiAgICAgIHRhc2sucHJpb3JpdHlcbiAgICApO1xuICAgIG5ld1Rhc2suY2hlY2tlZCA9IGNoZWNrYm94LmNoZWNrZWQ7XG4gICAgZWRpdFRhc2sodGFza0luZGV4LCBuZXdUYXNrKTtcbiAgfSk7XG5cbiAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIF9zaG93RWRpdFRhc2tNb2RhbCh0YXNrSW5kZXgpO1xuICB9KTtcblxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICByZW1vdmVUYXNrKHRhc2tJbmRleCk7XG4gICAgX3VwZGF0ZVRhc2tFbGVtZW50cygpO1xuICB9KTtcblxuICAvLyBTZXQgdGFzayB2YWx1ZXMgdG8gZWxlbWVudFxuICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jaGVja2VkO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBkdWVUZXh0LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQodGFzay5wcmlvcml0eSk7XG5cbiAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICB0YXNrSW5wdXRTZWN0aW9uLmFwcGVuZENoaWxkKGR1ZVRleHQpO1xuICB0YXNrSW5wdXRTZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrSW5wdXRTZWN0aW9uKTtcbiAgZGF0YVNlY3Rpb24uYXBwZW5kQ2hpbGQodG9wU2VjdGlvbik7XG4gIGRhdGFTZWN0aW9uLmFwcGVuZENoaWxkKGJvdHRvbVNlY3Rpb24pO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRhU2VjdGlvbik7XG5cbiAgcmV0dXJuIHRhc2tEaXY7XG59XG5cbmZ1bmN0aW9uIF91cGRhdGVQcm9qZWN0Q29udGFpbmVyKCkge1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICBfdXBkYXRlVGFza0VsZW1lbnRzKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdFBhbmVsKCkge1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICBfdXBkYXRlVGFza0VsZW1lbnRzKCk7XG4gIG9wZW5UYXNrTW9kYWxCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIF9jbGVhckVsZW1lbnRzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RTaWRlYmFyRWxlbWVudHMoKSB7XG4gIF9jbGVhckVsZW1lbnRzKHByb2plY3RDb250YWluZXIpO1xuXG4gIGxldCBsZW5ndGggPSBnZXRQcm9qZWN0TGVuZ3RoKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVQcm9qZWN0RWxlbWVudChpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3VwZGF0ZVRhc2tFbGVtZW50cygpIHtcbiAgX2NsZWFyRWxlbWVudHModGFza0NvbnRhaW5lcik7XG4gIGxldCBpbmRleCA9IDA7XG4gIGlmIChnZXRDdXJyZW50UHJvamVjdCgpKSB7XG4gICAgZm9yIChjb25zdCB0YXNrIG9mIGdldEN1cnJlbnRQcm9qZWN0KCkudGFza3MpIHtcbiAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhc2tFbGVtZW50KHRhc2ssIGluZGV4KSk7XG4gICAgICBpbmRleCsrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdE1vZGFsKCkge1xuICBfc2hvd01vZGFsQmFja2dyb3VuZCgpO1xuICBhZGRQcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIGhpZGVQcm9qZWN0TW9kYWwoKSB7XG4gIF9oaWRlTW9kYWxCYWNrZ3JvdW5kKCk7XG4gIGFkZFByb2plY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gc2hvd0FkZFRhc2tNb2RhbCgpIHtcbiAgX29wZW5UYXNrTW9kYWwoKTtcblxuICBjbGVhclRhc2tJbnB1dEZpZWxkcygpO1xuXG4gIHRhc2tNb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stbW9kYWwtYnRuXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzdWJtaXRUYXNrRmllbGRzKCk7XG4gICAgICBfdXBkYXRlVGFza0VsZW1lbnRzKCk7XG4gICAgICBoaWRlQWRkVGFza01vZGFsKCk7XG4gICAgICBzYXZlUHJvamVjdHNQZXJzaXN0ZW50RGF0YSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoaWRlQWRkVGFza01vZGFsKCkge1xuICBfaGlkZU1vZGFsQmFja2dyb3VuZCgpO1xuICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIF9zaG93RWRpdFRhc2tNb2RhbCh0YXNrSW5kZXgpIHtcbiAgX29wZW5UYXNrTW9kYWwoKTtcblxuICB0YXNrTW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XG5cbiAgcG9wdWxhdGVUYXNrRmllbGRzV2l0aFRhc2tUZXh0KHRhc2tJbmRleCk7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1tb2RhbC1idG5cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN1Ym1pdFVwZGF0ZXNUYXNrRmllbGRzKHRhc2tJbmRleCk7XG4gICAgICBfdXBkYXRlVGFza0VsZW1lbnRzKCk7XG4gICAgICBoaWRlQWRkVGFza01vZGFsKCk7XG4gICAgICBzYXZlUHJvamVjdHNQZXJzaXN0ZW50RGF0YSgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfb3BlblRhc2tNb2RhbCgpIHtcbiAgX3Nob3dNb2RhbEJhY2tncm91bmQoKTtcbiAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuXG4gIF9yZXNldE1vZGFsRXZlbnRMaXN0ZW5lcnMoKTtcbn1cblxuZnVuY3Rpb24gX3Jlc2V0TW9kYWxFdmVudExpc3RlbmVycygpIHtcbiAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stbW9kYWwtYnRuXCIpO1xuICBidG4ucmVwbGFjZVdpdGgoYnRuLmNsb25lTm9kZSh0cnVlKSk7XG59XG5cbmZ1bmN0aW9uIHNob3dBYm91dE1vZGFsKCkge1xuICBfc2hvd01vZGFsQmFja2dyb3VuZCgpO1xuICBhYm91dE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBoaWRlQWJvdXRNb2RhbCgpIHtcbiAgX2hpZGVNb2RhbEJhY2tncm91bmQoKTtcbiAgYWJvdXRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gc2hvd1NldHRpbmdzTW9kYWwoKSB7XG4gIF9zaG93TW9kYWxCYWNrZ3JvdW5kKCk7XG4gIHNldHRpbmdzTW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIGhpZGVTZXR0aW5nc01vZGFsKCkge1xuICBfaGlkZU1vZGFsQmFja2dyb3VuZCgpO1xuICBzZXR0aW5nc01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBfc2hvd01vZGFsQmFja2dyb3VuZCgpIHtcbiAgbW9kYWxCZy5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbn1cbmZ1bmN0aW9uIF9oaWRlTW9kYWxCYWNrZ3JvdW5kKCkge1xuICBtb2RhbEJnLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xufVxuXG5leHBvcnQge1xuICBjbGVhclByb2plY3RQYW5lbCxcbiAgdXBkYXRlUHJvamVjdFNpZGViYXJFbGVtZW50cyxcbiAgc2hvd0FkZFByb2plY3RNb2RhbCxcbiAgaGlkZVByb2plY3RNb2RhbCxcbiAgc2hvd0FkZFRhc2tNb2RhbCxcbiAgaGlkZUFkZFRhc2tNb2RhbCxcbiAgc2hvd1NldHRpbmdzTW9kYWwsXG4gIGhpZGVTZXR0aW5nc01vZGFsLFxuICBzaG93QWJvdXRNb2RhbCxcbiAgaGlkZUFib3V0TW9kYWwsXG59O1xuIiwiaW1wb3J0IHtcbiAgYWRkUHJvamVjdCxcbiAgYWRkVGFzayxcbiAgZWRpdFRhc2ssXG4gIGdldEN1cnJlbnRQcm9qZWN0LFxuICBnZXRUYXNrLFxufSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbi8vIEFkZCBwcm9qZWN0IGZpZWxkc1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcblxuLy8gQWRkIHRhc2sgZmllbGRzXG5jb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKTtcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpO1xuY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpO1xubGV0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIlxuKTtcblxuLy8gUmFkaW8gaW5wdXRzXG5jb25zdCBncmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JlZW5cIik7XG5jb25zdCB5ZWxsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3llbGxvd1wiKTtcbmNvbnN0IHJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVkXCIpO1xuXG4vLyBEZWZhdWx0IGNoZWNrZWQgcmFkaW9cbmNvbnN0IGRlZmF1bHRQcmlvcml0eVJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIlxuKTtcblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0SW5wdXRGaWVsZHMoKSB7XG4gIF9yZXNldFByb2plY3RGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdEZpZWxkcygpIHtcbiAgYWRkUHJvamVjdChwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG4gIF9yZXNldFByb2plY3RGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrSW5wdXRGaWVsZHMoKSB7XG4gIF9yZXNldFRhc2tGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0VGFza0ZpZWxkcygpIHtcbiAgX3VwZGF0ZVRhc2tQcmlvcml0eUlucHV0KCk7XG5cbiAgYWRkVGFzayhcbiAgICBjcmVhdGVUYXNrKFxuICAgICAgdGFza1RpdGxlSW5wdXQudmFsdWUsXG4gICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICB0YXNrUHJpb3JpdHlJbnB1dC52YWx1ZVxuICAgIClcbiAgKTtcblxuICBfcmVzZXRUYXNrRmllbGRzKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVGFza0ZpZWxkc1dpdGhUYXNrVGV4dCh0YXNrSW5kZXgpIHtcbiAgY29uc3QgdGFzayA9IGdldFRhc2sodGFza0luZGV4KTtcbiAgdGFza1RpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xuICAgIGNhc2UgXCJncmVlblwiOlxuICAgICAgZ3JlZW4uY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwieWVsbG93XCI6XG4gICAgICB5ZWxsb3cuY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicmVkXCI6XG4gICAgICByZWQuY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWJtaXRVcGRhdGVzVGFza0ZpZWxkcyh0YXNrSW5kZXgpIHtcbiAgX3VwZGF0ZVRhc2tQcmlvcml0eUlucHV0KCk7XG5cbiAgZWRpdFRhc2soXG4gICAgdGFza0luZGV4LFxuICAgIGNyZWF0ZVRhc2soXG4gICAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tQcmlvcml0eUlucHV0LnZhbHVlXG4gICAgKVxuICApO1xuXG4gIF9yZXNldFRhc2tGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gX3VwZGF0ZVRhc2tQcmlvcml0eUlucHV0KCkge1xuICB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIik7XG59XG5cbmZ1bmN0aW9uIF9yZXNldFByb2plY3RGaWVsZHMoKSB7XG4gIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gX3Jlc2V0VGFza0ZpZWxkcygpIHtcbiAgdGFza1RpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0YXNrUHJpb3JpdHlJbnB1dC5jaGVja2VkID0gZmFsc2U7XG5cbiAgZGVmYXVsdFByaW9yaXR5UmFkaW8uY2hlY2tlZCA9IHRydWU7XG59XG5cbmV4cG9ydCB7XG4gIHN1Ym1pdFByb2plY3RGaWVsZHMsXG4gIGNsZWFyVGFza0lucHV0RmllbGRzLFxuICBzdWJtaXRUYXNrRmllbGRzLFxuICBwb3B1bGF0ZVRhc2tGaWVsZHNXaXRoVGFza1RleHQsXG4gIHN1Ym1pdFVwZGF0ZXNUYXNrRmllbGRzLFxufTtcbiIsImxldCBfcHJvamVjdHMgPSBbXTtcbmxldCBfY3VycmVudFByb2plY3RJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBfY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHRhc2tzOiBbXSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZFByb2plY3RzKG5ld1Byb2plY3RzKSB7XG4gIF9wcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xufVxuXG5mdW5jdGlvbiBjbGVhclByb2pldHMoKSB7XG4gIF9wcm9qZWN0cyA9IFtdO1xuICBfY3VycmVudFByb2plY3RJbmRleCA9IC0xO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gIF9wcm9qZWN0cy5wdXNoKF9jcmVhdGVQcm9qZWN0KHRpdGxlKSk7XG4gIF9jdXJyZW50UHJvamVjdEluZGV4Kys7XG59XG5cbmZ1bmN0aW9uIG92ZXJyaWRlUHJvamVjdE9iamVjdChwcm9qZWN0KSB7XG4gIF9wcm9qZWN0c1tfY3VycmVudFByb2plY3RJbmRleF0gPSBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50UHJvamVjdFZhbHVlcyhuZXdUaXRsZSwgbmV3VGFza3MpIHtcbiAgZ2V0Q3VycmVudFByb2plY3QoKS50aXRsZSA9IG5ld1RpdGxlO1xuICBnZXRDdXJyZW50UHJvamVjdCgpLnRhc2tzID0gbmV3VGFza3M7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICByZXR1cm4gX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XTtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3RJbmRleChuZXdJbmRleCkge1xuICBfY3VycmVudFByb2plY3RJbmRleCA9IG5ld0luZGV4O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0QXRJbmRleChpbmRleCkge1xuICBpZiAoaW5kZXggPj0gX3Byb2plY3RzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIHJldHVybiBfcHJvamVjdHNbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0TGVuZ3RoKCkge1xuICByZXR1cm4gX3Byb2plY3RzLmxlbmd0aDtcbn1cblxuZnVuY3Rpb24gZ2V0QWxsUHJvamVjdHMoKSB7XG4gIHJldHVybiBfcHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2sodGFza0luZGV4KSB7XG4gIHJldHVybiBnZXRDdXJyZW50UHJvamVjdCgpLnRhc2tzW3Rhc2tJbmRleF07XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2sobmV3VGFzaykge1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzLnB1c2gobmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFzayhpbmRleCwgbmV3VGFzaykge1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2luZGV4XSA9IG5ld1Rhc2s7XG59XG5cbmV4cG9ydCB7XG4gIGxvYWRQcm9qZWN0cyxcbiAgY2xlYXJQcm9qZXRzLFxuICBhZGRQcm9qZWN0LFxuICBvdmVycmlkZVByb2plY3RPYmplY3QsXG4gIHVwZGF0ZUN1cnJlbnRQcm9qZWN0VmFsdWVzLFxuICBnZXRDdXJyZW50UHJvamVjdCxcbiAgc2V0Q3VycmVudFByb2plY3RJbmRleCxcbiAgZ2V0UHJvamVjdEF0SW5kZXgsXG4gIGdldFByb2plY3RMZW5ndGgsXG4gIGdldEFsbFByb2plY3RzLFxuICBnZXRUYXNrLFxuICBhZGRUYXNrLFxuICByZW1vdmVUYXNrLFxuICBlZGl0VGFzayxcbn07XG4iLCJpbXBvcnQgeyBjbGVhclByb2pldHMsIGdldEFsbFByb2plY3RzLCBsb2FkUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgbG9hZFRoZW1lIH0gZnJvbSBcIi4vdGhlbWVzXCI7XG5cbmNvbnN0IHByb2plY3RzS2V5ID0gXCJwcm9qZWN0c1wiO1xuY29uc3QgdGhlbWVLZXkgPSBcInRoZW1lXCI7XG5cbmNvbnN0IHRoZW1lU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RoZW1lc1wiKTtcblxuZnVuY3Rpb24gbG9hZFBlcnNpc3RlbnREYXRhKCkge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdHNLZXkpKSB7XG4gICAgbG9hZFByb2plY3RzKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdHNLZXkpKSk7XG4gIH1cblxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhlbWVLZXkpKSB7XG4gICAgY29uc3QgdmFsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhlbWVLZXkpO1xuICAgIGxvYWRUaGVtZSh2YWwpO1xuICAgIHRoZW1lU2VsZWN0b3IudmFsdWUgPSB2YWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2F2ZVByb2plY3RzUGVyc2lzdGVudERhdGEoKSB7XG4gIGNvbnN0IHByb2plY3RzID0gZ2V0QWxsUHJvamVjdHMoKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdHNLZXksIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIHNhdmVUaGVtZVBlcnNpc3RlbkRhdGEoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoZW1lS2V5LCB0aGVtZVNlbGVjdG9yLnZhbHVlKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoKSB7XG4gIGNsZWFyUHJvamV0cygpO1xuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbn1cblxuZXhwb3J0IHtcbiAgbG9hZFBlcnNpc3RlbnREYXRhLFxuICBzYXZlUHJvamVjdHNQZXJzaXN0ZW50RGF0YSxcbiAgc2F2ZVRoZW1lUGVyc2lzdGVuRGF0YSxcbiAgY2xlYXJMb2NhbFN0b3JhZ2UsXG59O1xuIiwiZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgfTtcbn1cblxuLy8gVE9ETyBtYWtlIHVwZGF0ZSB0YXNrIGZ1bmN0aW9uXG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2sgfTtcbiIsImNvbnN0IGxpZ2h0VGhlbWVCYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZcIjtcbmNvbnN0IGxpZ2h0VGhlbWVNb2RhbEJhY2tncm91bmRDb2xvciA9IFwiIzAwMDNcIjtcbmNvbnN0IGxpZ2h0VGhlbWVUZXh0Q29sb3IgPSBcIiMwMDBcIjtcbmNvbnN0IGxpZ2h0VGhlbWVCdXR0b25Db2xvciA9IFwicmdiKDAsIDE3NCwgMjU1KVwiO1xuY29uc3QgbGlnaHRUaGVtZUJ1dHRvblRleHRDb2xvciA9IFwiI2ZmZlwiO1xuY29uc3QgbGlnaHRUaGVtZUJ1dHRvbkhvdmVyQ29sb3IgPSBcInJnYig3OSwgMTk5LCAyNTUpXCI7XG5jb25zdCBsaWdodFRoZW1lQnV0dG9uQ2xpY2tDb2xvciA9IFwicmdiKDAsIDEzNywgMjAxKVwiO1xuXG5jb25zdCBkYXJrVGhlbWVCYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDBcIjtcbmNvbnN0IGRhcmtUaGVtZU1vZGFsQmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmNzVcIjtcbmNvbnN0IGRhcmtUaGVtZVRleHRDb2xvciA9IFwiI2ZmZlwiO1xuY29uc3QgZGFya1RoZW1lQnV0dG9uQ29sb3IgPSBcIiMyMzAwNDZcIjtcbmNvbnN0IGRhcmtUaGVtZUJ1dHRvblRleHRDb2xvciA9IFwiI2ZmZlwiO1xuY29uc3QgZGFya1RoZW1lQnV0dG9uSG92ZXJDb2xvciA9IFwiIzQyMDA4NVwiO1xuY29uc3QgZGFya1RoZW1lQnV0dG9uQ2xpY2tDb2xvciA9IFwiIzFlMDEzYlwiO1xuXG5jb25zdCBqb3NoVGhlbWVCYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDBcIjtcbmNvbnN0IGpvc2hUaGVtZU1vZGFsQmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmNzVcIjtcbmNvbnN0IGpvc2hUaGVtZVRleHRDb2xvciA9IFwiI2ZmZlwiO1xuY29uc3Qgam9zaFRoZW1lQnV0dG9uQ29sb3IgPSBcIiMyMzAwNDZcIjtcbmNvbnN0IGpvc2hUaGVtZUJ1dHRvblRleHRDb2xvciA9IFwiI2ZmZlwiO1xuY29uc3Qgam9zaFRoZW1lQnV0dG9uSG92ZXJDb2xvciA9IFwiIzQyMDA4NVwiO1xuY29uc3Qgam9zaFRoZW1lQnV0dG9uQ2xpY2tDb2xvciA9IFwiIzFlMDEzYlwiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpO1xuXG5mdW5jdGlvbiBjaGFuZ2VUaGVtZShuZXdUaGVtZVZhbHVlKSB7XG4gIHN3aXRjaCAobmV3VGhlbWVWYWx1ZSkge1xuICAgIGNhc2UgXCJsaWdodFwiOlxuICAgICAgX3NldFRoZW1lVmFsdWVzKFxuICAgICAgICBsaWdodFRoZW1lQmFja2dyb3VuZENvbG9yLFxuICAgICAgICBsaWdodFRoZW1lTW9kYWxCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGxpZ2h0VGhlbWVUZXh0Q29sb3IsXG4gICAgICAgIGxpZ2h0VGhlbWVCdXR0b25Db2xvcixcbiAgICAgICAgbGlnaHRUaGVtZUJ1dHRvblRleHRDb2xvcixcbiAgICAgICAgbGlnaHRUaGVtZUJ1dHRvbkhvdmVyQ29sb3IsXG4gICAgICAgIGxpZ2h0VGhlbWVCdXR0b25DbGlja0NvbG9yXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRhcmtcIjpcbiAgICAgIF9zZXRUaGVtZVZhbHVlcyhcbiAgICAgICAgZGFya1RoZW1lQmFja2dyb3VuZENvbG9yLFxuICAgICAgICBkYXJrVGhlbWVNb2RhbEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgZGFya1RoZW1lVGV4dENvbG9yLFxuICAgICAgICBkYXJrVGhlbWVCdXR0b25Db2xvcixcbiAgICAgICAgZGFya1RoZW1lQnV0dG9uVGV4dENvbG9yLFxuICAgICAgICBkYXJrVGhlbWVCdXR0b25Ib3ZlckNvbG9yLFxuICAgICAgICBkYXJrVGhlbWVCdXR0b25DbGlja0NvbG9yXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImpvc2hcIjpcbiAgICAgIF9zZXRUaGVtZVZhbHVlcyhcbiAgICAgICAgam9zaFRoZW1lQmFja2dyb3VuZENvbG9yLFxuICAgICAgICBqb3NoVGhlbWVNb2RhbEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgam9zaFRoZW1lVGV4dENvbG9yLFxuICAgICAgICBqb3NoVGhlbWVCdXR0b25Db2xvcixcbiAgICAgICAgam9zaFRoZW1lQnV0dG9uVGV4dENvbG9yLFxuICAgICAgICBqb3NoVGhlbWVCdXR0b25Ib3ZlckNvbG9yLFxuICAgICAgICBqb3NoVGhlbWVCdXR0b25DbGlja0NvbG9yXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3NldFRoZW1lVmFsdWVzKFxuICBiYWNrZ3JvdW5kQ29sb3IsXG4gIG1vZGFsQmFja2dyb3VuZENsb3IsXG4gIHRleHRDb2xvcixcbiAgYnV0dG9uQ29sb3IsXG4gIGJ1dHRvblRleHRDb2xvcixcbiAgYnV0dG9uSG92ZXJDb2xvcixcbiAgYnV0dG9uQ2xpY2tDb2xvclxuKSB7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmQtY29sb3JcIiwgYmFja2dyb3VuZENvbG9yKTtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbW9kYWwtYmFja2dyb3VuZC1jb2xvclwiLCBtb2RhbEJhY2tncm91bmRDbG9yKTtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGV4dC1jb2xvclwiLCB0ZXh0Q29sb3IpO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1idXR0b24tY29sb3JcIiwgYnV0dG9uQ29sb3IpO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1idXR0b24tdGV4dC1jb2xvclwiLCBidXR0b25UZXh0Q29sb3IpO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1idXR0b24taG92ZXItY29sb3JcIiwgYnV0dG9uSG92ZXJDb2xvcik7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWJ1dHRvbi1jbGljay1jb2xvclwiLCBidXR0b25DbGlja0NvbG9yKTtcbn1cblxuZnVuY3Rpb24gbG9hZFRoZW1lKHRoZW1lU3RyaW5nKSB7XG4gIGNoYW5nZVRoZW1lKHRoZW1lU3RyaW5nKTtcbn1cblxuZXhwb3J0IHsgY2hhbmdlVGhlbWUsIGxvYWRUaGVtZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBjbGVhclByb2plY3RQYW5lbCxcbiAgaGlkZUFib3V0TW9kYWwsXG4gIGhpZGVBZGRUYXNrTW9kYWwsXG4gIGhpZGVQcm9qZWN0TW9kYWwsXG4gIGhpZGVTZXR0aW5nc01vZGFsLFxuICBzaG93QWJvdXRNb2RhbCxcbiAgc2hvd0FkZFByb2plY3RNb2RhbCxcbiAgc2hvd0FkZFRhc2tNb2RhbCxcbiAgc2hvd1NldHRpbmdzTW9kYWwsXG4gIHVwZGF0ZVByb2plY3RTaWRlYmFyRWxlbWVudHMsXG59IGZyb20gXCIuL0RvbU1hbmFnZXJcIjtcbmltcG9ydCB7IHN1Ym1pdFByb2plY3RGaWVsZHMsIHN1Ym1pdFRhc2tGaWVsZHMgfSBmcm9tIFwiLi9pbnB1dHNcIjtcbmltcG9ydCB7XG4gIGNsZWFyTG9jYWxTdG9yYWdlLFxuICBsb2FkUGVyc2lzdGVudERhdGEsXG4gIHNhdmVQcm9qZWN0c1BlcnNpc3RlbnREYXRhLFxuICBzYXZlVGhlbWVQZXJzaXN0ZW5EYXRhLFxufSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBjaGFuZ2VUaGVtZSB9IGZyb20gXCIuL3RoZW1lc1wiO1xuXG4vLyBMb2FkIHBlcnNpc3RlbnQgZGF0YVxubG9hZFBlcnNpc3RlbnREYXRhKCk7XG51cGRhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnRzKCk7XG5cbi8vIE9wZW4gbW9kZWwgYnV0dG9uc1xuY29uc3Qgb3BlblByb2plY3RNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1wcm9qZWN0LW1vZGFsLWJ0blwiKTtcbmNvbnN0IG9wZW5UYXNrTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tdGFzay1tb2RhbC1idG5cIik7XG5cbi8vIEFkZCBhbmQgQ2xvc2UgYnV0dG9ucyBmb3IgcHJvamVjdCBhbmQgdGFzayBtb2RhbHNcbmNvbnN0IGFkZFByb2plY3RNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnRuXCIpO1xuY29uc3QgY2xvc2VBZGRQcm9qZWN0TW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNjbG9zZS1wcm9qZWN0LW1vZGFsLWJ0blwiXG4pO1xuY29uc3QgY2xvc2VUYXNrTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXRhc2stbW9kYWwtYnRuXCIpO1xuXG4vLyBTZXR0aW5ncyBidXR0b25zXG5jb25zdCBvcGVuU2V0dGluZ3NNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1zZXR0aW5ncy1idG5cIik7XG5jb25zdCBjbG9zZVNldHRpbmdzTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXNldHRpbmdzLWJ0blwiKTtcblxuLy8gQWJvdXQgYnV0dG9uc1xuY29uc3Qgb3BlbkFib3V0TW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tYWJvdXQtYnRuXCIpO1xuY29uc3QgY2xvc2VBYm91dE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1hYm91dC1idG5cIik7XG5cbi8vIFByb2plY3QgbW9kYWwgZXZlbnQgbGlzdGVuZXJzXG5vcGVuUHJvamVjdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWRkUHJvamVjdE1vZGFsKTtcbmFkZFByb2plY3RNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdWJtaXRQcm9qZWN0RmllbGRzKCk7XG4gIHVwZGF0ZVByb2plY3RTaWRlYmFyRWxlbWVudHMoKTtcbiAgaGlkZVByb2plY3RNb2RhbCgpO1xuICBzYXZlUHJvamVjdHNQZXJzaXN0ZW50RGF0YSgpO1xufSk7XG5jbG9zZUFkZFByb2plY3RNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVByb2plY3RNb2RhbCk7XG5cbi8vIFRhc2sgbW9kYWwgZXZlbnQgbGlzdGVuZXJzXG5vcGVuVGFza01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQWRkIHRhc2sgYnV0dG9uIGNsaWNrZWRcIik7XG4gIHNob3dBZGRUYXNrTW9kYWwoKTtcbn0pO1xuXG5jbG9zZVRhc2tNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUFkZFRhc2tNb2RhbCk7XG5cbm9wZW5TZXR0aW5nc01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2V0dGluZ3NNb2RhbCk7XG5jbG9zZVNldHRpbmdzTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVTZXR0aW5nc01vZGFsKTtcblxub3BlbkFib3V0TW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBYm91dE1vZGFsKTtcbmNsb3NlQWJvdXRNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUFib3V0TW9kYWwpO1xuXG4vLyBUaGVtZSBzZWxlY3RvclxuY29uc3QgdGhlbWVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhlbWVzXCIpO1xuXG50aGVtZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBjaGFuZ2VUaGVtZSh0aGVtZVNlbGVjdG9yLnZhbHVlKTtcbiAgc2F2ZVRoZW1lUGVyc2lzdGVuRGF0YSgpO1xufSk7XG5cbmNvbnN0IGNsZWFyU3RvcmFnZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xlYXItc3RvcmFnZS1idG5cIik7XG5jbGVhclN0b3JhZ2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2xlYXJMb2NhbFN0b3JhZ2UoKTtcbiAgdXBkYXRlUHJvamVjdFNpZGViYXJFbGVtZW50cygpO1xuICBjbGVhclByb2plY3RQYW5lbCgpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=