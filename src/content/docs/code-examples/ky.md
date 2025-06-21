---
title: Ky
description: Learn how to use Corsfix as a proxy to bypass CORS errors in Ky requests.
---

This page shows how to use Corsfix as a proxy to bypass CORS errors in Ky requests.

```javascript
// basic usage
ky.get("https://proxy.corsfix.com/?<TARGET_URL>");

// with headers override
ky.get("https://proxy.corsfix.com/?<TARGET_URL>", {
  headers: {
    "x-corsfix-headers": JSON.stringify({
      Origin: "https://www.google.com",
      Referer: "https://www.google.com",
    }),
  },
});

// with cached response
ky.get("https://proxy.corsfix.com/?<TARGET_URL>", {
  headers: {
    "x-corsfix-cache": "true",
  },
});
```
