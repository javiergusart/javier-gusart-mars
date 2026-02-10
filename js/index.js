const today = new Date();
const thisYear = today.getFullYear();

const footer = document.createElement("footer");
document.body.appendChild(footer);

const footerFromDom = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 ${thisYear} Javier Gusart`;
footerFromDom.appendChild(copyright);

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Git",
  "MongoDB",
];

const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i += 1) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
