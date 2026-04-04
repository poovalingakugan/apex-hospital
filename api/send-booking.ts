import nodemailer from 'nodemailer';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { full_name, phone_number, service, date, time } = req.body;

  if (!full_name || !phone_number || !service || !date || !time) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Gmail SMTP Transport configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // This MUST be a 16-character App Password
    },
  });

  const mailOptions = {
    from: `"Hospital Booking" <${process.env.SMTP_USER}>`,
    to: process.env.RECIPIENT_EMAIL || 'kuganr2006@gmail.com',
    subject: `New Appointment: ${full_name}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #2563eb; margin-bottom: 20px;">New Booking Received</h2>
        <p><strong>Patient Name:</strong> ${full_name}</p>
        <p><strong>Phone Number:</strong> ${phone_number}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time Slot:</strong> ${time}</p>
        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 12px; color: #666;">This email was sent from the Hospital Website Booking Form.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
