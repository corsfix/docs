---
title: Neocities
description: Fix CORS errors in Neocities with Corsfix when calling external APIs from your website.
---

Neocities is a popular web hosting service for static pages. It's common to encounter CORS errors when working with Neocities since you're typically working with static-only apps, and most APIs require requests to be made from a backend server.

In this guide, we'll fix CORS errors in Neocities using Corsfix, a secure proxy service that enables your application to communicate with any API without CORS restrictions.

## Fix CORS error

### 1. Deploy Your Neocities Website

Deploy your Neocities website as you normally would. Once deployed, you'll find the URL of your website in your Neocities dashboard.

![Neocities website URL](https://assets.corsfix.com/n078bzf.jpg)
_Your Neocities website URL_

Save this URL as you'll need it for the next step.

### 2. Add Your Domain

Open the [Corsfix dashboard](/docs/dashboard/application/) and add your Neocities domain.

![Adding domain](https://assets.corsfix.com/b75v1k1.jpg)
_Add your domain the Corsfix dashboard_

After configuring the domain, your API requests through Corsfix will work successfully in your website.

### 3. See Your API Requests Go Through

Once everything is configured, open your website and test your API functionality. You should now see your requests successfully going through the Corsfix proxy without any CORS errors.

![Successful API Request](https://assets.corsfix.com/qc6o6v9.png)
_Your API requests should now work without CORS errors_

Check your browser's developer console, you should no longer see CORS-related error messages, and your API calls should complete successfully.

## Custom Domains

If you're using a custom domain with your Neocities site, make sure to add your custom domain (e.g., `yourdomain.com`) to the origin domains in the Corsfix dashboard alongside the default Neocities URL.

## Content Security Policy

If you are looking for how to fix Content-Security-Policy in Neocities, refer to this article:
https://corsfix.com/blog/fix-neocities-content-security-policy
