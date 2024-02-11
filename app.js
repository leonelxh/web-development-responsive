function showLogin() {
    document.getElementById("loginOverlay").style.display = "flex";
  }

  // JavaScript function to close the login form
  function closeLogin() {
    document.getElementById("loginOverlay").style.display = "none";
  }
  
  function saveLogin(event) {
    // Prevent the form from submitting the traditional way
    event.preventDefault();

    // Get the input values
    const firstName = document.getElementById('name').value;
    const lastName = document.getElementById('lname').value;

    // Save login information to local storage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);

    // Hide the login form
    document.getElementById('loginForm').style.display = 'none';

    // Display the welcome message
    document.getElementById('welcomeMessage').style.display = 'block';
    document.getElementById('userFullName').innerText = firstName + ' ' + lastName;
}
function saveLogin(event) {
  event.preventDefault();
  const firstName = document.getElementById('name').value;
  const lastName = document.getElementById('lname').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);

  if (rememberMe) {
      // Set a flag in localStorage indicating that the user wants to be remembered
      localStorage.setItem('rememberMe', 'true');
  }

  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('welcomeMessage').style.display = 'block';
  document.getElementById('userFullName').innerText = firstName + ' ' + lastName;
}
document.addEventListener('DOMContentLoaded', function () {
  const rememberMe = localStorage.getItem('rememberMe');

  if (rememberMe === 'true') {
      const firstName = localStorage.getItem('firstName');
      const lastName = localStorage.getItem('lastName');

      // Fill in the login form with remembered values
      document.getElementById('name').value = firstName;
      document.getElementById('lname').value = lastName;

      // Optionally, you can trigger the form submission automatically
      // saveLogin(new Event('submit'));
  }
});
function readmorepage(){
  window.location.href = "read.more.page";
}