import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  ogUrl?: string;
  titleTemplate?: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
}

const setNamedMeta = (name: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setPropertyMeta = (property: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

export const SEO = ({
  title,
  description,
  keywords = "Formula Student, UAlg, ERTA, motorsport, engineering",
  ogImage = "https://fs-erta.com/og-image.png",
  ogType = "website",
  twitterImage,
  canonicalUrl = "https://fs-erta.com",
  ogUrl = "https://fs-erta.com",
  titleTemplate = "%s | ERTA",
  robots = "index, follow, max-image-preview:large",
  structuredData,
}: SEOProps) => {
  const { i18n } = useTranslation();
  const isPortuguese = i18n.language?.startsWith("pt") ?? false;
  const fullTitle = titleTemplate.replace("%s", title);
  const locale = isPortuguese ? "pt_PT" : "en_US";
  const alternateLocale = isPortuguese ? "en_US" : "pt_PT";
  const structuredDataItems = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];
  const localizedStructuredData = structuredDataItems.map((item) =>
    item["@type"] === "WebPage"
      ? { ...item, inLanguage: isPortuguese ? "pt-PT" : "en" }
      : item
  );
  const isHomePage = canonicalUrl.replace(/\/$/, "") === "https://fs-erta.com";
  const allStructuredData = isHomePage
    ? localizedStructuredData
    : [
        ...localizedStructuredData,
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "ERTA",
              item: "https://fs-erta.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: title,
              item: canonicalUrl,
            },
          ],
        },
      ];
  const structuredDataJson = allStructuredData.length
    ? JSON.stringify(allStructuredData.length === 1 ? allStructuredData[0] : allStructuredData)
    : null;

  useEffect(() => {
    document.title = fullTitle;
    document.documentElement.lang = isPortuguese ? "pt" : "en";

    setNamedMeta("description", description);
    setNamedMeta("keywords", keywords);
    setNamedMeta("robots", robots);
    setPropertyMeta("og:title", fullTitle);
    setPropertyMeta("og:description", description);
    setPropertyMeta("og:image", ogImage);
    setPropertyMeta("og:image:width", "1200");
    setPropertyMeta("og:image:height", "630");
    setPropertyMeta("og:image:alt", fullTitle);
    setPropertyMeta("og:type", ogType);
    setPropertyMeta("og:url", ogUrl);
    setPropertyMeta("og:site_name", "ERTA — Engineering Racing Team Algarve");
    setPropertyMeta("og:locale", locale);
    setPropertyMeta("og:locale:alternate", alternateLocale);
    setNamedMeta("twitter:card", "summary_large_image");
    setNamedMeta("twitter:title", fullTitle);
    setNamedMeta("twitter:description", description);
    setNamedMeta("twitter:image", twitterImage ?? ogImage);
    setNamedMeta("twitter:image:alt", fullTitle);
    setCanonical(canonicalUrl);

    const scriptId = "page-structured-data";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (structuredDataJson) {
      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }

      script.textContent = structuredDataJson;
    } else if (script) {
      script.remove();
    }
  }, [
    fullTitle,
    description,
    keywords,
    ogImage,
    ogType,
    ogUrl,
    canonicalUrl,
    twitterImage,
    locale,
    alternateLocale,
    isPortuguese,
    structuredDataJson,
    robots,
  ]);

  return null;
};
