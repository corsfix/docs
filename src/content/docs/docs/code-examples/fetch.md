---
title: Fetch
description: Learn how to use Corsfix as a proxy to bypass CORS errors in Fetch requests.
---

This page shows how to use Corsfix as a proxy to bypass CORS errors in Fetch requests.

```javascript
// basic usage
fetch("https://proxy.corsfix.com/?<TARGET_URL>");

// with headers override
fetch("https://proxy.corsfix.com/?<TARGET_URL>", {
  headers: {
    "x-corsfix-headers": JSON.stringify({
      Origin: "https://www.google.com",
      Referer: "https://www.google.com",
    }),
  },
});

// with cached response
fetch("https://proxy.corsfix.com/?<TARGET_URL>", {
  headers: {
    "x-corsfix-cache": "true",
  },
});
```
