import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";
import BackgroundLayers from "@/components/background/BackgroundLayers";
import { fadeUp } from "@/components/motion/Viewport";
import { motion as fm, useReducedMotion } from "framer-motion";

export default function Home() {
  const reduce = useReducedMotion();
  return (
    <>
      <BackgroundLayers particles intensity="low" />
      <SEO
        title="Vraj Patel | AI Software Engineer"
        description="AI Software Engineer in Scottsdale, AZ. 5+ years building scalable distributed systems and Gen‑AI/NLP solutions."
      />
      <section className="container-responsive py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            {reduce ? (
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Vraj Patel
                <span className="block text-xl md:text-2xl font-normal text-gray-300 mt-2">
                  AI Software Engineer • Scottsdale, AZ
                </span>
              </h1>
            ) : (
              <fm.h1 variants={fadeUp} initial="hidden" animate="show" className="text-3xl md:text-5xl font-bold leading-tight">
                Vraj Patel
                <span className="block text-xl md:text-2xl font-normal text-gray-300 mt-2">
                  AI Software Engineer • Scottsdale, AZ
                </span>
              </fm.h1>
            )}
            {reduce ? (
              <p className="text-gray-300 mt-6 max-w-2xl glass-card rounded-xl p-4">
                I am an AI Software Engineer with over 5 years of experience designing,
                building, and deploying scalable distributed systems and Generative AI/NLP
                solutions in cloud-native environments. I specialize in high‑availability
                microservices, event‑driven systems, and end‑to‑end AI pipelines.
              </p>
            ) : (
              <fm.p variants={fadeUp} initial="hidden" animate="show" className="text-gray-300 mt-6 max-w-2xl glass-card rounded-xl p-4">
                I am an AI Software Engineer with over 5 years of experience designing,
                building, and deploying scalable distributed systems and Generative AI/NLP
                solutions in cloud-native environments. I specialize in high‑availability
                microservices, event‑driven systems, and end‑to‑end AI pipelines.
              </fm.p>
            )}
            {reduce ? (
              <p className="text-gray-300 mt-4 max-w-2xl glass-card rounded-xl p-4">
                I architect APIs with Azure Durable Functions, optimize ML and
                speech‑to‑text pipelines, and build document intelligence using Azure
                Custom Vision, Form Recognizer, and LLM‑based metadata enrichment—
                delivering secure, performant, and user‑friendly products on AWS, Azure,
                and GCP.
              </p>
            ) : (
              <fm.p variants={fadeUp} initial="hidden" animate="show" className="text-gray-300 mt-4 max-w-2xl glass-card rounded-xl p-4">
                I architect APIs with Azure Durable Functions, optimize ML and
                speech‑to‑text pipelines, and build document intelligence using Azure
                Custom Vision, Form Recognizer, and LLM‑based metadata enrichment—
                delivering secure, performant, and user‑friendly products on AWS, Azure,
                and GCP.
              </fm.p>
            )}
            {reduce ? (
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="/Vraj_Patel_Resume.pdf" className="glass-button">Download Resume</a>
                <Link href="/contact" className="glass-button">Contact Me</Link>
                <a href="https://www.linkedin.com/in/vrajpatell0712/" target="_blank" rel="noreferrer" className="glass-button">LinkedIn</a>
                <a href="https://github.com/vrajpatell" target="_blank" rel="noreferrer" className="glass-button">GitHub</a>
              </div>
            ) : (
              <fm.div variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap gap-3 mt-8">
                <a href="/Vraj_Patel_Resume.pdf" className="glass-button">Download Resume</a>
                <Link href="/contact" className="glass-button">Contact Me</Link>
                <a href="https://www.linkedin.com/in/vrajpatell0712/" target="_blank" rel="noreferrer" className="glass-button">LinkedIn</a>
                <a href="https://github.com/vrajpatell" target="_blank" rel="noreferrer" className="glass-button">GitHub</a>
              </fm.div>
            )}
            <ul className="mt-6 text-gray-300 space-y-1">
              <li>Scottsdale, AZ</li>
              <li>
                <a className="underline" href="tel:+14692457484">
                  +1 (469) 245‑7484
                </a>
                {" • "}
                <a className="underline" href="mailto:vpatel3777@gmail.com">
                  vpatel3777@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-emerald-500/40 float-slow liquid-card inner-glow">
              <Image
                src="https://github.com/vrajpatell.png"
                alt="Vraj Patel headshot"
                fill
                sizes="(max-width: 768px) 160px, 224px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
