<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChrisDayPro | Portfolio</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HackerDeDoDah/myBoot@main/myboot.min.css">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <main>
        <div class="container">
            <section class="console-outer b-rad-3">
                <div class="console-inner b-rad-3">
                    <div class="console-screen b-rad-4 screen" id="console-screen">
                        <ul>
                            <li><a id="welcome" href="#screws">Welcome! (click RUN)</a></li>
                            <li><a id="projects" href="#screws">Projects</a></li>
                            <li><a id="about" href="#screws">About Me</a></li>
                            <li><a id="contact" href="#screws">Contact Me</a></li>
                            <li><a id="scion" href="#screws">Scion Project</a></li>
                            <li><a id="code" href="#screws">Code Snippets</a></li>
                        </ul>
                    </div>
                    <div class="button-container">
                        <div class="key">RUN</div>
                        <audio id="run-sound">
                            <source src="sounds/welcome to the future.m4a" type="audio/mp4">
                        </audio>
                        <div class="key">EXIT</div>
                        <audio id="exit-sound">
                            <source src="sounds/ohbot.m4a" type="audio/mp4">
                        </audio>
                    </div>
                </div>
            </section>
            
            <section class="matrix-outer b-rad-3">
                <div class="matrix-inner b-rad-3">
                    <div class="matrix-screen b-rad-4">
                        <!-- <canvas id="canvas" class="b-rad-4" placeholder="Loading Teminal..."></canvas> -->
                    </div>
                </div>
            </section>
        </div>

        <section class="screw-container" id="screws">
            <div class="screw"></div>
            <div class="screw"></div>
            <div class="screw"></div>
            <div class="screw"></div>
        </section>

        <section class="monitor-outer b-rad-3">
            <div class="monitor-inner b-rad-3">
                <div class="monitor-screen b-rad-4 screen" id="monitor-screen">
                    <iframe id="monitor-iframe" src="" frameborder="0"></iframe>
                </div>
            </div>
        </section>

        <section class="screw-container">
            <div class="screw"></div>
            <div class="screw"></div>
            <div class="screw"></div>
            <div class="screw"></div>
        </section>

        <section>
            <img class="cog1" src="images/cog2.webp" alt="cog">
            <img class="cog2" src="images/cog1.png" alt="cog">
        </section>
    </main>

    <!-- <footer>
        <p>&copy; Chris Day</p>
    </footer> -->
    <script src="scripts.js"></script>
</body>
</html>