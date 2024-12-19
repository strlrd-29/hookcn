import * as React from "react"
import Link from "next/link"
import {
  BugIcon,
  LightbulbIcon,
  PencilIcon,
  type LucideProps,
} from "lucide-react"

import { getGithubFileUrl, getGitHubIssueUrl } from "@/lib/github"

interface ContributeProps {
  slug: string
}

interface ContributeLink {
  text: string
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >
  href: string
}

export function Contribute({ slug }: ContributeProps) {
  const contributeLinks = React.useMemo<ContributeLink[]>(() => {
    return [
      {
        text: "Report an issue",
        icon: BugIcon,
        href: getGitHubIssueUrl({
          title: `[bug]: ${slug === "/docs" ? "/docs/index" : slug}`,
          labels: ["bug", "documentation"],
          template: "bug_report.md",
        }),
      },
      {
        text: "Request a feature",
        icon: LightbulbIcon,
        href: getGitHubIssueUrl({
          title: `[feat]: ${slug === "/docs" ? "/docs/index" : slug}`,
          labels: ["enhancement"],
          template: "feature_request.md",
        }),
      },
      {
        text: "Edit this page",
        icon: PencilIcon,
        href: getGithubFileUrl(slug),
      },
    ]
  }, [slug])

  return (
    <div className="space-y-2">
      <p className="font-medium">Contribute</p>
      <ul className="m-0 list-none">
        {contributeLinks.map((link, index) => (
          <li key={index} className="mt-0 pt-2">
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon className="mr-2 size-4" />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
