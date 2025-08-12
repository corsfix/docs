---
title: Cached Response
description: Learn how you can utilize the cached response for your CORS proxy request.
---

The cached response feature enables you to cache and reuse responses from the target server, optimizing performance and reducing throughput usage.

## Using x-corsfix-cache

To use cached response, include the `x-corsfix-cache` header in your request.

Example:

```javascript
fetch("https://proxy.corsfix.com/?<TARGET_URL>", {
  headers: {
    "x-corsfix-cache": "true",
  },
});
```

With this, you can:

- Cache responses to avoid hitting the target server constantly.
- Go beyond your plan throughput capacity, as requests with cached responses do not count towards the throughput capacity.
- Improve performance and latency, because the content is served from a global edge CDN around the world.

## Cache Behavior

For cached responses, we modify the response headers:

- Set `Cache-Control` to `public`.
- Remove `Expiration` header.

This feature is only available for GET requests, with cache TTL fixed at 1 hour.
