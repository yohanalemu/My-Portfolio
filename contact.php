<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

session_start();


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    if (!$name || !$email || !$message) {
        $_SESSION["error"] = "Please fill in all fields correctly.";
        header("Location: index.php#contact");
        exit;
    }

    $mail = new PHPMailer(true);

    try {
    
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'yohanaamichael7@gmail.com'; 
        $mail->Password   = 'jvlj ytvg zeob imry';   
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

   
        $mail->setFrom('yohanaamichael7@gmail.com', 'Yohana');
        $mail->addAddress('yohanaamichael7@gmail.com'); 

      
        $mail->isHTML(true);
        $mail->Subject = 'New message from portfolio contact form';
        $mail->Body    = "<strong>Name:</strong> $name<br><strong>Email:</strong> $email<br><strong>Message:</strong><br>$message";

        $mail->send();
    } catch (Exception $e) {
        $_SESSION["error"] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }

    header("Location: thank-you.html");
    exit;
}
