import type { Registry } from "@/registry/schema"

export const hooks: Registry = [
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
    registryDependencies: ["https://hookcn.ouassim.tech/r/use-unmount"],
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
    files: [
      {
        path: "hooks/use-interval.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-timeout",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-timeout.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-document-title",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-document-title.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-counter",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-counter.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-mouse-position",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mouse-position.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-client",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-client.tsx",
        type: "registry:hook",
      },
    ],
  },
]
