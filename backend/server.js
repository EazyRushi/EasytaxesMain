const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['https://eazytaxes.com', 'https://www.eazytaxes.com', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }
});

// Handle preflight requests
app.options('*', cors());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Contact form received:', req.body);
  try {
    const { name, email, subject, message, serviceInterest } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('Sending email via Resend...');
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL_USER,
      reply_to: email,
      subject: `Contact Form: ${subject || 'New Message'} - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${serviceInterest ? `<p><strong>Service Interest:</strong> ${serviceInterest}</p>` : ''}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    console.log('Email sent successfully');
    res.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// Job application endpoint
app.post('/api/job-application', upload.fields([
  { name: 'resume', maxCount: 1 },
  { name: 'coverLetter', maxCount: 1 }
]), async (req, res) => {
  try {
    const { jobTitle, fullName, email, phone, linkedin, portfolio, 
            currentLocation, noticePeriod, expectedSalary, additionalInfo } = req.body;
    const files = req.files;

    if (!fullName || !email || !phone) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const screeningQA = [];
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

    const attachments = [];
    if (files.resume && files.resume[0]) {
      attachments.push({
        filename: files.resume[0].originalname,
        content: files.resume[0].buffer.toString('base64'),
        type: files.resume[0].mimetype,
        disposition: 'attachment'
      });
    }
    if (files.coverLetter && files.coverLetter[0]) {
      attachments.push({
        filename: files.coverLetter[0].originalname,
        content: files.coverLetter[0].buffer.toString('base64'),
        type: files.coverLetter[0].mimetype,
        disposition: 'attachment'
      });
    }

    let screeningHTML = '';
    if (screeningQA.length > 0) {
      screeningHTML = '<h3>Screening Questions:</h3>';
      screeningQA.forEach((qa, index) => {
        screeningHTML += `<p><strong>Q${index + 1}: ${qa.question}</strong></p><p>${qa.answer}</p>`;
      });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL_USER,
      subject: `Job Application: ${jobTitle} - ${fullName}`,
      html: `
        <h2>New Job Application: ${jobTitle}</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${currentLocation}</p>
        ${linkedin ? `<p><strong>LinkedIn:</strong> ${linkedin}</p>` : ''}
        ${portfolio ? `<p><strong>Portfolio:</strong> ${portfolio}</p>` : ''}
        <p><strong>Notice Period:</strong> ${noticePeriod}</p>
        <p><strong>Expected Salary:</strong> ${expectedSalary}</p>
        ${screeningHTML}
        ${additionalInfo ? `<h3>Additional Info:</h3><p>${additionalInfo}</p>` : ''}
      `,
      attachments
    });

    res.json({ success: true, message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
