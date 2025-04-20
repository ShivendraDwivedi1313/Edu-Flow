document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // Extracting values from the input fields
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rollnumber = document.getElementById('rollnumber').value;
        const branch = document.getElementById('branch').value;

        // Validate all fields are filled
        if (!username || !email || !password || !rollnumber || !branch) {
            alert('Please fill in all fields');
            return;
        }

        // Determine role based on roll number/teacher ID
        const role = rollnumber.toLowerCase().startsWith('t') ? 'teacher' : 'student';

        // Save user data to localStorage
        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('rollnumber', rollnumber);
        localStorage.setItem('branch', branch);
        localStorage.setItem('role', role);

        console.log('Signup successful - username:', username);

        window.location.href = 'temp.html'; // Redirect to dashboard
  // window.location is a  built in java script object - represents the current url of the window  and the href is the hypertext reference  href is used to get/set the utl of the page url=uniform resource locator it is reference or the address is used to access the resources on the internet 
    });
});