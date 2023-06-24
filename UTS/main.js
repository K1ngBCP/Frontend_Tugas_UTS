document.getElementById('login-from').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Retrieve the email and password values
  var email = document.getElementById('email-id').value;
  var password = document.getElementById('password-id').value;

  // Check if email and password are filled
  if (email && password) {
    window.location.href = 'index.html';
  } else {
    // Display an error message
    var errorMessage = document.querySelector('.error-message');
    errorMessage.textContent = 'Please enter your email and password.';
  }
});
