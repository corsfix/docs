---
title: Netlify
description: Fix CORS errors in Netlify with Corsfix when calling external APIs from your website.
---

Netlify is a popular web deployment service where you can host your static websites and single-page applications. It's common to encounter CORS errors when working with Netlify since you're typically working with static-only apps, and most APIs require requests to be made from a backend server.

In this guide, we'll fix CORS errors in Netlify using Corsfix, a secure proxy service that enables your application to communicate with any API without CORS restrictions.

## Fix CORS error

### 1. Deploy Your Netlify Project

Deploy your Netlify project as you normally would. Once you deploy your project, you'll find the deployment URL on the project overview page in your Netlify dashboard.

![Netlify Deployment URL](https://assets.corsfix.com/n4ymi6g.png)
_Your Netlify deployment URL can be found in the project overview_

Save this deployment URL as you'll need it for the next step.

### 2. Configure Corsfix Dashboard

Open the [Corsfix dashboard](/docs/dashboard/application/) and add your Netlify deployment URL as an origin domain.

![Adding origin domain](https://assets.corsfix.com/8bna8zej.png)
_Add your origin domain the Corsfix dashboard_

After configuring the origin domain, your API requests through Corsfix will work successfully in your deployed application.

### 3. See Your API Requests Go Through

Once everything is configured, open your deployed Netlify application and test your API functionality. You should now see your requests successfully going through the Corsfix proxy without any CORS errors.

![Successful API Request](https://assets.corsfix.com/8zn0j2e.png)
_Your API requests should now work without CORS errors_

Check your browser's developer console, you should no longer see CORS-related error messages, and your API calls should complete successfully.

## Custom Domains

If you're using a custom domain with your Netlify site, make sure to add your custom domain (e.g., `yourdomain.com`) to the origin domains in the Corsfix dashboard instead of the default Netlify URL.

## Using Secrets for API Keys

For secure handling of API keys and sensitive data, use Corsfix's [secrets variable](/docs/cors-proxy/secrets-variable) feature.

## Development Environment

You can use Corsfix for [free in your local development environment](https://corsfix.com/docs/free-tier), which is especially useful when developing your app. Simply use the proxy as you normally would, and the requests will go through without any issues.

You'll only need to upgrade to a paid plan when you deploy your application to production.
