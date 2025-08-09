import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";

export default function WBD() {
  return (
    <>
      <SEO title="Warner Bros Discovery • Vraj Patel" description="Software Engineer at WBD — DynamoDB migration, partner integrations, Grafana/Splunk, CI/CD, event-driven metadata." />
      <section className="container-responsive py-16">
        <SectionHeader as="h1" className="text-3xl md:text-4xl font-bold">Software Engineer • Warner Bros Discovery</SectionHeader>
        <p className="text-slate-400 mt-1">Oct 2021 – Jun 2023</p>
        <ul className="mt-6 space-y-2 list-disc list-inside text-slate-300">
          <li>Led large‑scale content migration using API Gateway, Terraform, Kubernetes, and AWS Lambda; moved 1M+ content IDs to DynamoDB and cut overhead by 25%.</li>
          <li>Orchestrated integrations with Google, Apple, Roku, Amazon; expanded HBO Max coverage to 21 EU countries contributing to 15.4% growth.</li>
          <li>Developed Grafana dashboards and integrated Splunk VictorOps for proactive incident management and high reliability.</li>
          <li>Streamlined CI/CD via GitHub Actions to increase deployment speed and consistency.</li>
          <li>Optimized metadata feed delivery (AWS Cognito + S3), improving processing time by 20%.</li>
          <li>Built event‑driven metadata processing, improving partner data flow efficiency by 20%.</li>
          <li>Implemented gRPC server code for resilient, asynchronous communication; managed both Windows and Linux environments.</li>
          <li>Peer code reviews, mentoring, and knowledge‑sharing on cloud and microservices best practices.</li>
        </ul>
      </section>
    </>
  );
}


