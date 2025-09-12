import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'جميع الحقول مطلوبة' },
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
      subject: `💼 رسالة جديدة من ${name} - موقع البورتفوليو`,
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>رسالة جديدة من موقع البورتفوليو</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh;">
          <div style="max-width: 650px; margin: 40px auto; padding: 20px;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; border-radius: 20px 20px 0 0; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -50px; right: -50px; width: 100px; height: 100px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.7;"></div>
              <div style="position: absolute; bottom: -30px; left: -30px; width: 80px; height: 80px; background: rgba(255,255,255,0.1); border-radius: 50%; opacity: 0.5;"></div>
              <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.3); position: relative; z-index: 1;">💼 رسالة جديدة</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px; position: relative; z-index: 1;">من موقع البورتفوليو الخاص بك</p>
            </div>
            
            <!-- Main Content -->
            <div style="background: white; padding: 40px 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); position: relative;">
              <!-- Sender Info Card -->
              <div style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 25px; border-radius: 15px; margin-bottom: 30px; border-left: 5px solid #667eea;">
                <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; display: flex; align-items: center;">
                  <span style="background: #667eea; color: white; width: 35px; height: 35px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-left: 12px; font-size: 16px;">👤</span>
                  معلومات المرسل
                </h2>
                <div style="display: grid; gap: 15px;">
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <span style="background: #10b981; color: white; width: 30px; height: 30px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-left: 12px; font-size: 14px;">📝</span>
                    <div>
                      <strong style="color: #374151; font-size: 14px;">الاسم:</strong>
                      <span style="color: #1f2937; font-size: 16px; margin-right: 8px; font-weight: 500;">${name}</span>
                    </div>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <span style="background: #3b82f6; color: white; width: 30px; height: 30px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-left: 12px; font-size: 14px;">📧</span>
                    <div>
                      <strong style="color: #374151; font-size: 14px;">البريد الإلكتروني:</strong>
                      <span style="color: #1f2937; font-size: 16px; margin-right: 8px; font-weight: 500;">${email}</span>
                    </div>
                  </div>
                  <div style="display: flex; align-items: center; padding: 12px; background: white; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <span style="background: #8b5cf6; color: white; width: 30px; height: 30px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; margin-left: 12px; font-size: 14px;">📋</span>
                    <div>
                      <strong style="color: #374151; font-size: 14px;">الموضوع:</strong>
                      <span style="color: #1f2937; font-size: 16px; margin-right: 8px; font-weight: 500;">${subject}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Message Card -->
              <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 25px; border-radius: 15px; border-left: 5px solid #f59e0b; position: relative; overflow: hidden;">
                <div style="position: absolute; top: -20px; right: -20px; width: 60px; height: 60px; background: rgba(245,158,11,0.1); border-radius: 50%;"></div>
                <h2 style="color: #92400e; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; display: flex; align-items: center; position: relative; z-index: 1;">
                  <span style="background: #f59e0b; color: white; width: 35px; height: 35px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-left: 12px; font-size: 16px;">💬</span>
                  نص الرسالة
                </h2>
                <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); position: relative; z-index: 1;">
                  <p style="color: #374151; line-height: 1.8; margin: 0; font-size: 16px; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #374151 100%); padding: 30px; border-radius: 0 0 20px 20px; text-align: center; position: relative; overflow: hidden;">
              <div style="position: absolute; top: -30px; left: -30px; width: 80px; height: 80px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
              <div style="position: absolute; bottom: -40px; right: -40px; width: 100px; height: 100px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
              <div style="position: relative; z-index: 1;">
                <p style="color: rgba(255,255,255,0.9); margin: 0 0 10px 0; font-size: 16px; font-weight: 500;">✨ تم إرسال هذه الرسالة من موقع البورتفوليو</p>
                <p style="color: rgba(255,255,255,0.7); margin: 0; font-size: 14px;">يمكنك الرد مباشرة على هذا الإيميل للتواصل مع المرسل</p>
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
                  <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 12px;">© 2024 Portfolio Website - جميع الحقوق محفوظة</p>
                </div>
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