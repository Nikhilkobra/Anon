// Handle the form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Simulating login (you should replace this with backend integration)
    if (email === "test@example.com" && password === "password123") {
      alert("Login successful!");
      window.location.href = "home.html"; // Redirect to home page
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
  