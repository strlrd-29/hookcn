import { examples } from "@/registry/registry-examples"
import { hooks } from "@/registry/registry-hooks"
import type { Registry } from "@/registry/schema"

export const registry: Registry = [...hooks, ...examples]
