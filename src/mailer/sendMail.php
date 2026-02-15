<?php
header('Content-Type: application/json');

$rdir = str_replace("\\", "/", __DIR__);
require $rdir.'/PHPMailer/src/Exception.php';
require $rdir.'/PHPMailer/src/PHPMailer.php';
require $rdir.'/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$response = [
    'success' => false,
    'message' => 'Something went wrong'
];

try {
    $mail = new PHPMailer(true);

    // Get POST data safely
    $name    = $_POST['name'] ?? '';
    $email   = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';

    // Basic validation
    if (empty($name) || empty($email) || empty($message)) {
        throw new Exception('Required fields are missing');
    }

    // Server settings
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->SMTPDebug = false;
    $mail->Host       = 'smtp.hostinger.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@mcwinitech.com.au';
    $mail->Password   = 'Info@mcwin2026';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('info@mcwinitech.com.au', 'McWIN iTECH');
    $mail->addAddress('info@mcwinitech.com.au', 'McWIN iTECH');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form - ' . $name;
    $mail->Body = '
    <div style="font-family: Arial, Helvetica, sans-serif; color:#333; line-height:1.6;">
        <h3>📩 New Contact Form Submission</h3>

        <p><strong>Name:</strong> '.htmlspecialchars($name).'</p>
        <p><strong>Email:</strong> '.htmlspecialchars($email).'</p>

        <hr style="border:none;border-top:1px solid #e5e5e5;" />

        <p style="white-space: pre-wrap;">
            '.nl2br(htmlspecialchars($message)).'
        </p>
    </div>';

    $mail->send();

    $response = [
        'success' => true,
        'message' => 'Email sent successfully'
    ];

} catch (Exception $e) {
    $response = [
        'success' => false,
        'message' => $e->getMessage()
    ];
}

echo json_encode($response);
exit;
