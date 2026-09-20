---
title: Header Override
description: Learn about the Corsfix request headers override feature.
sidebar:
  order: 5
---

The `x-corsfix-headers` request header allows you to override HTTP request headers when making requests through the CORS proxy. This is particularly useful when you need to modify headers that are normally restricted in client-side JavaScript.

## Using x-corsfix-headers

To override headers, add the `x-corsfix-headers` header to your request header with a JSON-stringified object containing your desired headers.

Example:

```js
fetch("https://proxy.corsfix.com/?<TARGET_URL>", {
  headers: {
    "x-corsfix-headers": JSON.stringify({
      Origin: "https://www.google.com",
      Referer: "https://www.google.com",
    }),
  },
});
```

Or with the [SDK](/docs/cors-proxy/sdk), pass a plain object in the `headers` option and it is stringified for you:

```js
corsfix.fetch("<TARGET_URL>", {
  corsfix: {
    headers: {
      Origin: "https://www.google.com",
      Referer: "https://www.google.com",
    },
  },
});
```

## Forbidden Headers

The following normally forbidden headers can be modified using `x-corsfix-headers`:

- Referer
- Origin
- User-Agent
- etc.

See the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name) for a complete list of forbidden headers.
