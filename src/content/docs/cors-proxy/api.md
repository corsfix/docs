---
title: API
description: Corsfix CORS Proxy API documentation.
---

Corsfix provides several methods to proxy your requests, giving you flexibility in how you use with the CORS Proxy.

## URL as Query String

A simple way to use the proxy is by inserting the target URL as query string:

```bash
https://proxy.corsfix.com/?https://api.example.com/data
# or
https://proxy.corsfix.com/?api.example.com/data
```

### Example Usage

```javascript
fetch("https://proxy.corsfix.com/?https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## URL in Query Parameter (alternative)

You can also use the `url` query parameter to specify your target:

```bash
https://proxy.corsfix.com/?url=https://api.example.com/data
# or
https://proxy.corsfix.com/?url=api.example.com/data
```

### Example Usage

```javascript
fetch("https://proxy.corsfix.com/?url=https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## URL as Path (alternative)

If you prefer the shortest URL possible, you can insert the target URL directly to the path:

```bash
https://proxy.corsfix.com/https://api.example.com/data
# or
https://proxy.corsfix.com/api.example.com/data
```

### Example Usage

```javascript
fetch("https://proxy.corsfix.com/https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Headers

### Request Headers

Corsfix uses the `Origin` header to validate if your application is authorized to use the CORS proxy. This header is automatically set when sending request from the browser, such as when using Fetch, Axios, or etc.

### Response Headers

The proxy automatically adds the following CORS header to the responses:

```
Access-Control-Allow-Origin: <your-request-origin>
Access-Control-Expose-Headers: *
```

## Size

### Request Size

The maximum payload size to be sent with the request is 5MB. If your request exceeds this limit, the proxy will return a `413 Payload Too Large` response. This status code indicates that the request is larger than the allowed size.

### Response Size

We don't have a response size limit. You can download however large content using the proxy.

## Timeouts

When a request takes longer than 20 seconds to complete, the proxy will return a `504 Gateway Timeout` response. This status code indicates that the server did not receive a timely response from the target server.

## API Key

By default, you don't need to use an API key. The proxy automatically detects requests from your domain if you've added it in the dashboard.

However, if for some reason you can't use domain whitelisting, you can use the API key instead.

```javascript
fetch("https://proxy.corsfix.com/?https://api.example.com/data", {
  headers: {
    "x-corsfix-key": "cfx_12345678",
  },
});
```

You can get your API key from the dashboard. To use it, pass it to the `x-corsfix-key` header.

Note that using an API key on the client side exposes it publicly. Only use this method if domain whitelisting isn't an option.
