---
title: Cloudflare Pages
description: Fix CORS errors in Cloudflare Pages with Corsfix when calling external APIs from your website.
---

Cloudflare Pages is a JAMstack platform for frontend developers to collaborate and deploy websites. When building static sites or single-page applications on Cloudflare Pages, you might encounter CORS errors when trying to access external APIs directly from your frontend code.

In this guide, we'll fix CORS errors in Cloudflare Pages using Corsfix, a secure proxy service that enables your application to communicate with any API without CORS restrictions.

## Fix CORS error

### 1. Deploy Your Project to Cloudflare Pages

Begin by deploying your application to Cloudflare Pages through their standard deployment workflow. Once your deployment is complete, you can find your live application URL in the Cloudflare Pages dashboard.

![Cloudflare Pages Deployment URL](https://assets.corsfix.com/fe8x7g4k.png)
_Find your live application URL in the Cloudflare Pages project dashboard_

Make note of this URL as you'll need it to configure Corsfix in the next step.

### 2. Configure Your Application in Corsfix

Head over to the [Corsfix application dashboard](https://app.corsfix.com) and add your Cloudflare Pages deployment URL as an origin domain for API requests.

![Adding origin domain](https://assets.corsfix.com/8bna8zej.png)
_Add your origin domain the Corsfix dashboard_

After adding your domain to the origin domains, your API requests through Corsfix will function properly in your deployed application.

### 3. Verify Your API Integration

Once the configuration is complete, open your live Cloudflare Pages application and test your API functionality. Your requests should now flow through the Corsfix proxy without any CORS-related issues.

![Successful API Request](https://assets.corsfix.com/qc6o6v9.png)
_API requests now work seamlessly without CORS errors_

Check your browser's developer console to confirm that CORS errors are eliminated and your API calls are executing successfully.

## Custom Domains

If you've configured a custom domain for your Cloudflare Pages site, ensure you add your custom domain (e.g., `https://yourdomain.com`) to the origin domains in the Corsfix dashboard rather than using the default Cloudflare Pages URL.
