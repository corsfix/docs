---
title: Quotas
description: Learn the different usage quotas depending on your Corsfix plan.
sidebar:
  order: 7
---

Depending on your Corsfix plan, you have access to different quotas and allowances.

## Throughput

Each plan is designed with different throughput capacities to accommodate various usage scenarios. Throughput is measured in requests per minute (RPM) and per IP address.

| Plan   | RPM (per IP) |
| ------ | ------------ |
| Free   | 60 RPM       |
| Hobby  | 60 RPM       |
| Growth | 120 RPM      |
| Scale  | 180 RPM      |

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

| Plan   | Monthly Data Transfer               |
| ------ | ----------------------------------- |
| Free   | [Up to 100 MB](/docs/free-tier)     |
| Hobby  | 25 GB                               |
| Growth | 100 GB                              |
| Scale  | 500 GB                              |

**Important Notes:**

- Data transfer quotas apply only to outbound traffic (data sent from Corsfix to your users)
- Inbound data transfer (requests sent to Corsfix) is always free and unlimited
- You can monitor your current usage and remaining quota on the Metrics page of your dashboard
- This is a soft limit on the standard plans, meaning your service will not be cut off. If you go over, we will reach out to help you move to a plan that fits. On the [free tier](/docs/free-tier), the limit is enforced and the SDK shows a notice on your website.

## Concurrency

Concurrency is the number of distinct users (unique IP addresses) using the proxy through your website at the same time. It reflects how many visitors your website is serving at once, not how many requests each of them makes. Your peak concurrency per day is shown on the Metrics page of your dashboard.

| Plan   | Concurrent Users               |
| ------ | ------------------------------ |
| Free   | 1                              |
| Hobby  | 3                              |
| Growth | 15                             |
| Scale  | 100                            |

**Important Notes:**

- This is a soft limit on the standard plans, meaning your service will not be cut off and requests keep working. If your website consistently exceeds it, we will reach out to help you move to a plan that fits.
- On the [free tier](/docs/free-tier), the limit is enforced. Requests beyond it receive a `429 Too Many Requests` response with the `free_tier_concurrency_limit` error, and the SDK shows a notice on your website.

## Lite Plan

The Lite plan offers unlimited requests and data transfer at `lite.corsfix.com`, with a rate limit of 600 RPM. Unlike standard plans where each visitor gets their own RPM allowance, the Lite plan shares the 600 RPM pool across all visitors to your site. Content is limited to text-based responses (JSON, HTML, CSV, etc.) with a maximum size of 1 MB per response.

| Feature       | Details                           |
| ------------- | --------------------------------- |
| RPM           | 600 RPM (shared across visitors)  |
| Data Transfer | Unlimited                         |
| Max File Size | 1 MB                              |
