

// JavaScript function to update the progress circle percentage
function updateProgressCircle(element, percentage) {
    element.style.setProperty('--percentage', percentage);
    element.querySelector('.percentage').textContent = percentage + '%';
}

// Example usage: Update the progress circle to 85%
const progressCircle = document.querySelector('.progress-circle');
updateProgressCircle(progressCircle, 85);

const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    try {
        const response = await fetch('http://localhost:5000/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, role })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Registration successful');
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Login successful');
            // Handle role-based redirection based on the response (data.user.role)
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
