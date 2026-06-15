# EmailJS Setup Guide for Contact Form

This guide will help you configure the contact form to send emails to `switchlabsautomobiles@gmail.com`.

## Steps to Setup

### 1. Sign up for EmailJS
- Visit [https://www.emailjs.com/](https://www.emailjs.com/)
- Click "Sign Up Free"
- Create an account using email or social login

### 2. Create an Email Service
- After login, go to **Email Services**
- Click **"Add Service"**
- Select **Gmail** as the service provider
- Follow the authentication steps to connect your Gmail account (switchlabsautomobiles@gmail.com)
- Name it something like "Gmail Service"
- Copy the **Service ID** (format: `service_xxxxxxxxx`)

### 3. Create an Email Template
- Go to **Email Templates**
- Click **"Create New Template"**
- Fill in the template details:

**Template Name:** Contact Form Email

**Email To:** 
```
{{to_email}}
```

**Subject:**
```
New Contact Form Submission: {{subject}}
```

**HTML Content:**
```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Contact Number:</strong> {{contact_number}}</p>
<p><strong>Company:</strong> {{company}}</p>
<p><strong>Subject:</strong> {{subject}}</p>
<h3>Message:</h3>
<p>{{message}}</p>
```

- Save the template and copy the **Template ID** (format: `template_xxxxxxxxx`)

### 4. Get Your Public Key
- Go to **Account** > **API Keys**
- Copy your **Public Key** (format: `xxxxxxxxxxxxxxxxxxxxxxxx`)

### 5. Update Contact.jsx
Replace the placeholder values in [src/pages/Contact.jsx](src/pages/Contact.jsx) with your actual credentials:

```javascript
// Line 19 - Replace YOUR_PUBLIC_KEY
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key

// Line 43 - Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
const response = await emailjs.send(
    'YOUR_SERVICE_ID',    // Replace with your Service ID
    'YOUR_TEMPLATE_ID',   // Replace with your Template ID
    {
        // ... rest of the parameters
    }
);
```

**Example:**
```javascript
emailjs.init('k1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6');

await emailjs.send(
    'service_abc123def456',
    'template_xyz789uvw012',
    {
        // ...
    }
);
```

### 6. Test the Form
1. Run your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form and click "Send Message"
4. Check that the email is received at switchlabsautomobiles@gmail.com

## Troubleshooting

### Emails not sending?
- Verify all three credentials are correct in Contact.jsx
- Check the browser console for error messages
- Ensure Gmail account is connected in EmailJS Email Services
- Check EmailJS dashboard for failed email logs

### Gmail not receiving emails?
- Check spam/junk folder
- Verify the Gmail account is authenticated in EmailJS
- Ensure the email template's "Email To" field has `{{to_email}}`

### "Failed to send message" error?
- Double-check Service ID and Template ID format
- Verify Public Key is correct
- Check that all template variables match those sent from the form

## Environment Variables (Optional - More Secure)

For production, consider using environment variables:

1. Create a `.env` file:
```
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

2. Update Contact.jsx:
```javascript
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const response = await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    // ...
);
```

3. Add `.env` to `.gitignore` to keep credentials private

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- Contact: support@emailjs.com
