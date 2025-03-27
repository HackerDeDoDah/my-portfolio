//-- Matrix Rain Effect with Rusty CRT Screen --//

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const w = (canvas.width = window.innerWidth);
const h = (canvas.height = window.innerHeight);
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

// Function to create background gradient
function drawBackground() {
    const gradient = ctx.createRadialGradient(w / 2, h / 2, 100, w / 2, h / 2, w);
    gradient.addColorStop(0, '#323131');  // Center dark gray
    gradient.addColorStop(1, '#222222');  // Outer darker gray
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
}

// Function to add scanlines for CRT effect
function addScanlines() {
    for (let y = 0; y < h; y += 3) { // Every 3 pixels
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, y, w, 1);
    }
}

// Function to add static noise
function addStaticNoise() {
    const imageData = ctx.getImageData(0, 0, w, h);
    const pixels = imageData.data;

    for (let i = 0; i < pixels.length; i += 4) {
        const noise = (Math.random() * 50) - 25; // Random grain effect
        pixels[i] += noise;     // Red
        pixels[i + 1] += noise; // Green
        pixels[i + 2] += noise; // Blue
    }

    ctx.putImageData(imageData, 0, 0);
}

// Function for Matrix rain effect
function matrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Fade effect for text
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = '#0f0'; // Bright green text
    ctx.font = '32pt monospace';

    ypos.forEach((y, ind) => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|:;<>,.?/~";
        const text = characters[Math.floor(Math.random() * characters.length)];

        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
    });

    addStaticNoise();  // Apply noise effect
    addScanlines();    // Add CRT scanlines
}

// Function for flickering effect
function flickerEffect() {
    if (Math.random() > 0.97) { // 3% chance of flicker per frame
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, w, h);
    }
}

// Initialize and run animation
drawBackground();
setInterval(matrix, 50);
setInterval(flickerEffect, 500);

// Adjust canvas size when window resizes
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawBackground();
});

document.addEventListener("DOMContentLoaded", function() {
    const projects = document.getElementById("projects");
    const projectList = projects.querySelector("ol");

    projects.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents event bubbling
        projectList.style.display = (projectList.style.display === "block") ? "none" : "block";
    });

    // Optional: Close the list if clicking anywhere else
    document.addEventListener("click", function(event) {
        if (!projects.contains(event.target)) {
            projectList.style.display = "none";
        }
    });
});


// -- sound ---

document.addEventListener("DOMContentLoaded", function () {
    const runButton = document.querySelector(".key:nth-child(1)"); // Select the RUN button
    const runSound = document.getElementById("run-sound");
    const exitButton = document.querySelector(".key:nth-child(2)"); // Select the EXIT button
    const exitSound = document.getElementById("exit-sound");

    runButton.addEventListener("click", function () {
        if (runSound.paused) {
            runSound.currentTime = 0; // Reset to start
            runSound.play().catch(error => console.error("Audio play error:", error)); // Handle errors
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

// -- bottom monitor ---

document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#projects"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "projects.php"; // Load projects.php into the iframe
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#about"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "about.php"; // Load projects.php into the iframe
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#contact"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "contact.php"; // Load projects.php into the iframe
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#scion"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "scion.php"; // Load projects.php into the iframe
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#code"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "code.php"; // Load projects.php into the iframe
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#welcome"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "welcome.php"; // Load projects.php into the iframe
    });
});



//----------------------------------------
//----------------------------------------
//----------------------------------------

// -- monitor.php ---

document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#projects"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe2");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "projects.php"; // Load projects.php into the iframe
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#about"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe2");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "about.php"; // Load projects.php into the iframe
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#contact"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe2");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "contact.php"; // Load projects.php into the iframe
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#scion"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe2");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "scion.php"; // Load projects.php into the iframe
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#code"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe2");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "code.php"; // Load projects.php into the iframe
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const projectsListItem = document.querySelector("#welcome"); // Select the li with id 'projects'
    const monitorIframe = document.getElementById("monitor-iframe2");

    projectsListItem.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent any default link behavior (if any)
        monitorIframe.src = "welcome.php"; // Load projects.php into the iframe
    });
});

//------form-----------

// form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const company = document.getElementById('company');
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

        // Submit if all good
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
