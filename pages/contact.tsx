import { useState } from "react";
import SEO from "@/components/SEO";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

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
    try {
      const res = await fetch("/api/hello", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus("Thanks! Your message has been sent.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      setStatus(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <>
      <SEO title="Contact • Vraj Patel" description="Get in touch with Vraj Patel for engineering opportunities, collaborations, and mentorship." />
      <section className="container-responsive py-16 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
        <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4 liquid-card rounded-2xl p-5">
          <div>
            <label className="block text-sm text-slate-300">Name</label>
            <input
              className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm text-slate-300">Message</label>
            <textarea
              className="mt-1 w-full min-h-[140px] rounded-md border border-white/20 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500 backdrop-blur"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="glass-button">
            Send
          </button>
          {status && <p className="text-sm text-slate-300">{status}</p>}
        </form>
        <p className="mt-6 text-slate-400">Or reach me at <a className="underline" href="mailto:vpatel3777@gmail.com">vpatel3777@gmail.com</a>.</p>
      </section>
    </>
  );
}


