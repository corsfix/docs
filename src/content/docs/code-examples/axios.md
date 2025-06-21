---
title: Axios
description: Learn how to use Corsfix as a proxy to bypass CORS errors in Axios requests.
---

This page shows how to use Corsfix as a proxy to bypass CORS errors in Axios requests.

```javascript
// basic usage
axios.get("https://proxy.corsfix.com/?<TARGET_URL>");

// with headers override
axios.get("https://proxy.corsfix.com/?<TARGET_URL>", {
  headers: {
    "x-corsfix-headers": JSON.stringify({
      Origin: "https://www.google.com",
      Referer: "https://www.google.com",
    }),
  },
});

// with cached response
axios.get("https://proxy.corsfix.com/?<TARGET_URL>", {
  headers: {
    "x-corsfix-cache": "true",
  },
});
```
