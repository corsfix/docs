---
title: XMLHttpRequest
description: Fix CORS errors in your XHR requests using Corsfix CORS proxy.
---

Use these code examples for bypassing CORS errors in XHR requests with Corsfix CORS proxy.

## GET Request

```javascript
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://proxy.corsfix.com/?<TARGET_URL>", true);
xhr.send();
```

## Cached Response

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://proxy.corsfix.com/?<TARGET_URL>", true);
xhr.setRequestHeader("x-corsfix-cache", "true");
xhr.send();
```

## POST Request

```js
const xhr = new XMLHttpRequest();
xhr.open(
  "POST",
  "https://proxy.corsfix.com/?https://api.example.com/data",
  true
);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(JSON.stringify({ data: "mydata" }));
```

## Using Secrets

```js
const xhr = new XMLHttpRequest();
xhr.open(
  "POST",
  "https://proxy.corsfix.com/?https://api.example.com/data?key={{SECRET_KEY}}",
  true
);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {{SECRET_TOKEN}}");
xhr.send(JSON.stringify({ data: "mydata" }));
```

## Header Override

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://proxy.corsfix.com/?<TARGET_URL>", true);
xhr.setRequestHeader(
  "x-corsfix-headers",
  JSON.stringify({
    Origin: "https://www.google.com",
    Referer: "https://www.google.com",
  })
);
xhr.send();
```
