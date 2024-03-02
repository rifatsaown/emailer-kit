import nodemailer, { Transporter, SendMailOptions, SentMessageInfo } from "nodemailer";

// Configuration interface for Nodemailer
interface MailerConfig {
  service: string;
  auth: {
    user: string;
    pass: string;
  };
}

// Function to validate the presence of required environment variables
const validateEnvVariables = () => {
  const requiredEnvVariables = ["NODEMAIL_SERVICE", "NODEMAIL_EMAIL", "NODEMAIL_PASSWORD"];

  for (const variable of requiredEnvVariables) {
    if (!process.env[variable]) {
      throw new Error(`Missing required environment variable: ${variable}`);
    }
  }
};

// Function to create and configure the Nodemailer transporter
const createTransporter = (): Transporter => {
  // Ensure required environment variables are present
  validateEnvVariables();

  // Configuration based on environment variables
  const config: MailerConfig = {
    service: process.env.NODEMAIL_SERVICE!,
    auth: {
      user: process.env.NODEMAIL_EMAIL!,
      pass: process.env.NODEMAIL_PASSWORD!,
    },
  };

  // Create and return the Nodemailer transporter
  return nodemailer.createTransport(config);
};

// Function to send an email using the configured transporter
const sendEmail = async (email: string, subject: string, htmlContent: string): Promise<SentMessageInfo> => {
    // validate email address
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
    throw new Error("Invalid email address");
    }

  try {
    // Create a Nodemailer transporter instance
    const transporterInstance: Transporter = createTransporter();

    // Email options
    const mailOptions: SendMailOptions = {
      from: process.env.NODEMAIL_EMAIL || "",
      to: email,
      subject,
      html: htmlContent,
    };

    // Send the email and await the result
    const info: SentMessageInfo = await transporterInstance.sendMail(mailOptions);

    // Log success message
    console.log("Email sent:", info.response);

    // Return information about the sent email
    return info;
  } catch (e) {
    // Log and re-throw the original error for better debugging
    console.error("Error sending email:", e);
    throw e;
  }
};

// Export the function for external use
export { sendEmail };
