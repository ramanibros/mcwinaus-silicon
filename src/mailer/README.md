# PHPMailer

A full-featured email creation and transfer class for PHP.

## Features

- Probably the world's most popular code for sending email from PHP
- Used by many open-source projects including WordPress, Drupal, Joomla, and more
- Integrated SMTP support - send without a local mail server
- Send emails with multiple To, CC, BCC, and Reply-to addresses
- Multipart/alternative emails for mail clients that do not read HTML email
- Add attachments, including inline
- Support for UTF-8 content and 8bit, base64, binary, and quoted-printable encodings
- SMTP authentication with LOGIN, PLAIN, CRAM-MD5, and XOAUTH2 mechanisms
- Validates email addresses automatically
- Protects against header injection attacks
- Error messages in 50+ languages
- DKIM and S/MIME signing support
- Compatible with PHP 5.5 and later, including PHP 8.x
- Namespaced to prevent name clashes
- Much more!

## Installation

### Via Composer (Recommended)

```bash
composer require phpmailer/phpmailer
```

### Manual Installation

Download the latest release from the [GitHub releases page](https://github.com/PHPMailer/PHPMailer/releases) and include the necessary files in your project.

## Quick Start

### Basic Example

```php
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->SMTPDebug = SMTP::DEBUG_OFF;              // Disable verbose debug output
    $mail->isSMTP();                                 // Send using SMTP
    $mail->Host       = 'smtp.example.com';          // Set the SMTP server
    $mail->SMTPAuth   = true;                        // Enable SMTP authentication
    $mail->Username   = 'user@example.com';          // SMTP username
    $mail->Password   = 'secret';                    // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable implicit TLS encryption
    $mail->Port       = 465;                         // TCP port to connect to

    // Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('joe@example.net', 'Joe User'); // Add a recipient
    $mail->addReplyTo('info@example.com', 'Information');

    // Content
    $mail->isHTML(true);                             // Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
```

### Sending with Gmail

```php
$mail->isSMTP();
$mail->Host       = 'smtp.gmail.com';
$mail->SMTPAuth   = true;
$mail->Username   = 'your-email@gmail.com';
$mail->Password   = 'your-app-password';          // Use App Password, not regular password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port       = 587;
```

### Adding Attachments

```php
// Add attachments
$mail->addAttachment('/path/to/file.pdf');             // Add attachment
$mail->addAttachment('/path/to/image.jpg', 'photo.jpg'); // Optional name

// Add inline/embedded image
$mail->addEmbeddedImage('path/to/image.jpg', 'logo_cid');
$mail->Body = '<img src="cid:logo_cid"> Here is an image!';
```

### Multiple Recipients

```php
$mail->addAddress('recipient1@example.com');
$mail->addAddress('recipient2@example.com');
$mail->addCC('cc@example.com');
$mail->addBCC('bcc@example.com');
```

## Configuration Options

### SMTP Settings

- `isSMTP()` - Set mailer to use SMTP
- `Host` - Specify main and backup SMTP servers
- `SMTPAuth` - Enable SMTP authentication
- `Username` - SMTP username
- `Password` - SMTP password
- `SMTPSecure` - Enable TLS encryption: `PHPMailer::ENCRYPTION_STARTTLS` or `PHPMailer::ENCRYPTION_SMTPS`
- `Port` - TCP port to connect to (587 for STARTTLS, 465 for SMTPS)

### Debugging

```php
$mail->SMTPDebug = SMTP::DEBUG_SERVER; // Enable verbose debug output
```

Debug levels:
- `SMTP::DEBUG_OFF` - No output (0)
- `SMTP::DEBUG_CLIENT` - Client messages (1)
- `SMTP::DEBUG_SERVER` - Client and server messages (2)
- `SMTP::DEBUG_CONNECTION` - Connection info (3)
- `SMTP::DEBUG_LOWLEVEL` - Low-level data (4)

## Security

### Email Validation

PHPMailer validates email addresses automatically using the `PHPMailer::validateAddress()` method.

### Protection Against Header Injection

PHPMailer protects against header injection attacks by validating and sanitizing input.

### DKIM Signing

```php
$mail->DKIM_domain = 'example.com';
$mail->DKIM_private = '/path/to/private.key';
$mail->DKIM_selector = 'phpmailer';
$mail->DKIM_passphrase = '';
$mail->DKIM_identity = $mail->From;
```

## Error Handling

Always wrap your PHPMailer code in try-catch blocks:

```php
try {
    $mail->send();
    echo 'Message sent successfully';
} catch (Exception $e) {
    echo "Error: {$mail->ErrorInfo}";
}
```

## Common Issues

### Gmail "Less Secure Apps"

Gmail no longer supports "less secure apps." Use an App Password instead:
1. Enable 2-factor authentication on your Google account
2. Generate an App Password at https://myaccount.google.com/apppasswords
3. Use the App Password in place of your regular password

### SMTP Connection Timeout

Check your firewall settings and ensure the SMTP port is not blocked.

### SSL Certificate Verification

If you encounter SSL certificate errors:

```php
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
```

**Warning:** Only use this for testing. In production, fix the certificate issue properly.

## Documentation

- [Full Documentation](https://github.com/PHPMailer/PHPMailer/wiki)
- [Troubleshooting Guide](https://github.com/PHPMailer/PHPMailer/wiki/Troubleshooting)
- [Examples](https://github.com/PHPMailer/PHPMailer/tree/master/examples)

## Requirements

- PHP 5.5 or later (PHP 8.x supported)
- If using SMTP: access to an SMTP server

## License

This software is distributed under the [LGPL 2.1](http://www.gnu.org/licenses/lgpl-2.1.html) license.

## Support

- [GitHub Issues](https://github.com/PHPMailer/PHPMailer/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/phpmailer)

## Contributing

Contributions are welcome! Please read the [contribution guidelines](https://github.com/PHPMailer/PHPMailer/blob/master/.github/CONTRIBUTING.md) first.

## Credits

Created by Brent R. Matzelle and maintained by Marcus Bointon, Jim Jagielski, and Andy Prevost.

---

**Note:** This is a community-maintained README. For the official PHPMailer repository and latest updates, visit [https://github.com/PHPMailer/PHPMailer](https://github.com/PHPMailer/PHPMailer)
