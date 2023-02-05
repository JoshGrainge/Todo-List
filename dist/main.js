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
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");




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
    let newTask = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(
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
  for (const task of (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getCurrentProject)().tasks) {
    taskContainer.appendChild(_createTaskElement(task, index));
    index++;
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
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "getCurrentProject": () => (/* binding */ getCurrentProject),
/* harmony export */   "getProjectAtIndex": () => (/* binding */ getProjectAtIndex),
/* harmony export */   "getProjectLength": () => (/* binding */ getProjectLength),
/* harmony export */   "getTask": () => (/* binding */ getTask),
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
/* harmony export */   "changeTheme": () => (/* binding */ changeTheme)
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
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themes */ "./src/themes.js");





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
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNuSEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBY0U7Ozs7Ozs7Ozs7Ozs7OztBQ3RFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRXNCOzs7Ozs7Ozs7Ozs7Ozs7QUNadEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7VUNsRnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNJc0I7QUFDMkM7QUFDVDtBQUNqQjs7QUFFdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLDREQUFtQjtBQUNqRTtBQUNBLEVBQUUsNERBQW1CO0FBQ3JCLEVBQUUseUVBQTRCO0FBQzlCLEVBQUUsNkRBQWdCO0FBQ2xCLENBQUM7QUFDRCxrREFBa0QseURBQWdCOztBQUVsRTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFnQjtBQUNsQixDQUFDOztBQUVELDRDQUE0Qyx5REFBZ0I7O0FBRTVELCtDQUErQywwREFBaUI7QUFDaEUsZ0RBQWdELDBEQUFpQjs7QUFFakUsNENBQTRDLHVEQUFjO0FBQzFELDZDQUE2Qyx1REFBYzs7QUFFM0Q7QUFDQTs7QUFFQTtBQUNBLEVBQUUsb0RBQVc7QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2lucHV0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90aGVtZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNsZWFyVGFza0lucHV0RmllbGRzLFxuICBwb3B1bGF0ZVRhc2tGaWVsZHNXaXRoVGFza1RleHQsXG4gIHN1Ym1pdFRhc2tGaWVsZHMsXG4gIHN1Ym1pdFVwZGF0ZXNUYXNrRmllbGRzLFxufSBmcm9tIFwiLi9pbnB1dHNcIjtcbmltcG9ydCB7XG4gIGVkaXRUYXNrLFxuICBnZXRDdXJyZW50UHJvamVjdCxcbiAgZ2V0UHJvamVjdEF0SW5kZXgsXG4gIGdldFByb2plY3RMZW5ndGgsXG4gIHJlbW92ZVRhc2ssXG4gIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgsXG59IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtcGFuZWxcIik7XG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIik7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcblxuY29uc3QgbW9kYWxCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG5jb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW1vZGFsXCIpO1xuY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1tb2RhbFwiKTtcblxuY29uc3Qgb3BlblRhc2tNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi10YXNrLW1vZGFsLWJ0blwiKTtcbmNvbnN0IHRhc2tNb2RhbFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW1vZGFsLXRpdGxlXCIpO1xuXG5jb25zdCBzZXR0aW5nc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXR0aW5ncy1tb2RhbFwiKTtcbmNvbnN0IGFib3V0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0LWluZm8tbW9kYWxcIik7XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0RWxlbWVudChpbmRleCkge1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEF0SW5kZXgoaW5kZXgpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgLy8gVXBkYXRlcyBwcm9qZWN0IHBhbmVsIHdoZW4gcHJvamVjdCBidXR0b24gaXMgcHJlc3NlZFxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBTZXQgYWRkIHRhc2sgYnV0dG9uIHRvIGJlIHZpc2libGVcbiAgICBvcGVuVGFza01vZGFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuXG4gICAgc2V0Q3VycmVudFByb2plY3RJbmRleChpbmRleCk7XG4gICAgX3VwZGF0ZVByb2plY3RDb250YWluZXIocHJvamVjdCk7XG4gIH0pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVUYXNrRWxlbWVudCh0YXNrLCB0YXNrSW5kZXgpIHtcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBkYXRhU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tJbnB1dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkdWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAvLyBBZGQgY2xhc3Nlc1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gIGRhdGFTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJkYXRhLXNlY3Rpb25zXCIpO1xuICB0b3BTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b3Atc2VjdGlvblwiKTtcbiAgdGFza0lucHV0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dC1zZWN0aW9uXCIpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uc1wiKTtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLWVkaXRcIik7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG4gIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtdHJhc2hcIik7XG4gIGJvdHRvbVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImJvdHRvbS1zZWN0aW9uXCIpO1xuXG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgLy9VcGRhdGUgdGFzayB3aGVuIGNoZWNrZWRcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKFxuICAgICAgdGFzay50aXRsZSxcbiAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICB0YXNrLnByaW9yaXR5XG4gICAgKTtcbiAgICBuZXdUYXNrLmNoZWNrZWQgPSBjaGVja2JveC5jaGVja2VkO1xuICAgIGVkaXRUYXNrKHRhc2tJbmRleCwgbmV3VGFzayk7XG4gIH0pO1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBfc2hvd0VkaXRUYXNrTW9kYWwodGFza0luZGV4KTtcbiAgfSk7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVtb3ZlVGFzayh0YXNrSW5kZXgpO1xuICAgIF91cGRhdGVUYXNrRWxlbWVudHMoKTtcbiAgfSk7XG5cbiAgLy8gU2V0IHRhc2sgdmFsdWVzIHRvIGVsZW1lbnRcbiAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgZHVlVGV4dC50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKHRhc2sucHJpb3JpdHkpO1xuXG4gIGJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgdGFza0lucHV0U2VjdGlvbi5hcHBlbmRDaGlsZChkdWVUZXh0KTtcbiAgdGFza0lucHV0U2VjdGlvbi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0lucHV0U2VjdGlvbik7XG4gIGRhdGFTZWN0aW9uLmFwcGVuZENoaWxkKHRvcFNlY3Rpb24pO1xuICBkYXRhU2VjdGlvbi5hcHBlbmRDaGlsZChib3R0b21TZWN0aW9uKTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0YVNlY3Rpb24pO1xuXG4gIHJldHVybiB0YXNrRGl2O1xufVxuXG5mdW5jdGlvbiBfdXBkYXRlUHJvamVjdENvbnRhaW5lcigpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcbiAgX3VwZGF0ZVRhc2tFbGVtZW50cygpO1xufVxuXG5mdW5jdGlvbiBfY2xlYXJFbGVtZW50cyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnRzKCkge1xuICBfY2xlYXJFbGVtZW50cyhwcm9qZWN0Q29udGFpbmVyKTtcblxuICBsZXQgbGVuZ3RoID0gZ2V0UHJvamVjdExlbmd0aCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlUHJvamVjdEVsZW1lbnQoaSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF91cGRhdGVUYXNrRWxlbWVudHMoKSB7XG4gIF9jbGVhckVsZW1lbnRzKHRhc2tDb250YWluZXIpO1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKGNvbnN0IHRhc2sgb2YgZ2V0Q3VycmVudFByb2plY3QoKS50YXNrcykge1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhc2tFbGVtZW50KHRhc2ssIGluZGV4KSk7XG4gICAgaW5kZXgrKztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdE1vZGFsKCkge1xuICBfc2hvd01vZGFsQmFja2dyb3VuZCgpO1xuICBhZGRQcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIGhpZGVQcm9qZWN0TW9kYWwoKSB7XG4gIF9oaWRlTW9kYWxCYWNrZ3JvdW5kKCk7XG4gIGFkZFByb2plY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gc2hvd0FkZFRhc2tNb2RhbCgpIHtcbiAgX29wZW5UYXNrTW9kYWwoKTtcblxuICBjbGVhclRhc2tJbnB1dEZpZWxkcygpO1xuXG4gIHRhc2tNb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stbW9kYWwtYnRuXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzdWJtaXRUYXNrRmllbGRzKCk7XG4gICAgICBfdXBkYXRlVGFza0VsZW1lbnRzKCk7XG4gICAgICBoaWRlQWRkVGFza01vZGFsKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVBZGRUYXNrTW9kYWwoKSB7XG4gIF9oaWRlTW9kYWxCYWNrZ3JvdW5kKCk7XG4gIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gX3Nob3dFZGl0VGFza01vZGFsKHRhc2tJbmRleCkge1xuICBfb3BlblRhc2tNb2RhbCgpO1xuXG4gIHRhc2tNb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJFZGl0IFRhc2tcIjtcblxuICBwb3B1bGF0ZVRhc2tGaWVsZHNXaXRoVGFza1RleHQodGFza0luZGV4KTtcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLW1vZGFsLWJ0blwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3VibWl0VXBkYXRlc1Rhc2tGaWVsZHModGFza0luZGV4KTtcbiAgICAgIF91cGRhdGVUYXNrRWxlbWVudHMoKTtcbiAgICAgIGhpZGVBZGRUYXNrTW9kYWwoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX29wZW5UYXNrTW9kYWwoKSB7XG4gIF9zaG93TW9kYWxCYWNrZ3JvdW5kKCk7XG4gIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcblxuICBfcmVzZXRNb2RhbEV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmZ1bmN0aW9uIF9yZXNldE1vZGFsRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLW1vZGFsLWJ0blwiKTtcbiAgYnRuLnJlcGxhY2VXaXRoKGJ0bi5jbG9uZU5vZGUodHJ1ZSkpO1xufVxuXG5mdW5jdGlvbiBzaG93QWJvdXRNb2RhbCgpIHtcbiAgX3Nob3dNb2RhbEJhY2tncm91bmQoKTtcbiAgYWJvdXRNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gaGlkZUFib3V0TW9kYWwoKSB7XG4gIF9oaWRlTW9kYWxCYWNrZ3JvdW5kKCk7XG4gIGFib3V0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIHNob3dTZXR0aW5nc01vZGFsKCkge1xuICBfc2hvd01vZGFsQmFja2dyb3VuZCgpO1xuICBzZXR0aW5nc01vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBoaWRlU2V0dGluZ3NNb2RhbCgpIHtcbiAgX2hpZGVNb2RhbEJhY2tncm91bmQoKTtcbiAgc2V0dGluZ3NNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gX3Nob3dNb2RhbEJhY2tncm91bmQoKSB7XG4gIG1vZGFsQmcuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG59XG5mdW5jdGlvbiBfaGlkZU1vZGFsQmFja2dyb3VuZCgpIHtcbiAgbW9kYWxCZy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZXhwb3J0IHtcbiAgdXBkYXRlUHJvamVjdFNpZGViYXJFbGVtZW50cyxcbiAgc2hvd0FkZFByb2plY3RNb2RhbCxcbiAgaGlkZVByb2plY3RNb2RhbCxcbiAgc2hvd0FkZFRhc2tNb2RhbCxcbiAgaGlkZUFkZFRhc2tNb2RhbCxcbiAgc2hvd1NldHRpbmdzTW9kYWwsXG4gIGhpZGVTZXR0aW5nc01vZGFsLFxuICBzaG93QWJvdXRNb2RhbCxcbiAgaGlkZUFib3V0TW9kYWwsXG59O1xuIiwiaW1wb3J0IHtcbiAgYWRkUHJvamVjdCxcbiAgYWRkVGFzayxcbiAgZWRpdFRhc2ssXG4gIGdldEN1cnJlbnRQcm9qZWN0LFxuICBnZXRUYXNrLFxufSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbi8vIEFkZCBwcm9qZWN0IGZpZWxkc1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcblxuLy8gQWRkIHRhc2sgZmllbGRzXG5jb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKTtcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpO1xuY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpO1xubGV0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIlxuKTtcblxuLy8gUmFkaW8gaW5wdXRzXG5jb25zdCBncmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JlZW5cIik7XG5jb25zdCB5ZWxsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3llbGxvd1wiKTtcbmNvbnN0IHJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVkXCIpO1xuXG4vLyBEZWZhdWx0IGNoZWNrZWQgcmFkaW9cbmNvbnN0IGRlZmF1bHRQcmlvcml0eVJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIlxuKTtcblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0SW5wdXRGaWVsZHMoKSB7XG4gIF9yZXNldFByb2plY3RGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdEZpZWxkcygpIHtcbiAgYWRkUHJvamVjdChwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG4gIF9yZXNldFByb2plY3RGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrSW5wdXRGaWVsZHMoKSB7XG4gIF9yZXNldFRhc2tGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0VGFza0ZpZWxkcygpIHtcbiAgX3VwZGF0ZVRhc2tQcmlvcml0eUlucHV0KCk7XG5cbiAgYWRkVGFzayhcbiAgICBjcmVhdGVUYXNrKFxuICAgICAgdGFza1RpdGxlSW5wdXQudmFsdWUsXG4gICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICB0YXNrUHJpb3JpdHlJbnB1dC52YWx1ZVxuICAgIClcbiAgKTtcblxuICBfcmVzZXRUYXNrRmllbGRzKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVGFza0ZpZWxkc1dpdGhUYXNrVGV4dCh0YXNrSW5kZXgpIHtcbiAgY29uc3QgdGFzayA9IGdldFRhc2sodGFza0luZGV4KTtcbiAgdGFza1RpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xuICAgIGNhc2UgXCJncmVlblwiOlxuICAgICAgZ3JlZW4uY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwieWVsbG93XCI6XG4gICAgICB5ZWxsb3cuY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicmVkXCI6XG4gICAgICByZWQuY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWJtaXRVcGRhdGVzVGFza0ZpZWxkcyh0YXNrSW5kZXgpIHtcbiAgX3VwZGF0ZVRhc2tQcmlvcml0eUlucHV0KCk7XG5cbiAgZWRpdFRhc2soXG4gICAgdGFza0luZGV4LFxuICAgIGNyZWF0ZVRhc2soXG4gICAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tQcmlvcml0eUlucHV0LnZhbHVlXG4gICAgKVxuICApO1xuXG4gIF9yZXNldFRhc2tGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gX3VwZGF0ZVRhc2tQcmlvcml0eUlucHV0KCkge1xuICB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIik7XG59XG5cbmZ1bmN0aW9uIF9yZXNldFByb2plY3RGaWVsZHMoKSB7XG4gIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gX3Jlc2V0VGFza0ZpZWxkcygpIHtcbiAgdGFza1RpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0YXNrUHJpb3JpdHlJbnB1dC5jaGVja2VkID0gZmFsc2U7XG5cbiAgZGVmYXVsdFByaW9yaXR5UmFkaW8uY2hlY2tlZCA9IHRydWU7XG59XG5cbmV4cG9ydCB7XG4gIHN1Ym1pdFByb2plY3RGaWVsZHMsXG4gIGNsZWFyVGFza0lucHV0RmllbGRzLFxuICBzdWJtaXRUYXNrRmllbGRzLFxuICBwb3B1bGF0ZVRhc2tGaWVsZHNXaXRoVGFza1RleHQsXG4gIHN1Ym1pdFVwZGF0ZXNUYXNrRmllbGRzLFxufTtcbiIsImxldCBfcHJvamVjdHMgPSBbXTtcbmxldCBfY3VycmVudFByb2plY3RJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBfY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHRhc2tzOiBbXSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSkge1xuICBfcHJvamVjdHMucHVzaChfY3JlYXRlUHJvamVjdCh0aXRsZSkpO1xuICBfY3VycmVudFByb2plY3RJbmRleCsrO1xufVxuXG5mdW5jdGlvbiBvdmVycmlkZVByb2plY3RPYmplY3QocHJvamVjdCkge1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdID0gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFByb2plY3RWYWx1ZXMobmV3VGl0bGUsIG5ld1Rhc2tzKSB7XG4gIGdldEN1cnJlbnRQcm9qZWN0KCkudGl0bGUgPSBuZXdUaXRsZTtcbiAgZ2V0Q3VycmVudFByb2plY3QoKS50YXNrcyA9IG5ld1Rhc2tzO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgcmV0dXJuIF9wcm9qZWN0c1tfY3VycmVudFByb2plY3RJbmRleF07XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgobmV3SW5kZXgpIHtcbiAgX2N1cnJlbnRQcm9qZWN0SW5kZXggPSBuZXdJbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEF0SW5kZXgoaW5kZXgpIHtcbiAgaWYgKGluZGV4ID49IF9wcm9qZWN0cy5sZW5ndGgpIHJldHVybjtcblxuICByZXR1cm4gX3Byb2plY3RzW2luZGV4XTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdExlbmd0aCgpIHtcbiAgcmV0dXJuIF9wcm9qZWN0cy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2sodGFza0luZGV4KSB7XG4gIHJldHVybiBnZXRDdXJyZW50UHJvamVjdCgpLnRhc2tzW3Rhc2tJbmRleF07XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2sobmV3VGFzaykge1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzLnB1c2gobmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFzayhpbmRleCwgbmV3VGFzaykge1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2luZGV4XSA9IG5ld1Rhc2s7XG59XG5cbmV4cG9ydCB7XG4gIGFkZFByb2plY3QsXG4gIG92ZXJyaWRlUHJvamVjdE9iamVjdCxcbiAgdXBkYXRlQ3VycmVudFByb2plY3RWYWx1ZXMsXG4gIGdldEN1cnJlbnRQcm9qZWN0LFxuICBzZXRDdXJyZW50UHJvamVjdEluZGV4LFxuICBnZXRQcm9qZWN0QXRJbmRleCxcbiAgZ2V0UHJvamVjdExlbmd0aCxcbiAgZ2V0VGFzayxcbiAgYWRkVGFzayxcbiAgcmVtb3ZlVGFzayxcbiAgZWRpdFRhc2ssXG59O1xuIiwiZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgfTtcbn1cblxuLy8gVE9ETyBtYWtlIHVwZGF0ZSB0YXNrIGZ1bmN0aW9uXG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2sgfTtcbiIsImNvbnN0IGxpZ2h0VGhlbWVCYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZcIjtcbmNvbnN0IGxpZ2h0VGhlbWVNb2RhbEJhY2tncm91bmRDb2xvciA9IFwiIzAwMDNcIjtcbmNvbnN0IGxpZ2h0VGhlbWVUZXh0Q29sb3IgPSBcIiMwMDBcIjtcbmNvbnN0IGxpZ2h0VGhlbWVCdXR0b25Db2xvciA9IFwicmdiKDAsIDE3NCwgMjU1KVwiO1xuY29uc3QgbGlnaHRUaGVtZUJ1dHRvblRleHRDb2xvciA9IFwiI2ZmZlwiO1xuY29uc3QgbGlnaHRUaGVtZUJ1dHRvbkhvdmVyQ29sb3IgPSBcInJnYig3OSwgMTk5LCAyNTUpXCI7XG5jb25zdCBsaWdodFRoZW1lQnV0dG9uQ2xpY2tDb2xvciA9IFwicmdiKDAsIDEzNywgMjAxKVwiO1xuXG5jb25zdCBkYXJrVGhlbWVCYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDBcIjtcbmNvbnN0IGRhcmtUaGVtZU1vZGFsQmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmNzVcIjtcbmNvbnN0IGRhcmtUaGVtZVRleHRDb2xvciA9IFwiI2ZmZlwiO1xuY29uc3QgZGFya1RoZW1lQnV0dG9uQ29sb3IgPSBcIiMyMzAwNDZcIjtcbmNvbnN0IGRhcmtUaGVtZUJ1dHRvblRleHRDb2xvciA9IFwiI2ZmZlwiO1xuY29uc3QgZGFya1RoZW1lQnV0dG9uSG92ZXJDb2xvciA9IFwiIzQyMDA4NVwiO1xuY29uc3QgZGFya1RoZW1lQnV0dG9uQ2xpY2tDb2xvciA9IFwiIzFlMDEzYlwiO1xuXG5jb25zdCBqb3NoVGhlbWVCYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDBcIjtcbmNvbnN0IGpvc2hUaGVtZU1vZGFsQmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmNzVcIjtcbmNvbnN0IGpvc2hUaGVtZVRleHRDb2xvciA9IFwiI2ZmZlwiO1xuY29uc3Qgam9zaFRoZW1lQnV0dG9uQ29sb3IgPSBcIiMyMzAwNDZcIjtcbmNvbnN0IGpvc2hUaGVtZUJ1dHRvblRleHRDb2xvciA9IFwiI2ZmZlwiO1xuY29uc3Qgam9zaFRoZW1lQnV0dG9uSG92ZXJDb2xvciA9IFwiIzQyMDA4NVwiO1xuY29uc3Qgam9zaFRoZW1lQnV0dG9uQ2xpY2tDb2xvciA9IFwiIzFlMDEzYlwiO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpO1xuXG5mdW5jdGlvbiBjaGFuZ2VUaGVtZShuZXdUaGVtZVZhbHVlKSB7XG4gIHN3aXRjaCAobmV3VGhlbWVWYWx1ZSkge1xuICAgIGNhc2UgXCJsaWdodFwiOlxuICAgICAgX3NldFRoZW1lVmFsdWVzKFxuICAgICAgICBsaWdodFRoZW1lQmFja2dyb3VuZENvbG9yLFxuICAgICAgICBsaWdodFRoZW1lTW9kYWxCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGxpZ2h0VGhlbWVUZXh0Q29sb3IsXG4gICAgICAgIGxpZ2h0VGhlbWVCdXR0b25Db2xvcixcbiAgICAgICAgbGlnaHRUaGVtZUJ1dHRvblRleHRDb2xvcixcbiAgICAgICAgbGlnaHRUaGVtZUJ1dHRvbkhvdmVyQ29sb3IsXG4gICAgICAgIGxpZ2h0VGhlbWVCdXR0b25DbGlja0NvbG9yXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImRhcmtcIjpcbiAgICAgIF9zZXRUaGVtZVZhbHVlcyhcbiAgICAgICAgZGFya1RoZW1lQmFja2dyb3VuZENvbG9yLFxuICAgICAgICBkYXJrVGhlbWVNb2RhbEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgZGFya1RoZW1lVGV4dENvbG9yLFxuICAgICAgICBkYXJrVGhlbWVCdXR0b25Db2xvcixcbiAgICAgICAgZGFya1RoZW1lQnV0dG9uVGV4dENvbG9yLFxuICAgICAgICBkYXJrVGhlbWVCdXR0b25Ib3ZlckNvbG9yLFxuICAgICAgICBkYXJrVGhlbWVCdXR0b25DbGlja0NvbG9yXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImpvc2hcIjpcbiAgICAgIF9zZXRUaGVtZVZhbHVlcyhcbiAgICAgICAgam9zaFRoZW1lQmFja2dyb3VuZENvbG9yLFxuICAgICAgICBqb3NoVGhlbWVNb2RhbEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgam9zaFRoZW1lVGV4dENvbG9yLFxuICAgICAgICBqb3NoVGhlbWVCdXR0b25Db2xvcixcbiAgICAgICAgam9zaFRoZW1lQnV0dG9uVGV4dENvbG9yLFxuICAgICAgICBqb3NoVGhlbWVCdXR0b25Ib3ZlckNvbG9yLFxuICAgICAgICBqb3NoVGhlbWVCdXR0b25DbGlja0NvbG9yXG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gX3NldFRoZW1lVmFsdWVzKFxuICBiYWNrZ3JvdW5kQ29sb3IsXG4gIG1vZGFsQmFja2dyb3VuZENsb3IsXG4gIHRleHRDb2xvcixcbiAgYnV0dG9uQ29sb3IsXG4gIGJ1dHRvblRleHRDb2xvcixcbiAgYnV0dG9uSG92ZXJDb2xvcixcbiAgYnV0dG9uQ2xpY2tDb2xvclxuKSB7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWJhY2tncm91bmQtY29sb3JcIiwgYmFja2dyb3VuZENvbG9yKTtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbW9kYWwtYmFja2dyb3VuZC1jb2xvclwiLCBtb2RhbEJhY2tncm91bmRDbG9yKTtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGV4dC1jb2xvclwiLCB0ZXh0Q29sb3IpO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1idXR0b24tY29sb3JcIiwgYnV0dG9uQ29sb3IpO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1idXR0b24tdGV4dC1jb2xvclwiLCBidXR0b25UZXh0Q29sb3IpO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1idXR0b24taG92ZXItY29sb3JcIiwgYnV0dG9uSG92ZXJDb2xvcik7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWJ1dHRvbi1jbGljay1jb2xvclwiLCBidXR0b25DbGlja0NvbG9yKTtcbn1cblxuZXhwb3J0IHsgY2hhbmdlVGhlbWUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgaGlkZUFib3V0TW9kYWwsXG4gIGhpZGVBZGRUYXNrTW9kYWwsXG4gIGhpZGVQcm9qZWN0TW9kYWwsXG4gIGhpZGVTZXR0aW5nc01vZGFsLFxuICBzaG93QWJvdXRNb2RhbCxcbiAgc2hvd0FkZFByb2plY3RNb2RhbCxcbiAgc2hvd0FkZFRhc2tNb2RhbCxcbiAgc2hvd1NldHRpbmdzTW9kYWwsXG4gIHVwZGF0ZVByb2plY3RTaWRlYmFyRWxlbWVudHMsXG59IGZyb20gXCIuL0RvbU1hbmFnZXJcIjtcbmltcG9ydCB7IHN1Ym1pdFByb2plY3RGaWVsZHMsIHN1Ym1pdFRhc2tGaWVsZHMgfSBmcm9tIFwiLi9pbnB1dHNcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRQcm9qZWN0LCBnZXRUYXNrIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IGNoYW5nZVRoZW1lIH0gZnJvbSBcIi4vdGhlbWVzXCI7XG5cbi8vIE9wZW4gbW9kZWwgYnV0dG9uc1xuY29uc3Qgb3BlblByb2plY3RNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1wcm9qZWN0LW1vZGFsLWJ0blwiKTtcbmNvbnN0IG9wZW5UYXNrTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tdGFzay1tb2RhbC1idG5cIik7XG5cbi8vIEFkZCBhbmQgQ2xvc2UgYnV0dG9ucyBmb3IgcHJvamVjdCBhbmQgdGFzayBtb2RhbHNcbmNvbnN0IGFkZFByb2plY3RNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnRuXCIpO1xuY29uc3QgY2xvc2VBZGRQcm9qZWN0TW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNjbG9zZS1wcm9qZWN0LW1vZGFsLWJ0blwiXG4pO1xuY29uc3QgY2xvc2VUYXNrTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXRhc2stbW9kYWwtYnRuXCIpO1xuXG4vLyBTZXR0aW5ncyBidXR0b25zXG5jb25zdCBvcGVuU2V0dGluZ3NNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1zZXR0aW5ncy1idG5cIik7XG5jb25zdCBjbG9zZVNldHRpbmdzTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLXNldHRpbmdzLWJ0blwiKTtcblxuLy8gQWJvdXQgYnV0dG9uc1xuY29uc3Qgb3BlbkFib3V0TW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tYWJvdXQtYnRuXCIpO1xuY29uc3QgY2xvc2VBYm91dE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1hYm91dC1idG5cIik7XG5cbi8vIFByb2plY3QgbW9kYWwgZXZlbnQgbGlzdGVuZXJzXG5vcGVuUHJvamVjdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWRkUHJvamVjdE1vZGFsKTtcbmFkZFByb2plY3RNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdWJtaXRQcm9qZWN0RmllbGRzKCk7XG4gIHVwZGF0ZVByb2plY3RTaWRlYmFyRWxlbWVudHMoKTtcbiAgaGlkZVByb2plY3RNb2RhbCgpO1xufSk7XG5jbG9zZUFkZFByb2plY3RNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVByb2plY3RNb2RhbCk7XG5cbi8vIFRhc2sgbW9kYWwgZXZlbnQgbGlzdGVuZXJzXG5vcGVuVGFza01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQWRkIHRhc2sgYnV0dG9uIGNsaWNrZWRcIik7XG4gIHNob3dBZGRUYXNrTW9kYWwoKTtcbn0pO1xuXG5jbG9zZVRhc2tNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUFkZFRhc2tNb2RhbCk7XG5cbm9wZW5TZXR0aW5nc01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U2V0dGluZ3NNb2RhbCk7XG5jbG9zZVNldHRpbmdzTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVTZXR0aW5nc01vZGFsKTtcblxub3BlbkFib3V0TW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBYm91dE1vZGFsKTtcbmNsb3NlQWJvdXRNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUFib3V0TW9kYWwpO1xuXG4vLyBUaGVtZSBzZWxlY3RvclxuY29uc3QgdGhlbWVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhlbWVzXCIpO1xuXG50aGVtZVNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICBjaGFuZ2VUaGVtZSh0aGVtZVNlbGVjdG9yLnZhbHVlKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9