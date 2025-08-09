import Head from "next/head";

type SeoProps = {
  title: string;
  description: string;
};

export default function SEO({ title, description }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Head>
  );
}



