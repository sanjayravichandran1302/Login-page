document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  let message = document.getElementById("message");

  // Simple demo validation
  if (user === "aakash" && pass === "1234") {
    message.style.color = "lightgreen";
    message.innerText = "Login Successful ✅";
  } else {
    message.style.color = "red";
    message.innerText = "Invalid Username or Password ❌";
  }
});