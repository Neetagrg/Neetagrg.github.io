// Project carousel navigation
let currentProject = 0;
const projects = document.querySelectorAll('.project');
const totalProjects = projects.length;
const currentCounter = document.getElementById('current-project');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showProject(index) {
    projects.forEach(project => project.classList.remove('active'));
    projects[index].classList.add('active');
    currentCounter.textContent = index + 1;
    
    // Update button states
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === totalProjects - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentProject > 0) {
        currentProject--;
        showProject(currentProject);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentProject < totalProjects - 1) {
        currentProject++;
        showProject(currentProject);
    }
});

// Initialize
showProject(currentProject);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});