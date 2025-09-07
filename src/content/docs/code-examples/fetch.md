---
title: Fetch
description: Fix CORS errors in your Fetch requests using Corsfix CORS proxy.
---

Use these code examples for bypassing CORS errors in Fetch requests with Corsfix CORS proxy.

## GET Request

```javascript
fetch("https://proxy.corsfix.com/?https://api.example.com/data");
```

## Cached Response

```js
fetch("https://proxy.corsfix.com/?https://api.example.com/data", {
  headers: {
    "x-corsfix-cache": "true",
  },
});
```

## POST Request

```js
fetch("https://proxy.corsfix.com/?https://api.example.com/data", {
  method: "POST",
  body: JSON.stringify({
    data: "mydata",
  }),
});
```

## Using Secrets

```js
fetch(
  "https://proxy.corsfix.com/?" +
    "https://api.example.com/data?key={{SECRET_KEY}}",
  {
    method: "POST",
    headers: {
      Authorization: "Bearer {{SECRET_TOKEN}}",
    },
    body: JSON.stringify({
      data: "mydata",
    }),
  }
);
```

## Header Override

```js
fetch("https://proxy.corsfix.com/?https://api.example.com/data", {
  headers: {
    "x-corsfix-headers": JSON.stringify({
      "User-Agent": "MyAgent/1.0",
    }),
  },
});
```
