# emailer-kit

**emailer-kit** is a Node.js utility that simplifies email sending using Nodemailer. It provides an easy-to-use interface for sending HTML emails with various configurations.

[![NPM](https://nodei.co/npm/emailer-kit.png)](https://nodei.co/npm/emailer-kit/)
[![NPM](https://img.shields.io/npm/v/emailer-kit)](https://www.npmjs.com/package/emailer-kit)
[![NPM](https://img.shields.io/npm/l/emailer-kit)](https://www.npmjs.com/package/emailer-kit)
[![NPM](https://img.shields.io/npm/types/emailer-kit)](https://www.npmjs.com/package/emailer-kit)

## ✨ Features

- 📧 **Effortlessly Send HTML Emails**
- 🌐 **Compatible with Various Email Service Providers**
- 🛠️ **Simplifies Nodemailer Configuration**
- 📦 **Lightweight and Easy to Use**
- 📚 **Supports ES6 Modules and CommonJS**
- 📜 **Written in TypeScript**
- 🗃️ **Support for Attachments (New)**

## 📦 Installation

```bash
npm install emailer-kit

# or

yarn add emailer-kit
```

## ⚙️ Configuration

emailer-kit uses Nodemailer to send emails. You can configure Nodemailer by setting the following environment variables.

### Environment Variables

Create a `.env` file in the root of your project and add:

```env
NODEMAIL_SERVICE=[email service provider, e.g., 'outlook', 'gmail', 'yahoo', etc.]
NODEMAIL_EMAIL=[your email address]
NODEMAIL_PASSWORD=[your email password]
```

> **Note:** If you are using Gmail, you need an app password. You can create an app password in your Google account settings under the security tab.

## 🚀 Usage

```javascript
import { emailer } from "emailer-kit";

// For CommonJS
// const { emailer } = require("emailer-kit");

async function sendTestEmail() {
  // emailerOptions is an object that contains the email options
  const emailerOptions = {
    email: "email@example.com",
    subject: "Test Subject",
    htmlContent: "<p>This is a test email.</p>",
    file: { // Attachment is optional
      path: "path/to/your/file.pdf",
      name: "file.pdf" // Name is optional
    }
  };

  try {
    const info = await emailer(emailerOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendTestEmail();
```

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change. Make sure to update tests as appropriate.

## 👤 Author

**Md Rifat Hossen Saown**

- Website: [rifatsaown.netlify.app](https://rifatsaown.netlify.app/)
- GitHub: [@rifatsaown](https://github.com/rifatsaown)
- LinkedIn: [Md Rifat Hossen Saown](https://www.linkedin.com/in/rifatsaown/)
- Facebook: [Md Rifat Hossen Saown](https://www.facebook.com/rifatsaown0)

## ⭐️ Show Your Support

Give a ⭐️ if this project helped you!