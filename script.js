// Function to toggle the login form
function toggleLoginForm() {
    let loginPopup = document.getElementById("loginPopup");
    loginPopup.style.display = loginPopup.style.display === "block" ? "none" : "block";
}

// Attach event listener to Login button
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".login").addEventListener("click", toggleLoginForm);
});

// Handle login submission
function handleLogin(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard or any other page
    } else {
        alert("Please enter valid credentials!");
    }
}
