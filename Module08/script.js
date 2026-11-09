const projects = [
{
    title: "Portfolio Website",
    description: "A responsive website created with HTML and CSS."
},
{
    title: "Weather App",
    description: "An application that displays weather information."
},
{
    title: "Task Manager",
    description: "A tool for organizing daily tasks, planning ahead, and creating shared events"
},
{
    title: "Calculator",
    description: "A tool for basic arithmetic. "
}
];

function displayProjects() {
const projectList = document.getElementById("projectList");
projects.forEach(function(project) {
const card = document.createElement("div");
card.innerHTML = `
<h2>${project.title}</h2>
<p>${project.description}</p>
`;
projectList.appendChild(card);
});
}
displayProjects();