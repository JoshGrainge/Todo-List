import { getAllProjects, loadProjects } from "./projects";
import { loadTheme } from "./themes";

const projectsKey = "projects";
const themeKey = "theme";

const themeSelector = document.querySelector("#themes");

function loadPersistentData() {
  if (localStorage.getItem(projectsKey)) {
    loadProjects(JSON.parse(localStorage.getItem(projectsKey)));
  }

  if (localStorage.getItem(themeKey)) {
    const val = localStorage.getItem(themeKey);
    loadTheme(val);
    themeSelector.value = val;
  }
}

function saveProjectsPersistentData() {
  const projects = getAllProjects();
  localStorage.setItem(projectsKey, JSON.stringify(projects));
}

function saveThemePersistenData() {
  localStorage.setItem(themeKey, themeSelector.value);
}

function clearLocalStorage() {
  localStorage.clear();
}

export {
  loadPersistentData,
  saveProjectsPersistentData,
  saveThemePersistenData,
  clearLocalStorage,
};
