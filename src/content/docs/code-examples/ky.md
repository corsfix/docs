---
title: Ky
description: Fix CORS errors in your Ky requests using Corsfix CORS proxy.
---

Use these code examples for bypassing CORS errors in Ky requests with Corsfix CORS proxy.

## GET Request

```javascript
ky.get("https://proxy.corsfix.com/?https://api.example.com/data");
```

## Cached Response

```js
ky.get("https://proxy.corsfix.com/?https://api.example.com/data", {
  headers: {
    "x-corsfix-cache": "true",
  },
});
```

## POST Request

```js
ky.post("https://proxy.corsfix.com/?https://api.example.com/data", {
  body: JSON.stringify({
    data: "mydata",
  }),
});
```

## Using Secrets

```js
ky.post(
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
ky.get("https://proxy.corsfix.com/?https://api.example.com/data", {
  headers: {
    "x-corsfix-headers": JSON.stringify({
      "User-Agent": "MyAgent/1.0",
    }),
  },
});
```
