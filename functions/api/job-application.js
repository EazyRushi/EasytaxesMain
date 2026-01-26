/**
 * Cloudflare Pages Function for handling job application submissions
 * This runs on Cloudflare's edge network and sends emails via MailChannels
 * Updated: 2026-01-26
 */

export async function onRequestPost(context) {
    const { request, env } = context;

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

        // Prepare attachments for email
        const attachments = [];

        if (resume) {
            const resumeBuffer = await resume.arrayBuffer();
            attachments.push({
                filename: resume.name,
                content: arrayBufferToBase64(resumeBuffer),
                type: resume.type || 'application/pdf',
                disposition: 'attachment'
            });
        }

        if (coverLetter) {
            const coverLetterBuffer = await coverLetter.arrayBuffer();
            attachments.push({
                filename: coverLetter.name,
                content: arrayBufferToBase64(coverLetterBuffer),
                type: coverLetter.type || 'application/pdf',
                disposition: 'attachment'
            });
        }

        // Send email using MailChannels (free for Cloudflare Workers/Pages)
        const emailData = {
            personalizations: [{
                to: [{ email: env.EMAIL_USER || 'contact@eazytaxes.com' }],
            }],
            from: {
                email: 'noreply@eazytaxes.com',
                name: 'Eazy Taxes Careers'
            },
            subject: `New Job Application: ${data.jobTitle} - ${data.fullName}`,
            content: [{
                type: 'text/plain',
                value: emailBody
            }]
        };

        // Only add attachments if they exist
        if (attachments.length > 0) {
            emailData.attachments = attachments;
        }

        const emailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData)
        });

        if (!emailResponse.ok) {
            const errorText = await emailResponse.text();
            console.error('MailChannels error:', errorText);
            throw new Error(`Email sending failed: ${errorText}`);
        }

        return new Response(
            JSON.stringify({ message: 'Application submitted successfully' }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        );

    } catch (error) {
        console.error('Error processing application:', error);
        return new Response(
            JSON.stringify({
                message: 'Failed to submit application',
                error: error.message
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        );
    }
}

// Handle OPTIONS request for CORS
export async function onRequestOptions() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}

/**
 * Convert ArrayBuffer to Base64 string
 */
function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
