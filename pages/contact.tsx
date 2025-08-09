import { useRef, useState } from "react";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const startedAtRef = useRef<number>(Date.now());
  const formspreeEndpoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/your-id";
  const isFormConfigured = !!process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT && !formspreeEndpoint.includes("your-id");

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
      setSuccess(true);
      setStatus("Message sent successfully. I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      // Improve error when form is not configured
      setStatus(msg.includes("Form not found") || !isFormConfigured
        ? "Contact form not configured. Please set NEXT_PUBLIC_FORMSPREE_ENDPOINT."
        : msg);
      setSuccess(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO title="Contact • Vraj Patel" description="Get in touch with Vraj Patel for engineering opportunities, collaborations, and mentorship." />
      <section className="container-responsive py-16 animate-fadeIn">
        <SectionHeader as="h1" className="text-3xl md:text-4xl font-bold">Contact</SectionHeader>
        <form
          action={formspreeEndpoint}
          method="POST"
          onSubmit={onSubmit}
          className="mt-8 max-w-xl space-y-4 liquid-card rounded-2xl p-5"
          noValidate
        >
          <input id="company" name="company" type="text" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="_subject" value="New portfolio message" />
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
          <button type="submit" className="glass-button" disabled={submitting || !isFormConfigured} aria-disabled={submitting || !isFormConfigured}>
            {submitting ? "Sending…" : "Send"}
          </button>
          {status && (
            <p className={`text-sm ${success ? "text-emerald-400" : "text-red-300"}`} aria-live="polite">{status}</p>
          )}
        </form>
        {!isFormConfigured && (
          <p className="mt-4 text-slate-400">
            Tip: This form isn't configured yet. Set the repo secret <code className="font-mono">NEXT_PUBLIC_FORMSPREE_ENDPOINT</code>
            {' '}to your Formspree endpoint, then redeploy. Meanwhile, you can email me at
            {' '}<a className="underline" href="mailto:vrajpatel1995@gmail.com">vrajpatel1995@gmail.com</a>.
          </p>
        )}
      </section>
    </>
  );
}


