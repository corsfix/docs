---
title: Fetch
description: Fix CORS errors in your Fetch requests using Corsfix CORS proxy.
---

Use these code examples for bypassing CORS errors in Fetch requests with Corsfix CORS proxy. They use the [Corsfix SDK](/docs/cors-proxy/sdk), a drop-in wrapper around `fetch`. Load it with a script tag:

```html
<script src="https://unpkg.com/corsfix"></script>
```

Or install it from npm:

```bash
npm install corsfix
```

```javascript
import corsfix from "corsfix";
```

## GET Request

```javascript
corsfix.fetch("https://api.example.com/data");
```

## Cached Response

```js
corsfix.fetch("https://api.example.com/data", {
  corsfix: { cache: "15m" },
});
```

## POST Request

```js
corsfix.fetch("https://api.example.com/data", {
  method: "POST",
  body: JSON.stringify({
    data: "mydata",
  }),
});
```

## Using Secrets

```js
corsfix.fetch("https://api.example.com/data?key={{SECRET_KEY}}", {
  method: "POST",
  headers: {
    Authorization: "Bearer {{SECRET_TOKEN}}",
  },
  body: JSON.stringify({
    data: "mydata",
  }),
});
```

## Header Override

```js
corsfix.fetch("https://api.example.com/data", {
  corsfix: {
    headers: {
      "User-Agent": "MyAgent/1.0",
    },
  },
});
```
