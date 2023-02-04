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
/* harmony export */   "hideAddTaskModal": () => (/* binding */ hideAddTaskModal),
/* harmony export */   "hideProjectModal": () => (/* binding */ hideProjectModal),
/* harmony export */   "showAddProjectModal": () => (/* binding */ showAddProjectModal),
/* harmony export */   "showAddTaskModal": () => (/* binding */ showAddTaskModal),
/* harmony export */   "updateProjectSidebarElements": () => (/* binding */ updateProjectSidebarElements)
/* harmony export */ });
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inputs */ "./src/inputs.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");



const projectContainer = document.querySelector(".projects-panel");
const projectTitle = document.querySelector("#project-title");
const taskContainer = document.querySelector(".task-container");

const modalBg = document.querySelector(".modal-bg");
const addProjectModal = document.querySelector(".add-project-modal");
const addTaskModal = document.querySelector(".add-task-modal");

function _createProjectElement(index) {
  const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.getProjectAtIndex)(index);

  const btn = document.createElement("button");
  btn.classList.add("project-button");
  btn.textContent = project.title;

  // Updates project panel when project button is pressed
  btn.addEventListener("click", () => {
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
  modalBg.classList.add("show");
  addProjectModal.classList.add("show");
}

function hideProjectModal() {
  modalBg.classList.remove("show");
  addProjectModal.classList.remove("show");
}

function showAddTaskModal() {
  _openTaskModal();

  (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.clearTaskInputFields)();

  document
    .querySelector("#add-task-modal-btn")
    .addEventListener("click", () => {
      (0,_inputs__WEBPACK_IMPORTED_MODULE_0__.submitTaskFields)();
      _updateTaskElements();
      hideAddTaskModal();
    });
}

function hideAddTaskModal() {
  modalBg.classList.remove("show");
  addTaskModal.classList.remove("show");
}

function _showEditTaskModal(taskIndex) {
  _openTaskModal();

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
  modalBg.classList.add("show");
  addTaskModal.classList.add("show");

  _resetModalEventListeners();
}

function _resetModalEventListeners() {
  let btn = document.querySelector("#add-task-modal-btn");
  btn.replaceWith(btn.cloneNode(true));
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtrQjtBQU9FOztBQUVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDREQUFpQjs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlFQUFzQjtBQUMxQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsSUFBSSxxREFBVTtBQUNkO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qiw0REFBaUI7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDJEQUFnQjtBQUMvQixrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDREQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQUUsNkRBQW9COztBQUV0QjtBQUNBO0FBQ0E7QUFDQSxNQUFNLHlEQUFnQjtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSx1RUFBOEI7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0VBQXVCO0FBQzdCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBUUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNMa0I7QUFDaUI7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxxREFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSxrREFBTztBQUNULElBQUksa0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0RBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSxtREFBUTtBQUNWO0FBQ0EsSUFBSSxrREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQVFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQWNFOzs7Ozs7Ozs7Ozs7Ozs7QUN0RUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVzQjs7Ozs7OztVQ1p0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUMyQzs7QUFFakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDLDREQUFtQjtBQUNqRTtBQUNBLEVBQUUsNERBQW1CO0FBQ3JCLEVBQUUseUVBQTRCO0FBQzlCLEVBQUUsNkRBQWdCO0FBQ2xCLENBQUM7QUFDRCxrREFBa0QseURBQWdCOztBQUVsRTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFnQjtBQUNsQixDQUFDOztBQUVELDRDQUE0Qyx5REFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5wdXRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGNsZWFyVGFza0lucHV0RmllbGRzLFxuICBwb3B1bGF0ZVRhc2tGaWVsZHNXaXRoVGFza1RleHQsXG4gIHN1Ym1pdFRhc2tGaWVsZHMsXG4gIHN1Ym1pdFVwZGF0ZXNUYXNrRmllbGRzLFxufSBmcm9tIFwiLi9pbnB1dHNcIjtcbmltcG9ydCB7XG4gIGdldEN1cnJlbnRQcm9qZWN0LFxuICBnZXRQcm9qZWN0QXRJbmRleCxcbiAgZ2V0UHJvamVjdExlbmd0aCxcbiAgcmVtb3ZlVGFzayxcbiAgc2V0Q3VycmVudFByb2plY3RJbmRleCxcbn0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtcGFuZWxcIik7XG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIik7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcblxuY29uc3QgbW9kYWxCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG5jb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW1vZGFsXCIpO1xuY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1tb2RhbFwiKTtcblxuZnVuY3Rpb24gX2NyZWF0ZVByb2plY3RFbGVtZW50KGluZGV4KSB7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QXRJbmRleChpbmRleCk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAvLyBVcGRhdGVzIHByb2plY3QgcGFuZWwgd2hlbiBwcm9qZWN0IGJ1dHRvbiBpcyBwcmVzc2VkXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgoaW5kZXgpO1xuICAgIF91cGRhdGVQcm9qZWN0Q29udGFpbmVyKHByb2plY3QpO1xuICB9KTtcblxuICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlVGFza0VsZW1lbnQodGFzaywgdGFza0luZGV4KSB7XG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZGF0YVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b3BTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0YXNrSW5wdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHVlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCBib3R0b21TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgLy8gQWRkIGNsYXNzZXNcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICBkYXRhU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGF0YS1zZWN0aW9uc1wiKTtcbiAgdG9wU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9wLXNlY3Rpb25cIik7XG4gIHRhc2tJbnB1dFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXQtc2VjdGlvblwiKTtcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ1dHRvbnNcIik7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uXCIpO1xuICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS1lZGl0XCIpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uXCIpO1xuICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLXRyYXNoXCIpO1xuICBib3R0b21TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJib3R0b20tc2VjdGlvblwiKTtcblxuICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4gIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBfc2hvd0VkaXRUYXNrTW9kYWwodGFza0luZGV4KTtcbiAgfSk7XG5cbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmVtb3ZlVGFzayh0YXNrSW5kZXgpO1xuICAgIF91cGRhdGVUYXNrRWxlbWVudHMoKTtcbiAgfSk7XG5cbiAgLy8gU2V0IHRhc2sgdmFsdWVzIHRvIGVsZW1lbnRcbiAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgZHVlVGV4dC50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKHRhc2sucHJpb3JpdHkpO1xuXG4gIGJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgdGFza0lucHV0U2VjdGlvbi5hcHBlbmRDaGlsZChkdWVUZXh0KTtcbiAgdGFza0lucHV0U2VjdGlvbi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0lucHV0U2VjdGlvbik7XG4gIGRhdGFTZWN0aW9uLmFwcGVuZENoaWxkKHRvcFNlY3Rpb24pO1xuICBkYXRhU2VjdGlvbi5hcHBlbmRDaGlsZChib3R0b21TZWN0aW9uKTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0YVNlY3Rpb24pO1xuXG4gIHJldHVybiB0YXNrRGl2O1xufVxuXG5mdW5jdGlvbiBfdXBkYXRlUHJvamVjdENvbnRhaW5lcigpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcbiAgX3VwZGF0ZVRhc2tFbGVtZW50cygpO1xufVxuXG5mdW5jdGlvbiBfY2xlYXJFbGVtZW50cyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnRzKCkge1xuICBfY2xlYXJFbGVtZW50cyhwcm9qZWN0Q29udGFpbmVyKTtcblxuICBsZXQgbGVuZ3RoID0gZ2V0UHJvamVjdExlbmd0aCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlUHJvamVjdEVsZW1lbnQoaSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF91cGRhdGVUYXNrRWxlbWVudHMoKSB7XG4gIF9jbGVhckVsZW1lbnRzKHRhc2tDb250YWluZXIpO1xuICBsZXQgaW5kZXggPSAwO1xuICBmb3IgKGNvbnN0IHRhc2sgb2YgZ2V0Q3VycmVudFByb2plY3QoKS50YXNrcykge1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhc2tFbGVtZW50KHRhc2ssIGluZGV4KSk7XG4gICAgaW5kZXgrKztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93QWRkUHJvamVjdE1vZGFsKCkge1xuICBtb2RhbEJnLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICBhZGRQcm9qZWN0TW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIGhpZGVQcm9qZWN0TW9kYWwoKSB7XG4gIG1vZGFsQmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gIGFkZFByb2plY3RNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gc2hvd0FkZFRhc2tNb2RhbCgpIHtcbiAgX29wZW5UYXNrTW9kYWwoKTtcblxuICBjbGVhclRhc2tJbnB1dEZpZWxkcygpO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stbW9kYWwtYnRuXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzdWJtaXRUYXNrRmllbGRzKCk7XG4gICAgICBfdXBkYXRlVGFza0VsZW1lbnRzKCk7XG4gICAgICBoaWRlQWRkVGFza01vZGFsKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVBZGRUYXNrTW9kYWwoKSB7XG4gIG1vZGFsQmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gX3Nob3dFZGl0VGFza01vZGFsKHRhc2tJbmRleCkge1xuICBfb3BlblRhc2tNb2RhbCgpO1xuXG4gIHBvcHVsYXRlVGFza0ZpZWxkc1dpdGhUYXNrVGV4dCh0YXNrSW5kZXgpO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stbW9kYWwtYnRuXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzdWJtaXRVcGRhdGVzVGFza0ZpZWxkcyh0YXNrSW5kZXgpO1xuICAgICAgX3VwZGF0ZVRhc2tFbGVtZW50cygpO1xuICAgICAgaGlkZUFkZFRhc2tNb2RhbCgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfb3BlblRhc2tNb2RhbCgpIHtcbiAgbW9kYWxCZy5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuXG4gIF9yZXNldE1vZGFsRXZlbnRMaXN0ZW5lcnMoKTtcbn1cblxuZnVuY3Rpb24gX3Jlc2V0TW9kYWxFdmVudExpc3RlbmVycygpIHtcbiAgbGV0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stbW9kYWwtYnRuXCIpO1xuICBidG4ucmVwbGFjZVdpdGgoYnRuLmNsb25lTm9kZSh0cnVlKSk7XG59XG5cbmV4cG9ydCB7XG4gIHVwZGF0ZVByb2plY3RTaWRlYmFyRWxlbWVudHMsXG4gIHNob3dBZGRQcm9qZWN0TW9kYWwsXG4gIGhpZGVQcm9qZWN0TW9kYWwsXG4gIHNob3dBZGRUYXNrTW9kYWwsXG4gIGhpZGVBZGRUYXNrTW9kYWwsXG59O1xuIiwiaW1wb3J0IHtcbiAgYWRkUHJvamVjdCxcbiAgYWRkVGFzayxcbiAgZWRpdFRhc2ssXG4gIGdldEN1cnJlbnRQcm9qZWN0LFxuICBnZXRUYXNrLFxufSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbi8vIEFkZCBwcm9qZWN0IGZpZWxkc1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcblxuLy8gQWRkIHRhc2sgZmllbGRzXG5jb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKTtcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpO1xuY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpO1xubGV0IHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIlxuKTtcblxuLy8gUmFkaW8gaW5wdXRzXG5jb25zdCBncmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JlZW5cIik7XG5jb25zdCB5ZWxsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3llbGxvd1wiKTtcbmNvbnN0IHJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVkXCIpO1xuXG4vLyBEZWZhdWx0IGNoZWNrZWQgcmFkaW9cbmNvbnN0IGRlZmF1bHRQcmlvcml0eVJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIlxuKTtcblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0SW5wdXRGaWVsZHMoKSB7XG4gIF9yZXNldFByb2plY3RGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdEZpZWxkcygpIHtcbiAgYWRkUHJvamVjdChwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG4gIF9yZXNldFByb2plY3RGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrSW5wdXRGaWVsZHMoKSB7XG4gIF9yZXNldFRhc2tGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gc3VibWl0VGFza0ZpZWxkcygpIHtcbiAgX3VwZGF0ZVRhc2tQcmlvcml0eUlucHV0KCk7XG5cbiAgYWRkVGFzayhcbiAgICBjcmVhdGVUYXNrKFxuICAgICAgdGFza1RpdGxlSW5wdXQudmFsdWUsXG4gICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICB0YXNrUHJpb3JpdHlJbnB1dC52YWx1ZVxuICAgIClcbiAgKTtcblxuICBfcmVzZXRUYXNrRmllbGRzKCk7XG59XG5cbmZ1bmN0aW9uIHBvcHVsYXRlVGFza0ZpZWxkc1dpdGhUYXNrVGV4dCh0YXNrSW5kZXgpIHtcbiAgY29uc3QgdGFzayA9IGdldFRhc2sodGFza0luZGV4KTtcbiAgdGFza1RpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gIHN3aXRjaCAodGFzay5wcmlvcml0eSkge1xuICAgIGNhc2UgXCJncmVlblwiOlxuICAgICAgZ3JlZW4uY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwieWVsbG93XCI6XG4gICAgICB5ZWxsb3cuY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwicmVkXCI6XG4gICAgICByZWQuY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBzdWJtaXRVcGRhdGVzVGFza0ZpZWxkcyh0YXNrSW5kZXgpIHtcbiAgX3VwZGF0ZVRhc2tQcmlvcml0eUlucHV0KCk7XG5cbiAgZWRpdFRhc2soXG4gICAgdGFza0luZGV4LFxuICAgIGNyZWF0ZVRhc2soXG4gICAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tQcmlvcml0eUlucHV0LnZhbHVlXG4gICAgKVxuICApO1xuXG4gIF9yZXNldFRhc2tGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gX3VwZGF0ZVRhc2tQcmlvcml0eUlucHV0KCkge1xuICB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIik7XG59XG5cbmZ1bmN0aW9uIF9yZXNldFByb2plY3RGaWVsZHMoKSB7XG4gIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gX3Jlc2V0VGFza0ZpZWxkcygpIHtcbiAgdGFza1RpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0YXNrUHJpb3JpdHlJbnB1dC5jaGVja2VkID0gZmFsc2U7XG5cbiAgZGVmYXVsdFByaW9yaXR5UmFkaW8uY2hlY2tlZCA9IHRydWU7XG59XG5cbmV4cG9ydCB7XG4gIHN1Ym1pdFByb2plY3RGaWVsZHMsXG4gIGNsZWFyVGFza0lucHV0RmllbGRzLFxuICBzdWJtaXRUYXNrRmllbGRzLFxuICBwb3B1bGF0ZVRhc2tGaWVsZHNXaXRoVGFza1RleHQsXG4gIHN1Ym1pdFVwZGF0ZXNUYXNrRmllbGRzLFxufTtcbiIsImxldCBfcHJvamVjdHMgPSBbXTtcbmxldCBfY3VycmVudFByb2plY3RJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBfY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHRhc2tzOiBbXSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSkge1xuICBfcHJvamVjdHMucHVzaChfY3JlYXRlUHJvamVjdCh0aXRsZSkpO1xuICBfY3VycmVudFByb2plY3RJbmRleCsrO1xufVxuXG5mdW5jdGlvbiBvdmVycmlkZVByb2plY3RPYmplY3QocHJvamVjdCkge1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdID0gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFByb2plY3RWYWx1ZXMobmV3VGl0bGUsIG5ld1Rhc2tzKSB7XG4gIGdldEN1cnJlbnRQcm9qZWN0KCkudGl0bGUgPSBuZXdUaXRsZTtcbiAgZ2V0Q3VycmVudFByb2plY3QoKS50YXNrcyA9IG5ld1Rhc2tzO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgcmV0dXJuIF9wcm9qZWN0c1tfY3VycmVudFByb2plY3RJbmRleF07XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgobmV3SW5kZXgpIHtcbiAgX2N1cnJlbnRQcm9qZWN0SW5kZXggPSBuZXdJbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEF0SW5kZXgoaW5kZXgpIHtcbiAgaWYgKGluZGV4ID49IF9wcm9qZWN0cy5sZW5ndGgpIHJldHVybjtcblxuICByZXR1cm4gX3Byb2plY3RzW2luZGV4XTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdExlbmd0aCgpIHtcbiAgcmV0dXJuIF9wcm9qZWN0cy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2sodGFza0luZGV4KSB7XG4gIHJldHVybiBnZXRDdXJyZW50UHJvamVjdCgpLnRhc2tzW3Rhc2tJbmRleF07XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2sobmV3VGFzaykge1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzLnB1c2gobmV3VGFzayk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFzayhpbmRleCwgbmV3VGFzaykge1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2luZGV4XSA9IG5ld1Rhc2s7XG59XG5cbmV4cG9ydCB7XG4gIGFkZFByb2plY3QsXG4gIG92ZXJyaWRlUHJvamVjdE9iamVjdCxcbiAgdXBkYXRlQ3VycmVudFByb2plY3RWYWx1ZXMsXG4gIGdldEN1cnJlbnRQcm9qZWN0LFxuICBzZXRDdXJyZW50UHJvamVjdEluZGV4LFxuICBnZXRQcm9qZWN0QXRJbmRleCxcbiAgZ2V0UHJvamVjdExlbmd0aCxcbiAgZ2V0VGFzayxcbiAgYWRkVGFzayxcbiAgcmVtb3ZlVGFzayxcbiAgZWRpdFRhc2ssXG59O1xuIiwiZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgfTtcbn1cblxuLy8gVE9ETyBtYWtlIHVwZGF0ZSB0YXNrIGZ1bmN0aW9uXG5cbmV4cG9ydCB7IGNyZWF0ZVRhc2sgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgaGlkZUFkZFRhc2tNb2RhbCxcbiAgaGlkZVByb2plY3RNb2RhbCxcbiAgc2hvd0FkZFByb2plY3RNb2RhbCxcbiAgc2hvd0FkZFRhc2tNb2RhbCxcbiAgdXBkYXRlUHJvamVjdFNpZGViYXJFbGVtZW50cyxcbn0gZnJvbSBcIi4vRG9tTWFuYWdlclwiO1xuaW1wb3J0IHsgc3VibWl0UHJvamVjdEZpZWxkcywgc3VibWl0VGFza0ZpZWxkcyB9IGZyb20gXCIuL2lucHV0c1wiO1xuXG4vLyBPcGVuIG1vZGVsIGJ1dHRvbnNcbmNvbnN0IG9wZW5Qcm9qZWN0TW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tcHJvamVjdC1tb2RhbC1idG5cIik7XG5jb25zdCBvcGVuVGFza01vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXRhc2stbW9kYWwtYnRuXCIpO1xuXG4vLyBBZGQgYW5kIENsb3NlIGJ1dHRvbnMgZm9yIHByb2plY3QgYW5kIHRhc2sgbW9kYWxzXG5jb25zdCBhZGRQcm9qZWN0TW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ0blwiKTtcbmNvbnN0IGNsb3NlQWRkUHJvamVjdE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjY2xvc2UtcHJvamVjdC1tb2RhbC1idG5cIlxuKTtcbi8vY29uc3QgYWRkVGFza01vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1tb2RhbC1idG5cIik7XG5jb25zdCBjbG9zZVRhc2tNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtdGFzay1tb2RhbC1idG5cIik7XG5cbi8vIFByb2plY3QgbW9kYWwgZXZlbnQgbGlzdGVuZXJzXG5vcGVuUHJvamVjdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWRkUHJvamVjdE1vZGFsKTtcbmFkZFByb2plY3RNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBzdWJtaXRQcm9qZWN0RmllbGRzKCk7XG4gIHVwZGF0ZVByb2plY3RTaWRlYmFyRWxlbWVudHMoKTtcbiAgaGlkZVByb2plY3RNb2RhbCgpO1xufSk7XG5jbG9zZUFkZFByb2plY3RNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVByb2plY3RNb2RhbCk7XG5cbi8vIFRhc2sgbW9kYWwgZXZlbnQgbGlzdGVuZXJzXG5vcGVuVGFza01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQWRkIHRhc2sgYnV0dG9uIGNsaWNrZWRcIik7XG4gIHNob3dBZGRUYXNrTW9kYWwoKTtcbn0pO1xuXG5jbG9zZVRhc2tNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUFkZFRhc2tNb2RhbCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=