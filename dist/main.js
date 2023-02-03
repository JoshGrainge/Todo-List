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
/* harmony export */   "hideProjectModal": () => (/* binding */ hideProjectModal),
/* harmony export */   "showAddProjectModal": () => (/* binding */ showAddProjectModal),
/* harmony export */   "updateProjectElements": () => (/* binding */ updateProjectElements),
/* harmony export */   "updateTaskElements": () => (/* binding */ updateTaskElements)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const projectContainer = document.querySelector(".projects-panel");
const projectTitle = document.querySelector("#project-title");
const taskContainer = document.querySelector(".task-container");

const modalBg = document.querySelector(".modal-bg");
const addProjectModal = document.querySelector(".add-project-modal");

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

  for (const task of currentProject.tasks) {
    taskContainer.appendChild(_createTaskElement(task));
  }
}

function _clearElements(parent) {
  while (parent.lastElementChild) {
    parent.removeChild(parent.lastElementChild);
  }
}

function updateProjectElements() {
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

function showAddTaskModal() {}




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
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _DomManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomManager */ "./src/DomManager.js");




const addProjectBtn = document.querySelector("#add-project-button");
const addTaskBtn = document.querySelector("#add-task-button");

const addProjectModalBtn = document.querySelector("#add-project-btn");
const closeAddProjectModalBtn = document.querySelector(
  "#close-project-modal-btn"
);

addProjectBtn.addEventListener("click", _DomManager__WEBPACK_IMPORTED_MODULE_2__.showAddProjectModal);

closeAddProjectModalBtn.addEventListener("click", _DomManager__WEBPACK_IMPORTED_MODULE_2__.hideProjectModal);

