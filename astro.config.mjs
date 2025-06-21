// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://corsfix.com",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  redirects: {
    "/docs/sponsorship/open-source": "/docs/open-source/sponsorship",
    "/docs/integration/axios": "/docs/code-examples/axios",
    "/docs/integration/fetch": "/docs/code-examples/fetch",
    "/docs/integration/ky": "/docs/code-examples/ky",
    "/docs/integration/xhr": "/docs/code-examples/xhr",
  },
  integrations: [
    starlight({
      title: "Corsfix Docs",
      logo: {
        src: "/public/logo.png",
      },
      routeMiddleware: "./src/routeData.ts",
      disable404Route: true,
      sidebar: [
        {
          label: "Overview",
          items: [
            { label: "Corsfix", link: "/docs/" },
            { label: "Getting Started", link: "/docs/getting-started" },
            { label: "Free Tier", link: "/docs/free-tier" },
          ],
        },
        {
          label: "CORS Proxy",
          autogenerate: { directory: "docs/cors-proxy" },
        },
        {
          label: "Dashboard",
          autogenerate: { directory: "docs/dashboard" },
        },
        {
          label: "Platform Integration",
          autogenerate: { directory: "docs/platform" },
        },
        {
          label: "Code Examples",
          autogenerate: { directory: "docs/code-examples" },
        },
        {
          label: "Open Source",
          autogenerate: { directory: "docs/open-source" },
        },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://cloud.umami.is/script.js",
            "data-website-id": "df23c0f7-68fb-415c-91e7-5262eb2722a4",
            defer: true,
          },
        },
        {
          tag: "meta",
          attrs: {
            itemprop: "image",
            content: "https://corsfix.com/docs.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://corsfix.com/docs.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://corsfix.com/docs.png",
          },
        },
      ],
      components: {
        Pagination: "./src/components/Pagination.astro",
        Sidebar: "./src/components/Sidebar.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
      },
      expressiveCode: {
        themes: ["dark-plus"],
      },
    }),
    sitemap(),
  ],
});
