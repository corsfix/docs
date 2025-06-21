import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

export const onRequest = defineRouteMiddleware((context) => {
  const canonical = context.site
    ? new URL(context.url.pathname.replace(/\.html$/, ""), context.site)
    : undefined;

  const head = context.locals.starlightRoute.head;

  const canonicalLink = head.find((tag) => tag.attrs?.rel === "canonical");
  if (canonicalLink?.attrs) {
    canonicalLink.attrs.href = canonical?.href;
  } else {
    head.push({
      tag: "link",
      attrs: { rel: "canonical", href: canonical?.href },
    });
  }

  const twitterUrl = head.find((tag) => tag.attrs?.name === "twitter:url");
  if (twitterUrl?.attrs) {
    twitterUrl.attrs.content = canonical?.href;
  } else {
    head.push({
      tag: "meta",
      attrs: { name: "twitter:url", content: canonical?.href },
    });
  }

  const ogUrl = head.find((tag) => tag.attrs?.property === "og:url");
  if (ogUrl?.attrs) {
    ogUrl.attrs.content = canonical?.href;
  } else {
    head.push({
      tag: "meta",
      attrs: { property: "og:url", content: canonical?.href },
    });
  }

  context.locals.starlightRoute.siteTitleHref = "/docs";
  context.locals.starlightRoute.pagination = {
    next: context.locals.starlightRoute.pagination.next
      ? {
          ...context.locals.starlightRoute.pagination.next,
          href: context.locals.starlightRoute.pagination.next.href.replace(
            /\.html$/,
            ""
          ),
        }
      : undefined,
    prev: context.locals.starlightRoute.pagination.prev
      ? {
          ...context.locals.starlightRoute.pagination.prev,
          href: context.locals.starlightRoute.pagination.prev.href.replace(
            /\.html$/,
            ""
          ),
        }
      : undefined,
  };
});
