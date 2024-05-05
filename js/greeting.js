const nameForm = document.getElementById("name-form");
const nameInput = document.querySelector("#name-form input");
const greetingMent = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function handleNameFormSubmit(e) {
  e.preventDefault();
  nameForm.classList.add(HIDDEN_CLASSNAME);
  const userName = nameInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  handleUserName(userName);
}

function handleUserName(userName) {
  greetingMent.innerHTML = `Hello, ${userName}`;
  greetingMent.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if(savedUserName === null){
  nameForm.classList.remove(HIDDEN_CLASSNAME);
  nameForm.addEventListener("submit", handleNameFormSubmit);
} else {
  handleUserName(savedUserName);
}