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
    <div className="rounded-xl glass-card glass-hover p-5 transition-transform duration-200 hover:-translate-y-0.5">
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
          <span key={t} className="text-xs bg-white/10 text-slate-100 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <a href={repoUrl} target="_blank" rel="noreferrer" className="glass-button text-sm">GitHub</a>
        {demoUrl && (
          <a href={demoUrl} target="_blank" rel="noreferrer" className="glass-button text-sm">Demo</a>
        )}
      </div>
    </div>
  );
}


