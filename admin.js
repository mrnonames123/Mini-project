window.onload = function() {
    // Line Chart for User Growth
    const ctxUser = document.getElementById('userChart').getContext('2d');
    const userChart = new Chart(ctxUser, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'User Growth',
                data: [100, 120, 110, 100, 180, 160],
                backgroundColor: 'rgba(97, 218, 251, 0.2)',
                borderColor: '#61DAFB',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Bar Chart for Active Projects
    const ctxProject = document.getElementById('projectChart').getContext('2d');
    const projectChart = new Chart(ctxProject, {
        type: 'bar',
        data: {
            labels: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E'],
            datasets: [{
                label: 'Active Projects',
                data: [5, 1, 4, 3, 4],
                backgroundColor: '#61DAFB',
                borderColor: '#21A1F1',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie Chart for Department Distribution
    const ctxAdminDept = document.getElementById('adminDepartmentChart').getContext('2d');
    const departmentChart = new Chart(ctxAdminDept, {
        type: 'pie',
        data: {
            labels: ['HR', 'Engineering', 'Sales', 'Marketing', 'Support'],
            datasets: [{
                label: 'Department Tasks Distribution',
                data: [15, 25, 30, 20, 10],
                backgroundColor: ['#61DAFB', '#21A1F1', '#FF6384', '#36A2EB', '#FFCE56'],
            }]
        },
        options: {
            responsive: true
        }
    });

    // Dropdown functionality
    const userProfile = document.querySelector('.user-profile');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    userProfile.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show-dropdown');
    });

    window.addEventListener('click', (e) => {
        if (!userProfile.contains(e.target)) {
            dropdownMenu.classList.remove('show-dropdown');
        }
    });
};
