document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Validation
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
  
    // Simulate Sign Up Success (Replace with backend integration)
    alert(`Sign up successful! Welcome, ${name}.`);
    window.location.href = "index.html"; // Redirect to login page
  });
  