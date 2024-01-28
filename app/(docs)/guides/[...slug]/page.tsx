import Link from "next/link";
import { notFound } from "next/navigation";
import { allGuides } from "contentlayer/generated";
import Comments from "@/components/comment";
import DocFooter from "@/components/doc-footer";
import { getTableOfContents } from "@/lib/toc";
import { Icons } from "@/components/icons";
import { Mdx } from "@/components/mdx-components";
import { DocsPageHeader } from "@/components/page-header";
import { DashboardTableOfContents } from "@/components/toc";

import "../../../mdx.css";
import { Metadata } from "next";

import { absoluteUrl, cn } from "@/lib/utils";

interface GuidePageProps {
  params: {
    slug: string[];
  };
}

async function getGuideFromParams(params: any) {
  const slug = params?.slug?.join("/");
  const guide = allGuides.find((guide) => guide.slugAsParams === slug);

  if (!guide) {
    null;
  }

  return guide;
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const guide = await getGuideFromParams(params);

  if (!guide) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", guide.title);
  ogUrl.searchParams.set("type", "Guide");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: `${guide.title} | 软考备考工具 | 软考刷题工具 | 软考刷题小程序 | 软考刷题APP | 软考真题 | 软考知识库 | 软考通关宝典`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: absoluteUrl(guide.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  GuidePageProps["params"][]
> {
  return allGuides.map((guide) => ({
    slug: guide.slugAsParams.split("/"),
  }));
}

export default async function GuidePage({ params }: GuidePageProps) {
  const repo = process.env.COMMENTS_REPO;
  const repoId = process.env.COMMENTS_REPO_ID;
  const category = process.env.COMMENTS_CATEGORY;
  const categoryId = process.env.COMMENTS_CATEGORY_ID;
  const guide = await getGuideFromParams(params);

  if (!guide) {
    notFound();
  }

  const toc = await getTableOfContents(guide.body.raw);

  return (
    <main className="relative py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20">
      <div>
        <DocsPageHeader heading={guide.title} text={guide.description} />
        <Mdx code={guide.body.code} />
        <hr className="my-4" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/guides"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            查看所有资源
          </Link>
        </div>
        <DocFooter pageTitle={guide.title} />
        <Comments
          repo={repo}
          repoId={repoId}
          category={category}
          categoryId={categoryId}
        />
      </div>

      <div className="hidden text-sm lg:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
