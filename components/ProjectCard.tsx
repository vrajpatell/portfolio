type ProjectCardProps = {
  name: string;
  description: string;
  tech: string[];
  repoUrl: string;
  demoUrl?: string;
  stars?: number;
  forks?: number;
};

export default function ProjectCard({ name, description, tech, repoUrl, demoUrl, stars, forks }: ProjectCardProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-5 hover:border-emerald-600/50 transition">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <div className="flex gap-3 text-xs text-slate-400">
          {typeof stars === "number" && <span>★ {stars}</span>}
          {typeof forks === "number" && <span>⑂ {forks}</span>}
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <a href={repoUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-emerald-400 hover:text-emerald-300">GitHub</a>
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noreferrer" className="text-sm font-medium text-sky-400 hover:text-sky-300">Demo</a>
        )}
      </div>
    </div>
  );
}



