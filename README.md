# emailer-kit

emailer-kit is a Node.js utility for simplifying email sending using Nodemailer. It provides a streamlined interface to easily send HTML emails with Nodemailer configurations.

[![NPM](https://nodei.co/npm/emailer-kit.png)](https://nodei.co/npm/emailer-kit/)

[![NPM](https://img.shields.io/npm/v/emailer-kit)](https://www.npmjs.com/package/emailer-kit)
[![NPM](https://img.shields.io/npm/l/emailer-kit)](https://www.npmjs.com/package/emailer-kit)
[![NPM](https://img.shields.io/npm/types/emailer-kit)](https://www.npmjs.com/package/emailer-kit)

## Features

- 📧 Send HTML emails effortlessly
- 🌐 Compatible with various email service providers
- 🛠️ Simplifies Nodemailer configuration
- 📦 Lightweight and easy to use
- 📚 Supports both es6 modules and commonjs
- 📜 Written in TypeScript
- 🗃️ Coming soon: Support for attachments

## Installation

```bash
npm install emailer-kit

# or

yarn add emailer-kit
```

## Configuration

emailer-kit uses Nodemailer to send emails. You can configure Nodemailer by setting environment variables

### Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
NODEMAIL_SERVICE= [email service provider e.g. 'outlook' or 'gmail' or 'yahoo' etc.]
NODEMAIL_EMAIL= [your email address]
NODEMAIL_PASSWORD= [your email password]
```

NOTE : If you are using gmail, you need app password. You can create an app password by going to your Google account settings and then to the security tab.

## Usage

```javascript
import { emailer } from "emailer-kit";

// if you are not using commonjs then use require instead of import as shown below
// const { emailer } = require("emailer-kit");

async function sendTestEmail() {
  const email = "email@example.com";
  const subject = "Test Subject";
  const htmlContent = "<p>This is a test email.</p>";

  try {
    const info = await emailer(email, subject, htmlContent);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendTestEmail();
```



<!-- Contributor are welcome -->
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate.

## Author

👤 **Md Rifat Hossen Saown**
- Website: [rifatsaown.netlify.app](https://rifatsaown.netlify.app/)
- Github: [@rifatsaown](https://github.com/rifatsaown)
- LinkedIn: [Md Rifat Hossen Saown](https://www.linkedin.com/in/rifatsaown/)
- Facebook: [Md Rifat Hossen Saown](https://www.facebook.com/rifatsaown0)

## Show your support

Give a ⭐️ if this project helped you!
