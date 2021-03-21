// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

//import fs from "fs";

// const user = {
//   id: 1,
//   name: "John Doe",
//   age: 22,
// };

// const data = JSON.stringify(user);

// fs.writeFile("user.json", data, (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("JSON data is saved.");
// });

const signUpButton = document.getElementById("sign-up-button");
const newUsername = document.getElementById("new-user-username");
const newUserPass = document.getElementById("new-user-password");
const newUserConfirmPass = document.getElementById("confirm-password");
const javaSelection = document.getElementById("java");
const cppSelection = document.getElementById("c++");

let userJSON = {};

function setUser() {
  if (newUsername.value == "" || newUserPass.value == "") {
    alert("Unable to Create Account");
    return;
  } else if (localStorage.getItem(newUsername.value)) {
    alert("Username already exists.");
    return;
  }

  userJSON.username = newUsername.value;
  userJSON.password = newUserPass.value;
  userJSON.id = UUID.generate();

  if (javaSelection.checked) {
    userJSON.selection = 1;
  } else if (cppSelection.checked) {
    userJSON.selection = 2;
  } else if (cppSelection.checked && javaSelection.checked) {
    userJSON.selection = 3;
  } else {
    alert("Please select the Java, C++, or both options.");
    return;
  }

  let userJSONString = JSON.stringify(userJSON);

  localStorage.setItem(userJSON.username, userJSONString);

  newUsername.value = "";
  newUserPass.value = "";
  newUserConfirmPass.value = "";

  window.location.href = "./login.html";
}

signUpButton.addEventListener("click", setUser);
