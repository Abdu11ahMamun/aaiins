import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_7941yml';
const EMAILJS_TEMPLATE_ID = 'template_gst5np2';
const EMAILJS_PUBLIC_KEY = '5qTpzFQopfYQfB6tx';

emailjs.init(EMAILJS_PUBLIC_KEY);

export async function sendApplicationEmail(form) {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        form_type: 'AAIINS Lab Application',
        from_name: form.firstName + ' ' + form.lastName,
        from_email: form.email,
        company: form.institution,
        position: form.level,
        service: form.interest,
        message: form.statement,
        phone: 'Not provided',
        portfolio: 'Not provided',
      }
    );
    return { success: true };
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, message: 'Something went wrong. Please try again or email us directly at aaiins.research@gmail.com' };
  }
}