import SEO from "@/components/SEO";
import Timeline from "@/components/Timeline";

export default function Experience() {
  return (
    <>
      <SEO title="Experience • Vraj Patel" description="Professional experience timeline including CVS Health, Warner Bros Discovery, and Slalom." />
      <section className="container-responsive py-16">
        <h1 className="text-3xl md:text-4xl font-bold">Experience</h1>
        <div className="mt-8">
          <Timeline
            items={[
              {
                company: "CVS Health",
                role: "AI Software Engineer",
                period: "Aug 2023 – Present",
                href: "/experience/cvs-health",
              },
              {
                company: "Warner Bros Discovery",
                role: "Software Engineer",
                period: "Oct 2021 – Jun 2023",
                href: "/experience/warner-bros-discovery",
              },
              {
                company: "Slalom",
                role: "Software Development Engineer",
                period: "Mar 2021 – Oct 2021",
                href: "/experience/slalom",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}



