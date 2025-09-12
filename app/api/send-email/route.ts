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
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3730a3 100%); min-height: 100vh;">
          <div style="max-width: 650px; margin: 40px auto; padding: 20px;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3730a3 100%); padding: 40px 30px; border-radius: 15px 15px 0 0; text-align: center; box-shadow: 0 4px 20px rgba(30, 58, 138, 0.3);">
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">New Message</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">From your portfolio website</p>
            </div>
            
            <!-- Main Content -->
            <div style="background: white; padding: 40px 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
              <!-- Sender Info Card -->
              <div style="background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%); padding: 25px; border-radius: 12px; margin-bottom: 30px; border-left: 4px solid #1e40af;">
                <h2 style="color: #1e3a8a; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">Sender Information</h2>
                <div style="display: grid; gap: 15px;">
                  <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-left: 3px solid #3730a3;">
                    <div>
                      <strong style="color: #1e3a8a; font-size: 14px;">Name:</strong>
                      <span style="color: #1f2937; font-size: 16px; margin-left: 8px; font-weight: 500;">${name}</span>
                    </div>
                  </div>
                  <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-left: 3px solid #1e40af;">
                    <div>
                      <strong style="color: #1e3a8a; font-size: 14px;">Email:</strong>
                      <span style="color: #1f2937; font-size: 16px; margin-left: 8px; font-weight: 500;">${email}</span>
                    </div>
                  </div>
                  <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-left: 3px solid #3730a3;">
                    <div>
                      <strong style="color: #1e3a8a; font-size: 14px;">Phone:</strong>
                      <span style="color: #1f2937; font-size: 16px; margin-left: 8px; font-weight: 500;">${phone}</span>
                    </div>
                  </div>
                  <div style="padding: 15px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); border-left: 3px solid #3730a3;">
                    <div>
                      <strong style="color: #1e3a8a; font-size: 14px;">Subject:</strong>
                      <span style="color: #1f2937; font-size: 16px; margin-left: 8px; font-weight: 500;">${subject}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Message Card -->
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 25px; border-radius: 12px; border-left: 4px solid #1e40af;">
                <h2 style="color: #1e3a8a; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">Message Content</h2>
                <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-left: 3px solid #3730a3;">
                  <p style="color: #374151; line-height: 1.8; margin: 0; font-size: 16px; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3730a3 100%); padding: 30px; border-radius: 0 0 15px 15px; text-align: center; box-shadow: 0 4px 20px rgba(30, 58, 138, 0.3);">
              <p style="color: rgba(255,255,255,0.9); margin: 0 0 15px 0; font-size: 14px;">This message was sent from your portfolio website</p>
              <div style="border-top: 1px solid rgba(255,255,255,0.3); padding-top: 20px; margin-top: 20px;">
                <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 12px;">© 2024 Portfolio Website. All rights reserved.</p>
                <p style="color: rgba(255,255,255,0.7); margin: 5px 0 0 0; font-size: 12px;">Sent on: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })}</p>
              </div>
            </div>
          </div>
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