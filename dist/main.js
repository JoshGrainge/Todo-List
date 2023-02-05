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

    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsPersistentData)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLa0I7QUFRRTtBQUNtQztBQUNsQjs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsNERBQWlCOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpRUFBc0I7QUFDMUI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVE7O0FBRVosSUFBSSxvRUFBMEI7QUFDOUIsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLElBQUkscURBQVU7QUFDZDtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsNERBQWlCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDJEQUFnQjtBQUMvQixrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSw0REFBaUI7QUFDdkIsdUJBQXVCLDREQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSw2REFBb0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0seURBQWdCO0FBQ3RCO0FBQ0E7QUFDQSxNQUFNLG9FQUEwQjtBQUNoQyxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLHVFQUE4Qjs7QUFFaEM7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnRUFBdUI7QUFDN0I7QUFDQTtBQUNBLE1BQU0sb0VBQTBCO0FBQ2hDLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBYUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Ra0I7QUFDaUI7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxxREFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSxrREFBTztBQUNULElBQUksa0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0RBQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSxtREFBUTtBQUNWO0FBQ0EsSUFBSSxrREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQVFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkhGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBaUJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGc0U7QUFDbkM7O0FBRXJDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLElBQUksdURBQVk7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLElBQUksa0RBQVM7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIseURBQWM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHVEQUFZO0FBQ2Q7QUFDQTs7QUFPRTs7Ozs7Ozs7Ozs7Ozs7O0FDdkNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNadEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7O1VDdEZsQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDS3NCO0FBQzJDO0FBTTlDO0FBQ29COztBQUV2QztBQUNBLDREQUFrQjtBQUNsQix5RUFBNEI7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4Qyw0REFBbUI7QUFDakU7QUFDQSxFQUFFLDREQUFtQjtBQUNyQixFQUFFLHlFQUE0QjtBQUM5QixFQUFFLDZEQUFnQjtBQUNsQixFQUFFLG9FQUEwQjtBQUM1QixDQUFDO0FBQ0Qsa0RBQWtELHlEQUFnQjs7QUFFbEU7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBZ0I7QUFDbEIsQ0FBQzs7QUFFRCw0Q0FBNEMseURBQWdCOztBQUU1RCwrQ0FBK0MsMERBQWlCO0FBQ2hFLGdEQUFnRCwwREFBaUI7O0FBRWpFLDRDQUE0Qyx1REFBYztBQUMxRCw2Q0FBNkMsdURBQWM7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG9EQUFXO0FBQ2IsRUFBRSxnRUFBc0I7QUFDeEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSwyREFBaUI7QUFDbkIsRUFBRSx5RUFBNEI7QUFDOUIsRUFBRSw4REFBaUI7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Eb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbnB1dHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGhlbWVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjbGVhclRhc2tJbnB1dEZpZWxkcyxcbiAgcG9wdWxhdGVUYXNrRmllbGRzV2l0aFRhc2tUZXh0LFxuICBzdWJtaXRUYXNrRmllbGRzLFxuICBzdWJtaXRVcGRhdGVzVGFza0ZpZWxkcyxcbn0gZnJvbSBcIi4vaW5wdXRzXCI7XG5pbXBvcnQge1xuICBlZGl0VGFzayxcbiAgZ2V0Q3VycmVudFByb2plY3QsXG4gIGdldFByb2plY3RBdEluZGV4LFxuICBnZXRQcm9qZWN0TGVuZ3RoLFxuICByZW1vdmVUYXNrLFxuICBzZXRDdXJyZW50UHJvamVjdEluZGV4LFxufSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RzUGVyc2lzdGVudERhdGEgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtcGFuZWxcIik7XG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIik7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcblxuY29uc3QgbW9kYWxCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG5jb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW1vZGFsXCIpO1xuY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1tb2RhbFwiKTtcblxuY29uc3Qgb3BlblRhc2tNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi10YXNrLW1vZGFsLWJ0blwiKTtcbmNvbnN0IHRhc2tNb2RhbFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW1vZGFsLXRpdGxlXCIpO1xuXG5jb25zdCBzZXR0aW5nc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXR0aW5ncy1tb2RhbFwiKTtcbmNvbnN0IGFib3V0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0LWluZm8tbW9kYWxcIik7XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0RWxlbWVudChpbmRleCkge1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEF0SW5kZXgoaW5kZXgpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgLy8gVXBkYXRlcyBwcm9qZWN0IHBhbmVsIHdoZW4gcHJvamVjdCBidXR0b24gaXMgcHJlc3NlZFxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBTZXQgYWRkIHRhc2sgYnV0dG9uIHRvIGJlIHZpc2libGVcbiAgICBvcGVuVGFza01vZGFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuXG4gICAgc2V0Q3VycmVudFByb2plY3RJbmRleChpbmRleCk7XG4gICAgX3VwZGF0ZVByb2plY3RDb250YWluZXIocHJvamVjdCk7XG4gIH0pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVUYXNrRWxlbWVudCh0YXNrLCB0YXNrSW5kZXgpIHtcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBkYXRhU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tJbnB1dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkdWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAvLyBBZGQgY2xhc3Nlc1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gIGRhdGFTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJkYXRhLXNlY3Rpb25zXCIpO1xuICB0b3BTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b3Atc2VjdGlvblwiKTtcbiAgdGFza0lucHV0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dC1zZWN0aW9uXCIpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uc1wiKTtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLWVkaXRcIik7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG4gIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtdHJhc2hcIik7XG4gIGJvdHRvbVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImJvdHRvbS1zZWN0aW9uXCIpO1xuXG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgLy9VcGRhdGUgdGFzayB3aGVuIGNoZWNrZWRcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKFxuICAgICAgdGFzay50aXRsZSxcbiAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICB0YXNrLnByaW9yaXR5XG4gICAgKTtcbiAgICBuZXdUYXNrLmNoZWNrZWQgPSBjaGVja2JveC5jaGVja2VkO1xuICAgIGVkaXRUYXNrKHRhc2tJbmRleCwgbmV3VGFzayk7XG5cbiAgICBzYXZlUHJvamVjdHNQZXJzaXN0ZW50RGF0YSgpO1xuICB9KTtcblxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgX3Nob3dFZGl0VGFza01vZGFsKHRhc2tJbmRleCk7XG4gIH0pO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZVRhc2sodGFza0luZGV4KTtcbiAgICBfdXBkYXRlVGFza0VsZW1lbnRzKCk7XG4gIH0pO1xuXG4gIC8vIFNldCB0YXNrIHZhbHVlcyB0byBlbGVtZW50XG4gIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNoZWNrZWQ7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIGR1ZVRleHQudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCh0YXNrLnByaW9yaXR5KTtcblxuICBib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIHRhc2tJbnB1dFNlY3Rpb24uYXBwZW5kQ2hpbGQoZHVlVGV4dCk7XG4gIHRhc2tJbnB1dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tJbnB1dFNlY3Rpb24pO1xuICBkYXRhU2VjdGlvbi5hcHBlbmRDaGlsZCh0b3BTZWN0aW9uKTtcbiAgZGF0YVNlY3Rpb24uYXBwZW5kQ2hpbGQoYm90dG9tU2VjdGlvbik7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGFTZWN0aW9uKTtcblxuICByZXR1cm4gdGFza0Rpdjtcbn1cblxuZnVuY3Rpb24gX3VwZGF0ZVByb2plY3RDb250YWluZXIoKSB7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGU7XG4gIF91cGRhdGVUYXNrRWxlbWVudHMoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0UGFuZWwoKSB7XG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIF91cGRhdGVUYXNrRWxlbWVudHMoKTtcbiAgb3BlblRhc2tNb2RhbEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gX2NsZWFyRWxlbWVudHMocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdFNpZGViYXJFbGVtZW50cygpIHtcbiAgX2NsZWFyRWxlbWVudHMocHJvamVjdENvbnRhaW5lcik7XG5cbiAgbGV0IGxlbmd0aCA9IGdldFByb2plY3RMZW5ndGgoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZVByb2plY3RFbGVtZW50KGkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfdXBkYXRlVGFza0VsZW1lbnRzKCkge1xuICBfY2xlYXJFbGVtZW50cyh0YXNrQ29udGFpbmVyKTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgaWYgKGdldEN1cnJlbnRQcm9qZWN0KCkpIHtcbiAgICBmb3IgKGNvbnN0IHRhc2sgb2YgZ2V0Q3VycmVudFByb2plY3QoKS50YXNrcykge1xuICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlVGFza0VsZW1lbnQodGFzaywgaW5kZXgpKTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0TW9kYWwoKSB7XG4gIF9zaG93TW9kYWxCYWNrZ3JvdW5kKCk7XG4gIGFkZFByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gaGlkZVByb2plY3RNb2RhbCgpIHtcbiAgX2hpZGVNb2RhbEJhY2tncm91bmQoKTtcbiAgYWRkUHJvamVjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBzaG93QWRkVGFza01vZGFsKCkge1xuICBfb3BlblRhc2tNb2RhbCgpO1xuXG4gIGNsZWFyVGFza0lucHV0RmllbGRzKCk7XG5cbiAgdGFza01vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1tb2RhbC1idG5cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHN1Ym1pdFRhc2tGaWVsZHMoKTtcbiAgICAgIF91cGRhdGVUYXNrRWxlbWVudHMoKTtcbiAgICAgIGhpZGVBZGRUYXNrTW9kYWwoKTtcbiAgICAgIHNhdmVQcm9qZWN0c1BlcnNpc3RlbnREYXRhKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGVBZGRUYXNrTW9kYWwoKSB7XG4gIF9oaWRlTW9kYWxCYWNrZ3JvdW5kKCk7XG4gIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gX3Nob3dFZGl0VGFza01vZGFsKHRhc2tJbmRleCkge1xuICBfb3BlblRhc2tNb2RhbCgpO1xuXG4gIHRhc2tNb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJFZGl0IFRhc2tcIjtcblxuICBwb3B1bGF0ZVRhc2tGaWVsZHNXaXRoVGFza1RleHQodGFza0luZGV4KTtcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLW1vZGFsLWJ0blwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3VibWl0VXBkYXRlc1Rhc2tGaWVsZHModGFza0luZGV4KTtcbiAgICAgIF91cGRhdGVUYXNrRWxlbWVudHMoKTtcbiAgICAgIGhpZGVBZGRUYXNrTW9kYWwoKTtcbiAgICAgIHNhdmVQcm9qZWN0c1BlcnNpc3RlbnREYXRhKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9vcGVuVGFza01vZGFsKCkge1xuICBfc2hvd01vZGFsQmFja2dyb3VuZCgpO1xuICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG5cbiAgX3Jlc2V0TW9kYWxFdmVudExpc3RlbmVycygpO1xufVxuXG5mdW5jdGlvbiBfcmVzZXRNb2RhbEV2ZW50TGlzdGVuZXJzKCkge1xuICBsZXQgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1tb2RhbC1idG5cIik7XG4gIGJ0bi5yZXBsYWNlV2l0aChidG4uY2xvbmVOb2RlKHRydWUpKTtcbn1cblxuZnVuY3Rpb24gc2hvd0Fib3V0TW9kYWwoKSB7XG4gIF9zaG93TW9kYWxCYWNrZ3JvdW5kKCk7XG4gIGFib3V0TW9kYWwuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIGhpZGVBYm91dE1vZGFsKCkge1xuICBfaGlkZU1vZGFsQmFja2dyb3VuZCgpO1xuICBhYm91dE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBzaG93U2V0dGluZ3NNb2RhbCgpIHtcbiAgX3Nob3dNb2RhbEJhY2tncm91bmQoKTtcbiAgc2V0dGluZ3NNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gaGlkZVNldHRpbmdzTW9kYWwoKSB7XG4gIF9oaWRlTW9kYWxCYWNrZ3JvdW5kKCk7XG4gIHNldHRpbmdzTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIF9zaG93TW9kYWxCYWNrZ3JvdW5kKCkge1xuICBtb2RhbEJnLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xufVxuZnVuY3Rpb24gX2hpZGVNb2RhbEJhY2tncm91bmQoKSB7XG4gIG1vZGFsQmcuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG59XG5cbmV4cG9ydCB7XG4gIGNsZWFyUHJvamVjdFBhbmVsLFxuICB1cGRhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnRzLFxuICBzaG93QWRkUHJvamVjdE1vZGFsLFxuICBoaWRlUHJvamVjdE1vZGFsLFxuICBzaG93QWRkVGFza01vZGFsLFxuICBoaWRlQWRkVGFza01vZGFsLFxuICBzaG93U2V0dGluZ3NNb2RhbCxcbiAgaGlkZVNldHRpbmdzTW9kYWwsXG4gIHNob3dBYm91dE1vZGFsLFxuICBoaWRlQWJvdXRNb2RhbCxcbn07XG4iLCJpbXBvcnQge1xuICBhZGRQcm9qZWN0LFxuICBhZGRUYXNrLFxuICBlZGl0VGFzayxcbiAgZ2V0Q3VycmVudFByb2plY3QsXG4gIGdldFRhc2ssXG59IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuLy8gQWRkIHByb2plY3QgZmllbGRzXG5jb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpO1xuXG4vLyBBZGQgdGFzayBmaWVsZHNcbmNvbnN0IHRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLXRpdGxlXCIpO1xuY29uc3QgdGFza0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGVzY3JpcHRpb25cIik7XG5jb25zdCB0YXNrRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRhdGVcIik7XG5sZXQgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiXG4pO1xuXG4vLyBSYWRpbyBpbnB1dHNcbmNvbnN0IGdyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNncmVlblwiKTtcbmNvbnN0IHllbGxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjeWVsbG93XCIpO1xuY29uc3QgcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWRcIik7XG5cbi8vIERlZmF1bHQgY2hlY2tlZCByYWRpb1xuY29uc3QgZGVmYXVsdFByaW9yaXR5UmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiXG4pO1xuXG5mdW5jdGlvbiBjbGVhclByb2plY3RJbnB1dEZpZWxkcygpIHtcbiAgX3Jlc2V0UHJvamVjdEZpZWxkcygpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRQcm9qZWN0RmllbGRzKCkge1xuICBhZGRQcm9qZWN0KHByb2plY3RUaXRsZUlucHV0LnZhbHVlKTtcbiAgX3Jlc2V0UHJvamVjdEZpZWxkcygpO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tJbnB1dEZpZWxkcygpIHtcbiAgX3Jlc2V0VGFza0ZpZWxkcygpO1xufVxuXG5mdW5jdGlvbiBzdWJtaXRUYXNrRmllbGRzKCkge1xuICBfdXBkYXRlVGFza1ByaW9yaXR5SW5wdXQoKTtcblxuICBhZGRUYXNrKFxuICAgIGNyZWF0ZVRhc2soXG4gICAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tQcmlvcml0eUlucHV0LnZhbHVlXG4gICAgKVxuICApO1xuXG4gIF9yZXNldFRhc2tGaWVsZHMoKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVUYXNrRmllbGRzV2l0aFRhc2tUZXh0KHRhc2tJbmRleCkge1xuICBjb25zdCB0YXNrID0gZ2V0VGFzayh0YXNrSW5kZXgpO1xuICB0YXNrVGl0bGVJbnB1dC52YWx1ZSA9IHRhc2sudGl0bGU7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgc3dpdGNoICh0YXNrLnByaW9yaXR5KSB7XG4gICAgY2FzZSBcImdyZWVuXCI6XG4gICAgICBncmVlbi5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJ5ZWxsb3dcIjpcbiAgICAgIHllbGxvdy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJyZWRcIjpcbiAgICAgIHJlZC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFVwZGF0ZXNUYXNrRmllbGRzKHRhc2tJbmRleCkge1xuICBfdXBkYXRlVGFza1ByaW9yaXR5SW5wdXQoKTtcblxuICBlZGl0VGFzayhcbiAgICB0YXNrSW5kZXgsXG4gICAgY3JlYXRlVGFzayhcbiAgICAgIHRhc2tUaXRsZUlucHV0LnZhbHVlLFxuICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgdGFza1ByaW9yaXR5SW5wdXQudmFsdWVcbiAgICApXG4gICk7XG5cbiAgX3Jlc2V0VGFza0ZpZWxkcygpO1xufVxuXG5mdW5jdGlvbiBfdXBkYXRlVGFza1ByaW9yaXR5SW5wdXQoKSB7XG4gIHRhc2tQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W25hbWU9J3ByaW9yaXR5J106Y2hlY2tlZFwiKTtcbn1cblxuZnVuY3Rpb24gX3Jlc2V0UHJvamVjdEZpZWxkcygpIHtcbiAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBfcmVzZXRUYXNrRmllbGRzKCkge1xuICB0YXNrVGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlID0gXCJcIjtcbiAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIHRhc2tQcmlvcml0eUlucHV0LmNoZWNrZWQgPSBmYWxzZTtcblxuICBkZWZhdWx0UHJpb3JpdHlSYWRpby5jaGVja2VkID0gdHJ1ZTtcbn1cblxuZXhwb3J0IHtcbiAgc3VibWl0UHJvamVjdEZpZWxkcyxcbiAgY2xlYXJUYXNrSW5wdXRGaWVsZHMsXG4gIHN1Ym1pdFRhc2tGaWVsZHMsXG4gIHBvcHVsYXRlVGFza0ZpZWxkc1dpdGhUYXNrVGV4dCxcbiAgc3VibWl0VXBkYXRlc1Rhc2tGaWVsZHMsXG59O1xuIiwibGV0IF9wcm9qZWN0cyA9IFtdO1xubGV0IF9jdXJyZW50UHJvamVjdEluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0KHRpdGxlKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgdGFza3M6IFtdLFxuICB9O1xufVxuXG5mdW5jdGlvbiBsb2FkUHJvamVjdHMobmV3UHJvamVjdHMpIHtcbiAgX3Byb2plY3RzID0gbmV3UHJvamVjdHM7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamV0cygpIHtcbiAgX3Byb2plY3RzID0gW107XG4gIF9jdXJyZW50UHJvamVjdEluZGV4ID0gLTE7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpIHtcbiAgX3Byb2plY3RzLnB1c2goX2NyZWF0ZVByb2plY3QodGl0bGUpKTtcbiAgX2N1cnJlbnRQcm9qZWN0SW5kZXgrKztcbn1cblxuZnVuY3Rpb24gb3ZlcnJpZGVQcm9qZWN0T2JqZWN0KHByb2plY3QpIHtcbiAgX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XSA9IHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRQcm9qZWN0VmFsdWVzKG5ld1RpdGxlLCBuZXdUYXNrcykge1xuICBnZXRDdXJyZW50UHJvamVjdCgpLnRpdGxlID0gbmV3VGl0bGU7XG4gIGdldEN1cnJlbnRQcm9qZWN0KCkudGFza3MgPSBuZXdUYXNrcztcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gIHJldHVybiBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdO1xufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdEluZGV4KG5ld0luZGV4KSB7XG4gIF9jdXJyZW50UHJvamVjdEluZGV4ID0gbmV3SW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RBdEluZGV4KGluZGV4KSB7XG4gIGlmIChpbmRleCA+PSBfcHJvamVjdHMubGVuZ3RoKSByZXR1cm47XG5cbiAgcmV0dXJuIF9wcm9qZWN0c1tpbmRleF07XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RMZW5ndGgoKSB7XG4gIHJldHVybiBfcHJvamVjdHMubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBnZXRBbGxQcm9qZWN0cygpIHtcbiAgcmV0dXJuIF9wcm9qZWN0cztcbn1cblxuZnVuY3Rpb24gZ2V0VGFzayh0YXNrSW5kZXgpIHtcbiAgcmV0dXJuIGdldEN1cnJlbnRQcm9qZWN0KCkudGFza3NbdGFza0luZGV4XTtcbn1cblxuZnVuY3Rpb24gYWRkVGFzayhuZXdUYXNrKSB7XG4gIF9wcm9qZWN0c1tfY3VycmVudFByb2plY3RJbmRleF0udGFza3MucHVzaChuZXdUYXNrKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlVGFzayhpbmRleCkge1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGluZGV4LCBuZXdUYXNrKSB7XG4gIF9wcm9qZWN0c1tfY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaW5kZXhdID0gbmV3VGFzaztcbn1cblxuZXhwb3J0IHtcbiAgbG9hZFByb2plY3RzLFxuICBjbGVhclByb2pldHMsXG4gIGFkZFByb2plY3QsXG4gIG92ZXJyaWRlUHJvamVjdE9iamVjdCxcbiAgdXBkYXRlQ3VycmVudFByb2plY3RWYWx1ZXMsXG4gIGdldEN1cnJlbnRQcm9qZWN0LFxuICBzZXRDdXJyZW50UHJvamVjdEluZGV4LFxuICBnZXRQcm9qZWN0QXRJbmRleCxcbiAgZ2V0UHJvamVjdExlbmd0aCxcbiAgZ2V0QWxsUHJvamVjdHMsXG4gIGdldFRhc2ssXG4gIGFkZFRhc2ssXG4gIHJlbW92ZVRhc2ssXG4gIGVkaXRUYXNrLFxufTtcbiIsImltcG9ydCB7IGNsZWFyUHJvamV0cywgZ2V0QWxsUHJvamVjdHMsIGxvYWRQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5pbXBvcnQgeyBsb2FkVGhlbWUgfSBmcm9tIFwiLi90aGVtZXNcIjtcblxuY29uc3QgcHJvamVjdHNLZXkgPSBcInByb2plY3RzXCI7XG5jb25zdCB0aGVtZUtleSA9IFwidGhlbWVcIjtcblxuY29uc3QgdGhlbWVTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhlbWVzXCIpO1xuXG5mdW5jdGlvbiBsb2FkUGVyc2lzdGVudERhdGEoKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0c0tleSkpIHtcbiAgICBsb2FkUHJvamVjdHMoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0c0tleSkpKTtcbiAgfVxuXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGVtZUtleSkpIHtcbiAgICBjb25zdCB2YWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGVtZUtleSk7XG4gICAgbG9hZFRoZW1lKHZhbCk7XG4gICAgdGhlbWVTZWxlY3Rvci52YWx1ZSA9IHZhbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYXZlUHJvamVjdHNQZXJzaXN0ZW50RGF0YSgpIHtcbiAgY29uc3QgcHJvamVjdHMgPSBnZXRBbGxQcm9qZWN0cygpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0c0tleSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuZnVuY3Rpb24gc2F2ZVRoZW1lUGVyc2lzdGVuRGF0YSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhlbWVLZXksIHRoZW1lU2VsZWN0b3IudmFsdWUpO1xufVxuXG5mdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZSgpIHtcbiAgY2xlYXJQcm9qZXRzKCk7XG4gIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xufVxuXG5leHBvcnQge1xuICBsb2FkUGVyc2lzdGVudERhdGEsXG4gIHNhdmVQcm9qZWN0c1BlcnNpc3RlbnREYXRhLFxuICBzYXZlVGhlbWVQZXJzaXN0ZW5EYXRhLFxuICBjbGVhckxvY2FsU3RvcmFnZSxcbn07XG4iLCJmdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICB9O1xufVxuXG4vLyBUT0RPIG1ha2UgdXBkYXRlIHRhc2sgZnVuY3Rpb25cblxuZXhwb3J0IHsgY3JlYXRlVGFzayB9O1xuIiwiY29uc3QgbGlnaHRUaGVtZUJhY2tncm91bmRDb2xvciA9IFwiI2ZmZlwiO1xuY29uc3QgbGlnaHRUaGVtZU1vZGFsQmFja2dyb3VuZENvbG9yID0gXCIjMDAwM1wiO1xuY29uc3QgbGlnaHRUaGVtZVRleHRDb2xvciA9IFwiIzAwMFwiO1xuY29uc3QgbGlnaHRUaGVtZUJ1dHRvbkNvbG9yID0gXCJyZ2IoMCwgMTc0LCAyNTUpXCI7XG5jb25zdCBsaWdodFRoZW1lQnV0dG9uVGV4dENvbG9yID0gXCIjZmZmXCI7XG5jb25zdCBsaWdodFRoZW1lQnV0dG9uSG92ZXJDb2xvciA9IFwicmdiKDc5LCAxOTksIDI1NSlcIjtcbmNvbnN0IGxpZ2h0VGhlbWVCdXR0b25DbGlja0NvbG9yID0gXCJyZ2IoMCwgMTM3LCAyMDEpXCI7XG5cbmNvbnN0IGRhcmtUaGVtZUJhY2tncm91bmRDb2xvciA9IFwiIzAwMFwiO1xuY29uc3QgZGFya1RoZW1lTW9kYWxCYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmY3NVwiO1xuY29uc3QgZGFya1RoZW1lVGV4dENvbG9yID0gXCIjZmZmXCI7XG5jb25zdCBkYXJrVGhlbWVCdXR0b25Db2xvciA9IFwiIzIzMDA0NlwiO1xuY29uc3QgZGFya1RoZW1lQnV0dG9uVGV4dENvbG9yID0gXCIjZmZmXCI7XG5jb25zdCBkYXJrVGhlbWVCdXR0b25Ib3ZlckNvbG9yID0gXCIjNDIwMDg1XCI7XG5jb25zdCBkYXJrVGhlbWVCdXR0b25DbGlja0NvbG9yID0gXCIjMWUwMTNiXCI7XG5cbmNvbnN0IGpvc2hUaGVtZUJhY2tncm91bmRDb2xvciA9IFwiIzAwMFwiO1xuY29uc3Qgam9zaFRoZW1lTW9kYWxCYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmY3NVwiO1xuY29uc3Qgam9zaFRoZW1lVGV4dENvbG9yID0gXCIjZmZmXCI7XG5jb25zdCBqb3NoVGhlbWVCdXR0b25Db2xvciA9IFwiIzIzMDA0NlwiO1xuY29uc3Qgam9zaFRoZW1lQnV0dG9uVGV4dENvbG9yID0gXCIjZmZmXCI7XG5jb25zdCBqb3NoVGhlbWVCdXR0b25Ib3ZlckNvbG9yID0gXCIjNDIwMDg1XCI7XG5jb25zdCBqb3NoVGhlbWVCdXR0b25DbGlja0NvbG9yID0gXCIjMWUwMTNiXCI7XG5cbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOnJvb3RcIik7XG5cbmZ1bmN0aW9uIGNoYW5nZVRoZW1lKG5ld1RoZW1lVmFsdWUpIHtcbiAgc3dpdGNoIChuZXdUaGVtZVZhbHVlKSB7XG4gICAgY2FzZSBcImxpZ2h0XCI6XG4gICAgICBfc2V0VGhlbWVWYWx1ZXMoXG4gICAgICAgIGxpZ2h0VGhlbWVCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGxpZ2h0VGhlbWVNb2RhbEJhY2tncm91bmRDb2xvcixcbiAgICAgICAgbGlnaHRUaGVtZVRleHRDb2xvcixcbiAgICAgICAgbGlnaHRUaGVtZUJ1dHRvbkNvbG9yLFxuICAgICAgICBsaWdodFRoZW1lQnV0dG9uVGV4dENvbG9yLFxuICAgICAgICBsaWdodFRoZW1lQnV0dG9uSG92ZXJDb2xvcixcbiAgICAgICAgbGlnaHRUaGVtZUJ1dHRvbkNsaWNrQ29sb3JcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiZGFya1wiOlxuICAgICAgX3NldFRoZW1lVmFsdWVzKFxuICAgICAgICBkYXJrVGhlbWVCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGRhcmtUaGVtZU1vZGFsQmFja2dyb3VuZENvbG9yLFxuICAgICAgICBkYXJrVGhlbWVUZXh0Q29sb3IsXG4gICAgICAgIGRhcmtUaGVtZUJ1dHRvbkNvbG9yLFxuICAgICAgICBkYXJrVGhlbWVCdXR0b25UZXh0Q29sb3IsXG4gICAgICAgIGRhcmtUaGVtZUJ1dHRvbkhvdmVyQ29sb3IsXG4gICAgICAgIGRhcmtUaGVtZUJ1dHRvbkNsaWNrQ29sb3JcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiam9zaFwiOlxuICAgICAgX3NldFRoZW1lVmFsdWVzKFxuICAgICAgICBqb3NoVGhlbWVCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGpvc2hUaGVtZU1vZGFsQmFja2dyb3VuZENvbG9yLFxuICAgICAgICBqb3NoVGhlbWVUZXh0Q29sb3IsXG4gICAgICAgIGpvc2hUaGVtZUJ1dHRvbkNvbG9yLFxuICAgICAgICBqb3NoVGhlbWVCdXR0b25UZXh0Q29sb3IsXG4gICAgICAgIGpvc2hUaGVtZUJ1dHRvbkhvdmVyQ29sb3IsXG4gICAgICAgIGpvc2hUaGVtZUJ1dHRvbkNsaWNrQ29sb3JcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG5mdW5jdGlvbiBfc2V0VGhlbWVWYWx1ZXMoXG4gIGJhY2tncm91bmRDb2xvcixcbiAgbW9kYWxCYWNrZ3JvdW5kQ2xvcixcbiAgdGV4dENvbG9yLFxuICBidXR0b25Db2xvcixcbiAgYnV0dG9uVGV4dENvbG9yLFxuICBidXR0b25Ib3ZlckNvbG9yLFxuICBidXR0b25DbGlja0NvbG9yXG4pIHtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmFja2dyb3VuZC1jb2xvclwiLCBiYWNrZ3JvdW5kQ29sb3IpO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1tb2RhbC1iYWNrZ3JvdW5kLWNvbG9yXCIsIG1vZGFsQmFja2dyb3VuZENsb3IpO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10ZXh0LWNvbG9yXCIsIHRleHRDb2xvcik7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWJ1dHRvbi1jb2xvclwiLCBidXR0b25Db2xvcik7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWJ1dHRvbi10ZXh0LWNvbG9yXCIsIGJ1dHRvblRleHRDb2xvcik7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWJ1dHRvbi1ob3Zlci1jb2xvclwiLCBidXR0b25Ib3ZlckNvbG9yKTtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYnV0dG9uLWNsaWNrLWNvbG9yXCIsIGJ1dHRvbkNsaWNrQ29sb3IpO1xufVxuXG5mdW5jdGlvbiBsb2FkVGhlbWUodGhlbWVTdHJpbmcpIHtcbiAgY2hhbmdlVGhlbWUodGhlbWVTdHJpbmcpO1xufVxuXG5leHBvcnQgeyBjaGFuZ2VUaGVtZSwgbG9hZFRoZW1lIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGNsZWFyUHJvamVjdFBhbmVsLFxuICBoaWRlQWJvdXRNb2RhbCxcbiAgaGlkZUFkZFRhc2tNb2RhbCxcbiAgaGlkZVByb2plY3RNb2RhbCxcbiAgaGlkZVNldHRpbmdzTW9kYWwsXG4gIHNob3dBYm91dE1vZGFsLFxuICBzaG93QWRkUHJvamVjdE1vZGFsLFxuICBzaG93QWRkVGFza01vZGFsLFxuICBzaG93U2V0dGluZ3NNb2RhbCxcbiAgdXBkYXRlUHJvamVjdFNpZGViYXJFbGVtZW50cyxcbn0gZnJvbSBcIi4vRG9tTWFuYWdlclwiO1xuaW1wb3J0IHsgc3VibWl0UHJvamVjdEZpZWxkcywgc3VibWl0VGFza0ZpZWxkcyB9IGZyb20gXCIuL2lucHV0c1wiO1xuaW1wb3J0IHtcbiAgY2xlYXJMb2NhbFN0b3JhZ2UsXG4gIGxvYWRQZXJzaXN0ZW50RGF0YSxcbiAgc2F2ZVByb2plY3RzUGVyc2lzdGVudERhdGEsXG4gIHNhdmVUaGVtZVBlcnNpc3RlbkRhdGEsXG59IGZyb20gXCIuL3N0b3JhZ2VcIjtcbmltcG9ydCB7IGNoYW5nZVRoZW1lIH0gZnJvbSBcIi4vdGhlbWVzXCI7XG5cbi8vIExvYWQgcGVyc2lzdGVudCBkYXRhXG5sb2FkUGVyc2lzdGVudERhdGEoKTtcbnVwZGF0ZVByb2plY3RTaWRlYmFyRWxlbWVudHMoKTtcblxuLy8gT3BlbiBtb2RlbCBidXR0b25zXG5jb25zdCBvcGVuUHJvamVjdE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXByb2plY3QtbW9kYWwtYnRuXCIpO1xuY29uc3Qgb3BlblRhc2tNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi10YXNrLW1vZGFsLWJ0blwiKTtcblxuLy8gQWRkIGFuZCBDbG9zZSBidXR0b25zIGZvciBwcm9qZWN0IGFuZCB0YXNrIG1vZGFsc1xuY29uc3QgYWRkUHJvamVjdE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idG5cIik7XG5jb25zdCBjbG9zZUFkZFByb2plY3RNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI2Nsb3NlLXByb2plY3QtbW9kYWwtYnRuXCJcbik7XG5jb25zdCBjbG9zZVRhc2tNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtdGFzay1tb2RhbC1idG5cIik7XG5cbi8vIFNldHRpbmdzIGJ1dHRvbnNcbmNvbnN0IG9wZW5TZXR0aW5nc01vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXNldHRpbmdzLWJ0blwiKTtcbmNvbnN0IGNsb3NlU2V0dGluZ3NNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2Utc2V0dGluZ3MtYnRuXCIpO1xuXG4vLyBBYm91dCBidXR0b25zXG5jb25zdCBvcGVuQWJvdXRNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi1hYm91dC1idG5cIik7XG5jb25zdCBjbG9zZUFib3V0TW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Nsb3NlLWFib3V0LWJ0blwiKTtcblxuLy8gUHJvamVjdCBtb2RhbCBldmVudCBsaXN0ZW5lcnNcbm9wZW5Qcm9qZWN0TW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBZGRQcm9qZWN0TW9kYWwpO1xuYWRkUHJvamVjdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN1Ym1pdFByb2plY3RGaWVsZHMoKTtcbiAgdXBkYXRlUHJvamVjdFNpZGViYXJFbGVtZW50cygpO1xuICBoaWRlUHJvamVjdE1vZGFsKCk7XG4gIHNhdmVQcm9qZWN0c1BlcnNpc3RlbnREYXRhKCk7XG59KTtcbmNsb3NlQWRkUHJvamVjdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlUHJvamVjdE1vZGFsKTtcblxuLy8gVGFzayBtb2RhbCBldmVudCBsaXN0ZW5lcnNcbm9wZW5UYXNrTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJBZGQgdGFzayBidXR0b24gY2xpY2tlZFwiKTtcbiAgc2hvd0FkZFRhc2tNb2RhbCgpO1xufSk7XG5cbmNsb3NlVGFza01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlQWRkVGFza01vZGFsKTtcblxub3BlblNldHRpbmdzTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dTZXR0aW5nc01vZGFsKTtcbmNsb3NlU2V0dGluZ3NNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZVNldHRpbmdzTW9kYWwpO1xuXG5vcGVuQWJvdXRNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Fib3V0TW9kYWwpO1xuY2xvc2VBYm91dE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlQWJvdXRNb2RhbCk7XG5cbi8vIFRoZW1lIHNlbGVjdG9yXG5jb25zdCB0aGVtZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aGVtZXNcIik7XG5cbnRoZW1lU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIGNoYW5nZVRoZW1lKHRoZW1lU2VsZWN0b3IudmFsdWUpO1xuICBzYXZlVGhlbWVQZXJzaXN0ZW5EYXRhKCk7XG59KTtcblxuY29uc3QgY2xlYXJTdG9yYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbGVhci1zdG9yYWdlLWJ0blwiKTtcbmNsZWFyU3RvcmFnZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjbGVhckxvY2FsU3RvcmFnZSgpO1xuICB1cGRhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnRzKCk7XG4gIGNsZWFyUHJvamVjdFBhbmVsKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==