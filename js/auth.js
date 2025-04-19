// js/auth.js
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

let users = JSON.parse(localStorage.getItem("users")) || [];

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    const existingUser = users.find(user => user.email === email);
    if (existingUser) return alert("User already exists!");

    users.push({ email, password, journal: [], periodData: [] });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful. Please log in.");
    signupForm.reset();
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return alert("Invalid login!");

    localStorage.setItem("loggedInUser", email);
    window.location.href = "periodtracker.html"; // after login
  });
}
