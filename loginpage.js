document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

 const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

 const savedEmail = localStorage.getItem('email');
  const savedPassword = localStorage.getItem('password');
  const username = localStorage.getItem('username'); // Retrieve username

   if (email === savedEmail && password === savedPassword) {
    localStorage.setItem('userLoggedIn', 'true');
    console.log('Login successful, redirecting to dashboard...'); // Confirm successful login

    window.location.href = 'temp.html';
  } else {
    alert('Invalid email or password');
  }
});
