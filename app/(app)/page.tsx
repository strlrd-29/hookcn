import Link from "next/link"
import Balancer from "react-wrap-balancer"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ChangingScrambleText } from "@/components/changing-scramble-text"
import { GridPattern } from "@/components/grid-pattern"

export default function Home() {
  return (
    <div className="relative grid h-full flex-1 place-items-center overflow-hidden">
      <div className="z-10 flex flex-col items-center space-y-6">
        <div className="space-y-1 text-center">
          <ChangingScrambleText />
          <Balancer className="max-w-2xl px-4 text-sm text-muted-foreground md:text-lg">
            A collection of reusable react hooks that you can easily copy and
            paste into your apps or add directly through the shadcn CLI.
          </Balancer>
        </div>
        <Link href="/docs/hooks/use-boolean" className={cn(buttonVariants())}>
          Explore the docs
        </Link>
      </div>
      <GridPattern
        squares={[
          [5, 12],
          [6, 16],
          [3, 20],
          [8, 23],
          [2, 25],
          [15, 15],
          [17, 16],
          [20, 20],
          [13, 20],
          [25, 25],
          [16, 27],
        ]}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "-inset-y-1/2 inset-x-0 h-[200%] skew-y-12"
        )}
      />
    </div>
  )
}
