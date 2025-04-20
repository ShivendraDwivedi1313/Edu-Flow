document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();

        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rollnumber = document.getElementById('rollnumber').value;
        const branch = document.getElementById('branch').value;

        
        if (!username || !email || !password || !rollnumber || !branch) {
            alert('Please fill in all fields');
            return;
        }

        
        const role = rollnumber.toLowerCase().startsWith('t') ? 'teacher' : 'student';


        localStorage.setItem('userLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('rollnumber', rollnumber);
        localStorage.setItem('branch', branch);
        localStorage.setItem('role', role);

        console.log('Signup successful - username:', username);

        window.location.href = 'temp.html'; });
});
