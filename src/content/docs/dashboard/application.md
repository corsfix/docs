---
title: Application
description: Learn more about managing your applications in Corsfix dashboard.
---

Once you're ready to use Corsfix with your production application, you'll need to add it in the dashboard. This guide will help you understand how to set up and configure your application.

## Adding a New Application

To add a new application, you'll need to configure two values:

### Allowed Origins

This setting controls which origins can use Corsfix proxy. This is where you put your application's domain.
An origin consists of protocol, domain name, and optional port number.

For example:

- `https://myapp.com`
- `http://anotherapp.com`
- `http://customport.com:8080`

For standard ports (80/HTTP, 443/HTTPS), you don't need to specify the port:

```text
✓ https://myapp.com         # Uses port 443
✓ http://myapp.com          # Uses port 80
✓ http://myapp:8080         # Custom port specified
```

### Allowed Domains

This setting specifies which external domains your application is permitted to fetch from. This is where you put the domains you want to access.
Domains use string matching, so `example.com` allows access to all subdomains of `example.com`. You can specify exact subdomains for more granular control. Use `*` to allow access to any domain.

For example:

- `example.com`
- `api.service.com`
- `*`

## Understanding Throughput

- Throughput capacity are shared between all applications under your account
- For example:
  - Plus tier with 2 applications
  - Total throughput: 300 req/min
  - Both applications will share the 300 req/min capacity

## Security

Corsfix validates requests from an account based on the origins and domains, ensuring that only allowed requests are processed. Here's how it works:

- Origin Validation: Requests are validated against your allowed origins
- Domain Restrictions: Requests are checked against your allowed domains

We avoid API keys since they would be visible in client-side code.
