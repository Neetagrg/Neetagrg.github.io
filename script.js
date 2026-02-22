// Project Carousel Navigation
document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentProjectSpan = document.getElementById('current-project');
    
    let currentIndex = 0;
    const totalProjects = projects.length;

    function showProject(index) {
        projects.forEach((project, i) => {
            project.classList.remove('active');
            if (i === index) {
                project.classList.add('active');
            }
        });
        
        currentProjectSpan.textContent = index + 1;
        
        // Update button states
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === totalProjects - 1;
    }

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showProject(currentIndex);
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentIndex < totalProjects - 1) {
            currentIndex++;
            showProject(currentIndex);
        }
    });

    // Initialize
    showProject(0);
});