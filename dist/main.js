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
const projectContainer = document.querySelector(".projects-panel");
const projectTitle = document.querySelector("#project-title");
const taskContainer = document.querySelector(".task-container");

function _createProjectElement(project) {
  const btn = document.createElement("button");
  btn.classList.add("project-button");
  btn.textContent = project.title;

  // TODO set data on button for projects index value

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

function _clearElements(parent) {
  while (parent.lastElementChild) {
    parent.removeChild(parent.lastElementChild);
  }
}

function updateProjectElements(projects) {
  _clearElements(projectContainer);

  for (const project of projects) {
    projectContainer.appendChild(_createProjectElement(project));
  }
}

function updateTaskElements(currentProject, projects) {
  _clearElements(taskContainer);
  for (const task of currentProject.tasks) {
    taskContainer.appendChild(_createTaskElement(task));
  }
}

function updateProjectContainer(currentProject) {
  _clearElements(taskContainer);

  projectTitle.textContent = currentProject.title;

  for (const task of currentProject.tasks) {
    taskContainer.appendChild(_createTaskElement(task));
  }
}




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
function createProject(title) {
  return {
    title,
    tasks: [],
  };
}

// TODO make update project function


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

let projects = [];
let currentProject;

addProjectBtn.addEventListener("click", () => {
  projects.push((0,_projects__WEBPACK_IMPORTED_MODULE_0__.createProject)("test"));
  console.log("project in array: " + projects[0].title);
  (0,_DomManager__WEBPACK_IMPORTED_MODULE_2__.updateProjectElements)(projects);
  printArray(projects);
});

addTaskBtn.addEventListener("click", () => {
  // TEST SET CURRENT PROJECT. WILL REMOVE LATER
  currentProject = projects[0];

  // Check if there is a current selected project, and if not stop execution
  if (currentProject) {
    projects[0].tasks.push(
      (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createTask)("test", "this is a test", "02/02/22", "red")
    );
    (0,_DomManager__WEBPACK_IMPORTED_MODULE_2__.updateTaskElements)(currentProject, projects);
    printArray(projects[0].tasks);
  }
});

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].title);
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFcUQ7Ozs7Ozs7Ozs7Ozs7OztBQzVHOUM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNQTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7VUNWQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMkM7QUFDTjtBQUNvQzs7QUFFekU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHdEQUFhO0FBQzdCO0FBQ0EsRUFBRSxrRUFBcUI7QUFDdkI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtEQUFVO0FBQ2hCO0FBQ0EsSUFBSSwrREFBa0I7QUFDdEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Eb21NYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLXBhbmVsXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXRpdGxlXCIpO1xuY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIik7XG5cbmZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KSB7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIik7XG4gIGJ0bi50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cbiAgLy8gVE9ETyBzZXQgZGF0YSBvbiBidXR0b24gZm9yIHByb2plY3RzIGluZGV4IHZhbHVlXG5cbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVRhc2tFbGVtZW50KHRhc2spIHtcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBkYXRhU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IHRhc2tJbnB1dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkdWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGNvbnN0IGJvdHRvbVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAvLyBBZGQgY2xhc3Nlc1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gIGRhdGFTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJkYXRhLXNlY3Rpb25zXCIpO1xuICB0b3BTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b3Atc2VjdGlvblwiKTtcbiAgdGFza0lucHV0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1pbnB1dC1zZWN0aW9uXCIpO1xuICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stYnV0dG9uc1wiKTtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG4gIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoXCJmYVwiLCBcImZhLWVkaXRcIik7XG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idXR0b25cIik7XG4gIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImZhXCIsIFwiZmEtdHJhc2hcIik7XG4gIGJvdHRvbVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImJvdHRvbS1zZWN0aW9uXCIpO1xuXG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cbiAgLypcbiAgdGl0bGVcbiAgZGVzY3JpcHRpb25cbiAgZGF0ZVxuICBwcmlvXG4gIGNoZWNrZWRcbiAgKi9cblxuICAvLyBTZXQgdGFzayB2YWx1ZXMgdG8gZWxlbWVudFxuICBjaGVja2JveC5jaGVja2VkID0gdGFzay5jaGVja2VkO1xuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICBkdWVUZXh0LnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQodGFzay5wcmlvcml0eSk7XG5cbiAgYm90dG9tU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICBkZWxldGVCdG4uYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICB0YXNrSW5wdXRTZWN0aW9uLmFwcGVuZENoaWxkKGR1ZVRleHQpO1xuICB0YXNrSW5wdXRTZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gIHRvcFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgdG9wU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrSW5wdXRTZWN0aW9uKTtcbiAgZGF0YVNlY3Rpb24uYXBwZW5kQ2hpbGQodG9wU2VjdGlvbik7XG4gIGRhdGFTZWN0aW9uLmFwcGVuZENoaWxkKGJvdHRvbVNlY3Rpb24pO1xuICB0YXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRhU2VjdGlvbik7XG5cbiAgcmV0dXJuIHRhc2tEaXY7XG59XG5cbmZ1bmN0aW9uIF9jbGVhckVsZW1lbnRzKHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50Lmxhc3RFbGVtZW50Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RFbGVtZW50cyhwcm9qZWN0cykge1xuICBfY2xlYXJFbGVtZW50cyhwcm9qZWN0Q29udGFpbmVyKTtcblxuICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKF9jcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVGFza0VsZW1lbnRzKGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0cykge1xuICBfY2xlYXJFbGVtZW50cyh0YXNrQ29udGFpbmVyKTtcbiAgZm9yIChjb25zdCB0YXNrIG9mIGN1cnJlbnRQcm9qZWN0LnRhc2tzKSB7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlVGFza0VsZW1lbnQodGFzaykpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RDb250YWluZXIoY3VycmVudFByb2plY3QpIHtcbiAgX2NsZWFyRWxlbWVudHModGFza0NvbnRhaW5lcik7XG5cbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGU7XG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIGN1cnJlbnRQcm9qZWN0LnRhc2tzKSB7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChfY3JlYXRlVGFza0VsZW1lbnQodGFzaykpO1xuICB9XG59XG5cbmV4cG9ydCB7IHVwZGF0ZVByb2plY3RFbGVtZW50cywgdXBkYXRlVGFza0VsZW1lbnRzIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHRhc2tzOiBbXSxcbiAgfTtcbn1cblxuLy8gVE9ETyBtYWtlIHVwZGF0ZSBwcm9qZWN0IGZ1bmN0aW9uXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gIHJldHVybiB7XG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBwcmlvcml0eSxcbiAgICBjaGVja2VkOiBmYWxzZSxcbiAgfTtcbn1cblxuLy8gVE9ETyBtYWtlIHVwZGF0ZSB0YXNrIGZ1bmN0aW9uXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZVByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyB1cGRhdGVQcm9qZWN0RWxlbWVudHMsIHVwZGF0ZVRhc2tFbGVtZW50cyB9IGZyb20gXCIuL0RvbU1hbmFnZXJcIjtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtYnV0dG9uXCIpO1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXRhc2stYnV0dG9uXCIpO1xuXG5sZXQgcHJvamVjdHMgPSBbXTtcbmxldCBjdXJyZW50UHJvamVjdDtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0cy5wdXNoKGNyZWF0ZVByb2plY3QoXCJ0ZXN0XCIpKTtcbiAgY29uc29sZS5sb2coXCJwcm9qZWN0IGluIGFycmF5OiBcIiArIHByb2plY3RzWzBdLnRpdGxlKTtcbiAgdXBkYXRlUHJvamVjdEVsZW1lbnRzKHByb2plY3RzKTtcbiAgcHJpbnRBcnJheShwcm9qZWN0cyk7XG59KTtcblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAvLyBURVNUIFNFVCBDVVJSRU5UIFBST0pFQ1QuIFdJTEwgUkVNT1ZFIExBVEVSXG4gIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNbMF07XG5cbiAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSBjdXJyZW50IHNlbGVjdGVkIHByb2plY3QsIGFuZCBpZiBub3Qgc3RvcCBleGVjdXRpb25cbiAgaWYgKGN1cnJlbnRQcm9qZWN0KSB7XG4gICAgcHJvamVjdHNbMF0udGFza3MucHVzaChcbiAgICAgIGNyZWF0ZVRhc2soXCJ0ZXN0XCIsIFwidGhpcyBpcyBhIHRlc3RcIiwgXCIwMi8wMi8yMlwiLCBcInJlZFwiKVxuICAgICk7XG4gICAgdXBkYXRlVGFza0VsZW1lbnRzKGN1cnJlbnRQcm9qZWN0LCBwcm9qZWN0cyk7XG4gICAgcHJpbnRBcnJheShwcm9qZWN0c1swXS50YXNrcyk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcmludEFycmF5KGFycikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGNvbnNvbGUubG9nKGFycltpXS50aXRsZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==