"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { AlertTriangleIcon, ChevronLeftIcon, HouseIcon } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  const router = useRouter()
  return (
    <div className="container mx-auto flex h-full items-center px-6 py-12">
      <div className="mx-auto flex max-w-sm flex-col items-center text-center">
        <p className="rounded-full bg-muted p-3 text-sm font-medium">
          <AlertTriangleIcon className="size-6" />
        </p>
        <h1 className="mt-3 text-2xl font-semibold md:text-3xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The page you are looking for doesn&apos;t exist.
        </p>
        <div className="mt-6 flex items-center gap-x-3">
          <Button onClick={() => router.back()} className={buttonVariants()}>
            <ChevronLeftIcon className="size-4" />
            <span>Go back</span>
          </Button>
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            <HouseIcon className="size-4" />
            <span>Take me home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
