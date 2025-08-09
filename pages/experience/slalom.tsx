import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";

export default function Slalom() {
  return (
    <>
      <SEO title="Slalom • Vraj Patel" description="SDE at Slalom — distributed analytics pipelines with AWS Lambda, DynamoDB, Kafka, Elasticsearch." />
      <section className="container-responsive py-16">
        <SectionHeader as="h1" className="text-3xl md:text-4xl font-bold">Software Development Engineer • Slalom</SectionHeader>
        <p className="text-slate-400 mt-1">Mar 2021 – Oct 2021</p>
        <ul className="mt-6 space-y-2 list-disc list-inside text-slate-300">
          <li>Improved distributed analytics pipelines using AWS Lambda, DynamoDB, Kafka, and Elasticsearch, boosting throughput and efficiency.</li>
          <li>Built automation frameworks; contributed to rapid prototyping, test automation, and SDLC streamlining.</li>
        </ul>
      </section>
    </>
  );
}


