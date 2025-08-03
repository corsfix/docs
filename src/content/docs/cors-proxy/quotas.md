---
title: Quotas
description: Learn the different usage quotas depending on your Corsfix plan.
---

Depending on your Corsfix plan, you have access to different quotas and allowances.

## Throughput

Each plan is designed with different throughput capacities to accommodate various usage scenarios. Throughput is measured in requests per minute (RPM) and per IP address.

| Plan | RPM (per IP) |
| ---- | ------------ |
| Lite | 60 RPM       |
| Plus | 120 RPM      |
| Pro  | 180 RPM      |

When exceeding the throughput capacity, users will receive a `429 Too Many Requests` response, which indicates that they have reached the maximum number of requests allowed for their IP address.

Each response includes headers that provide information about the status:

| Header Name           | Description                                                           |
| --------------------- | --------------------------------------------------------------------- |
| X-RateLimit-Limit     | The maximum number of requests allowed per minute                     |
| X-RateLimit-Remaining | The number of requests remaining in the current time window           |
| X-RateLimit-Used      | The number of requests used in the current time window                |
| X-RateLimit-Reset     | The time at which the rate limit will reset, in Unix timestamp format |

## Data Transfer

Each plan includes a specific monthly data transfer allowance for outbound traffic. Data transfer refers to the amount of data sent from Corsfix servers to your users.

| Plan | Monthly Data Transfer |
| ---- | --------------------- |
| Lite | 25 GB                 |
| Plus | 100 GB                |
| Pro  | 500 GB                |

**Important Notes:**

- Data transfer quotas apply only to outbound traffic (data sent from Corsfix to your users)
- Inbound data transfer (requests sent to Corsfix) is always free and unlimited
- You can monitor your current usage and remaining quota on the Metrics page of your dashboard
