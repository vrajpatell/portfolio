import SEO from "@/components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="About • Vraj Patel"
        description="Professional summary for Vraj Patel, AI Software Engineer specializing in microservices, real-time streaming (Kafka), and cloud-native ML/NLP."
      />
      <section className="container-responsive py-16">
        <h1 className="text-3xl md:text-4xl font-bold">About</h1>
        <div className="mt-6 max-w-3xl space-y-5 text-slate-300">
          <div className="glass-card rounded-xl p-5">
            <h2 className="text-xl font-semibold text-white">About Me</h2>
            <p className="mt-3">
              I am an AI Software Engineer with over 5 years of experience designing, building, and deploying
              scalable distributed systems and Generative AI/NLP solutions in cloud-native environments. My
              expertise spans microservices architecture, event-driven systems, and end-to-end AI pipelines, with a
              proven track record in healthcare and enterprise applications.
            </p>
          </div>

          <div className="glass-card rounded-xl p-5">
            <p>
              I have architected high-availability APIs using Azure Durable Functions, optimized ML and
              speech-to-text pipelines, and developed custom document intelligence solutions leveraging Azure
              Custom Vision, Form Recognizer, and LLM-based metadata enrichment. My work combines Python,
              JavaScript/TypeScript, React, and cloud platforms (AWS, Azure, GCP) to deliver secure, performant,
              and user-friendly solutions.
            </p>
          </div>

          <div className="glass-card rounded-xl p-5">
            <p>
              Passionate about solving complex problems, I thrive in cross-functional teams, leading projects from
              concept to production while implementing CI/CD automation and best practices in system design. Whether
              it’s architecting a retrieval-augmented generation service, building data-driven healthcare applications,
              or optimizing cloud infrastructure, I focus on delivering impactful, high-quality products that drive
              real-world results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


