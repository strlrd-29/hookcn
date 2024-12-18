import type { Registry } from "~/registry/schema"

export const registry: Registry = [
  {
    name: "use-boolean",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-boolean.tsx",
        type: "registry:hook",
      },
    ],
  },
]
