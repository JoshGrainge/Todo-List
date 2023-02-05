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
    (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveProjectsPersistentData)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YztBQUMxRCw2Q0FBNkMsdURBQWM7O0FBRTNEO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG9EQUFXO0FBQ2IsRUFBRSxnRUFBc0I7QUFDeEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsRUFBRSwyREFBaUI7QUFDbkIsRUFBRSx5RUFBNEI7QUFDOUIsRUFBRSw4REFBaUI7QUFDbkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Eb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbnB1dHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGhlbWVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjbGVhclRhc2tJbnB1dEZpZWxkcyxcbiAgcG9wdWxhdGVUYXNrRmllbGRzV2l0aFRhc2tUZXh0LFxuICBzdWJtaXRUYXNrRmllbGRzLFxuICBzdWJtaXRVcGRhdGVzVGFza0ZpZWxkcyxcbn0gZnJvbSBcIi4vaW5wdXRzXCI7XG5pbXBvcnQge1xuICBlZGl0VGFzayxcbiAgZ2V0Q3VycmVudFByb2plY3QsXG4gIGdldFByb2plY3RBdEluZGV4LFxuICBnZXRQcm9qZWN0TGVuZ3RoLFxuICByZW1vdmVUYXNrLFxuICBzZXRDdXJyZW50UHJvamVjdEluZGV4LFxufSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgc2F2ZVByb2plY3RzUGVyc2lzdGVudERhdGEgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtcGFuZWxcIik7XG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIik7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcblxuY29uc3QgbW9kYWxCZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtYmdcIik7XG5jb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0LW1vZGFsXCIpO1xuY29uc3QgYWRkVGFza01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1tb2RhbFwiKTtcblxuY29uc3Qgb3BlblRhc2tNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi10YXNrLW1vZGFsLWJ0blwiKTtcbmNvbnN0IHRhc2tNb2RhbFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLW1vZGFsLXRpdGxlXCIpO1xuXG5jb25zdCBzZXR0aW5nc01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZXR0aW5ncy1tb2RhbFwiKTtcbmNvbnN0IGFib3V0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fib3V0LWluZm8tbW9kYWxcIik7XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0RWxlbWVudChpbmRleCkge1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEF0SW5kZXgoaW5kZXgpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgLy8gVXBkYXRlcyBwcm9qZWN0IHBhbmVsIHdoZW4gcHJvamVjdCBidXR0b24gaXMgcHJlc3NlZFxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBTZXQgYWRkIHRhc2sgYnV0dG9uIHRvIGJlIHZpc2libGVcbiAgICBvcGVuVGFza01vZGFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuXG4gICAgc2V0Q3VycmVudFByb2plY3RJbmRleChpbmRleCk7XG4gICAgX3VwZGF0ZVByb2plY3RDb250YWluZXIocHJvamVjdCk7XG4gIH0pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVUYXNrRWxlbWVudCh0YXNrLCB0YXNrSW5kZXgpIHtcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBkYXRhU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tJbnB1dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkdWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAvLyBBZGQgY2xhc3Nlc1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gIGRhdGFTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJkYXRhLXNlY3Rpb25zXCIpO1xuICB0b3BTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b3Atc2VjdGlvblwiKTtcbiAgdGFza0lucHV0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dC1zZWN0aW9uXCIpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uc1wiKTtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLWVkaXRcIik7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG4gIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtdHJhc2hcIik7XG4gIGJvdHRvbVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImJvdHRvbS1zZWN0aW9uXCIpO1xuXG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgLy9VcGRhdGUgdGFzayB3aGVuIGNoZWNrZWRcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKFxuICAgICAgdGFzay50aXRsZSxcbiAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICB0YXNrLnByaW9yaXR5XG4gICAgKTtcbiAgICBuZXdUYXNrLmNoZWNrZWQgPSBjaGVja2JveC5jaGVja2VkO1xuICAgIGVkaXRUYXNrKHRhc2tJbmRleCwgbmV3VGFzayk7XG5cbiAgICBzYXZlUHJvamVjdHNQZXJzaXN0ZW50RGF0YSgpO1xuICB9KTtcblxuICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgX3Nob3dFZGl0VGFza01vZGFsKHRhc2tJbmRleCk7XG4gIH0pO1xuXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJlbW92ZVRhc2sodGFza0luZGV4KTtcbiAgICBfdXBkYXRlVGFza0VsZW1lbnRzKCk7XG4gICAgc2F2ZVByb2plY3RzUGVyc2lzdGVudERhdGEoKTtcbiAgfSk7XG5cbiAgLy8gU2V0IHRhc2sgdmFsdWVzIHRvIGVsZW1lbnRcbiAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgZHVlVGV4dC50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKHRhc2sucHJpb3JpdHkpO1xuXG4gIGJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgdGFza0lucHV0U2VjdGlvbi5hcHBlbmRDaGlsZChkdWVUZXh0KTtcbiAgdGFza0lucHV0U2VjdGlvbi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0lucHV0U2VjdGlvbik7XG4gIGRhdGFTZWN0aW9uLmFwcGVuZENoaWxkKHRvcFNlY3Rpb24pO1xuICBkYXRhU2VjdGlvbi5hcHBlbmRDaGlsZChib3R0b21TZWN0aW9uKTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0YVNlY3Rpb24pO1xuXG4gIHJldHVybiB0YXNrRGl2O1xufVxuXG5mdW5jdGlvbiBfdXBkYXRlUHJvamVjdENvbnRhaW5lcigpIHtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcbiAgX3VwZGF0ZVRhc2tFbGVtZW50cygpO1xufVxuXG5mdW5jdGlvbiBjbGVhclByb2plY3RQYW5lbCgpIHtcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgX3VwZGF0ZVRhc2tFbGVtZW50cygpO1xuICBvcGVuVGFza01vZGFsQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBfY2xlYXJFbGVtZW50cyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnRzKCkge1xuICBfY2xlYXJFbGVtZW50cyhwcm9qZWN0Q29udGFpbmVyKTtcblxuICBsZXQgbGVuZ3RoID0gZ2V0UHJvamVjdExlbmd0aCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlUHJvamVjdEVsZW1lbnQoaSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF91cGRhdGVUYXNrRWxlbWVudHMoKSB7XG4gIF9jbGVhckVsZW1lbnRzKHRhc2tDb250YWluZXIpO1xuICBsZXQgaW5kZXggPSAwO1xuICBpZiAoZ2V0Q3VycmVudFByb2plY3QoKSkge1xuICAgIGZvciAoY29uc3QgdGFzayBvZiBnZXRDdXJyZW50UHJvamVjdCgpLnRhc2tzKSB7XG4gICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVUYXNrRWxlbWVudCh0YXNrLCBpbmRleCkpO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0FkZFByb2plY3RNb2RhbCgpIHtcbiAgX3Nob3dNb2RhbEJhY2tncm91bmQoKTtcbiAgYWRkUHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBoaWRlUHJvamVjdE1vZGFsKCkge1xuICBfaGlkZU1vZGFsQmFja2dyb3VuZCgpO1xuICBhZGRQcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIHNob3dBZGRUYXNrTW9kYWwoKSB7XG4gIF9vcGVuVGFza01vZGFsKCk7XG5cbiAgY2xlYXJUYXNrSW5wdXRGaWVsZHMoKTtcblxuICB0YXNrTW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLW1vZGFsLWJ0blwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc3VibWl0VGFza0ZpZWxkcygpO1xuICAgICAgX3VwZGF0ZVRhc2tFbGVtZW50cygpO1xuICAgICAgaGlkZUFkZFRhc2tNb2RhbCgpO1xuICAgICAgc2F2ZVByb2plY3RzUGVyc2lzdGVudERhdGEoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZUFkZFRhc2tNb2RhbCgpIHtcbiAgX2hpZGVNb2RhbEJhY2tncm91bmQoKTtcbiAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBfc2hvd0VkaXRUYXNrTW9kYWwodGFza0luZGV4KSB7XG4gIF9vcGVuVGFza01vZGFsKCk7XG5cbiAgdGFza01vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xuXG4gIHBvcHVsYXRlVGFza0ZpZWxkc1dpdGhUYXNrVGV4dCh0YXNrSW5kZXgpO1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stbW9kYWwtYnRuXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzdWJtaXRVcGRhdGVzVGFza0ZpZWxkcyh0YXNrSW5kZXgpO1xuICAgICAgX3VwZGF0ZVRhc2tFbGVtZW50cygpO1xuICAgICAgaGlkZUFkZFRhc2tNb2RhbCgpO1xuICAgICAgc2F2ZVByb2plY3RzUGVyc2lzdGVudERhdGEoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX29wZW5UYXNrTW9kYWwoKSB7XG4gIF9zaG93TW9kYWxCYWNrZ3JvdW5kKCk7XG4gIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcblxuICBfcmVzZXRNb2RhbEV2ZW50TGlzdGVuZXJzKCk7XG59XG5cbmZ1bmN0aW9uIF9yZXNldE1vZGFsRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGxldCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLW1vZGFsLWJ0blwiKTtcbiAgYnRuLnJlcGxhY2VXaXRoKGJ0bi5jbG9uZU5vZGUodHJ1ZSkpO1xufVxuXG5mdW5jdGlvbiBzaG93QWJvdXRNb2RhbCgpIHtcbiAgX3Nob3dNb2RhbEJhY2tncm91bmQoKTtcbiAgYWJvdXRNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gaGlkZUFib3V0TW9kYWwoKSB7XG4gIF9oaWRlTW9kYWxCYWNrZ3JvdW5kKCk7XG4gIGFib3V0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIHNob3dTZXR0aW5nc01vZGFsKCkge1xuICBfc2hvd01vZGFsQmFja2dyb3VuZCgpO1xuICBzZXR0aW5nc01vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBoaWRlU2V0dGluZ3NNb2RhbCgpIHtcbiAgX2hpZGVNb2RhbEJhY2tncm91bmQoKTtcbiAgc2V0dGluZ3NNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gX3Nob3dNb2RhbEJhY2tncm91bmQoKSB7XG4gIG1vZGFsQmcuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG59XG5mdW5jdGlvbiBfaGlkZU1vZGFsQmFja2dyb3VuZCgpIHtcbiAgbW9kYWxCZy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbn1cblxuZXhwb3J0IHtcbiAgY2xlYXJQcm9qZWN0UGFuZWwsXG4gIHVwZGF0ZVByb2plY3RTaWRlYmFyRWxlbWVudHMsXG4gIHNob3dBZGRQcm9qZWN0TW9kYWwsXG4gIGhpZGVQcm9qZWN0TW9kYWwsXG4gIHNob3dBZGRUYXNrTW9kYWwsXG4gIGhpZGVBZGRUYXNrTW9kYWwsXG4gIHNob3dTZXR0aW5nc01vZGFsLFxuICBoaWRlU2V0dGluZ3NNb2RhbCxcbiAgc2hvd0Fib3V0TW9kYWwsXG4gIGhpZGVBYm91dE1vZGFsLFxufTtcbiIsImltcG9ydCB7XG4gIGFkZFByb2plY3QsXG4gIGFkZFRhc2ssXG4gIGVkaXRUYXNrLFxuICBnZXRDdXJyZW50UHJvamVjdCxcbiAgZ2V0VGFzayxcbn0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi90YXNrc1wiO1xuXG4vLyBBZGQgcHJvamVjdCBmaWVsZHNcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LW5hbWVcIik7XG5cbi8vIEFkZCB0YXNrIGZpZWxkc1xuY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stdGl0bGVcIik7XG5jb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kZXNjcmlwdGlvblwiKTtcbmNvbnN0IHRhc2tEdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZGF0ZVwiKTtcbmxldCB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCJcbik7XG5cbi8vIFJhZGlvIGlucHV0c1xuY29uc3QgZ3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dyZWVuXCIpO1xuY29uc3QgeWVsbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN5ZWxsb3dcIik7XG5jb25zdCByZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlZFwiKTtcblxuLy8gRGVmYXVsdCBjaGVja2VkIHJhZGlvXG5jb25zdCBkZWZhdWx0UHJpb3JpdHlSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCJcbik7XG5cbmZ1bmN0aW9uIGNsZWFyUHJvamVjdElucHV0RmllbGRzKCkge1xuICBfcmVzZXRQcm9qZWN0RmllbGRzKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFByb2plY3RGaWVsZHMoKSB7XG4gIGFkZFByb2plY3QocHJvamVjdFRpdGxlSW5wdXQudmFsdWUpO1xuICBfcmVzZXRQcm9qZWN0RmllbGRzKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0lucHV0RmllbGRzKCkge1xuICBfcmVzZXRUYXNrRmllbGRzKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2tGaWVsZHMoKSB7XG4gIF91cGRhdGVUYXNrUHJpb3JpdHlJbnB1dCgpO1xuXG4gIGFkZFRhc2soXG4gICAgY3JlYXRlVGFzayhcbiAgICAgIHRhc2tUaXRsZUlucHV0LnZhbHVlLFxuICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgICAgdGFza1ByaW9yaXR5SW5wdXQudmFsdWVcbiAgICApXG4gICk7XG5cbiAgX3Jlc2V0VGFza0ZpZWxkcygpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZVRhc2tGaWVsZHNXaXRoVGFza1RleHQodGFza0luZGV4KSB7XG4gIGNvbnN0IHRhc2sgPSBnZXRUYXNrKHRhc2tJbmRleCk7XG4gIHRhc2tUaXRsZUlucHV0LnZhbHVlID0gdGFzay50aXRsZTtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICBzd2l0Y2ggKHRhc2sucHJpb3JpdHkpIHtcbiAgICBjYXNlIFwiZ3JlZW5cIjpcbiAgICAgIGdyZWVuLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInllbGxvd1wiOlxuICAgICAgeWVsbG93LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInJlZFwiOlxuICAgICAgcmVkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3VibWl0VXBkYXRlc1Rhc2tGaWVsZHModGFza0luZGV4KSB7XG4gIF91cGRhdGVUYXNrUHJpb3JpdHlJbnB1dCgpO1xuXG4gIGVkaXRUYXNrKFxuICAgIHRhc2tJbmRleCxcbiAgICBjcmVhdGVUYXNrKFxuICAgICAgdGFza1RpdGxlSW5wdXQudmFsdWUsXG4gICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tEdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICB0YXNrUHJpb3JpdHlJbnB1dC52YWx1ZVxuICAgIClcbiAgKTtcblxuICBfcmVzZXRUYXNrRmllbGRzKCk7XG59XG5cbmZ1bmN0aW9uIF91cGRhdGVUYXNrUHJpb3JpdHlJbnB1dCgpIHtcbiAgdGFza1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpO1xufVxuXG5mdW5jdGlvbiBfcmVzZXRQcm9qZWN0RmllbGRzKCkge1xuICBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIF9yZXNldFRhc2tGaWVsZHMoKSB7XG4gIHRhc2tUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgdGFza1ByaW9yaXR5SW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuXG4gIGRlZmF1bHRQcmlvcml0eVJhZGlvLmNoZWNrZWQgPSB0cnVlO1xufVxuXG5leHBvcnQge1xuICBzdWJtaXRQcm9qZWN0RmllbGRzLFxuICBjbGVhclRhc2tJbnB1dEZpZWxkcyxcbiAgc3VibWl0VGFza0ZpZWxkcyxcbiAgcG9wdWxhdGVUYXNrRmllbGRzV2l0aFRhc2tUZXh0LFxuICBzdWJtaXRVcGRhdGVzVGFza0ZpZWxkcyxcbn07XG4iLCJsZXQgX3Byb2plY3RzID0gW107XG5sZXQgX2N1cnJlbnRQcm9qZWN0SW5kZXggPSAtMTtcblxuZnVuY3Rpb24gX2NyZWF0ZVByb2plY3QodGl0bGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICB0YXNrczogW10sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxvYWRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xuICBfcHJvamVjdHMgPSBuZXdQcm9qZWN0cztcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZXRzKCkge1xuICBfcHJvamVjdHMgPSBbXTtcbiAgX2N1cnJlbnRQcm9qZWN0SW5kZXggPSAtMTtcbn1cblxuZnVuY3Rpb24gYWRkUHJvamVjdCh0aXRsZSkge1xuICBfcHJvamVjdHMucHVzaChfY3JlYXRlUHJvamVjdCh0aXRsZSkpO1xuICBfY3VycmVudFByb2plY3RJbmRleCsrO1xufVxuXG5mdW5jdGlvbiBvdmVycmlkZVByb2plY3RPYmplY3QocHJvamVjdCkge1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdID0gcHJvamVjdDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VycmVudFByb2plY3RWYWx1ZXMobmV3VGl0bGUsIG5ld1Rhc2tzKSB7XG4gIGdldEN1cnJlbnRQcm9qZWN0KCkudGl0bGUgPSBuZXdUaXRsZTtcbiAgZ2V0Q3VycmVudFByb2plY3QoKS50YXNrcyA9IG5ld1Rhc2tzO1xufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50UHJvamVjdCgpIHtcbiAgcmV0dXJuIF9wcm9qZWN0c1tfY3VycmVudFByb2plY3RJbmRleF07XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgobmV3SW5kZXgpIHtcbiAgX2N1cnJlbnRQcm9qZWN0SW5kZXggPSBuZXdJbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdEF0SW5kZXgoaW5kZXgpIHtcbiAgaWYgKGluZGV4ID49IF9wcm9qZWN0cy5sZW5ndGgpIHJldHVybjtcblxuICByZXR1cm4gX3Byb2plY3RzW2luZGV4XTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdExlbmd0aCgpIHtcbiAgcmV0dXJuIF9wcm9qZWN0cy5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldEFsbFByb2plY3RzKCkge1xuICByZXR1cm4gX3Byb2plY3RzO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrKHRhc2tJbmRleCkge1xuICByZXR1cm4gZ2V0Q3VycmVudFByb2plY3QoKS50YXNrc1t0YXNrSW5kZXhdO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5wdXNoKG5ld1Rhc2spO1xufVxuXG5mdW5jdGlvbiByZW1vdmVUYXNrKGluZGV4KSB7XG4gIF9wcm9qZWN0c1tfY3VycmVudFByb2plY3RJbmRleF0udGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuZnVuY3Rpb24gZWRpdFRhc2soaW5kZXgsIG5ld1Rhc2spIHtcbiAgX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tpbmRleF0gPSBuZXdUYXNrO1xufVxuXG5leHBvcnQge1xuICBsb2FkUHJvamVjdHMsXG4gIGNsZWFyUHJvamV0cyxcbiAgYWRkUHJvamVjdCxcbiAgb3ZlcnJpZGVQcm9qZWN0T2JqZWN0LFxuICB1cGRhdGVDdXJyZW50UHJvamVjdFZhbHVlcyxcbiAgZ2V0Q3VycmVudFByb2plY3QsXG4gIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgsXG4gIGdldFByb2plY3RBdEluZGV4LFxuICBnZXRQcm9qZWN0TGVuZ3RoLFxuICBnZXRBbGxQcm9qZWN0cyxcbiAgZ2V0VGFzayxcbiAgYWRkVGFzayxcbiAgcmVtb3ZlVGFzayxcbiAgZWRpdFRhc2ssXG59O1xuIiwiaW1wb3J0IHsgY2xlYXJQcm9qZXRzLCBnZXRBbGxQcm9qZWN0cywgbG9hZFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IGxvYWRUaGVtZSB9IGZyb20gXCIuL3RoZW1lc1wiO1xuXG5jb25zdCBwcm9qZWN0c0tleSA9IFwicHJvamVjdHNcIjtcbmNvbnN0IHRoZW1lS2V5ID0gXCJ0aGVtZVwiO1xuXG5jb25zdCB0aGVtZVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aGVtZXNcIik7XG5cbmZ1bmN0aW9uIGxvYWRQZXJzaXN0ZW50RGF0YSgpIHtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RzS2V5KSkge1xuICAgIGxvYWRQcm9qZWN0cyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RzS2V5KSkpO1xuICB9XG5cbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoZW1lS2V5KSkge1xuICAgIGNvbnN0IHZhbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoZW1lS2V5KTtcbiAgICBsb2FkVGhlbWUodmFsKTtcbiAgICB0aGVtZVNlbGVjdG9yLnZhbHVlID0gdmFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmVQcm9qZWN0c1BlcnNpc3RlbnREYXRhKCkge1xuICBjb25zdCBwcm9qZWN0cyA9IGdldEFsbFByb2plY3RzKCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3RzS2V5LCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBzYXZlVGhlbWVQZXJzaXN0ZW5EYXRhKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGVtZUtleSwgdGhlbWVTZWxlY3Rvci52YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlKCkge1xuICBjbGVhclByb2pldHMoKTtcbiAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG59XG5cbmV4cG9ydCB7XG4gIGxvYWRQZXJzaXN0ZW50RGF0YSxcbiAgc2F2ZVByb2plY3RzUGVyc2lzdGVudERhdGEsXG4gIHNhdmVUaGVtZVBlcnNpc3RlbkRhdGEsXG4gIGNsZWFyTG9jYWxTdG9yYWdlLFxufTtcbiIsImZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY2hlY2tlZDogZmFsc2UsXG4gIH07XG59XG5cbi8vIFRPRE8gbWFrZSB1cGRhdGUgdGFzayBmdW5jdGlvblxuXG5leHBvcnQgeyBjcmVhdGVUYXNrIH07XG4iLCJjb25zdCBsaWdodFRoZW1lQmFja2dyb3VuZENvbG9yID0gXCIjZmZmXCI7XG5jb25zdCBsaWdodFRoZW1lTW9kYWxCYWNrZ3JvdW5kQ29sb3IgPSBcIiMwMDAzXCI7XG5jb25zdCBsaWdodFRoZW1lVGV4dENvbG9yID0gXCIjMDAwXCI7XG5jb25zdCBsaWdodFRoZW1lQnV0dG9uQ29sb3IgPSBcInJnYigwLCAxNzQsIDI1NSlcIjtcbmNvbnN0IGxpZ2h0VGhlbWVCdXR0b25UZXh0Q29sb3IgPSBcIiNmZmZcIjtcbmNvbnN0IGxpZ2h0VGhlbWVCdXR0b25Ib3ZlckNvbG9yID0gXCJyZ2IoNzksIDE5OSwgMjU1KVwiO1xuY29uc3QgbGlnaHRUaGVtZUJ1dHRvbkNsaWNrQ29sb3IgPSBcInJnYigwLCAxMzcsIDIwMSlcIjtcblxuY29uc3QgZGFya1RoZW1lQmFja2dyb3VuZENvbG9yID0gXCIjMDAwXCI7XG5jb25zdCBkYXJrVGhlbWVNb2RhbEJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZjc1XCI7XG5jb25zdCBkYXJrVGhlbWVUZXh0Q29sb3IgPSBcIiNmZmZcIjtcbmNvbnN0IGRhcmtUaGVtZUJ1dHRvbkNvbG9yID0gXCIjMjMwMDQ2XCI7XG5jb25zdCBkYXJrVGhlbWVCdXR0b25UZXh0Q29sb3IgPSBcIiNmZmZcIjtcbmNvbnN0IGRhcmtUaGVtZUJ1dHRvbkhvdmVyQ29sb3IgPSBcIiM0MjAwODVcIjtcbmNvbnN0IGRhcmtUaGVtZUJ1dHRvbkNsaWNrQ29sb3IgPSBcIiMxZTAxM2JcIjtcblxuY29uc3Qgam9zaFRoZW1lQmFja2dyb3VuZENvbG9yID0gXCIjMDAwXCI7XG5jb25zdCBqb3NoVGhlbWVNb2RhbEJhY2tncm91bmRDb2xvciA9IFwiI2ZmZmZmZjc1XCI7XG5jb25zdCBqb3NoVGhlbWVUZXh0Q29sb3IgPSBcIiNmZmZcIjtcbmNvbnN0IGpvc2hUaGVtZUJ1dHRvbkNvbG9yID0gXCIjMjMwMDQ2XCI7XG5jb25zdCBqb3NoVGhlbWVCdXR0b25UZXh0Q29sb3IgPSBcIiNmZmZcIjtcbmNvbnN0IGpvc2hUaGVtZUJ1dHRvbkhvdmVyQ29sb3IgPSBcIiM0MjAwODVcIjtcbmNvbnN0IGpvc2hUaGVtZUJ1dHRvbkNsaWNrQ29sb3IgPSBcIiMxZTAxM2JcIjtcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCI6cm9vdFwiKTtcblxuZnVuY3Rpb24gY2hhbmdlVGhlbWUobmV3VGhlbWVWYWx1ZSkge1xuICBzd2l0Y2ggKG5ld1RoZW1lVmFsdWUpIHtcbiAgICBjYXNlIFwibGlnaHRcIjpcbiAgICAgIF9zZXRUaGVtZVZhbHVlcyhcbiAgICAgICAgbGlnaHRUaGVtZUJhY2tncm91bmRDb2xvcixcbiAgICAgICAgbGlnaHRUaGVtZU1vZGFsQmFja2dyb3VuZENvbG9yLFxuICAgICAgICBsaWdodFRoZW1lVGV4dENvbG9yLFxuICAgICAgICBsaWdodFRoZW1lQnV0dG9uQ29sb3IsXG4gICAgICAgIGxpZ2h0VGhlbWVCdXR0b25UZXh0Q29sb3IsXG4gICAgICAgIGxpZ2h0VGhlbWVCdXR0b25Ib3ZlckNvbG9yLFxuICAgICAgICBsaWdodFRoZW1lQnV0dG9uQ2xpY2tDb2xvclxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJkYXJrXCI6XG4gICAgICBfc2V0VGhlbWVWYWx1ZXMoXG4gICAgICAgIGRhcmtUaGVtZUJhY2tncm91bmRDb2xvcixcbiAgICAgICAgZGFya1RoZW1lTW9kYWxCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGRhcmtUaGVtZVRleHRDb2xvcixcbiAgICAgICAgZGFya1RoZW1lQnV0dG9uQ29sb3IsXG4gICAgICAgIGRhcmtUaGVtZUJ1dHRvblRleHRDb2xvcixcbiAgICAgICAgZGFya1RoZW1lQnV0dG9uSG92ZXJDb2xvcixcbiAgICAgICAgZGFya1RoZW1lQnV0dG9uQ2xpY2tDb2xvclxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJqb3NoXCI6XG4gICAgICBfc2V0VGhlbWVWYWx1ZXMoXG4gICAgICAgIGpvc2hUaGVtZUJhY2tncm91bmRDb2xvcixcbiAgICAgICAgam9zaFRoZW1lTW9kYWxCYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGpvc2hUaGVtZVRleHRDb2xvcixcbiAgICAgICAgam9zaFRoZW1lQnV0dG9uQ29sb3IsXG4gICAgICAgIGpvc2hUaGVtZUJ1dHRvblRleHRDb2xvcixcbiAgICAgICAgam9zaFRoZW1lQnV0dG9uSG92ZXJDb2xvcixcbiAgICAgICAgam9zaFRoZW1lQnV0dG9uQ2xpY2tDb2xvclxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9zZXRUaGVtZVZhbHVlcyhcbiAgYmFja2dyb3VuZENvbG9yLFxuICBtb2RhbEJhY2tncm91bmRDbG9yLFxuICB0ZXh0Q29sb3IsXG4gIGJ1dHRvbkNvbG9yLFxuICBidXR0b25UZXh0Q29sb3IsXG4gIGJ1dHRvbkhvdmVyQ29sb3IsXG4gIGJ1dHRvbkNsaWNrQ29sb3Jcbikge1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iYWNrZ3JvdW5kLWNvbG9yXCIsIGJhY2tncm91bmRDb2xvcik7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLW1vZGFsLWJhY2tncm91bmQtY29sb3JcIiwgbW9kYWxCYWNrZ3JvdW5kQ2xvcik7XG4gIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXRleHQtY29sb3JcIiwgdGV4dENvbG9yKTtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYnV0dG9uLWNvbG9yXCIsIGJ1dHRvbkNvbG9yKTtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYnV0dG9uLXRleHQtY29sb3JcIiwgYnV0dG9uVGV4dENvbG9yKTtcbiAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYnV0dG9uLWhvdmVyLWNvbG9yXCIsIGJ1dHRvbkhvdmVyQ29sb3IpO1xuICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1idXR0b24tY2xpY2stY29sb3JcIiwgYnV0dG9uQ2xpY2tDb2xvcik7XG59XG5cbmZ1bmN0aW9uIGxvYWRUaGVtZSh0aGVtZVN0cmluZykge1xuICBjaGFuZ2VUaGVtZSh0aGVtZVN0cmluZyk7XG59XG5cbmV4cG9ydCB7IGNoYW5nZVRoZW1lLCBsb2FkVGhlbWUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgY2xlYXJQcm9qZWN0UGFuZWwsXG4gIGhpZGVBYm91dE1vZGFsLFxuICBoaWRlQWRkVGFza01vZGFsLFxuICBoaWRlUHJvamVjdE1vZGFsLFxuICBoaWRlU2V0dGluZ3NNb2RhbCxcbiAgc2hvd0Fib3V0TW9kYWwsXG4gIHNob3dBZGRQcm9qZWN0TW9kYWwsXG4gIHNob3dBZGRUYXNrTW9kYWwsXG4gIHNob3dTZXR0aW5nc01vZGFsLFxuICB1cGRhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnRzLFxufSBmcm9tIFwiLi9Eb21NYW5hZ2VyXCI7XG5pbXBvcnQgeyBzdWJtaXRQcm9qZWN0RmllbGRzLCBzdWJtaXRUYXNrRmllbGRzIH0gZnJvbSBcIi4vaW5wdXRzXCI7XG5pbXBvcnQge1xuICBjbGVhckxvY2FsU3RvcmFnZSxcbiAgbG9hZFBlcnNpc3RlbnREYXRhLFxuICBzYXZlUHJvamVjdHNQZXJzaXN0ZW50RGF0YSxcbiAgc2F2ZVRoZW1lUGVyc2lzdGVuRGF0YSxcbn0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuaW1wb3J0IHsgY2hhbmdlVGhlbWUgfSBmcm9tIFwiLi90aGVtZXNcIjtcblxuLy8gTG9hZCBwZXJzaXN0ZW50IGRhdGFcbmxvYWRQZXJzaXN0ZW50RGF0YSgpO1xudXBkYXRlUHJvamVjdFNpZGViYXJFbGVtZW50cygpO1xuXG4vLyBPcGVuIG1vZGVsIGJ1dHRvbnNcbmNvbnN0IG9wZW5Qcm9qZWN0TW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tcHJvamVjdC1tb2RhbC1idG5cIik7XG5jb25zdCBvcGVuVGFza01vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXRhc2stbW9kYWwtYnRuXCIpO1xuXG4vLyBBZGQgYW5kIENsb3NlIGJ1dHRvbnMgZm9yIHByb2plY3QgYW5kIHRhc2sgbW9kYWxzXG5jb25zdCBhZGRQcm9qZWN0TW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0LWJ0blwiKTtcbmNvbnN0IGNsb3NlQWRkUHJvamVjdE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjY2xvc2UtcHJvamVjdC1tb2RhbC1idG5cIlxuKTtcbmNvbnN0IGNsb3NlVGFza01vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS10YXNrLW1vZGFsLWJ0blwiKTtcblxuLy8gU2V0dGluZ3MgYnV0dG9uc1xuY29uc3Qgb3BlblNldHRpbmdzTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI29wZW4tc2V0dGluZ3MtYnRuXCIpO1xuY29uc3QgY2xvc2VTZXR0aW5nc01vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS1zZXR0aW5ncy1idG5cIik7XG5cbi8vIEFib3V0IGJ1dHRvbnNcbmNvbnN0IG9wZW5BYm91dE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLWFib3V0LWJ0blwiKTtcbmNvbnN0IGNsb3NlQWJvdXRNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYWJvdXQtYnRuXCIpO1xuXG4vLyBQcm9qZWN0IG1vZGFsIGV2ZW50IGxpc3RlbmVyc1xub3BlblByb2plY3RNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FkZFByb2plY3RNb2RhbCk7XG5hZGRQcm9qZWN0TW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3VibWl0UHJvamVjdEZpZWxkcygpO1xuICB1cGRhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnRzKCk7XG4gIGhpZGVQcm9qZWN0TW9kYWwoKTtcbiAgc2F2ZVByb2plY3RzUGVyc2lzdGVudERhdGEoKTtcbn0pO1xuY2xvc2VBZGRQcm9qZWN0TW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVQcm9qZWN0TW9kYWwpO1xuXG4vLyBUYXNrIG1vZGFsIGV2ZW50IGxpc3RlbmVyc1xub3BlblRhc2tNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkFkZCB0YXNrIGJ1dHRvbiBjbGlja2VkXCIpO1xuICBzaG93QWRkVGFza01vZGFsKCk7XG59KTtcblxuY2xvc2VUYXNrTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVBZGRUYXNrTW9kYWwpO1xuXG5vcGVuU2V0dGluZ3NNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NldHRpbmdzTW9kYWwpO1xuY2xvc2VTZXR0aW5nc01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlU2V0dGluZ3NNb2RhbCk7XG5cbm9wZW5BYm91dE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWJvdXRNb2RhbCk7XG5jbG9zZUFib3V0TW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVBYm91dE1vZGFsKTtcblxuLy8gVGhlbWUgc2VsZWN0b3JcbmNvbnN0IHRoZW1lU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RoZW1lc1wiKTtcblxudGhlbWVTZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgY2hhbmdlVGhlbWUodGhlbWVTZWxlY3Rvci52YWx1ZSk7XG4gIHNhdmVUaGVtZVBlcnNpc3RlbkRhdGEoKTtcbn0pO1xuXG5jb25zdCBjbGVhclN0b3JhZ2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NsZWFyLXN0b3JhZ2UtYnRuXCIpO1xuY2xlYXJTdG9yYWdlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNsZWFyTG9jYWxTdG9yYWdlKCk7XG4gIHVwZGF0ZVByb2plY3RTaWRlYmFyRWxlbWVudHMoKTtcbiAgY2xlYXJQcm9qZWN0UGFuZWwoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9