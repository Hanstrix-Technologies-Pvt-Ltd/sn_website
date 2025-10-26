import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email credentials
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create email transporter using Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.in",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your Zoho email
        pass: process.env.EMAIL_PASS, // Your Zoho password
      },
    });

    // Email template matching the dark theme
    const emailHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact Form Submission - Stock Navii</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; background-color: #1A202C;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #2D3748; padding: 40px; border-radius: 8px;">
        <!-- Header with Logo/Brand -->
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #3B82F6; font-size: 32px; font-weight: bold; margin: 0 0 10px 0;">
            Stock Navii
          </h1>
          <p style="color: #A0AEC0; font-size: 16px; margin: 0;">
            Contact Form Submission
          </p>
        </div>

        <!-- Main Content Card -->
        <div style="background-color: #1A202C; padding: 30px; border-radius: 8px; border: 1px solid #374151; margin-bottom: 20px;">
          <h2 style="color: #FFFFFF; font-size: 24px; font-weight: bold; margin: 0 0 20px 0; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <!-- Form Details -->
          <div style="color: #E2E8F0;">
            <div style="margin-bottom: 20px;">
              <p style="color: #3B82F6; font-weight: 600; font-size: 14px; text-transform: uppercase; margin: 0 0 5px 0; letter-spacing: 0.5px;">
                Name
              </p>
              <p style="color: #FFFFFF; font-size: 16px; margin: 0;">
                ${name}
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <p style="color: #3B82F6; font-weight: 600; font-size: 14px; text-transform: uppercase; margin: 0 0 5px 0; letter-spacing: 0.5px;">
                Email
              </p>
              <p style="color: #FFFFFF; font-size: 16px; margin: 0;">
                ${email}
              </p>
            </div>

            ${
              company
                ? `
            <div style="margin-bottom: 20px;">
              <p style="color: #3B82F6; font-weight: 600; font-size: 14px; text-transform: uppercase; margin: 0 0 5px 0; letter-spacing: 0.5px;">
                Company
              </p>
              <p style="color: #FFFFFF; font-size: 16px; margin: 0;">
                ${company}
              </p>
            </div>
            `
                : ""
            }

            <div style="margin-bottom: 20px;">
              <p style="color: #3B82F6; font-weight: 600; font-size: 14px; text-transform: uppercase; margin: 0 0 5px 0; letter-spacing: 0.5px;">
                Subject
              </p>
              <p style="color: #FFFFFF; font-size: 16px; margin: 0;">
                ${subject}
              </p>
            </div>

            <div style="margin-bottom: 20px;">
              <p style="color: #3B82F6; font-weight: 600; font-size: 14px; text-transform: uppercase; margin: 0 0 5px 0; letter-spacing: 0.5px;">
                Message
              </p>
              <div style="background-color: #2D3748; padding: 15px; border-radius: 6px; border-left: 3px solid #3B82F6;">
                <p style="color: #E2E8F0; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">
                  ${message}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align: center; color: #A0AEC0; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151;">
          <p style="margin: 0;">
            This is an automated message from Stock Navii contact form.
          </p>
          <p style="margin: 5px 0 0 0;">
            Please respond directly to this email to continue the conversation.
          </p>
        </div>
      </div>
    </body>
    </html>
    `;

    // Email options - send to both the user and info@stocknavii.com
    const mailOptions = {
      from: `"Stock Navii" <${process.env.EMAIL_USER}>`, // Zoho email address
      to: [email, "info@stocknavii.com"].join(", "), // Send to both addresses
      replyTo: email, // Reply to the form submitter
      subject: `New Contact: ${subject}`,
      html: emailHTML,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully", success: true },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
