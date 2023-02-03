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
/* harmony export */   "updateProjectElements": () => (/* binding */ updateProjectElements),
/* harmony export */   "updateTaskElements": () => (/* binding */ updateTaskElements)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");


const projectContainer = document.querySelector(".projects-panel");
const projectTitle = document.querySelector("#project-title");
const taskContainer = document.querySelector(".task-container");

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

function showAddProjectModal() {}

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

addProjectBtn.addEventListener("click", () => {
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.addProject)("Important Project");
  (0,_DomManager__WEBPACK_IMPORTED_MODULE_2__.updateProjectElements)();
});

addTaskBtn.addEventListener("click", () => {
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.getCurrentProject)().tasks.push(
    (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createTask)("test", "this is a test", "02/02/22", "red")
  );
  (0,_DomManager__WEBPACK_IMPORTED_MODULE_2__.updateTaskElements)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBS29COztBQUVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsNERBQWlCOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksaUVBQXNCO0FBQzFCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUIsNERBQWlCOztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSwyREFBZ0I7QUFDL0I7O0FBRUEsa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQWlCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFcUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xJckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFVRTs7Ozs7Ozs7Ozs7Ozs7O0FDbERLO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yRDtBQUN0QjtBQUNvQzs7QUFFekU7QUFDQTs7QUFFQTtBQUNBLEVBQUUscURBQVU7QUFDWixFQUFFLGtFQUFxQjtBQUN2QixDQUFDOztBQUVEO0FBQ0EsRUFBRSw0REFBaUI7QUFDbkIsSUFBSSxrREFBVTtBQUNkO0FBQ0EsRUFBRSwrREFBa0I7QUFDcEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Eb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdldEN1cnJlbnRQcm9qZWN0LFxuICBnZXRQcm9qZWN0QXRJbmRleCxcbiAgZ2V0UHJvamVjdExlbmd0aCxcbiAgc2V0Q3VycmVudFByb2plY3RJbmRleCxcbn0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtcGFuZWxcIik7XG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtdGl0bGVcIik7XG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKTtcblxuZnVuY3Rpb24gX2NyZWF0ZVByb2plY3RFbGVtZW50KGluZGV4KSB7XG4gIGNvbnN0IHByb2plY3QgPSBnZXRQcm9qZWN0QXRJbmRleChpbmRleCk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJ1dHRvblwiKTtcbiAgYnRuLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAvLyBVcGRhdGVzIHByb2plY3QgcGFuZWwgd2hlbiBwcm9qZWN0IGJ1dHRvbiBpcyBwcmVzc2VkXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgoaW5kZXgpO1xuICAgIF91cGRhdGVQcm9qZWN0Q29udGFpbmVyKHByb2plY3QpO1xuICB9KTtcblxuICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlVGFza0VsZW1lbnQodGFzaykge1xuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGRhdGFTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9wU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgdGFza0lucHV0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGR1ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgY29uc3QgYm90dG9tU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIC8vIEFkZCBjbGFzc2VzXG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgZGF0YVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImRhdGEtc2VjdGlvbnNcIik7XG4gIHRvcFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRvcC1zZWN0aW9uXCIpO1xuICB0YXNrSW5wdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWlucHV0LXNlY3Rpb25cIik7XG4gIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25zXCIpO1xuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ1dHRvblwiKTtcbiAgZWRpdEljb24uY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtZWRpdFwiKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ1dHRvblwiKTtcbiAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFcIiwgXCJmYS10cmFzaFwiKTtcbiAgYm90dG9tU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYm90dG9tLXNlY3Rpb25cIik7XG5cbiAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuICAvKlxuICB0aXRsZVxuICBkZXNjcmlwdGlvblxuICBkYXRlXG4gIHByaW9cbiAgY2hlY2tlZFxuICAqL1xuXG4gIC8vIFNldCB0YXNrIHZhbHVlcyB0byBlbGVtZW50XG4gIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLmNoZWNrZWQ7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIGR1ZVRleHQudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCh0YXNrLnByaW9yaXR5KTtcblxuICBib3R0b21TZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgZWRpdEJ0bi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIHRhc2tJbnB1dFNlY3Rpb24uYXBwZW5kQ2hpbGQoZHVlVGV4dCk7XG4gIHRhc2tJbnB1dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICB0b3BTZWN0aW9uLmFwcGVuZENoaWxkKHRhc2tJbnB1dFNlY3Rpb24pO1xuICBkYXRhU2VjdGlvbi5hcHBlbmRDaGlsZCh0b3BTZWN0aW9uKTtcbiAgZGF0YVNlY3Rpb24uYXBwZW5kQ2hpbGQoYm90dG9tU2VjdGlvbik7XG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGFTZWN0aW9uKTtcblxuICByZXR1cm4gdGFza0Rpdjtcbn1cblxuZnVuY3Rpb24gX3VwZGF0ZVByb2plY3RDb250YWluZXIoKSB7XG4gIF9jbGVhckVsZW1lbnRzKHRhc2tDb250YWluZXIpO1xuXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gZ2V0Q3VycmVudFByb2plY3QoKTtcblxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcblxuICBmb3IgKGNvbnN0IHRhc2sgb2YgY3VycmVudFByb2plY3QudGFza3MpIHtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVUYXNrRWxlbWVudCh0YXNrKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NsZWFyRWxlbWVudHMocGFyZW50KSB7XG4gIHdoaWxlIChwYXJlbnQubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdEVsZW1lbnRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdEVsZW1lbnRzKCkge1xuICBfY2xlYXJFbGVtZW50cyhwcm9qZWN0Q29udGFpbmVyKTtcblxuICBsZXQgbGVuZ3RoID0gZ2V0UHJvamVjdExlbmd0aCgpO1xuICBjb25zb2xlLmxvZyhcImxlbmd0aDogXCIgKyBsZW5ndGgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVQcm9qZWN0RWxlbWVudChpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0VsZW1lbnRzKCkge1xuICBfY2xlYXJFbGVtZW50cyh0YXNrQ29udGFpbmVyKTtcbiAgZm9yIChjb25zdCB0YXNrIG9mIGdldEN1cnJlbnRQcm9qZWN0KCkudGFza3MpIHtcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVUYXNrRWxlbWVudCh0YXNrKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0FkZFByb2plY3RNb2RhbCgpIHt9XG5cbmZ1bmN0aW9uIHNob3dBZGRUYXNrTW9kYWwoKSB7fVxuXG5leHBvcnQgeyB1cGRhdGVQcm9qZWN0RWxlbWVudHMsIHVwZGF0ZVRhc2tFbGVtZW50cyB9O1xuIiwibGV0IF9wcm9qZWN0cyA9IFtdO1xubGV0IF9jdXJyZW50UHJvamVjdEluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0KHRpdGxlKSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgdGFza3M6IFtdLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHRpdGxlKSB7XG4gIF9wcm9qZWN0cy5wdXNoKF9jcmVhdGVQcm9qZWN0KHRpdGxlKSk7XG4gIF9jdXJyZW50UHJvamVjdEluZGV4Kys7XG59XG5cbmZ1bmN0aW9uIG92ZXJyaWRlUHJvamVjdE9iamVjdChwcm9qZWN0KSB7XG4gIF9wcm9qZWN0c1tfY3VycmVudFByb2plY3RJbmRleF0gPSBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDdXJyZW50UHJvamVjdFZhbHVlcyhuZXdUaXRsZSwgbmV3VGFza3MpIHtcbiAgX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XS50aXRsZSA9IG5ld1RpdGxlO1xuICBfcHJvamVjdHNbX2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzID0gbmV3VGFza3M7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRQcm9qZWN0KCkge1xuICByZXR1cm4gX3Byb2plY3RzW19jdXJyZW50UHJvamVjdEluZGV4XTtcbn1cblxuZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3RJbmRleChuZXdJbmRleCkge1xuICBfY3VycmVudFByb2plY3RJbmRleCA9IG5ld0luZGV4O1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0QXRJbmRleChpbmRleCkge1xuICBpZiAoaW5kZXggPj0gX3Byb2plY3RzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIHJldHVybiBfcHJvamVjdHNbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0TGVuZ3RoKCkge1xuICByZXR1cm4gX3Byb2plY3RzLmxlbmd0aDtcbn1cblxuZXhwb3J0IHtcbiAgYWRkUHJvamVjdCxcbiAgb3ZlcnJpZGVQcm9qZWN0T2JqZWN0LFxuICB1cGRhdGVDdXJyZW50UHJvamVjdFZhbHVlcyxcbiAgZ2V0Q3VycmVudFByb2plY3QsXG4gIHNldEN1cnJlbnRQcm9qZWN0SW5kZXgsXG4gIGdldFByb2plY3RBdEluZGV4LFxuICBnZXRQcm9qZWN0TGVuZ3RoLFxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkdWVEYXRlLFxuICAgIHByaW9yaXR5LFxuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICB9O1xufVxuXG4vLyBUT0RPIG1ha2UgdXBkYXRlIHRhc2sgZnVuY3Rpb25cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgYWRkUHJvamVjdCwgZ2V0Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0RWxlbWVudHMsIHVwZGF0ZVRhc2tFbGVtZW50cyB9IGZyb20gXCIuL0RvbU1hbmFnZXJcIjtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnV0dG9uXCIpO1xuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZFByb2plY3QoXCJJbXBvcnRhbnQgUHJvamVjdFwiKTtcbiAgdXBkYXRlUHJvamVjdEVsZW1lbnRzKCk7XG59KTtcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBnZXRDdXJyZW50UHJvamVjdCgpLnRhc2tzLnB1c2goXG4gICAgY3JlYXRlVGFzayhcInRlc3RcIiwgXCJ0aGlzIGlzIGEgdGVzdFwiLCBcIjAyLzAyLzIyXCIsIFwicmVkXCIpXG4gICk7XG4gIHVwZGF0ZVRhc2tFbGVtZW50cygpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=