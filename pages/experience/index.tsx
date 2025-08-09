import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { useState } from "react";

const roles = [
  {
    key: "cvs",
    company: "CVS Health",
    role: "AI Software Engineer",
    period: "Aug 2023 – Present",
    href: "/experience/cvs-health",
    bullets: [
      "Containerized microservices for document transformation and speech‑to‑text",
      "Real‑time streaming with Apache Kafka and GCS",
      "+25% accuracy via composite AI/ML models",
      "High‑performance APIs with Azure Durable Functions",
    ],
  },
  {
    key: "wbd",
    company: "Warner Bros Discovery",
    role: "Software Engineer",
    period: "Oct 2021 – Jun 2023",
    href: "/experience/warner-bros-discovery",
    bullets: [
      "1M+ content IDs migration to DynamoDB; −25% overhead",
      "Partner integrations: Google, Apple, Roku, Amazon",
      "Grafana + VictorOps; CI/CD with GitHub Actions",
    ],
  },
  {
    key: "slalom",
    company: "Slalom",
    role: "Software Development Engineer",
    period: "Mar 2021 – Oct 2021",
    href: "/experience/slalom",
    bullets: [
      "Distributed analytics with Lambda, DynamoDB, Kafka, Elasticsearch",
      "Automation frameworks; test automation",
    ],
  },
];

export default function Experience() {
  const [openKey, setOpenKey] = useState<string | null>(roles[0].key);
  return (
    <>
      <SEO title="Experience • Vraj Patel" description="Professional experience timeline including CVS Health, Warner Bros Discovery, and Slalom." />
      <section className="container-responsive py-16 animate-fadeIn">
        <SectionHeader as="h1" className="text-3xl md:text-4xl font-bold">Experience</SectionHeader>
        <div className="mt-8 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-5 space-y-3" role="radiogroup" aria-label="Select a role">
            {roles.map((r) => (
              <label key={r.key} className={`w-full block rounded-2xl px-4 py-3 transition liquid-surface ${openKey === r.key ? "ring-2 ring-emerald-500/40" : ""}`}>
                <input
                  type="radio"
                  name="role"
                  value={r.key}
                  className="sr-only"
                  checked={openKey === r.key}
                  onChange={() => setOpenKey(r.key)}
                  aria-controls={`panel-${r.key}`}
                />
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{r.role}</span>
                  <span className="text-xs text-slate-300">{r.period}</span>
                </div>
                <div className="text-sm text-slate-300">{r.company}</div>
              </label>
            ))}
          </div>
          <div className="md:col-span-7">
            {roles.map((r) => (
              <div key={r.key} id={`panel-${r.key}`} className={`${openKey === r.key ? "block" : "hidden"}`}>
                <div className="liquid-card rounded-2xl p-5">
                  <h2 className="text-xl font-semibold text-white">{r.role} • {r.company}</h2>
                  <p className="text-slate-400 text-sm">{r.period}</p>
                  <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1 text-sm">
                    {r.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <Link href={r.href} className="inline-block mt-3 text-emerald-400 hover:text-emerald-300 text-sm">View full role →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



