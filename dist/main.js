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
/* harmony export */   "updateProjectSidebarElements": () => (/* binding */ updateProjectSidebarElements),
/* harmony export */   "updateTaskElements": () => (/* binding */ updateTaskElements)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const projectContainer = document.querySelector(".projects-panel");
const projectTitle = document.querySelector("#project-title");
const taskContainer = document.querySelector(".task-container");

const modalBg = document.querySelector(".modal-bg");
const addProjectModal = document.querySelector(".add-project-modal");
const addTaskModal = document.querySelector(".add-task-modal");

function _createProjectElement(index) {
  const project = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjectAtIndex)(index);

  const btn = document.createElement("button");
  btn.classList.add("project-button");
  btn.textContent = project.title;

  // Updates project panel when project button is pressed
  btn.addEventListener("click", () => {
    (0,_projects__WEBPACK_IMPORTED_MODULE_0__.setCurrentProjectIndex)(index);
    _updateProjectContainer(project);
  });

  return btn;
}

function _createTaskElement(task) {
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

  /*
  title
  description
  date
  prio
  checked
  */

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
  _clearElements(taskContainer);

  const currentProject = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)();

  projectTitle.textContent = currentProject.title;

  // TODO remove the repeating code of this section and updateTaskElements section.
  // They essentially do the same code, but for some reason just replacing this section
  // causes errors where when you add a project, add a task to the project, add another project
  // add mutliple tasks to that project it would cause an error
  for (const task of currentProject.tasks) {
    taskContainer.appendChild(_createTaskElement(task));
  }
}

function _clearElements(parent) {
  while (parent.lastElementChild) {
    parent.removeChild(parent.lastElementChild);
  }
}

function updateProjectSidebarElements() {
  _clearElements(projectContainer);

  let length = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getProjectLength)();
  console.log("length: " + length);

  for (let i = 0; i < length; i++) {
    projectContainer.appendChild(_createProjectElement(i));
  }
}

function updateTaskElements() {
  _clearElements(taskContainer);
  for (const task of (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().tasks) {
    taskContainer.appendChild(_createTaskElement(task));
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
  modalBg.classList.add("show");
  addTaskModal.classList.add("show");
}

function hideAddTaskModal() {
  modalBg.classList.remove("show");
  addTaskModal.classList.remove("show");
}




/***/ }),

/***/ "./src/inputs.js":
/*!***********************!*\
  !*** ./src/inputs.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "submitProjectFields": () => (/* binding */ submitProjectFields),
/* harmony export */   "submitTaskFields": () => (/* binding */ submitTaskFields)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");



// Add project fields
const projectTitleInput = document.querySelector("#project-name");

// Add task fields
const taskTitleInput = document.querySelector("#task-title");
const taskDescriptionInput = document.querySelector("#task-description");
const taskDueDateInput = document.querySelector("#task-date");
let taskPriorityInput;

// Default checked radio
const defaultPriorityRadio = document.querySelector(
  "input[name='priority']:checked"
);

function submitProjectFields() {
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.addProject)(projectTitleInput.value);
  projectTitleInput.value = "";
}