addTaskBtn.addEventListener("click", () => {
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().tasks.push(
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createTask)("test", "this is a test", "02/02/22", "red")
  );
  (0,_DomManager__WEBPACK_IMPORTED_MODULE_2__.updateTaskElements)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLb0I7O0FBRXBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDREQUFpQjs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlFQUFzQjtBQUMxQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUJBQXlCLDREQUFpQjs7QUFFMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsMkRBQWdCO0FBQy9COztBQUVBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDREQUFpQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBT0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xKRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQVVFOzs7Ozs7Ozs7Ozs7Ozs7QUNsREs7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O1VDVkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjJEO0FBQ3RCO0FBTWY7O0FBRXRCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDLDREQUFtQjs7QUFFM0Qsa0RBQWtELHlEQUFnQjs7QUFFbEU7QUFDQSxFQUFFLDREQUFpQjtBQUNuQixJQUFJLGtEQUFVO0FBQ2Q7QUFDQSxFQUFFLCtEQUFrQjtBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZ2V0Q3VycmVudFByb2plY3QsXG4gIGdldFByb2plY3RBdEluZGV4LFxuICBnZXRQcm9qZWN0TGVuZ3RoLFxuICBzZXRDdXJyZW50UHJvamVjdEluZGV4LFxufSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuXG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1wYW5lbFwiKTtcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKTtcbmNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpO1xuXG5jb25zdCBtb2RhbEJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iZ1wiKTtcbmNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3QtbW9kYWxcIik7XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0RWxlbWVudChpbmRleCkge1xuICBjb25zdCBwcm9qZWN0ID0gZ2V0UHJvamVjdEF0SW5kZXgoaW5kZXgpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgLy8gVXBkYXRlcyBwcm9qZWN0IHBhbmVsIHdoZW4gcHJvamVjdCBidXR0b24gaXMgcHJlc3NlZFxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzZXRDdXJyZW50UHJvamVjdEluZGV4KGluZGV4KTtcbiAgICBfdXBkYXRlUHJvamVjdENvbnRhaW5lcihwcm9qZWN0KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVRhc2tFbGVtZW50KHRhc2spIHtcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBkYXRhU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tJbnB1dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkdWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAvLyBBZGQgY2xhc3Nlc1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gIGRhdGFTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJkYXRhLXNlY3Rpb25zXCIpO1xuICB0b3BTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b3Atc2VjdGlvblwiKTtcbiAgdGFza0lucHV0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dC1zZWN0aW9uXCIpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uc1wiKTtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLWVkaXRcIik7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG4gIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtdHJhc2hcIik7XG4gIGJvdHRvbVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImJvdHRvbS1zZWN0aW9uXCIpO1xuXG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgLypcbiAgdGl0bGVcbiAgZGVzY3JpcHRpb25cbiAgZGF0ZVxuICBwcmlvXG4gIGNoZWNrZWRcbiAgKi9cblxuICAvLyBTZXQgdGFzayB2YWx1ZXMgdG8gZWxlbWVudFxuICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jaGVja2VkO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBkdWVUZXh0LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQodGFzay5wcmlvcml0eSk7XG5cbiAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICB0YXNrSW5wdXRTZWN0aW9uLmFwcGVuZENoaWxkKGR1ZVRleHQpO1xuICB0YXNrSW5wdXRTZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrSW5wdXRTZWN0aW9uKTtcbiAgZGF0YVNlY3Rpb24uYXBwZW5kQ2hpbGQodG9wU2VjdGlvbik7XG4gIGRhdGFTZWN0aW9uLmFwcGVuZENoaWxkKGJvdHRvbVNlY3Rpb24pO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRhU2VjdGlvbik7XG5cbiAgcmV0dXJuIHRhc2tEaXY7XG59XG5cbmZ1bmN0aW9uIF91cGRhdGVQcm9qZWN0Q29udGFpbmVyKCkge1xuICBfY2xlYXJFbGVtZW50cyh0YXNrQ29udGFpbmVyKTtcblxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG5cbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGU7XG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIGN1cnJlbnRQcm9qZWN0LnRhc2tzKSB7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlVGFza0VsZW1lbnQodGFzaykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jbGVhckVsZW1lbnRzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RFbGVtZW50cygpIHtcbiAgX2NsZWFyRWxlbWVudHMocHJvamVjdENvbnRhaW5lcik7XG5cbiAgbGV0IGxlbmd0aCA9IGdldFByb2plY3RMZW5ndGgoKTtcbiAgY29uc29sZS5sb2coXCJsZW5ndGg6IFwiICsgbGVuZ3RoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlUHJvamVjdEVsZW1lbnQoaSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tFbGVtZW50cygpIHtcbiAgX2NsZWFyRWxlbWVudHModGFza0NvbnRhaW5lcik7XG4gIGZvciAoY29uc3QgdGFzayBvZiBnZXRDdXJyZW50UHJvamVjdCgpLnRhc2tzKSB7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlVGFza0VsZW1lbnQodGFzaykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dBZGRQcm9qZWN0TW9kYWwoKSB7XG4gIG1vZGFsQmcuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gIGFkZFByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbn1cblxuZnVuY3Rpb24gaGlkZVByb2plY3RNb2RhbCgpIHtcbiAgbW9kYWxCZy5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgYWRkUHJvamVjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xufVxuXG5mdW5jdGlvbiBzaG93QWRkVGFza01vZGFsKCkge31cblxuZXhwb3J0IHtcbiAgdXBkYXRlUHJvamVjdEVsZW1lbnRzLFxuICB1cGRhdGVUYXNrRWxlbWVudHMsXG4gIHNob3dBZGRQcm9qZWN0TW9kYWwsXG4gIGhpZGVQcm9qZWN0TW9kYWwsXG59O1xuIiwibGV0IF9wcm9qZWN0cyA9IFtdO1xubGV0IF9jdXJyZW50UHJvamVjdEluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0KHRpdGxlKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgdGFza3M6IFtdLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gIF9wcm9qZWN0cy5wdXNoKF9jcmVhdGVQcm9qZWN0KHRpdGxlKSk7XG4gIF9jdXJyZW50UHJvamVjdEluZGV4Kys7XG59XG5cbmZ1bmN0aW9uIG92ZXJyaWRlUHJvamVjdE9iamVjdChwcm9qZWN0KSB7XG4gIF9wcm9qZWN0c1tfY3VycmVudFByb2plY3RJbmRleF0gPSBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50UHJvamVjdFZhbHVlcyhuZXdUaXRsZSwgbmV3VGFza3MpIHtcbiAgX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzID0gbmV3VGFza3M7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICByZXR1cm4gX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XTtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3RJbmRleChuZXdJbmRleCkge1xuICBfY3VycmVudFByb2plY3RJbmRleCA9IG5ld0luZGV4O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0QXRJbmRleChpbmRleCkge1xuICBpZiAoaW5kZXggPj0gX3Byb2plY3RzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIHJldHVybiBfcHJvamVjdHNbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0TGVuZ3RoKCkge1xuICByZXR1cm4gX3Byb2plY3RzLmxlbmd0aDtcbn1cblxuZXhwb3J0IHtcbiAgYWRkUHJvamVjdCxcbiAgb3ZlcnJpZGVQcm9qZWN0T2JqZWN0LFxuICB1cGRhdGVDdXJyZW50UHJvamVjdFZhbHVlcyxcbiAgZ2V0Q3VycmVudFByb2plY3QsXG4gIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgsXG4gIGdldFByb2plY3RBdEluZGV4LFxuICBnZXRQcm9qZWN0TGVuZ3RoLFxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICB9O1xufVxuXG4vLyBUT0RPIG1ha2UgdXBkYXRlIHRhc2sgZnVuY3Rpb25cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkUHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQge1xuICBoaWRlUHJvamVjdE1vZGFsLFxuICBzaG93QWRkUHJvamVjdE1vZGFsLFxuICB1cGRhdGVQcm9qZWN0RWxlbWVudHMsXG4gIHVwZGF0ZVRhc2tFbGVtZW50cyxcbn0gZnJvbSBcIi4vRG9tTWFuYWdlclwiO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtcHJvamVjdC1idXR0b25cIik7XG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idXR0b25cIik7XG5cbmNvbnN0IGFkZFByb2plY3RNb2RhbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnRuXCIpO1xuY29uc3QgY2xvc2VBZGRQcm9qZWN0TW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNjbG9zZS1wcm9qZWN0LW1vZGFsLWJ0blwiXG4pO1xuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWRkUHJvamVjdE1vZGFsKTtcblxuY2xvc2VBZGRQcm9qZWN0TW9kYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVQcm9qZWN0TW9kYWwpO1xuXG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGdldEN1cnJlbnRQcm9qZWN0KCkudGFza3MucHVzaChcbiAgICBjcmVhdGVUYXNrKFwidGVzdFwiLCBcInRoaXMgaXMgYSB0ZXN0XCIsIFwiMDIvMDIvMjJcIiwgXCJyZWRcIilcbiAgKTtcbiAgdXBkYXRlVGFza0VsZW1lbnRzKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==