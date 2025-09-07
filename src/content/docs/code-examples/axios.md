---
title: Axios
description: Fix CORS errors in your Axios requests using Corsfix CORS proxy.
---

Use these code examples for bypassing CORS errors in Axios requests with Corsfix CORS proxy.

## GET Request

```javascript
axios.get("https://proxy.corsfix.com/?https://api.example.com/data");
```

## Cached Response

```js
axios.get("https://proxy.corsfix.com/?https://api.example.com/data", {
  headers: {
    "x-corsfix-cache": "true",
  },
});
```

## POST Request

```js
axios.post("https://proxy.corsfix.com/?https://api.example.com/data", {
  body: JSON.stringify({
    data: "mydata",
  }),
});
```

## Using Secrets

```js
axios.post(
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
axios.get("https://proxy.corsfix.com/?https://api.example.com/data", {
  headers: {
    "x-corsfix-headers": JSON.stringify({
      "User-Agent": "MyAgent/1.0",
    }),
  },
});
```
