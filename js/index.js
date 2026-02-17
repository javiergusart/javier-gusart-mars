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

const messageForm = document.querySelector('form[name="leave_message"]');
const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");

const toggleMessageSection = () => {
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
};

toggleMessageSection();

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;

  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.type = "button";

  editButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    const messageSpan = entry.querySelector("span");
    const editedMessage = window.prompt(
      "Edit your message:",
      messageSpan.innerText,
    );

    if (editedMessage !== null) {
      messageSpan.innerText = editedMessage;
    }
  });

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", (event) => {
    const entry = event.target.parentNode;
    entry.remove();
    toggleMessageSection();
  });

  newMessage.appendChild(editButton);
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  toggleMessageSection();

  messageForm.reset();
});
