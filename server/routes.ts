import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import nodemailer from "nodemailer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, DOC, and DOCX are allowed.'));
    }
  }
});

export function registerRoutes(httpServer: Server, app: Express): Server {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message, serviceInterest } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Contact Form: ${subject || 'New Message'} - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #3FB9CB;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
              ${serviceInterest ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Service Interest:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${serviceInterest}</td></tr>` : ''}
              ${subject ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Subject:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${subject}</td></tr>` : ''}
            </table>
            <h3 style="color: #333; margin-top: 20px;">Message:</h3>
            <div style="padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        `,
      });

      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Failed to send message" });
    }
  });

  // Job application endpoint
  app.post("/api/job-application", upload.fields([
    { name: 'resume', maxCount: 1 },
    { name: 'coverLetter', maxCount: 1 }
  ]), async (req, res) => {
    try {
      console.log("Job application received");
      console.log("Email config:", { user: process.env.EMAIL_USER, hasPassword: !!process.env.EMAIL_APP_PASSWORD });
      console.log("Body:", req.body);
      console.log("Files:", req.files);
      
      const { 
        jobTitle, fullName, email, phone, linkedin, portfolio, 
        currentLocation, noticePeriod, expectedSalary, additionalInfo 
      } = req.body;
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };

      // Get screening questions and answers
      const screeningQA: { question: string; answer: string }[] = [];
      Object.keys(req.body).forEach(key => {
        if (key.startsWith('question_')) {
          const index = key.split('_')[1];
          const answerKey = `answer_${index}`;
          if (req.body[answerKey]) {
            screeningQA.push({
              question: req.body[key],
              answer: req.body[answerKey]
            });
          }
        }
      });

      console.log("Creating email transporter...");
      // Create email transporter
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      });

      console.log("Preparing attachments...");
      // Prepare attachments
      const attachments = [];
      if (files.resume && files.resume[0]) {
        attachments.push({
          filename: files.resume[0].originalname,
          content: files.resume[0].buffer
        });
      }
      if (files.coverLetter && files.coverLetter[0]) {
        attachments.push({
          filename: files.coverLetter[0].originalname,
          content: files.coverLetter[0].buffer
        });
      }

      // Build screening questions HTML
      let screeningHTML = '';
      if (screeningQA.length > 0) {
        screeningHTML = '<h3>Screening Questions & Answers:</h3>';
        screeningQA.forEach((qa, index) => {
          screeningHTML += `
            <div style="margin-bottom: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #3FB9CB;">
              <p style="margin: 0 0 10px 0; font-weight: bold; color: #333;">Q${index + 1}: ${qa.question}</p>
              <p style="margin: 0; color: #555;">${qa.answer.replace(/\n/g, '<br>')}</p>
            </div>
          `;
        });
      }

      console.log("Sending email...");
      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `New Job Application: ${jobTitle} - ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
            <h2 style="color: #3FB9CB; border-bottom: 3px solid #3FB9CB; padding-bottom: 10px;">New Job Application Received</h2>
            
            <h3 style="color: #333; margin-top: 30px;">Position Applied For:</h3>
            <p style="font-size: 18px; font-weight: bold; color: #3FB9CB;">${jobTitle}</p>
            
            <h3 style="color: #333; margin-top: 30px;">Personal Information:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Full Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${fullName}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Current Location:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${currentLocation}</td></tr>
              ${linkedin ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>LinkedIn:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="${linkedin}">${linkedin}</a></td></tr>` : ''}
              ${portfolio ? `<tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Portfolio:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="${portfolio}">${portfolio}</a></td></tr>` : ''}
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Notice Period:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${noticePeriod}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Expected Salary:</strong></td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${expectedSalary}</td></tr>
            </table>
            
            ${screeningHTML}
            
            ${additionalInfo ? `
              <h3 style="color: #333; margin-top: 30px;">Additional Information:</h3>
              <div style="padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
                <p style="margin: 0; white-space: pre-wrap;">${additionalInfo}</p>
              </div>
            ` : ''}
            
            <h3 style="color: #333; margin-top: 30px;">Attachments:</h3>
            <p>${attachments.length} file(s) attached</p>
            ${attachments.map(att => `<p>📎 ${att.filename}</p>`).join('')}
          </div>
        `,
        attachments
      });

      console.log("Email sent successfully");
      res.json({ success: true, message: "Application submitted successfully" });
    } catch (error) {
      console.error("Error processing job application:", error);
      console.error("Error stack:", error instanceof Error ? error.stack : 'No stack trace');
      res.status(500).json({ success: false, message: error instanceof Error ? error.message : "Failed to submit application" });
    }
  });

  return httpServer;
}
