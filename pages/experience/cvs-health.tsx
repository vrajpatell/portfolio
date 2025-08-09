import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";

export default function CVSHealth() {
  return (
    <>
      <SEO title="CVS Health • Vraj Patel" description="AI Software Engineer at CVS Health — microservices, streaming, Durable Functions, CI/CD, MongoDB migration." />
      <section className="container-responsive py-16">
        <SectionHeader as="h1" className="text-3xl md:text-4xl font-bold">AI Software Engineer • CVS Health</SectionHeader>
        <p className="text-slate-400 mt-1">Aug 2023 – Present</p>
        <ul className="mt-6 space-y-2 list-disc list-inside text-slate-300">
          <li>Architected and deployed distributed, containerized microservices for document transformation and speech‑to‑text across Azure/GCP/AWS.</li>
          <li>Built scalable streaming pipelines using Apache Kafka and GCS for high‑throughput processing.</li>
          <li>Enhanced unstructured data extraction using composite AI/ML models (entity recognition, text classification, LLMs) improving accuracy by 25%.</li>
          <li>Designed high‑performance synchronous APIs with Azure Durable Functions to optimize throughput and reliability.</li>
          <li>Automated CI/CD pipelines and testing frameworks; mentored junior engineers on distributed system design and cloud best practices.</li>
          <li>Maintained robust observability; reduced client onboarding from 30 minutes to seconds with automated Python/Docker solution.</li>
          <li>Led migration to MongoDB for high‑throughput document processing.</li>
        </ul>
      </section>
    </>
  );
}


