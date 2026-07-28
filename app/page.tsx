import { OrbitHome } from "@/components/OrbitHome";

export interface Project {
  title: string;
  category: string;
  industry: string;
  image: string;
  description: string;
  problem: string;
  solution: string;
  results: string;
  outcomeHeadline: string;
  resultMetrics: string[];
  metrics: Array<{
    value: string;
    label: string;
    detail: string;
  }>;
  placeholderMetrics: string[];
  cta: string;
  previewVideo?: string;
  link?: string;
  year?: string;
  gallery?: Array<{
    type: "image" | "video";
    src: string;
    alt: string;
  }>;
}

export default function Home() {
  return <OrbitHome />;
}
