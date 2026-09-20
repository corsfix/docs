---
title: HTML
description: Fix CORS errors in a plain HTML page using Corsfix CORS proxy.
---

Use this code example for bypassing CORS errors in a plain HTML page with Corsfix CORS proxy. It loads the [Corsfix SDK](/docs/cors-proxy/sdk) from a CDN, so there is no build step.

```html
<!doctype html>
<html>
  <head>
    <script src="https://unpkg.com/corsfix"></script>
  </head>
  <body>
    <pre id="output">Loading...</pre>

    <script>
      corsfix
        .fetch("https://api.example.com/data")
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("output").textContent = JSON.stringify(
            data,
            null,
            2
          );
        })
        .catch((error) => {
          document.getElementById("output").textContent = error.message;
        });
    </script>
  </body>
</html>
```

The `corsfix` global exposes the same `corsfix.fetch` as the npm package, so the [SDK options](/docs/cors-proxy/sdk#options) for cached response, header override and secrets work the same way.
