"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData) {
    try {
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"McWIN iTECH" <${process.env.SMTP_USER}>`,
            to: process.env.MAIL_TO,
            replyTo: email,
            subject: `New Contact Form - ${name}`,
            html: `
  <div style="font-family: Arial, Helvetica, sans-serif; color:#333; line-height:1.6;">
    
    <h3 style="margin-bottom:10px;">📩 Someone has reached out through your website contact form. The message details are below.</h3>

    <p style="margin:4px 0;">
      <strong>Name:</strong> ${name}
    </p>

    <p style="margin:4px 0;">
      <strong>Email:</strong> ${email}
    </p>

    <hr style="border:none; border-top:1px solid #e5e5e5; margin:12px 0;" />

    <p style="margin-top:8px;">
      ${message}
    </p>

  </div>
`,

        });

        return {success: true};
    } catch (error) {
        return {success: false, error: "Failed to send message"};
    }
}