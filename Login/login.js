let lastUser = "LastUser";
const existingUsername = document.getElementById("user-username");
const existingUserPassword = document.getElementById("user-password");
const loginButton = document.getElementById("login-button");

function verifyUser() {
  if (existingUsername.value == "" || existingUserPassword.value == "") {
    alert("Invalid Username or Password");
  }

  const getUser = localStorage.getItem(existingUsername.value);
  const getUserJSON = JSON.parse(getUser);
  localStorage.setItem(lastUser, getUserJSON.username);

  if (getUserJSON.password === existingUserPassword.value) {
    window.location.href = "../main.html";
  } else {
    alert("Wrong Password or Username");
    existingUserPassword.value = "";
  }
}

loginButton.addEventListener("click", verifyUser);
