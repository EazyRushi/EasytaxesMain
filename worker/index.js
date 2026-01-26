/**
 * Cloudflare Worker for handling job application submissions
 * This replaces the Express.js backend with a serverless function
 */

export default {
    async fetch(request, env) {
        // CORS headers
        const corsHeaders = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        };

        // Handle CORS preflight
        if (request.method === 'OPTIONS') {
            return new Response(null, { headers: corsHeaders });
        }

        const url = new URL(request.url);

        // Handle job application endpoint
        if (url.pathname === '/api/job-application' && request.method === 'POST') {
            try {
                const formData = await request.formData();

                // Extract form fields
                const data = {
                    jobTitle: formData.get('jobTitle'),
                    fullName: formData.get('fullName'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    linkedin: formData.get('linkedin'),
                    portfolio: formData.get('portfolio'),
                    currentLocation: formData.get('currentLocation'),
                    noticePeriod: formData.get('noticePeriod'),
                    expectedSalary: formData.get('expectedSalary'),
                    additionalInfo: formData.get('additionalInfo'),
                };

                // Extract screening questions
                const screeningQA = [];
                let i = 1;
                while (formData.has(`question_${i}`)) {
                    screeningQA.push({
                        question: formData.get(`question_${i}`),
                        answer: formData.get(`answer_${i}`)
                    });
                    i++;
                }

                // Get file attachments
                const resume = formData.get('resume');
                const coverLetter = formData.get('coverLetter');

                // Build email content
                let emailBody = `
New Job Application for ${data.jobTitle}

=== CANDIDATE INFORMATION ===
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
LinkedIn: ${data.linkedin || 'Not provided'}
Portfolio: ${data.portfolio || 'Not provided'}
Current Location: ${data.currentLocation}
Notice Period: ${data.noticePeriod}
Expected Salary: ${data.expectedSalary}

=== SCREENING QUESTIONS ===
`;

                screeningQA.forEach((qa, index) => {
                    emailBody += `\n${index + 1}. ${qa.question}\n   Answer: ${qa.answer}\n`;
                });

                if (data.additionalInfo) {
                    emailBody += `\n=== ADDITIONAL INFORMATION ===\n${data.additionalInfo}\n`;
                }

                emailBody += `\n=== ATTACHMENTS ===\n`;
                emailBody += resume ? `Resume: ${resume.name} (${resume.size} bytes)\n` : 'Resume: Not provided\n';
                emailBody += coverLetter ? `Cover Letter: ${coverLetter.name} (${coverLetter.size} bytes)\n` : 'Cover Letter: Not provided\n';

                // Send email using Cloudflare Email Workers (MailChannels)
                // Note: You'll need to set up MailChannels or use a different email service
                const emailResponse = await sendEmail(env, {
                    to: env.EMAIL_USER || 'contact@eazytaxes.com',
                    from: 'noreply@eazytaxes.com',
                    subject: `New Job Application: ${data.jobTitle} - ${data.fullName}`,
                    text: emailBody,
                    attachments: [
                        resume && {
                            filename: resume.name,
                            content: await resume.arrayBuffer()
                        },
                        coverLetter && {
                            filename: coverLetter.name,
                            content: await coverLetter.arrayBuffer()
                        }
                    ].filter(Boolean)
                });

                return new Response(
                    JSON.stringify({ message: 'Application submitted successfully' }),
                    {
                        status: 200,
                        headers: {
                            'Content-Type': 'application/json',
                            ...corsHeaders
                        }
                    }
                );

            } catch (error) {
                console.error('Error processing application:', error);
                return new Response(
                    JSON.stringify({ message: 'Failed to submit application', error: error.message }),
                    {
                        status: 500,
                        headers: {
                            'Content-Type': 'application/json',
                            ...corsHeaders
                        }
                    }
                );
            }
        }

        // Handle health check
        if (url.pathname === '/api/health') {
            return new Response(
                JSON.stringify({ status: 'ok' }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        ...corsHeaders
                    }
                }
            );
        }

        // 404 for other routes
        return new Response('Not Found', {
            status: 404,
            headers: corsHeaders
        });
    }
};

/**
 * Send email using MailChannels (free for Cloudflare Workers)
 * Alternative: Use Resend, SendGrid, or other email service
 */
async function sendEmail(env, { to, from, subject, text, attachments = [] }) {
    // Option 1: MailChannels (Free with Cloudflare Workers)
    const emailData = {
        personalizations: [{
            to: [{ email: to }],
        }],
        from: { email: from },
        subject: subject,
        content: [{
            type: 'text/plain',
            value: text
        }],
        attachments: attachments.map(att => ({
            filename: att.filename,
            content: Buffer.from(att.content).toString('base64'),
            type: 'application/octet-stream'
        }))
    };

    const response = await fetch('https://api.mailchannels.net/tx/v1/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
    });

    if (!response.ok) {
        throw new Error(`Email sending failed: ${await response.text()}`);
    }

    return response;
}
