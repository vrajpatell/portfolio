// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }
  // NOTE: API routes do not run on GitHub Pages. Use Netlify/Vercel functions for production.
  res.status(200).json({ ok: true });
}
