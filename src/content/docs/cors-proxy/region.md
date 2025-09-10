---
title: Region
description: Corsfix CORS Proxy server regions.
---

Corsfix proxy servers are distributed across the world. When you make a request to the Corsfix proxy, the request will be directed to the closest server to minimize latency.

## Available Regions

The following regions are available for use with the Corsfix CORS Proxy:

| Region Code | Location      |
| ----------- | ------------- |
| proxy-ap    | Asia Pacific  |
| proxy-us    | North America |
| proxy-eu    | Europe        |

## Default Behavior

Under normal circumstances, you only need to call the main proxy server at `https://proxy.corsfix.com`. Request to the proxy will automatically be routed to the closest server based on the users location, providing the best performance and lowest latency.

## Using Region-Specific Endpoints

In case you need to ensure requests originate from a specific region, you can directly call specific proxy server regions:

```
https://proxy-ap.corsfix.com/?<TARGET_URL>  // Asia Pacific
https://proxy-us.corsfix.com/?<TARGET_URL>  // North America
https://proxy-eu.corsfix.com/?<TARGET_URL>  // Europe
```

### Example Usage

```javascript
// To make a request from the Asia Pacific region
fetch("https://proxy-ap.corsfix.com/?https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
```
