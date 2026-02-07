---
title: Cached Response
description: Learn how you can utilize the cached response for your CORS proxy request.
---

The cached response feature enables you to cache and reuse responses from the target server, optimizing performance and reducing throughput usage.

## Using x-corsfix-cache

To use cached response, include the `x-corsfix-cache` header in your request with a cache duration value.

Example:

```javascript
fetch("https://proxy.corsfix.com/?<TARGET_URL>", {
  headers: {
    "x-corsfix-cache": "10m",
  },
});
```

The cache duration value supports the following formats:

| Format | Description | Example |
| ------ | ----------- | ------- |
| `<number>s` | Duration in seconds | `10s` (10 seconds) |
| `<number>m` | Duration in minutes | `10m` (10 minutes) |
| `<number>h` | Duration in hours | `2h` (2 hours) |
| `<number>d` | Duration in days | `1d` (1 day) |

If no unit is specified (e.g. `10`), the value defaults to seconds. The maximum cache duration is **1 day** (`1d`). Any value exceeding this will be capped at 1 day.

With this, you can:

- Cache responses to avoid hitting the target server constantly.
- Go beyond your plan throughput capacity, as requests with cached responses do not count towards the throughput capacity.
- Improve performance and latency, because the content is served from a global edge CDN around the world.

## Cache Behavior

For cached responses, we modify the response headers:

- Set `Cache-Control` to `public`.
- Remove `Expiration` header.

This feature is only available for GET requests.
