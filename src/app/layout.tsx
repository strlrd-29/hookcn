import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={cn("antialiased", fontVariables)}
      lang="en"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col">
        <RootProvider
          theme={{
            defaultTheme: "system",
            enableSystem: true,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
