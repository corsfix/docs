---
title: Free Tier
description: Learn how you can use Corsfix for free to quickly fix CORS errors in your website.
---

Our free offerings are designed you so you can quickly use Corsfix with your website.

## Development

You can instantly use our proxy in your local development environment (localhost).

- No registration required
- Use in local domains (`localhost`, `127.0.0.1`, `192.168.x.x`, `0.0.0.0`, etc)
- 60 requests per minute

## Production (Free)

Use Corsfix on your live website for free, with no time limit. The free tier requires the [Corsfix SDK](https://www.npmjs.com/package/corsfix), available from CDN or NPM.

- No registration required
- 1 concurrent user
- 10 MB monthly data transfer per domain (goes up to 100 MB when you [add your application](/docs/dashboard/application))
- 60 requests per minute (per IP)
- All file sizes and types

Install the SDK and fetch as usual:

```html
<script src="https://unpkg.com/corsfix"></script>
<script>
  corsfix
    .fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data));
</script>
```

Or with npm:

```javascript
import corsfix from "corsfix";

corsfix.fetch("https://api.example.com/data");
```

Data transfer is counted per origin domain and resets at the start of each month (UTC). Registering a domain does not reset its usage, it only raises the allowance to 100 MB. A registered free account can have one application with one origin domain.

When your website reaches a limit, requests fail with a `free_tier_transfer_limit` or `free_tier_concurrency_limit` error and the SDK shows a small notice in the corner of the page. Register your domain for a higher allowance, or upgrade to a paid plan to remove the limits.

## Production (Trial)

Try every Corsfix feature on your live website for 7 days, free of charge.

- All features included, such as cached response and secrets variables
- 1 GB data transfer and 3 web apps included
- 60 requests per minute

Activate the trial from the [billing page](https://app.corsfix.com/billing) in the dashboard. It can be activated once per account, and when it ends your website goes back to the free tier until you upgrade.
