import type { MetadataRoute } from "next";

const BASE = "https://monimpotfrontalier.fr";

// Routes statiques du site. À compléter lors de l'ajout de nouveaux cantons / pages.
const routes: string[] = [
  "",
  "/assistance-declaration",
  "/calculateurs",
  "/calculateurs/teletravail-frontalier-suisse",
  "/calculateurs/quasi-resident-geneve",
  "/calculateurs/droit-option-assurance-frontalier",
  "/calculateurs/salaire-net-frontalier-suisse",
  "/frontalier/geneve",
  "/frontalier/geneve/impot-a-la-source",
  "/frontalier/geneve/quasi-resident",
  "/frontalier/geneve/teletravail",
  "/frontalier/geneve/assurance-maladie",
  "/frontalier/geneve/salaire-net",
  "/comparatifs/lamal-vs-cmu-frontalier",
  "/comparatifs/impot-source-vs-declaration",
  "/faq",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
