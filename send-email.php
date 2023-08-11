<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "kogulkomi@gmail.com"; // Your email address
    $headers = "From: $email";

    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
