import SEO from "@/components/SEO";
import ProjectCard from "@/components/ProjectCard";
import type { GetStaticProps } from "next";
import { useMemo, useState } from "react";
import fs from "node:fs/promises";
import path from "node:path";

type RepoEntry = {
  name: string;
  fullName: string;
  url: string;
  description: string | null;
  homepage: string | null;
  stars: number;
  language: string | null;
  topics?: string[];
};

type Item = {
  key: string;
  name: string;
  description: string;
  tech: string[];
  repoUrl: string;
  stars?: number;
};

type Props = { items: Item[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const file = path.join(process.cwd(), "data", "projects.json");
  const raw = await fs.readFile(file, "utf-8");
  const list: RepoEntry[] = JSON.parse(raw);
  const items: Item[] = list.map((r) => ({
    key: r.name.toLowerCase(),
    name: r.name,
    description: r.description ?? "Open‑source project",
    tech: [r.language, ...(r.topics || [])].filter(Boolean) as string[],
    repoUrl: r.url,
    stars: r.stars,
  }));
  return { props: { items } };
};

export default function Projects({ items }: Props) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const allTags = useMemo(() => Array.from(new Set(items.flatMap((p) => p.tech))), [items]);
  const filtered = useMemo(() => {
    return items.filter((p) => {
      const matchesTag = !tag || p.tech.includes(tag);
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [items, query, tag]);
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
          <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Project filters">
            <button
              className={`glass-button text-xs ${tag===null?"ring-2 ring-emerald-500/40":''}`}
              onClick={()=>setTag(null)}
              aria-pressed={tag===null}
              aria-label="Show all projects"
            >All</button>
            {allTags.slice(0,12).map((t)=>(
              <button
                key={t}
                className={`glass-button text-xs ${tag===t?"ring-2 ring-emerald-500/40":''}`}
                onClick={()=>setTag(t)}
                aria-pressed={tag===t}
                aria-label={`Filter by ${t}`}
              >{t}</button>
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
              repoUrl={p.repoUrl}
              stars={p.stars}
            />
          ))}
        </div>
      </section>
    </>
  );
}


