import { emailer } from '../src/index';

describe('emailer-kit', () => {

  beforeEach(() => {
    // Set up necessary environment variables for each test
    process.env.NODEMAIL_SERVICE = ''; // Replace with actual service for testing
    process.env.NODEMAIL_EMAIL = ''; // Replace with actual email for testing
    process.env.NODEMAIL_PASSWORD = ''; // Replace with actual password for testing
  });

  afterEach(() => {
    // Clean up environment variables after each test
    delete process.env.NODEMAIL_SERVICE;
    delete process.env.NODEMAIL_EMAIL;
    delete process.env.NODEMAIL_PASSWORD;
  });

  it('should send an email with an attachment', async () => {
    const emailerOptions = {
      email: 'rifatsaown0@gmail.com',
      subject: 'Test Subject',
      htmlContent: '<p>This is a test email.</p>',
      file: { path: 'src/index.ts', name: 'index.ts' }
    };
    const info = await emailer(emailerOptions);

    expect(info).toBeDefined();
    expect(info.response).toBeTruthy();
    expect(info.response.includes('250')).toBe(true);
  });

  it('should send an email with an attachment without specifying a file name', async () => {
    const emailerOptions = {
      email: 'rifatsaown0@gmail.com',
      subject: 'Test Subject',
      htmlContent: '<p>This is a test email.</p>',
      file: { path: 'src/index.ts' }
    };
    const info = await emailer(emailerOptions);

    expect(info).toBeDefined();
    expect(info.response).toBeTruthy();
    expect(info.response.includes('250')).toBe(true);
  });

  it('should send an email without an attachment', async () => {
    const emailerOptions = {
      email: 'rifatsaown0@gmail.com',
      subject: 'Test Subject',
      htmlContent: '<p>This is a test email.</p>'
    };
    const info = await emailer(emailerOptions);

    expect(info).toBeDefined();
    expect(info.response).toBeTruthy();
    expect(info.response.includes('250')).toBe(true);
  });

  it('should throw an error if the email address is invalid', async () => {
    const emailerOptions = {
      email: 'invalid-email',
      subject: 'Test Subject',
      htmlContent: '<p>This is a test email.</p>'
    };
    await expect(emailer(emailerOptions)).rejects.toThrow("Invalid email address");
  });

  it('should throw an error if required environment variables password is wrong', async () => {
    process.env.NODEMAIL_PASSWORD = 'wrong-password';
    const emailerOptions = {
        email: 'rifatsaown0@gmail.com',
        subject: 'Test Subject',
        htmlContent: '<p>This is a test email.</p>'
      };
    await expect(emailer(emailerOptions)).rejects.toThrow("Invalid login");
  }, 30000);

  it('should throw an error if required environment variables are missing', async () => {
    // Remove required environment variables
    delete process.env.NODEMAIL_SERVICE;
    delete process.env.NODEMAIL_EMAIL;
    delete process.env.NODEMAIL_PASSWORD;

    const emailerOptions = {
      email: 'rifatsaown0@gmail.com',
      subject: 'Test Subject',
      htmlContent: '<p>This is a test email.</p>'
    };

    await expect(emailer(emailerOptions)).rejects.toThrow("Missing required environment variable:");
  });
});
