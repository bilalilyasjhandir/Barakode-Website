# EmailJS Template Configuration

## ⚠️ IMPORTANT: Update Your EmailJS Template

The Footer email form now sends with **Barakode Technologies** branding, but you need to update your EmailJS template to match.

---

## Steps to Update EmailJS Template:

### 1. Go to EmailJS Dashboard
- Visit: https://dashboard.emailjs.com/
- Login with your account

### 2. Navigate to Your Template
- Go to **Email Templates**
- Find template: `template_dw2mabs`

### 3. Update Template Variables

Your template should use these variables:

```
From: {{from_name}} <{{reply_to}}>
To: {{to_email}}
Subject: Thank you for your interest in Barakode Technologies
```

### 4. Update Email Body

Replace any mention of "Cookie Inc" with "Barakode Technologies" or "Barakode"

**Example Template:**

```html
Hello,

Thank you for your interest in {{company_name}}!

We've received your request from {{email}}.

Our team will review your inquiry and get back to you within 24 hours with a detailed quote tailored to your needs.

In the meantime, feel free to:
- Explore our services: https://barakodetechnologies.com/service
- View our portfolio: https://barakodetechnologies.com/portfolio
- Connect with us on LinkedIn: https://www.linkedin.com/company/barakode-technologies/

Best regards,
The Barakode Technologies Team

---
Barakode Technologies
Building Digital Excellence
Website: https://barakodetechnologies.com
Email: info@barakodetechnologies.com
Phone: +92-3322060667
```

---

## Template Variables Being Sent:

The Footer form now sends these parameters:
- `from_name`: "Barakode Technologies"
- `reply_to`: "info@barakodetechnologies.com"
- `to_email`: [User's email]
- `company_name`: "Barakode Technologies"
- `email`: [User's email]

---

## Alternative: Create New Template

If you want to keep the old template, create a new one:

1. Go to EmailJS Dashboard → Email Templates
2. Click "Create New Template"
3. Name it: `Barakode Quote Request`
4. Use the template structure above
5. Copy the new Template ID
6. Update Footer.jsx with the new template ID:

```javascript
const templateID = "YOUR_NEW_TEMPLATE_ID";
```

---

## Testing

After updating the template:
1. Go to your website footer
2. Enter your email
3. Click "Get a Quote"
4. Check your inbox - you should receive an email from **Barakode Technologies**

---

## ✅ Checklist

- [ ] Login to EmailJS Dashboard
- [ ] Find template `template_dw2mabs`
- [ ] Replace "Cookie Inc" with "Barakode Technologies"
- [ ] Update subject line
- [ ] Update email body
- [ ] Test by submitting form
- [ ] Verify email received with correct branding

---

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- Support: https://www.emailjs.com/support/
