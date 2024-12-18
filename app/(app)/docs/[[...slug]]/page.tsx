import { Metadata } from "next"
import { notFound } from "next/navigation"
import { allDocs } from "contentlayer/generated"
import { ChevronRightIcon } from "lucide-react"
import { Balancer } from "react-wrap-balancer"

import { siteConfig } from "~/config/site"
import { getTableOfContents } from "~/lib/toc"
import { absoluteUrl, cn } from "~/lib/utils"
import { Mdx } from "~/components/mdx-components"
import { DashboardTableOfContents } from "~/components/toc"

import "~/styles/mdx.css"

import { Contribute } from "~/components/contribute"
import { DocGridPattern } from "~/components/doc-grid-pattern"

interface DocPageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams({ params }: DocPageProps) {
  const slug = params.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata(props: {
  params: Promise<DocPageProps["params"]>
}): Promise<Metadata> {
  const params = await props.params
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: "@strlrd29",
    },
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }))
}

export default async function DocPage(props: {
  params: Promise<DocPageProps["params"]>
}) {
  const params = await props.params

  const doc = await getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <>
      <DocGridPattern />
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0 max-w-3xl">
          <div className="mb-4 flex items-center space-x-1 text-sm leading-none text-muted-foreground">
            <div className="truncate">Docs</div>
            <ChevronRightIcon className="size-3.5" />
            <div className="text-foreground">{doc.title}</div>
          </div>
          <div className="space-y-2">
            <h1 className={cn("scroll-m-20 text-3xl font-bold tracking-tight")}>
              {doc.title}
            </h1>
            {doc.description && (
              <p className="text-base text-muted-foreground">
                <Balancer>{doc.description}</Balancer>
              </p>
            )}
          </div>
          <div className="pb-12 pt-8">
            <Mdx code={doc.body.code} />
          </div>
        </div>
        <div className="hidden text-sm xl:block">
          <div className="sticky top-20 -mt-6 h-[calc(100vh-3.5rem)] pt-4">
            <div className="no-scrollbar h-full space-y-4 overflow-auto pb-10">
              {doc.toc && <DashboardTableOfContents toc={toc} />}
              <Contribute slug={doc.slug} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
