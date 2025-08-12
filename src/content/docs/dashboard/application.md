---
title: Application
description: Learn more about managing your applications in Corsfix dashboard.
---

Once you're ready to use Corsfix in production, you'll need to add it in the dashboard. This guide will help you understand how to set up and configure your application.

## Adding a New Application

To add a new application, you'll need to configure two values:

### Origin Domains

This setting controls which domains can use Corsfix proxy. This is where you put your website's domain.

For example:

- `myapp.com`
- `www.myapp.com`
- `web.myapp.com`

![Origin Domains](https://assets.corsfix.com/iswiipc.png)

### Target Domains

This value consists of the domains you want to fetch to.
By default it is set to **All domains**, however you can select specific domains for more control.

For example:

- `example.com`
- `api.external.com`

![Target Domains](https://assets.corsfix.com/7wvwey8j.png)

## Security

Corsfix validates requests based on the Origin header and target domain, ensuring only legitimate requests are processed.

For enhanced security, both origin and target domains use exact matching. For example, these are considered distinct domains that must be added separately:

- `mywebsite.com`
- `www.mywebsite.com`
- `app.mywebsite.com`

To accommodate this, we support adding multiple origin domains for each application.

We don't use API keys since they would be exposed in client-side code, compromising security.
