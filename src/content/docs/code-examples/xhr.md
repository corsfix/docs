---
title: XMLHttpRequest
description: Learn how to use Corsfix as a proxy to bypass CORS errors in XMLHttpRequest requests.
---

This page shows how to use Corsfix as a proxy to bypass CORS errors in XMLHttpRequest requests.

```javascript
// basic usage
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://proxy.corsfix.com/?<TARGET_URL>");
xhr.send();

// with headers override
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://proxy.corsfix.com/?<TARGET_URL>");
xhr.setRequestHeader(
  "x-corsfix-headers",
  JSON.stringify({
    Origin: "https://www.google.com",
    Referer: "https://www.google.com",
  })
);
xhr.send();

// with cached response
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://proxy.corsfix.com/?<TARGET_URL>");
xhr.setRequestHeader("x-corsfix-cache", "true");
xhr.send();
```
