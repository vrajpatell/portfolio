type TimelineItem = {
  company: string;
  role: string;
  period: string;
  href?: string;
  bullets?: string[];
};

type Props = { items: TimelineItem[] };

export default function Timeline({ items }: Props) {
  return (
    <ol className="relative border-l border-slate-800">
      {items.map((item, idx) => (
        <li key={idx} className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-1.5 border border-emerald-400" />
          <h3 className="text-white font-semibold">
            {item.role} • {item.company}
          </h3>
          <time className="text-xs text-slate-400">{item.period}</time>
          {item.bullets && (
            <ul className="mt-2 list-disc list-inside text-slate-300 space-y-1 text-sm">
              {item.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
          {item.href && (
            <a href={item.href} className="inline-block mt-2 text-sm text-emerald-400 hover:text-emerald-300">View details →</a>
          )}
        </li>
      ))}
    </ol>
  );
}



