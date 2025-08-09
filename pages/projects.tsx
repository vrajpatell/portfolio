import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import type { GetStaticProps } from "next";
import { useMemo, useState } from "react";

type RepoMeta = { name: string; stars?: number; forks?: number };

type Project = {
  key: string;
  repo: string; // owner/name
  name: string;
  description: string;
  tech: string[];
  demoUrl?: string;
};

const projects: Project[] = [
  {
    key: "comprehensive-metadata-extractor",
    repo: "vrajpatell/Comprehensive-Metadata-Extractor",
    name: "Comprehensive‑Metadata‑Extractor",
    description:
      "Python tool extracting rich metadata from multiple document types plus filesystem attributes (size, permissions, timestamps).",
    tech: ["Python"],
  },
  {
    key: "domain-specific-text-generator",
    repo: "vrajpatell/Domain-Specific-Text-Generator-with-Fine-Tuned-Transformers",
    name: "Domain‑Specific‑Text‑Generator (Fine‑Tuned Transformers)",
    description:
      "Fine‑tunes GPT‑2 on a domain dataset and serves an interactive Gradio demo for text generation.",
    tech: ["Python", "PyTorch", "Transformers", "Gradio"],
  },
  {
    key: "flasksteganography",
    repo: "vrajpatell/FlaskSteganography",
    name: "FlaskSteganography",
    description: "Steganography techniques implemented in a Python/Flask app.",
    tech: ["Python", "Flask"],
  },
  {
    key: "data-visualization-flask-js",
    repo: "vrajpatell/Data-Visualization",
    name: "Data‑Visualization (JavaScript + Flask)",
    description:
      "Cloud‑computing project enabling rich data visualization with JS frontend and Flask backend.",
    tech: ["JavaScript", "Flask"],
  },
  {
    key: "best-readme-template",
    repo: "vrajpatell/Best-README-Template",
    name: "Best‑README‑Template",
    description: "A high‑quality README template to jump‑start new projects.",
    tech: ["Markdown"],
  },
  {
    key: "crud-node-express-mongo",
    repo: "vrajpatell/CRUD-Nodejs-Express-mongoDB",
    name: "CRUD‑Nodejs‑Express‑mongoDB",
    description: "CRUD example with Node.js, Express, and MongoDB.",
    tech: ["Node.js", "Express", "MongoDB"],
  },
  {
    key: "k-mean-clustering-flask",
    repo: "vrajpatell/K-Mean-clustering-Python-Flask",
    name: "K‑Mean‑clustering‑Python‑Flask",
    description: "K‑Means clustering demo served via Flask.",
    tech: ["Python", "Flask"],
  },
];

type Props = { meta: Record<string, RepoMeta> };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const meta: Record<string, RepoMeta> = {};
  await Promise.all(
    projects.map(async (p) => {
      try {
        const res = await fetch(`https://api.github.com/repos/${p.repo}`);
        if (!res.ok) return;
        const data = await res.json();
        meta[p.key] = { name: data.name, stars: data.stargazers_count, forks: data.forks_count };
      } catch {
        // ignore
      }
    }),
  );
  return { props: { meta } };
};

export default function Projects({ meta }: Props) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tech))), []);
  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesTag = !tag || p.tech.includes(tag);
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [query, tag]);
  return (
    <>
      <SEO title="Projects • Vraj Patel" description="Highlighted open‑source projects and demos from GitHub." />
      <section className="container-responsive py-16 animate-fadeIn section-wrap">
        <div className="section-bg" style={{backgroundImage: "url(https://images.unsplash.com/photo-1527443224154-c4e1b7a34e8c?q=80&w=1600&auto=format&fit=crop)", borderRadius: 16}} />
        <div className="section-overlay" />
        <h1 className="text-3xl md:text-4xl font-bold">Projects</h1>
        <div className="mt-6 flex flex-wrap gap-3 items-center">
          <input
            aria-label="Search projects"
            placeholder="Search…"
            className="liquid-card px-3 py-2 rounded-xl text-sm bg-white/10 border border-white/20 outline-none focus:ring-2 focus:ring-emerald-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            <button className={`glass-button text-xs ${tag===null?"ring-2 ring-emerald-500/40":''}`} onClick={()=>setTag(null)}>All</button>
            {allTags.slice(0,12).map((t)=>(
              <button key={t} className={`glass-button text-xs ${tag===t?"ring-2 ring-emerald-500/40":''}`} onClick={()=>setTag(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard
              key={p.key}
              name={p.name}
              description={p.description}
              tech={p.tech}
              repoUrl={`https://github.com/${p.repo}`}
              demoUrl={p.demoUrl}
              stars={meta[p.key]?.stars}
              forks={meta[p.key]?.forks}
            />)
          )}
        </div>
      </section>
    </>
  );
}


