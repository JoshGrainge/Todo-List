import { createProject } from "./projects";
import { createTask } from "./tasks";
import { updateProjectElements, updateTaskElements } from "./DomManager";

const addProjectBtn = document.querySelector("#add-project-button");
const addTaskBtn = document.querySelector("#add-task-button");

let projects = [];

addProjectBtn.addEventListener("click", () => {
  projects.push(createProject("test"));
  console.log("project in array: " + projects[0].title);
  updateProjectElements(projects);
  printArray(projects);
});

addTaskBtn.addEventListener("click", () => {
  // Check if there is a current selected project, and if not stop execution
  projects[0].tasks.push(createTask("test, this is a test, now, HIGH"));
  updateTaskElements(projects);
  printArray(projects[0].tasks);
});

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].title);
  }
}
