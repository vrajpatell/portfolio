import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";
import { LazyMotion } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        onMouseMove={(e) => {
          if (typeof document !== "undefined") {
            document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
            document.documentElement.style.setProperty("--my", `${e.clientY}px`);
          }
        }}
      >
        <div className="liquid-highlight" />
        <LazyMotion features={() => import("framer-motion").then((m) => m.domAnimation)} strict>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LazyMotion>
      </div>
    </>
  );
}
