import { useMemo } from "react";
import SEO from "@/components/SEO";
import Link from "next/link";

export default function ResumePage() {
  const pdfPath = useMemo(() => {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return `${prefix}/Vraj_Patel_Resume.pdf`;
  }, []);

  return (
    <>
      <SEO title="Resume • Vraj Patel" description="Download the resume of Vraj Patel (AI Software Engineer)." />
      <section className="container-responsive py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
        <p className="text-gray-300 mt-4 max-w-2xl">
          You can open the resume in your browser or download it using the buttons below.
        </p>
        <div className="flex gap-3 mt-6">
          <a className="glass-button" href={pdfPath} target="_blank" rel="noreferrer">
            Open PDF
          </a>
          <a className="glass-button" href={pdfPath} download>
            Download PDF
          </a>
          <Link className="glass-button" href="/">
            Back to Home
          </Link>
        </div>
        <iframe
          title="Resume preview"
          className="w-full h-[80vh] mt-8 rounded-xl border border-white/10"
          src={pdfPath}
        />
      </section>
    </>
  );
}


