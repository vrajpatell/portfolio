import Head from "next/head";

type SeoProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

const DEFAULT_IMAGE = "https://github.com/vrajpatell.png";
const SITE_NAME = "Vraj Patel — AI Software Engineer";

export default function SEO({ title, description, url, image }: SeoProps) {
  const ogImage = image || DEFAULT_IMAGE;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {siteUrl && url && <link rel="canonical" href={`${siteUrl}${url}`} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}


