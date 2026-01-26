/**
 * Cloudflare Pages Function for handling contact form submissions
 * This runs on Cloudflare's edge network and sends emails via MailChannels
 */

export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const formData = await request.formData();

        // Extract form fields
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        // Build email content
        const emailBody = `
New Contact Form Submission

=== CONTACT INFORMATION ===
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject || 'General Inquiry'}

=== MESSAGE ===
${data.message}

---
This email was sent from the contact form at eazytaxes.com
`;

        // Send email using MailChannels (free for Cloudflare Pages)
        const emailData = {
            personalizations: [{
                to: [{ email: env.EMAIL_USER || 'contact@eazytaxes.com' }],
            }],
            from: {
                email: 'noreply@eazytaxes.com',
                name: 'Eazy Taxes Contact Form'
            },
            reply_to: {
                email: data.email,
                name: data.name
            },
            subject: `Contact Form: ${data.subject || 'New Message'} - ${data.name}`,
            content: [{
                type: 'text/plain',
                value: emailBody
            }]
        };

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
            JSON.stringify({ message: 'Message sent successfully' }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                }
            }
        );

    } catch (error) {
        console.error('Error processing contact form:', error);
        return new Response(
            JSON.stringify({
                message: 'Failed to send message',
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
