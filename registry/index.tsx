import type { Registry } from "~/registry/schema"

export const registry: Registry = [
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.tsx",
        type: "registry:hook",
      },
    ],
  },
]
