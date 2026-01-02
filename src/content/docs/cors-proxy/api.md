---
title: API
description: Corsfix CORS Proxy API documentation.
---

Corsfix provides several methods to proxy your requests, giving you flexibility in how you use the CORS Proxy.

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

## CORS Headers

Corsfix will automatically add the following CORS headers to the response, allowing you to fetch the data without CORS errors:

- [Access-Control-Allow-Origin](/cors-headers/access-control-allow-origin): Allows your origin (domain) to access the data.
- [Access-Control-Expose-Headers](/cors-headers/access-control-expose-headers): Allows you to see all the response headers (value: *).

The proxy will also automatically handle preflight requests, so all your requests just work instantly.

## Size Limit

There is no size limit for the response data. You can download content of any size using the proxy.

However, there is a maximum size for data being sent to the proxy (payload size) at 5MB. If your request exceeds this limit, the proxy will return a `413 Payload Too Large` response.

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
