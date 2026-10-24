import type { Metadata } from "next";
import { practices } from "@/lib/practices";
import { buildSeoMeta } from "@/lib/seo";
import { PracticeDetailView } from "@/views/PracticeDetailView";

export async function generateStaticParams() {
  return practices.map((practice) => ({ slug: practice.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const practice = practices.find((p) => p.slug === slug);
  if (!practice) {
    return {};
  }
  const seoMetadata = buildSeoMeta({
    locale: "uk",
    pageTitle: practice.name.uk,
    pageDescription: practice.shortDescription.uk,
    path: `/practices/${slug}`,
    ogImage: practice.image,
  });
  return {
    title: seoMetadata.title,
    description: seoMetadata.description,
    alternates: {
      canonical: seoMetadata.canonical,
      languages: {
        uk: seoMetadata.alternateUk,
        en: seoMetadata.alternateEn,
      },
    },
    openGraph: {
      title: seoMetadata.title,
      description: seoMetadata.description,
      images: [seoMetadata.ogImage],
    },
  };
}

export default async function UkrainianPracticeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PracticeDetailView locale="uk" slug={slug} />;
}
