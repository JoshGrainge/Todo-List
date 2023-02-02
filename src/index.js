import { createProject } from "./projects";
import { createTask } from "./tasks";
import { updateProjectElements, updateTaskElements } from "./DomManager";

const addProjectBtn = document.querySelector("#add-project-button");
const addTaskBtn = document.querySelector("#add-task-button");

let projects = [];
let currentProject;

addProjectBtn.addEventListener("click", () => {
  projects.push(createProject("test"));
  console.log("project in array: " + projects[0].title);
  updateProjectElements(projects);
  printArray(projects);
});

addTaskBtn.addEventListener("click", () => {
  // TEST SET CURRENT PROJECT. WILL REMOVE LATER
  currentProject = projects[0];

  // Check if there is a current selected project, and if not stop execution
  if (currentProject) {
    projects[0].tasks.push(
      createTask("test", "this is a test", "02/02/22", "red")
    );
    updateTaskElements(currentProject, projects);
    printArray(projects[0].tasks);
  }
});

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].title);
  }
}
