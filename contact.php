<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HackerDeDoDah/myBoot@main/myboot.min.css">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="contact-container">
        <div class="info">
            <div class="get">
                <h2>Get In Touch</h2>
                <p>Please fill out the form and give a short message about your project. We will get back to you as soon as possible.</p>
            </div>
            <div class="number">
                <h2>Or call us</h2>
                <p>Call us: <a href="tel:+447394942864">07### ######</a></p>
                <p>Monday - Friday: 8am - 5pm</p>
                <p>To arrange a consultation or to discuss ongoing projects, don't hesitate to contact us.</p>
            </div>
        </div>
        <div class="form-container">
            <div class="contact-form" >
                <form id="form" action="process_form.php" method="POST">
                        
                        

                    <div class="form-group">
                        <input type="text" id="name" name="name" placeholder="Name" value="<?php echo htmlspecialchars($_GET['name'] ?? ''); ?>"
                        style="<?php echo isset($_GET['errors']['name']) ? 'border: 2px solid red;' : ''; ?>" required>
                    </div>
                    <div class="form-group">
                        <input type="email" id="email" name="email" placeholder="Email" value="<?php echo htmlspecialchars($_GET['email'] ?? ''); ?>"
                        style="<?php echo isset($_GET['errors']['email']) ? 'border: 2px solid red;' : ''; ?>" required>
                    </div>
                    <div class="form-group">
                        <input type="text" id="company" name="company" placeholder="Company" value="<?php echo htmlspecialchars($_GET['company'] ?? ''); ?>"
                        style="<?php echo isset($_GET['errors']['company']) ? 'border: 2px solid red;' : ''; ?>">
                    </div>
                    <div class="form-group">
                        <textarea id="message" name="message" rows="5" placeholder="Message" value="<?php echo htmlspecialchars($_GET['message'] ?? ''); ?>"
                        style="<?php echo isset($_GET['errors']['message']) ? 'border: 2px solid red;' : ''; ?>" required></textarea>
                    </div>
                    <button type="submit" id="submitButton">Submit</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>