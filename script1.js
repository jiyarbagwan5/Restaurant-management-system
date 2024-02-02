// script1.js

function attemptLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulate server-side authentication (replace this with your actual server-side authentication logic)
    if (username === "jiya" && password === "jiya") {
        alert("Login successful!");

        // Redirect to another page (replace 'index.html' with the desired URL)
        window.location.href = 'index.html';
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function attemptRegistration() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // Simulate server-side registration (replace this with your actual server-side registration logic)
    alert("Registration successful! You can now log in.");
}

function showRegistrationForm() {
    var loginContainer = document.getElementById("loginContainer");
    var registrationContainer = document.getElementById("registrationContainer");

    if (loginContainer && registrationContainer) {
        loginContainer.style.display = "none";
        registrationContainer.style.display = "block";
    }
}

function showLoginForm() {
    var loginContainer = document.getElementById("loginContainer");
    var registrationContainer = document.getElementById("registrationContainer");

    if (loginContainer && registrationContainer) {
        loginContainer.style.display = "block";
        registrationContainer.style.display = "none";
    }
}
