---
title: SDK
description: Use the Corsfix JavaScript SDK to fetch APIs without CORS errors, without manually adding the proxy URL.
sidebar:
  order: 2
---

The Corsfix SDK is a small JavaScript library that performs requests through the proxy for you. It exposes a single function, `corsfix.fetch`, with the same API as the native Fetch API plus an optional `corsfix` property for proxy options.

## Installation

### Script Tag (CDN)

```html
<script src="https://unpkg.com/corsfix"></script>
<script>
  corsfix
    .fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data));
</script>
```

### NPM

```bash
npm install corsfix
```

```javascript
import corsfix from "corsfix";

const response = await corsfix.fetch("https://api.example.com/data");
const data = await response.json();
```

## Usage

`corsfix.fetch` accepts the same arguments as `fetch`: a URL string, a `URL` object, or a `Request`, plus an init object. Everything you pass through, such as the method, headers and body, is sent to the target as usual.

```javascript
corsfix.fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "John" }),
});
```

## Options

Proxy-specific settings go in the `corsfix` property of the init object.

```typescript
interface CorsfixOptions {
  cache?: boolean | number | string; // Cache the response on the proxy
  headers?: Record<string, string>; // Override request headers sent to the target
  apiKey?: string; // API key, when domain whitelisting is not an option
  proxyUrl?: string; // Use a different proxy endpoint
}
```

### Cached response

Pass a duration such as `"10s"`, `"10m"`, `"2h"` or `"1d"` (the maximum). A plain number is treated as seconds, and `true` uses the proxy's default duration. See [Cached Response](/docs/cors-proxy/cached-response).

```javascript
corsfix.fetch("https://api.example.com/data", {
  corsfix: { cache: "10m" },
});
```

### Header override

Set headers the proxy should send to the target, including ones browsers normally forbid such as `Origin`, `Referer` or `User-Agent`. See [Header Override](/docs/cors-proxy/header-override).

```javascript
corsfix.fetch("https://api.example.com/data", {
  corsfix: {
    headers: {
      Origin: "https://example.com",
      "User-Agent": "MyApp/1.0",
    },
  },
});
```

### API key

By default the proxy recognises your website by its domain, as registered in the dashboard. If you cannot use domain whitelisting, pass an API key instead. Keep in mind that an API key used in client-side code is visible to anyone.

```javascript
corsfix.fetch("https://api.example.com/data", {
  corsfix: { apiKey: "cfx_12345678" },
});
```

### Proxy endpoint

Requests go to `https://proxy.corsfix.com` by default. Set `proxyUrl` to use the Lite plan endpoint, a [regional endpoint](/docs/cors-proxy/region), or a self-hosted instance.

```javascript
corsfix.fetch("https://api.example.com/data", {
  corsfix: { proxyUrl: "https://proxy-eu.corsfix.com" },
});
```

## Error Handling

`corsfix.fetch` behaves like native `fetch`. It resolves with a `Response` even when the target server returns an error status such as 404 or 500.

It only throws when the proxy itself rejects or fails the request, for example when the domain is not registered, the rate limit is hit, or the target is unreachable. In that case it throws a `CorsfixError`:

```javascript
import corsfix, { CorsfixError } from "corsfix";

try {
  const response = await corsfix.fetch("https://api.example.com/data");
  const data = await response.json();
} catch (error) {
  if (error instanceof CorsfixError) {
    console.error(error.code); // e.g. "rate_limited"
    console.error(error.status); // e.g. 429
    console.error(error.message); // human-readable description
    console.error(error.ifYouAreAdmin); // guidance for the site owner
    console.error(error.ifYouAreUser); // guidance for end users
  }
}
```

With the script tag, the class is available as `corsfix.CorsfixError`.

| Property        | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| `code`          | Machine-readable error code, e.g. `domain_not_registered`, `rate_limited`   |
| `status`        | HTTP status code of the proxy error response                                |
| `message`       | Human-readable description                                                  |
| `ifYouAreAdmin` | What the site owner integrating Corsfix should do                           |
| `ifYouAreUser`  | A message suitable for showing to end users                                 |
| `response`      | The raw proxy `Response`                                                    |

## Free Tier Notice

When a website on the [free tier](/docs/free-tier) reaches a limit, the request fails with a `free_tier_transfer_limit` or `free_tier_concurrency_limit` error and the SDK shows a small dismissable notice in the corner of the page. The notice tells visitors what happened and points the site owner to the dashboard to upgrade.

## TypeScript

The package ships its own type definitions. `CorsfixOptions`, `CorsfixRequestInit` and `CorsfixError` are exported for use in your own code.
