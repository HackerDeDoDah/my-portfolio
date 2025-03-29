<?php
require 'vendor/autoload.php';  // PHPMailer autoload

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

// Load environment variables
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$servername = $_ENV['DB_HOST'];
$username = $_ENV['DB_USER'];
$password = $_ENV['DB_PASS'];
$database = "form_data";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture and sanitize form data
    $name = htmlspecialchars(trim($_POST['name'] ?? ''), ENT_QUOTES | ENT_HTML5);
    $company = htmlspecialchars(trim($_POST['company'] ?? ''), ENT_QUOTES | ENT_HTML5);
    $email = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message'] ?? ''), ENT_QUOTES | ENT_HTML5);

    // Array to hold error messages
    $errors = [];

    // Validate form data
    if (!$name) $errors['name'] = "Name is required.";
    if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL) || $email === 'test@test.com') {
        $errors['email'] = "Valid email is required.";
    }
    if (!$message) $errors['message'] = "Message is required.";

    // If there are validation errors, redirect back to the form with error messages
    if (!empty($errors)) {
        $queryParams = http_build_query([
            'errors' => $errors,
            'name' => $name,
            'company' => $company,
            'email' => $email,
            'message' => $message,
        ]);
        header("Location: contact.php?$queryParams#form");
        exit;
    }

    // Insert form data into the database
    $sql = "INSERT INTO contacts (name, company, email, message) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $name, $company, $email, $message);
    $stmt->execute();

    // Send email using PHPMailer if data insertion is successful
    try {
        $mail = new PHPMailer(true);
        
        //Server settings
        $mail->isSMTP();
        $mail->Host = $_ENV['SMTP_HOST'];
        $mail->SMTPAuth = true;
        $mail->Port = $_ENV['SMTP_PORT'];
        $mail->Username = $_ENV['SMTP_USERNAME'];
        $mail->Password = $_ENV['SMTP_PASSWORD'];

        //Recipients
        $mail->setFrom($_ENV['SMTP_FROM_EMAIL'], $_ENV['SMTP_FROM_NAME']);
        $mail->addAddress($_ENV['SMTP_TO_EMAIL'], $_ENV['SMTP_TO_NAME']);

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Portfolio Contact Query';
        $mail->Body    = "<h1>New Portfolio Contact Query</h1>
                        <p><strong>You have a message from</strong> $name</p>
                        <p><strong>Company:</strong> $company</p>
                        <p><strong>Email:</strong> $email</p>
                        <p><strong>Message reads:</strong> $message</p>";

        // Send email
        $mail->send();
        echo 'Message has been sent';
        
        // Redirect to success page after email is sent
        header("Location: success.php?success=1#form");
        exit;
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
