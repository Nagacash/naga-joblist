import { getJsonLdGraph } from "@/lib/seo";

export function GlobalJsonLd() {
  const graph = getJsonLdGraph();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
