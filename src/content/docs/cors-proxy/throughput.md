---
title: Throughput
description: Learn the request throughput for each Corsfix plan.
---

All plans in Corsfix come with unlimited monthly requests, so you don't need to worry about running out of credits or hitting monthly request cap.

## Request Throughput

Each plan is designed with different throughput capacities to accommodate various usage scenarios. Throughput is measured in requests per minute (RPM).

| Plan | Requests per Minute |
| ---- | ------------------- |
| Free | 60 RPM              |
| Lite | 150 RPM             |
| Plus | 300 RPM             |
| Pro  | 600 RPM             |

## Throughput Status

When you exceed the throughput limit, you will receive a `429 Too Many Requests` response. This status code indicates that you have reached the maximum number of requests allowed for your plan.

Each response includes headers that provide information about your current rate limit status:

| Header Name           | Description                                                           |
| --------------------- | --------------------------------------------------------------------- |
| X-RateLimit-Limit     | The maximum number of requests allowed per minute                     |
| X-RateLimit-Remaining | The number of requests remaining in the current time window           |
| X-RateLimit-Used      | The number of requests used in the current time window                |
| X-RateLimit-Reset     | The time at which the rate limit will reset, in Unix timestamp format |
