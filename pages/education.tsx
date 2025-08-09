import SEO from "@/components/SEO";

export default function Education() {
  return (
    <>
      <SEO title="Education • Vraj Patel" description="Master’s degrees in Computer Science from Oklahoma Christian University and University of Texas." />
      <section className="container-responsive py-16 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold">Education</h1>
        <div className="mt-8 space-y-6">
          <div className="liquid-card rounded-2xl p-5">
            <h2 className="text-xl font-semibold text-white">M.S., Computer Science — Oklahoma Christian University</h2>
            <p className="text-slate-400 mt-1">GPA: 4.0</p>
            <p className="text-slate-400">Dates: 2020 – 2021</p>
          </div>
          <div className="liquid-card rounded-2xl p-5">
            <h2 className="text-xl font-semibold text-white">M.S., Computer Science — University of Texas</h2>
            <p className="text-slate-400 mt-1">GPA: 3.5</p>
            <p className="text-slate-400">Dates: 2018 – 2020</p>
          </div>
        </div>
      </section>
    </>
  );
}



