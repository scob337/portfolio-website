import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: ' All fields is required ' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Message from ${name} - Portfolio Website`,
      html: `
        <!DOCTYPE html>
        <html dir="ltr" lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Message from Portfolio Website</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; text-align: center;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f5; padding: 40px 0;">
            <tr>
              <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); text-align: left; margin: 0 auto;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #0f172a; padding: 40px 30px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">New Message Received</h1>
                      <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 15px;">You have a new inquiry from your portfolio</p>
                    </td>
                  </tr>
                  
                  <!-- Contact Details -->
                  <tr>
                    <td style="padding: 40px 30px 20px 30px;">
                      <h2 style="margin: 0 0 20px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Contact Information</h2>
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                            <strong style="color: #334155; font-size: 14px; display: inline-block; width: 80px;">Name:</strong>
                            <span style="color: #0f172a; font-size: 15px; font-weight: 500;">${name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                            <strong style="color: #334155; font-size: 14px; display: inline-block; width: 80px;">Email:</strong>
                            <a href="mailto:${email}" style="color: #2563eb; font-size: 15px; font-weight: 500; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                            <strong style="color: #334155; font-size: 14px; display: inline-block; width: 80px;">Phone:</strong>
                            <span style="color: #0f172a; font-size: 15px; font-weight: 500;">${phone}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0;">
                            <strong style="color: #334155; font-size: 14px; display: inline-block; width: 80px;">Subject:</strong>
                            <span style="color: #0f172a; font-size: 15px; font-weight: 500;">${subject}</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message Content -->
                  <tr>
                    <td style="padding: 10px 30px 40px 30px;">
                      <h2 style="margin: 0 0 15px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #64748b; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Message</h2>
                      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 20px;">
                        <p style="color: #1e293b; line-height: 1.6; margin: 0; font-size: 15px; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f1f5f9; padding: 25px 30px; text-align: center; border-top: 1px solid #e2e8f0;">
                      <p style="color: #64748b; margin: 0; font-size: 13px;">This email was sent from your Portfolio Website.</p>
                      <p style="color: #94a3b8; margin: 5px 0 0 0; font-size: 12px;">© ${new Date().getFullYear()} Abdo Front-End. All rights reserved.</p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'تم إرسال الرسالة بنجاح!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('خطأ في إرسال الإيميل:', error)
    return NextResponse.json(
      { error: 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.' },
      { status: 500 }
    )
  }
}