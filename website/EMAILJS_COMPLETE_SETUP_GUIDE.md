# EmailJS Setup Guide for Barakode Technologies Footer Form

## 🚀 Complete Setup Instructions

Follow these steps to set up EmailJS for your Footer "Get a Quote" form.

---

## Step 1: Create EmailJS Account ✅ (Done)

You've already created your account. Now let's set it up!

---

## Step 2: Connect Your Email Service

### 2.1 Add Email Service
1. Go to https://dashboard.emailjs.com/
2. Click on **"Email Services"** in the left sidebar
3. Click **"Add New Service"**
4. Choose your email provider:
   - **Gmail** (Recommended for testing)
   - **Outlook/Office 365**
   - **Custom SMTP** (for info@barakodetechnologies.com)

### 2.2 For Gmail (Quick Setup):
1. Select **Gmail**
2. Click **"Connect Account"**
3. Authorize EmailJS to send emails
4. **Copy the Service ID** (e.g., `service_abc1234`)

### 2.3 For Custom Domain Email (info@barakodetechnologies.com):
1. Select **"Custom SMTP"**
2. Enter your SMTP settings:
   ```
   SMTP Server: mail.barakodetechnologies.com (or your provider's SMTP)
   Port: 587 (or 465 for SSL)
   Username: info@barakodetechnologies.com
   Password: [Your email password]
   Secure Connection: TLS/SSL
   ```
3. Test the connection
4. **Copy the Service ID**

---

## Step 3: Create Email Template

### 3.1 Create Template
1. Go to **"Email Templates"** in the sidebar
2. Click **"Create New Template"**
3. Give it a name: **"Barakode Quote Request"**

### 3.2 Template Configuration

**Template ID:** Copy this for later (e.g., `template_xyz5678`)

**Subject Line:**
```
Thank you for your interest in Barakode Technologies
```

