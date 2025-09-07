---
title: jQuery
description: Fix CORS errors in your jQuery requests using Corsfix CORS proxy.
---

Use these code examples for bypassing CORS errors in jQuery requests with Corsfix CORS proxy.

## GET Request

```js
$.ajax({
  url: "https://proxy.corsfix.com/?https://api.example.com/data",
  method: "GET",
  success: function (response) {
    console.log(response);
  },
  error: function (xhr) {
    console.error(xhr);
  },
});
```

## Cached Response

```js
$.ajax({
  url: "https://proxy.corsfix.com/?https://api.example.com/data",
  method: "GET",
  headers: {
    "x-corsfix-cache": "true",
  },
  success: function (response) {
    console.log(response);
  },
  error: function (xhr) {
    console.error(xhr);
  },
});
```

### POST Request

```js
$.ajax({
  url: "https://proxy.corsfix.com/?https://api.example.com/data",
  method: "POST",
  contentType: "application/json",
  data: JSON.stringify({
    data: "mydata",
  }),
  success: function (response) {
    console.log(response);
  },
  error: function (xhr) {
    console.error(xhr);
  },
});
```

## Using Secrets

```js
$.ajax({
  url:
    "https://proxy.corsfix.com/?" +
    "https://api.example.com/data?key={{SECRET_KEY}}",
  method: "POST",
  headers: {
    Authorization: "Bearer {{SECRET_TOKEN}}",
  },
  contentType: "application/json",
  data: JSON.stringify({
    data: "mydata",
  }),
  success: function (response) {
    console.log(response);
  },
  error: function (xhr) {
    console.error(xhr);
  },
});
```

## Header Override

```js
$.ajax({
  url: "https://proxy.corsfix.com/?https://api.example.com/data",
  method: "GET",
  headers: {
    "x-corsfix-headers": JSON.stringify({
      "User-Agent": "MyAgent/1.0",
    }),
  },
  success: function (response) {
    console.log(response);
  },
  error: function (xhr) {
    console.error(xhr);
  },
});
```
