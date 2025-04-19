// auth.js

// ------------------- SIGN UP ------------------- //
function signupUser(event) {
    event.preventDefault();
  
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();
  
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      alert("User already exists. Please login.");
      window.location.href = "login.html";
      return;
    }
  
    const newUser = {
      email: email,
      password: password,
      journal: [],
      periodLogs: []
    };
  
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", email);
  
    alert("Signup successful! Redirecting to home.");
    window.location.href = "index.html";
  }
  
  // ------------------- LOGIN ------------------- //
  function loginUser(event) {
    event.preventDefault();
  
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
  
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const validUser = users.find(user => user.email === email && user.password === password);
  
    if (!validUser) {
      alert("Invalid email or password.");
      return;
    }
  
    localStorage.setItem("currentUser", email);
    alert("Login successful! Redirecting to home.");
    window.location.href = "index.html";
  }
  
  // ------------------- LOGOUT ------------------- //
  function logoutUser() {
    localStorage.removeItem("currentUser");
    alert("You have been logged out.");
    window.location.href = "login.html";
  }
  