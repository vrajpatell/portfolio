import { useRef, useState } from "react";
import SEO from "@/components/SEO";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const startedAtRef = useRef<number>(Date.now());
  const formspreeEndpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-id";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    const emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+/;
    if (!emailRegex.test(email)) {
      setStatus("Enter a valid email address.");
      return;
    }
    const elapsedMs = Date.now() - startedAtRef.current;
    if (elapsedMs < 2000) {
      setStatus("Submission too fast. Please try again.");
      return;
    }
    const honeypot = (document.getElementById("company") as HTMLInputElement | null)?.value || "";
    if (honeypot) {
      setStatus("Thanks!");
      return;
    }
    try {
      setSubmitting(true);
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus("Thanks! Your message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setStatus(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO title="Contact • Vraj Patel" description="Get in touch with Vraj Patel for engineering opportunities, collaborations, and mentorship." />
      <section className="container-responsive py-16 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
        <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4 liquid-card rounded-2xl p-5" noValidate>
          <input id="company" name="company" type="text" className="hidden" tabIndex={-1} autoComplete="off" />
          <div>
            <label htmlFor="name" className="block text-sm text-slate-300">Name</label>
            <input
              id="name"
              name="name"
              className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-slate-300">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-slate-300">Message</label>
            <textarea
              id="message"
              name="message"
              className="mt-1 w-full min-h-[140px] rounded-md border border-white/20 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="glass-button" disabled={submitting} aria-disabled={submitting}>
            {submitting ? "Sending…" : "Send"}
          </button>
          <p className="text-sm text-slate-300" aria-live="polite">{status}</p>
        </form>
        <p className="mt-6 text-slate-400">Or reach me at <a className="underline" href="mailto:vpatel3777@gmail.com">vpatel3777@gmail.com</a>.</p>
      </section>
    </>
  );
}


