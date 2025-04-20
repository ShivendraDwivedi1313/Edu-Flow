// index.js
function showCredentials(role) {
    const credentials = document.getElementById('credentials');
    const loginBtn = document.querySelector('.login-btn');
    
    
    credentials.classList.add('visible');
    
 
    loginBtn.textContent = `LOGIN AS ${role.toUpperCase()}`;
    
  
    document.querySelectorAll('.role-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
  
    credentials.scrollIntoView({ behavior: 'smooth', block: 'start' });
}