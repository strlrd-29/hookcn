import type { Registry } from "@/registry/schema"

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
  {
    name: "use-toggle",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-toggle.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-copy-to-clipboard",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-copy-to-clipboard.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-unmount",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-unmount.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-debounce-callback",
    type: "registry:hook",
    registryDependencies: ["http://localhost:3000/r/use-unmount"],
    dependencies: ["lodash.debounce"],
    devDependencies: ["@types/lodash.debounce"],
    files: [
      {
        path: "hooks/use-debounce-callback.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-isomorphic-layout-effect",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-isomorphic-layout-effect.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-interval",
    type: "registry:hook",
    registryDependencies: [
      "http://localhost:3000/r/use-isomorphic-layout-effect",
    ],
    files: [
      {
        path: "hooks/use-interval.tsx",
        type: "registry:hook",
      },
    ],
  },
]
