import type { CaseData } from "./types";

const mappaMundi: CaseData = {
  slug: "mappa-mundi",
  n: "03",
  title: "Mappa Mundi",
  summary: "Editorial commerce experience for a heritage atelier.",
  cover: "cover.svg",
  client: "Mappa Atelier",
  tools: ["Figma", "Shopify", "Motion"],
  year: "2023",
  roles: ["Experience Design", "Creative Direction"],
  sections: [
    {
      title: "The Brief",
      subtitle: "Commerce that earns attention",
      body: "A heritage atelier with a century of craft wanted a storefront that didn't feel like a store. Their existing site treated products as inventory. Their customers — collectors, editors, architects — expected a publication.",
    },
    {
      title: "The Experience",
      body: "Every product page reads like a long-form essay. Provenance, material, process, context — laid out with the same care as editorial design. The cart is quiet. The editorial voice is loud. Conversion is a side effect of attention earned.",
    },
    {
      title: "The Measure",
      body: "A storefront that reads like a publication. Conversion as a side effect of attention earned. Average session time tripled. Return visitors increased by 40%.",
    },
  ],
};

export default mappaMundi;
