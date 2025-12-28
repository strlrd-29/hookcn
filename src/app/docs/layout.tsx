import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      {...baseOptions()}
      nav={{ ...baseOptions().nav }}
      sidebar={{
        collapsible: false,
      }}
      tree={source.pageTree}
    >
      {children}
    </DocsLayout>
  );
}
