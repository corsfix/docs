---
title: Netlify
description: Use Corsfix in your Netlify-hosted applications to make API requests without CORS errors.
---

Netlify is a popular web deployment service where you can host your static websites and single-page applications. It's not uncommon to encounter CORS errors when working with Netlify since you're typically working with static-only apps, and most APIs require requests to be made from a backend server.

With Corsfix's CORS proxy, you can fetch data directly from your frontend and do so securely using our [secrets variable](/docs/cors-proxy/secrets-variable) feature.

## Getting Started

### 1. Deploy Your Netlify Project

Deploy your Netlify project as you normally would. Once you deploy your project, you'll find the deployment URL on the project overview page in your Netlify dashboard.

![Netlify Deployment URL](https://assets.corsfix.com/n4ymi6g.png)
_Your Netlify deployment URL can be found in the project overview_

Save this deployment URL as you'll need it for the next step.

### 2. Configure Corsfix Dashboard

Open the [Corsfix dashboard](/docs/dashboard/application/) and add your Netlify deployment URL as an allowed origin.

![Adding Netlify Origin](https://assets.corsfix.com/nkd8l1g.png)
_Adding your Netlify deployment URL as an allowed origin_

After configuring the allowed origin, your API requests through Corsfix will work successfully in your deployed application.

### 3. See Your API Requests Go Through

Once everything is configured, open your deployed Netlify application and test your API functionality. You should now see your requests successfully going through the Corsfix proxy without any CORS errors.

![Successful API Request](https://assets.corsfix.com/8zn0j2e.png)
_Your API requests should now work without CORS errors_

Check your browser's developer console, you should no longer see CORS-related error messages, and your API calls should complete successfully.

## Custom Domains

If you're using a custom domain with your Netlify site, make sure to add your custom domain (e.g., `https://yourdomain.com`) to the allowed origins in the Corsfix dashboard instead of the default Netlify URL.

## Using Secrets for API Keys

For secure handling of API keys and sensitive data, use Corsfix's [secrets variable](/docs/cors-proxy/secrets-variable) feature.

## Development Environment

You can use Corsfix for [free in your local development environment](https://corsfix.com/docs/free-tier), which is especially useful when developing your app. Simply use the proxy as you normally would, and the requests will go through without any issues.

You'll only need to upgrade to a paid plan when you deploy your application to production.
