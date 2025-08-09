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
        <p className="mt-6 text-slate-300 max-w-3xl">
          AI Software Engineer with 5+ years building scalable distributed systems and
          Gen‑AI/NLP solutions in cloud‑native environments. I architect
          high‑availability microservices, design real‑time streaming pipelines with
          Apache Kafka, and deliver ML platforms across AWS, Azure, and GCP. I mentor
          engineers, lead code reviews, and continually optimize ML and
          speech‑to‑text pipelines for reliability, latency, and cost.
        </p>
      </section>
    </>
  );
}


