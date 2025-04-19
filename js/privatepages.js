// js/privatePages.js
const currentUser = localStorage.getItem("loggedInUser");
if (!currentUser) {
  alert("Please log in to access this page.");
  window.location.href = "login.html";
}
