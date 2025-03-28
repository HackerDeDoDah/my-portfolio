//-- UI Functionalities --

document.addEventListener("DOMContentLoaded", function() {
    const projects = document.getElementById("projects");
    const projectList = projects.querySelector("ol");

    projects.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents event bubbling
        projectList.style.display = (projectList.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function(event) {
        if (!projects.contains(event.target)) {
            projectList.style.display = "none";
        }
    });

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
});

// -- Sound Effects --

document.addEventListener("DOMContentLoaded", function () {
    const runButton = document.querySelector(".key:nth-child(1)");
    const runSound = document.getElementById("run-sound");
    const exitButton = document.querySelector(".key:nth-child(2)");
    const exitSound = document.getElementById("exit-sound");

    runButton.addEventListener("click", function () {
        if (runSound.paused) {
            runSound.currentTime = 0;
            runSound.play().catch(error => console.error("Audio play error:", error));
        }
    });

    exitButton.addEventListener("click", function () {
        if (exitSound.paused) {
            exitSound.currentTime = 0;
            exitSound.play().catch(error => console.error("Audio play error:", error));
            window.close();
        }
    });
});

// -- Bottom Monitor Navigation --

document.addEventListener("DOMContentLoaded", function () {
    const monitorIframe = document.getElementById("monitor-iframe");
    const pages = ["projects", "about", "contact", "scion", "code", "welcome"];
    
    pages.forEach(page => {
        const listItem = document.querySelector(`#${page}`);
        listItem.addEventListener("click", function (event) {
            event.preventDefault();
            monitorIframe.src = `${page}.php`;
        });
    });
});

// -- Form Submission --

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        let isValid = true;

        const errorElements = form.querySelectorAll('.error');
        errorElements.forEach(el => el.remove());

        if (!name.value.trim()) {
            isValid = false;
            showError(name, 'Your name is required.');
        }

        if (!validateEmail(email.value.trim())) {
            isValid = false;
            showError(email, 'Please enter a valid email address.');
        }

        if (!message.value.trim()) {
            isValid = false;
            showError(message, 'Message is required.');
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.submit();
        }
    });

    function showError(inputElement, message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.style.fontSize = '0.9rem';
        error.textContent = message;
        inputElement.parentElement.appendChild(error);
    }

    function validateEmail(email) {
        const emailPattern = /^(?!test@test$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});
