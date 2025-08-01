---
title: Render
description: Use Corsfix in your Render-hosted static sites to make API requests without CORS errors.
---

Render is a modern cloud platform for hosting web applications. When building static sites on Render, you may encounter CORS errors when calling external APIs directly from your frontend code since many APIs only accept requests from server environments.

Corsfix eliminates these errors by providing a secure proxy service that allows your Render-hosted static site to communicate with any API without CORS restrictions.

## Getting Started

### 1. Deploy Your Static Site to Render

Start by deploying your static site to Render using their deployment process. Once deployment is complete, you can find your live application URL in the Render dashboard under your service details.

![Render Deployment URL](https://assets.corsfix.com/bb2m1mj.png)
_Find your live application URL in the Render service dashboard_

Save this URL as you'll need it for configuring Corsfix in the next step.

### 2. Configure Your Application in Corsfix

Navigate to the [Corsfix application dashboard](https://app.corsfix.com) and add your Render deployment URL as an origin domain for API requests.

![Adding origin domain](https://assets.corsfix.com/8bna8zej.png)
_Add your origin domain the Corsfix dashboard_

After adding your domain as an origin domain, your API requests through Corsfix will work correctly in your deployed static site.

### 3. Test Your API Integration

With the configuration complete, visit your live Render application and test your API functionality. Your requests should now pass through the Corsfix proxy without any CORS-related issues.

![Successful API Request](https://assets.corsfix.com/7teag7h.png)
_API requests now work seamlessly without CORS errors_

Check your browser's developer tools to confirm that CORS errors are eliminated and your API calls are executing successfully.

## Custom Domains

If you've configured a custom domain for your Render static site, make sure to add your custom domain (e.g., `https://yourdomain.com`) to the origin domains in the Corsfix dashboard instead of the default Render-generated URL.
