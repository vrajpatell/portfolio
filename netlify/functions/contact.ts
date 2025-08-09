// Netlify Function example for handling contact form submissions.
// Deploy this repo to Netlify and set env var TO_EMAIL to your email.

import type { Handler } from "@netlify/functions";
import { Resend } from "resend";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method Not Allowed" }) };
  }
  const body = JSON.parse(event.body || "{}");
  const { name, email, message } = body;
  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields" }) };
  }
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL;
    if (!resendApiKey || !toEmail) {
      return { statusCode: 500, body: JSON.stringify({ error: "Email not configured" }) };
    }
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: "portfolio@resend.dev",
      to: toEmail,
      reply_to: email,
      subject: `New portfolio message from ${name}`,
      text: message,
    });
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err: any) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message || "Failed to send" }) };
  }
};