function submitTaskFields() {
  // Update priority radio object
  taskPriorityInput = document.querySelector("input[name='priority']:checked");

  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().tasks.push(
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createTask)(
      taskTitleInput.value,
      taskDescriptionInput.value,
      taskDueDateInput.value,
      taskPriorityInput.value
    )
  );

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
/* harmony export */   "getCurrentProject": () => (/* binding */ getCurrentProject),
/* harmony export */   "getProjectAtIndex": () => (/* binding */ getProjectAtIndex),
/* harmony export */   "getProjectLength": () => (/* binding */ getProjectLength),
/* harmony export */   "overrideProjectObject": () => (/* binding */ overrideProjectObject),
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
  _projects[_currentProjectIndex].title = newTitle;
  _projects[_currentProjectIndex].tasks = newTasks;
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
const addTaskModalBtn = document.querySelector("#add-task-modal-btn");
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
addTaskModalBtn.addEventListener("click", () => {
  (0,_inputs__WEBPACK_IMPORTED_MODULE_1__.submitTaskFields)();
  (0,_DomManager__WEBPACK_IMPORTED_MODULE_0__.updateTaskElements)();
  (0,_DomManager__WEBPACK_IMPORTED_MODULE_0__.hideAddTaskModal)();
});
closeTaskModalBtn.addEventListener("click", _DomManager__WEBPACK_IMPORTED_MODULE_0__.hideAddTaskModal);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtBQUNsQixFQUFFLCtEQUFrQjtBQUNwQixFQUFFLDZEQUFnQjtBQUNsQixDQUFDO0FBQ0QsNENBQTRDLHlEQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Eb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbnB1dHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZ2V0Q3VycmVudFByb2plY3QsXG4gIGdldFByb2plY3RBdEluZGV4LFxuICBnZXRQcm9qZWN0TGVuZ3RoLFxuICBzZXRDdXJyZW50UHJvamVjdEluZGV4LFxufSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1wYW5lbFwiKTtcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuXG5jb25zdCBtb2RhbEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbmNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtbW9kYWxcIik7XG5jb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLW1vZGFsXCIpO1xuXG5mdW5jdGlvbiBfY3JlYXRlUHJvamVjdEVsZW1lbnQoaW5kZXgpIHtcbiAgY29uc3QgcHJvamVjdCA9IGdldFByb2plY3RBdEluZGV4KGluZGV4KTtcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtYnV0dG9uXCIpO1xuICBidG4udGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gIC8vIFVwZGF0ZXMgcHJvamVjdCBwYW5lbCB3aGVuIHByb2plY3QgYnV0dG9uIGlzIHByZXNzZWRcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2V0Q3VycmVudFByb2plY3RJbmRleChpbmRleCk7XG4gICAgX3VwZGF0ZVByb2plY3RDb250YWluZXIocHJvamVjdCk7XG4gIH0pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVUYXNrRWxlbWVudCh0YXNrKSB7XG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZGF0YVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b3BTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCB0YXNrSW5wdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHVlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCBib3R0b21TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgLy8gQWRkIGNsYXNzZXNcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICBkYXRhU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGF0YS1zZWN0aW9uc1wiKTtcbiAgdG9wU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9wLXNlY3Rpb25cIik7XG4gIHRhc2tJbnB1dFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRhc2staW5wdXQtc2VjdGlvblwiKTtcbiAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ1dHRvbnNcIik7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uXCIpO1xuICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS1lZGl0XCIpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uXCIpO1xuICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLXRyYXNoXCIpO1xuICBib3R0b21TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJib3R0b20tc2VjdGlvblwiKTtcblxuICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4gIC8qXG4gIHRpdGxlXG4gIGRlc2NyaXB0aW9uXG4gIGRhdGVcbiAgcHJpb1xuICBjaGVja2VkXG4gICovXG5cbiAgLy8gU2V0IHRhc2sgdmFsdWVzIHRvIGVsZW1lbnRcbiAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY2hlY2tlZDtcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcbiAgZHVlVGV4dC50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKHRhc2sucHJpb3JpdHkpO1xuXG4gIGJvdHRvbVNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgdGFza0lucHV0U2VjdGlvbi5hcHBlbmRDaGlsZChkdWVUZXh0KTtcbiAgdGFza0lucHV0U2VjdGlvbi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza0lucHV0U2VjdGlvbik7XG4gIGRhdGFTZWN0aW9uLmFwcGVuZENoaWxkKHRvcFNlY3Rpb24pO1xuICBkYXRhU2VjdGlvbi5hcHBlbmRDaGlsZChib3R0b21TZWN0aW9uKTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGF0YVNlY3Rpb24pO1xuXG4gIHJldHVybiB0YXNrRGl2O1xufVxuXG5mdW5jdGlvbiBfdXBkYXRlUHJvamVjdENvbnRhaW5lcigpIHtcbiAgX2NsZWFyRWxlbWVudHModGFza0NvbnRhaW5lcik7XG5cbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuXG4gIC8vIFRPRE8gcmVtb3ZlIHRoZSByZXBlYXRpbmcgY29kZSBvZiB0aGlzIHNlY3Rpb24gYW5kIHVwZGF0ZVRhc2tFbGVtZW50cyBzZWN0aW9uLlxuICAvLyBUaGV5IGVzc2VudGlhbGx5IGRvIHRoZSBzYW1lIGNvZGUsIGJ1dCBmb3Igc29tZSByZWFzb24ganVzdCByZXBsYWNpbmcgdGhpcyBzZWN0aW9uXG4gIC8vIGNhdXNlcyBlcnJvcnMgd2hlcmUgd2hlbiB5b3UgYWRkIGEgcHJvamVjdCwgYWRkIGEgdGFzayB0byB0aGUgcHJvamVjdCwgYWRkIGFub3RoZXIgcHJvamVjdFxuICAvLyBhZGQgbXV0bGlwbGUgdGFza3MgdG8gdGhhdCBwcm9qZWN0IGl0IHdvdWxkIGNhdXNlIGFuIGVycm9yXG4gIGZvciAoY29uc3QgdGFzayBvZiBjdXJyZW50UHJvamVjdC50YXNrcykge1xuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRhc2tFbGVtZW50KHRhc2spKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY2xlYXJFbGVtZW50cyhwYXJlbnQpIHtcbiAgd2hpbGUgKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5sYXN0RWxlbWVudENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnRzKCkge1xuICBfY2xlYXJFbGVtZW50cyhwcm9qZWN0Q29udGFpbmVyKTtcblxuICBsZXQgbGVuZ3RoID0gZ2V0UHJvamVjdExlbmd0aCgpO1xuICBjb25zb2xlLmxvZyhcImxlbmd0aDogXCIgKyBsZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVQcm9qZWN0RWxlbWVudChpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0VsZW1lbnRzKCkge1xuICBfY2xlYXJFbGVtZW50cyh0YXNrQ29udGFpbmVyKTtcbiAgZm9yIChjb25zdCB0YXNrIG9mIGdldEN1cnJlbnRQcm9qZWN0KCkudGFza3MpIHtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVUYXNrRWxlbWVudCh0YXNrKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0FkZFByb2plY3RNb2RhbCgpIHtcbiAgbW9kYWxCZy5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgYWRkUHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBoaWRlUHJvamVjdE1vZGFsKCkge1xuICBtb2RhbEJnLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICBhZGRQcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG59XG5cbmZ1bmN0aW9uIHNob3dBZGRUYXNrTW9kYWwoKSB7XG4gIG1vZGFsQmcuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gaGlkZUFkZFRhc2tNb2RhbCgpIHtcbiAgbW9kYWxCZy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xufVxuXG5leHBvcnQge1xuICB1cGRhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnRzLFxuICB1cGRhdGVUYXNrRWxlbWVudHMsXG4gIHNob3dBZGRQcm9qZWN0TW9kYWwsXG4gIGhpZGVQcm9qZWN0TW9kYWwsXG4gIHNob3dBZGRUYXNrTW9kYWwsXG4gIGhpZGVBZGRUYXNrTW9kYWwsXG59O1xuIiwiaW1wb3J0IHsgYWRkUHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cbi8vIEFkZCBwcm9qZWN0IGZpZWxkc1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcblxuLy8gQWRkIHRhc2sgZmllbGRzXG5jb25zdCB0YXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKTtcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRlc2NyaXB0aW9uXCIpO1xuY29uc3QgdGFza0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kYXRlXCIpO1xubGV0IHRhc2tQcmlvcml0eUlucHV0O1xuXG4vLyBEZWZhdWx0IGNoZWNrZWQgcmFkaW9cbmNvbnN0IGRlZmF1bHRQcmlvcml0eVJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIlxuKTtcblxuZnVuY3Rpb24gc3VibWl0UHJvamVjdEZpZWxkcygpIHtcbiAgYWRkUHJvamVjdChwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSk7XG4gIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gc3VibWl0VGFza0ZpZWxkcygpIHtcbiAgLy8gVXBkYXRlIHByaW9yaXR5IHJhZGlvIG9iamVjdFxuICB0YXNrUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIik7XG5cbiAgZ2V0Q3VycmVudFByb2plY3QoKS50YXNrcy5wdXNoKFxuICAgIGNyZWF0ZVRhc2soXG4gICAgICB0YXNrVGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgdGFza0R1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgIHRhc2tQcmlvcml0eUlucHV0LnZhbHVlXG4gICAgKVxuICApO1xuXG4gIHRhc2tUaXRsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0YXNrRHVlRGF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgdGFza1ByaW9yaXR5SW5wdXQuY2hlY2tlZCA9IGZhbHNlO1xuXG4gIGRlZmF1bHRQcmlvcml0eVJhZGlvLmNoZWNrZWQgPSB0cnVlO1xufVxuXG5leHBvcnQgeyBzdWJtaXRQcm9qZWN0RmllbGRzLCBzdWJtaXRUYXNrRmllbGRzIH07XG4iLCJsZXQgX3Byb2plY3RzID0gW107XG5sZXQgX2N1cnJlbnRQcm9qZWN0SW5kZXggPSAtMTtcblxuZnVuY3Rpb24gX2NyZWF0ZVByb2plY3QodGl0bGUpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICB0YXNrczogW10sXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpIHtcbiAgX3Byb2plY3RzLnB1c2goX2NyZWF0ZVByb2plY3QodGl0bGUpKTtcbiAgX2N1cnJlbnRQcm9qZWN0SW5kZXgrKztcbn1cblxuZnVuY3Rpb24gb3ZlcnJpZGVQcm9qZWN0T2JqZWN0KHByb2plY3QpIHtcbiAgX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XSA9IHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRQcm9qZWN0VmFsdWVzKG5ld1RpdGxlLCBuZXdUYXNrcykge1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRpdGxlID0gbmV3VGl0bGU7XG4gIF9wcm9qZWN0c1tfY3VycmVudFByb2plY3RJbmRleF0udGFza3MgPSBuZXdUYXNrcztcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudFByb2plY3QoKSB7XG4gIHJldHVybiBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdO1xufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdEluZGV4KG5ld0luZGV4KSB7XG4gIF9jdXJyZW50UHJvamVjdEluZGV4ID0gbmV3SW5kZXg7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RBdEluZGV4KGluZGV4KSB7XG4gIGlmIChpbmRleCA+PSBfcHJvamVjdHMubGVuZ3RoKSByZXR1cm47XG5cbiAgcmV0dXJuIF9wcm9qZWN0c1tpbmRleF07XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3RMZW5ndGgoKSB7XG4gIHJldHVybiBfcHJvamVjdHMubGVuZ3RoO1xufVxuXG5leHBvcnQge1xuICBhZGRQcm9qZWN0LFxuICBvdmVycmlkZVByb2plY3RPYmplY3QsXG4gIHVwZGF0ZUN1cnJlbnRQcm9qZWN0VmFsdWVzLFxuICBnZXRDdXJyZW50UHJvamVjdCxcbiAgc2V0Q3VycmVudFByb2plY3RJbmRleCxcbiAgZ2V0UHJvamVjdEF0SW5kZXgsXG4gIGdldFByb2plY3RMZW5ndGgsXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY2hlY2tlZDogZmFsc2UsXG4gIH07XG59XG5cbi8vIFRPRE8gbWFrZSB1cGRhdGUgdGFzayBmdW5jdGlvblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuICBoaWRlQWRkVGFza01vZGFsLFxuICBoaWRlUHJvamVjdE1vZGFsLFxuICBzaG93QWRkUHJvamVjdE1vZGFsLFxuICBzaG93QWRkVGFza01vZGFsLFxuICB1cGRhdGVQcm9qZWN0U2lkZWJhckVsZW1lbnRzLFxuICB1cGRhdGVUYXNrRWxlbWVudHMsXG59IGZyb20gXCIuL0RvbU1hbmFnZXJcIjtcbmltcG9ydCB7IHN1Ym1pdFByb2plY3RGaWVsZHMsIHN1Ym1pdFRhc2tGaWVsZHMgfSBmcm9tIFwiLi9pbnB1dHNcIjtcblxuLy8gT3BlbiBtb2RlbCBidXR0b25zXG5jb25zdCBvcGVuUHJvamVjdE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvcGVuLXByb2plY3QtbW9kYWwtYnRuXCIpO1xuY29uc3Qgb3BlblRhc2tNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3Blbi10YXNrLW1vZGFsLWJ0blwiKTtcblxuLy8gQWRkIGFuZCBDbG9zZSBidXR0b25zIGZvciBwcm9qZWN0IGFuZCB0YXNrIG1vZGFsc1xuY29uc3QgYWRkUHJvamVjdE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idG5cIik7XG5jb25zdCBjbG9zZUFkZFByb2plY3RNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI2Nsb3NlLXByb2plY3QtbW9kYWwtYnRuXCJcbik7XG5jb25zdCBhZGRUYXNrTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLW1vZGFsLWJ0blwiKTtcbmNvbnN0IGNsb3NlVGFza01vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZS10YXNrLW1vZGFsLWJ0blwiKTtcblxuLy8gUHJvamVjdCBtb2RhbCBldmVudCBsaXN0ZW5lcnNcbm9wZW5Qcm9qZWN0TW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBZGRQcm9qZWN0TW9kYWwpO1xuYWRkUHJvamVjdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN1Ym1pdFByb2plY3RGaWVsZHMoKTtcbiAgdXBkYXRlUHJvamVjdFNpZGViYXJFbGVtZW50cygpO1xuICBoaWRlUHJvamVjdE1vZGFsKCk7XG59KTtcbmNsb3NlQWRkUHJvamVjdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlUHJvamVjdE1vZGFsKTtcblxuLy8gVGFzayBtb2RhbCBldmVudCBsaXN0ZW5lcnNcbm9wZW5UYXNrTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJBZGQgdGFzayBidXR0b24gY2xpY2tlZFwiKTtcbiAgc2hvd0FkZFRhc2tNb2RhbCgpO1xufSk7XG5hZGRUYXNrTW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3VibWl0VGFza0ZpZWxkcygpO1xuICB1cGRhdGVUYXNrRWxlbWVudHMoKTtcbiAgaGlkZUFkZFRhc2tNb2RhbCgpO1xufSk7XG5jbG9zZVRhc2tNb2RhbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZUFkZFRhc2tNb2RhbCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=