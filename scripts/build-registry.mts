import { existsSync, promises as fs } from "fs"
import { tmpdir } from "os"
import path from "path"
import { rimraf } from "rimraf"
import { Project, ScriptKind } from "ts-morph"

import { registry } from "../registry"
import {
  Registry,
  registryItemSchema,
  registrySchema,
} from "../registry/schema"

const REGISTRY_PATH = path.join(process.cwd(), "public/r")

const project = new Project({
  compilerOptions: {},
})

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), "shadcn-"))
  return path.join(dir, filename)
}

async function buildRegistry(registry: Registry) {
  const items = registry.map((item) => {
    return {
      ...item,
      files: item.files?.map((_file) => {
        const file =
          typeof _file === "string"
            ? {
                path: _file,
              }
            : _file

        return file
      }),
    }
  })
  const registryJson = JSON.stringify(items, null, 2)
  rimraf.sync(path.join(REGISTRY_PATH, "index.json"))
  await fs.writeFile(
    path.join(REGISTRY_PATH, "index.json"),
    registryJson,
    "utf8"
  )
}

async function buildHooks(registry: Registry) {
  const targetPath = path.join(REGISTRY_PATH, "hooks")

  // Create directory if it doesn't exist.
  if (!existsSync(targetPath)) {
    await fs.mkdir(targetPath, { recursive: true })
  }

  for (const item of registry) {
    let files
    if (item.files) {
      files = await Promise.all(
        item.files.map(async (_file) => {
          const file =
            typeof _file === "string"
              ? {
                  path: _file,
                  content: "",
                  target: "",
                  type: "registry:hook",
                }
              : _file

          let content: string
          try {
            content = await fs.readFile(
              path.join(process.cwd(), "registry", file.path),
              "utf8"
            )
          } catch (error) {
            console.error(error)
            return
          }

          const tempFile = await createTempSourceFile(file.path)
          const sourceFile = project.createSourceFile(tempFile, content, {
            scriptKind: ScriptKind.TSX,
          })

          sourceFile.getVariableDeclaration("iframeHeight")?.remove()
          sourceFile.getVariableDeclaration("containerClassName")?.remove()
          sourceFile.getVariableDeclaration("description")?.remove()

          const target = file.target || ""

          return {
            path: file.path,
            type: "registry:hook",
            content: sourceFile.getText(),
            target,
          }
        })
      )
    }

    const payload = registryItemSchema.safeParse({
      ...item,
      files,
    })

    if (payload.success) {
      await fs.writeFile(
        path.join(targetPath, `${item.name}.json`),
        JSON.stringify(payload.data, null, 2),
        "utf8"
      )
    }
  }
}

try {
  console.info("💽 Building registry...")
  const result = registrySchema.safeParse(registry)

  if (!result.success) {
    console.error(result.error)
    process.exit(1)
  }

  await buildRegistry(result.data)
  await buildHooks(result.data)

  console.info("✅ Done!")
} catch (error) {
  console.error(error)
  process.exit(1)
}
