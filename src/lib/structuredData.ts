interface Organization {
  name: string;
  description: string;
  url: string;
  logo: string;
  sameAs?: string[];
}

interface BreadcrumbItem {
  name: string;
  item: string;
}

export const generateOrganizationSchema = (org: Organization) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    description: org.description,
    url: org.url,
    logo: org.logo,
    ...(org.sameAs && { sameAs: org.sameAs }),
  };
};

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
};

// Helper function to generate the script tag with schema
export const generateSchemaScript = (schema: object) => {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
};
