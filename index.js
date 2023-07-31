const projects = document.querySelectorAll(".projects");
const projectIndexDisplays = document.querySelectorAll(".projectIndexDisplay");
let currentProjectIndex = 0;

function changeProject(direction) {
    projects[currentProjectIndex].style.display = "none";
    currentProjectIndex = (currentProjectIndex + direction + projects.length) % projects.length;
    updateProjectsUI();
}
function updateProjectsUI() {
    projects[currentProjectIndex].style.display = window.innerWidth > 640 ? "grid" : "block";
    projectIndexDisplays.forEach((display) => {
        display.innerHTML = `${currentProjectIndex + 1}/${projects.length}`;
    });
}
updateProjectsUI();
function check(e) {
    e.preventDefault();
}
