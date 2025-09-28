import emailjs from "@emailjs/browser";

// Flexible type: allows any string key with string/number values
type EmailFormData = Record<string, string | number>;

export const sendEmail = async (formData: EmailFormData) => {
  try {


    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    return result.text;
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