**Email Content (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #c18b34 0%, #86602c 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .content {
            background: #ffffff;
            padding: 30px;
            border: 1px solid #e0e0e0;
        }
        .footer {
            background: #f5f5f5;
            padding: 20px;
            text-align: center;
            border-radius: 0 0 10px 10px;
            font-size: 12px;
            color: #666;
        }
        .button {
            display: inline-block;
            padding: 12px 30px;
            background: #c18b34;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin: 10px 5px;
        }
        .social-links {
            margin: 15px 0;
        }
        .social-links a {
            margin: 0 10px;
            color: #c18b34;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Barakode Technologies</h1>
        <p>Building Digital Excellence</p>
    </div>
    
    <div class="content">
        <h2>Hello!</h2>
        
        <p>Thank you for your interest in <strong>Barakode Technologies</strong>!</p>
        
        <p>We've received your quote request from <strong>{{to_email}}</strong>.</p>
        
        <p>Our team will review your inquiry and get back to you within <strong>24 hours</strong> with a detailed quote tailored to your needs.</p>
        
        <h3>In the meantime, explore our services:</h3>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="https://barakodetechnologies.com/service" class="button">Our Services</a>
            <a href="https://barakodetechnologies.com/portfolio" class="button">View Portfolio</a>
        </div>
        
        <h3>What to expect:</h3>
        <ul>
            <li>✅ Personalized quote based on your requirements</li>
            <li>✅ Expert consultation from our team</li>
            <li>✅ Flexible payment and project timelines</li>
            <li>✅ End-to-end development support</li>
        </ul>
        
        <p>Have questions? Reply to this email or reach us at:</p>
        <ul>
            <li>📧 Email: <a href="mailto:info@barakodetechnologies.com">info@barakodetechnologies.com</a></li>
            <li>📱 Phone: <a href="tel:+923322060667">+92-332-2060667</a></li>
            <li>💬 WhatsApp: <a href="https://wa.me/923322060667">Chat with us</a></li>
        </ul>
    </div>
    
    <div class="footer">
        <div class="social-links">
            <a href="https://www.linkedin.com/company/barakode-technologies/">LinkedIn</a> |
            <a href="https://www.instagram.com/barakodetechnologies/">Instagram</a> |
            <a href="https://x.com/barakode1">Twitter</a>
        </div>
        <p><strong>Barakode Technologies</strong><br>
        Pakistan | Serving Clients Globally</p>
        <p>© 2025 Barakode Technologies. All rights reserved.</p>
        <p style="font-size: 10px; color: #999; margin-top: 10px;">
            You received this email because you requested a quote through our website.
        </p>
    </div>
</body>
</html>
```

### 3.3 Template Variables to Use

In the template settings, make sure these variables are available:
- `{{to_email}}` - Recipient's email address
- `{{from_name}}` - Your company name
- `{{reply_to}}` - Your reply-to email
- `{{company_name}}` - Company name

### 3.4 Email Settings in Template

**From Name:** `{{from_name}}`
**From Email:** Use your service email (e.g., info@barakodetechnologies.com)
**To Email:** `{{to_email}}`
**Reply To:** `{{reply_to}}`

---

## Step 4: Get Your User ID (Public Key)

1. Go to **"Account"** in the sidebar
2. Find **"Public Key"** section
3. **Copy your Public Key** (e.g., `Oht2VZndlktWjLOQT`)

---

## Step 5: Update Your Website Code

Now update the `Footer.jsx` file with your new credentials:

1. Open: `src/pages/Components/Footer/Footer.jsx`

2. Find this section (around line 18-27):
```javascript
const serviceID = "service_vjze6ur";
const templateID = "template_dw2mabs";
const userID = "Oht2VZndlktWjLOQT";
```

3. Replace with YOUR values:
```javascript
const serviceID = "YOUR_SERVICE_ID";  // From Step 2
const templateID = "YOUR_TEMPLATE_ID";  // From Step 3
const userID = "YOUR_PUBLIC_KEY";  // From Step 4
```

**Example:**
```javascript
const serviceID = "service_abc1234";
const templateID = "template_xyz5678";
const userID = "Oht2VZndlktWjLOQT";
```

---

## Step 6: Test Your Setup

### 6.1 Test in EmailJS Dashboard
1. Go to your template
2. Click **"Test it"**
3. Fill in test values:
   ```
   to_email: your-email@example.com
   from_name: Barakode Technologies
   reply_to: info@barakodetechnologies.com
   company_name: Barakode Technologies
   ```
4. Click **"Send Test"**
5. Check your inbox

### 6.2 Test on Your Website
1. Run your website: `npm run dev`
2. Scroll to Footer
3. Enter your email
4. Click "Get a Quote"
5. Check your inbox for the email

---

## Step 7: Configure Email Limits (Optional)

### Free Plan Limits:
- **200 emails/month**
- **50 emails/day**

### To Increase Limits:
1. Go to **"Account"** → **"Billing"**
2. Upgrade to paid plan if needed (starts at $7/month for 1,000 emails)

---

## 🎯 Quick Reference Card

Keep these handy:

```
Service ID: service_________
Template ID: template_________
Public Key: __________________
```

---

## 📋 Checklist

- [ ] EmailJS account created
- [ ] Email service connected (Gmail/SMTP)
- [ ] Service ID copied
- [ ] Email template created with Barakode branding
- [ ] Template ID copied
- [ ] Public Key copied
- [ ] Updated Footer.jsx with new IDs
- [ ] Tested in EmailJS dashboard
- [ ] Tested on live website
- [ ] Email received successfully

---

## 🐛 Troubleshooting

### Email Not Sending?
1. Check browser console for errors (F12)
2. Verify all IDs are correct in Footer.jsx
3. Check EmailJS dashboard for failed sends
4. Ensure email service is properly connected

### Wrong Email Format?
1. Go to EmailJS template editor
2. Update the HTML/text content
3. Save changes
4. Test again

### Rate Limit Exceeded?
1. Check your plan limits in EmailJS dashboard
2. Upgrade plan if needed
3. Or wait until next day (free plan: 50/day)

---

## 🎨 Customization Tips

### Want to change the email design?
- Edit the HTML in Step 3.2
- Add your logo: `<img src="YOUR_LOGO_URL" />`
- Change colors (currently using #c18b34)
- Add more sections

### Want different email for different forms?
- Create multiple templates
- Use different template IDs in different forms
- Example: `template_contact`, `template_hire`, `template_quote`

---

## ✅ You're Done!

Your Footer form will now send beautifully branded emails from **Barakode Technologies**!

**Need Help?**
- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Pro Tip:** Save your Service ID, Template ID, and Public Key in a secure password manager!
