import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  ogUrl?: string;
  structuredData?: Record<string, unknown>;
}

export default function SEO({
  title,
  description,
  keywords = "Formula Student, UAlg, ERTA, motorsport, engineering",
  ogImage = "/og-image.png",
  ogType = "website",
  twitterImage = "/og-image.png",
  canonicalUrl = "https://fs-erta.com",
  ogUrl = "https://fs-erta.com",
  structuredData,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={twitterImage} />
      <link rel="canonical" href={canonicalUrl} />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
