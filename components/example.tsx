import { cn } from "@/lib/utils";

function ExampleWrapper({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="w-full bg-background">
      <div
        className={cn(
          "mx-auto grid min-h-screen w-full min-w-0 max-w-5xl content-center items-start gap-8 p-4 pt-2 sm:gap-12 sm:p-6 md:grid-cols-2 md:gap-8 lg:p-12 2xl:max-w-6xl",

          className
        )}
        data-slot="example-wrapper"
        {...props}
      />
    </div>
  );
}

function Example({
  title,
  children,
  className,
  containerClassName,
  ...props
}: React.ComponentProps<"div"> & {
  title: string;
  containerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full min-w-0 max-w-lg flex-col gap-1 self-stretch lg:max-w-none",
        containerClassName
      )}
      data-slot="example"
      {...props}
    >
      <div className="px-1.5 py-2 font-medium text-muted-foreground text-xs">
        {title}
      </div>
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col items-start gap-6 border border-dashed bg-background p-4 text-foreground sm:p-6 *:[div:not([class*='w-'])]:w-full",
          className
        )}
        data-slot="example-content"
      >
        {children}
      </div>
    </div>
  );
}

export { ExampleWrapper, Example };
