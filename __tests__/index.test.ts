import "dotenv/config";
import { sendEmail } from '../src/index';

describe('emailer-kit', () => {
    it('should send an email', async () => {
    const email = 'rifatsaown0@gmail.com';
    const subject = 'Test Subject';
    const htmlContent = '<p>This is a test email.</p>';

    const info = await sendEmail(email, subject, htmlContent);

    expect(info).toBeDefined();
    expect(info.response);
    expect(info.response.includes('250')).toBe(true);});

    it('should throw an error if required environment variables are missing', async () => {
    process.env.NODEMAIL_SERVICE = '';
    process.env.NODEMAIL_EMAIL = '';
    process.env.NODEMAIL_PASSWORD = '';
    await expect(sendEmail(' ', ' ', ' ')).rejects.toThrow();
    });

    it('should throw an error if the email is invalid', async () => {
    process.env.NODEMAIL_SERVICE = 'email-service-provider';
    process.env.NODEMAIL_EMAIL = 'exampl@email.com';
    process.env.NODEMAIL_PASSWORD = 'password';

    const email = 'invalid-email';
    const subject = 'Test Subject';
    const htmlContent = '<p>This is a test email.</p>';
    await expect(sendEmail(email, subject, htmlContent)).rejects.toThrow();
    })
});
