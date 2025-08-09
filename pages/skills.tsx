import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import { useMemo, useState } from "react";

const categories: { title: string; items: string[] }[] = [
  { title: "Programming", items: ["Python", "Java", "C++", "TypeScript/JavaScript"] },
  { title: "AI/ML", items: ["Gen AI", "LLMs (OpenAI, Azure OpenAI)", "NLP", "Speech-to-Text", "TensorFlow", "PyTorch", "Azure Custom Vision", "Form Recognizer"] },
  { title: "Cloud", items: ["AWS", "Azure", "GCP"] },
  { title: "Distributed systems", items: ["Microservices", "Kafka", "Docker", "Kubernetes"] },
  { title: "Data", items: ["MongoDB", "BigQuery", "Azure SQL", "DynamoDB"] },
  { title: "DevOps", items: ["CI/CD", "GitLab", "Docker", "Test Automation", "Monitoring/Logging"] },
  { title: "Other", items: ["System Design", "Code Reviews", "Agile", "TDD", "Product Management", "Effective Communication", "Leadership"] },
];

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const allSkills = useMemo(() => categories.flatMap(c=>c.items), []);
  return (
    <>
      <SEO title="Skills • Vraj Patel" description="Programming, AI/ML, cloud, distributed systems, databases, DevOps, and leadership skills." />
      <section className="container-responsive py-16 animate-fadeIn">
        <SectionHeader as="h1" className="text-3xl md:text-4xl font-bold">Skills</SectionHeader>
        <div className="mt-6 flex flex-wrap gap-2">
          <button className={`glass-button text-xs ${active===null?"ring-2 ring-emerald-500/40":''}`} onClick={()=>setActive(null)}>All</button>
          {categories.map(c=> (
            <button key={c.title} className={`glass-button text-xs ${active===c.title?"ring-2 ring-emerald-500/40":''}`} onClick={()=>setActive(c.title)}>{c.title}</button>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(active? categories.filter(c=>c.title===active):categories).map((cat) => (
            <div key={cat.title} className="rounded-2xl liquid-card p-5 transition-transform duration-200 hover:-translate-y-0.5">
              <h2 className="text-lg font-semibold text-white">{cat.title}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {cat.items.map((i) => (
                  <li key={i} className="text-sm bg-white/10 text-slate-100 px-2 py-1 rounded">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


