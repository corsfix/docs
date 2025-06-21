import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  const canonicalLink = context.locals.starlightRoute.head.find(
    (tag) => tag.attrs && tag.attrs.rel === "canonical"
  );
  if (canonicalLink && canonicalLink.attrs && canonicalLink.attrs.href) {
    let cleanHref = canonicalLink.attrs.href;

    // Only process if href is a string
    if (typeof cleanHref === "string") {
      // Remove /index.html first (more specific pattern)
      cleanHref = cleanHref.replace(/\/index\.html$/, "");

      // Then remove trailing .html
      cleanHref = cleanHref.replace(/\.html$/, "");

      canonicalLink.attrs.href = cleanHref;
    }
  }
});
