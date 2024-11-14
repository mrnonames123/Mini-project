window.onload = function() {
    // Line Chart for Performance Overview
    const ctxLine = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Employee Performance',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(97, 218, 251, 0.1)',
                borderColor: '#61DAFB',
                borderWidth: 3,
                pointBackgroundColor: '#21A1F1',
                pointBorderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Performance: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // Bar Chart for Employee Grades
    const ctxBar = document.getElementById('gradesChart').getContext('2d');
    const gradesChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['TaskID:5667', 'TaskID:6789', 'TaskID:6812', 'TaskID:7912', 'TaskID:1234'],
            datasets: [{
                label: 'Number of Tasks Completed',
                data: [12, 19, 3, 5, 2],
                backgroundColor: ['#61DAFB', '#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
                borderColor: '#21A1F1',
                borderWidth: 1,
                hoverBackgroundColor: '#21A1F1'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.raw} Employees`;
                        }
                    }
                }
            }
        }
    });

    // Pie Chart for Department Distribution
    const ctxPie = document.getElementById('departmentChart').getContext('2d');
    const departmentChart = new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['TaskID:5667', 'TaskID:6789', 'TaskID:6812', 'TaskID:7912', 'TaskID:1234'],
            datasets: [{
                label: 'Error Rates',
                data: [15, 25, 30, 20, 10],
                backgroundColor: ['#61DAFB', '#21A1F1', '#FF6384', '#36A2EB', '#FFCE56'],
                hoverOffset: 5
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
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
