import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Anchor } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2">
          <Anchor className="size-5" />
          <span className="font-semibold text-lg tracking-tight">hookcn</span>
        </span>
      ),
      url: "/docs",
    },
    githubUrl: "https://github.com/strlrd-29/hookcn",
    themeSwitch: {
      mode: "light-dark-system",
    },
  };
}
