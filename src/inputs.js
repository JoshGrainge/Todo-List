import { addProject, getCurrentProject } from "./projects";
import { createTask } from "./tasks";

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
  addProject(projectTitleInput.value);
  projectTitleInput.value = "";
}

function submitTaskFields() {
  // Update priority radio object
  taskPriorityInput = document.querySelector("input[name='priority']:checked");

  getCurrentProject().tasks.push(
    createTask(
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

export { submitProjectFields, submitTaskFields };
