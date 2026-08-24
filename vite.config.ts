// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build: `GITHUB_PAGES=true bun run build`
// Produces a fully static, prerendered site in .output/public
const isPages = process.env["GITHUB_PAGES"] === "true";

const staticPages = ["/", "/about", "/products", "/services", "/contact"].map((path) => ({
  path,
  prerender: { enabled: true },
}));

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isPages
      ? {
          prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: true },
          pages: staticPages,
          spa: { enabled: true, prerender: { outputPath: "/404.html" } },
        }
      : {}),
  },
  ...(isPages ? { nitro: { preset: "static" as const } } : {}),
});
