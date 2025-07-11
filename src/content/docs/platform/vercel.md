---
title: Vercel
description: Use Corsfix in your Vercel-hosted applications to make API requests without CORS errors.
---

Vercel offers a powerful cloud platform for deploying and hosting modern web applications.

If you're hosting a static application on Vercel, you may run into CORS errors when attempting to call external APIs directly from your application. This happens because many APIs are configured to only accept requests from server environments.

Corsfix eliminates these errors by providing a secure proxy service that allows your Vercel-hosted frontend to communicate with any API.

## Getting Started

### 1. Deploy Your Application to Vercel

Start by deploying your project to Vercel using their standard deployment process. After a successful deployment, navigate to your project's dashboard where you'll see the live URL for your application.

![Vercel Deployment URL](https://assets.corsfix.com/de8ccjy.png)
_Locate your live application URL in the Vercel project dashboard_

Copy this URL, you'll need it to configure Corsfix in the following step.

### 2. Set Up Your Application in Corsfix

Navigate to the [Corsfix application dashboard](https://app.corsfix.com) and register your Vercel deployment URL as an allowed origin for API requests.

![Adding Vercel Origin](https://assets.corsfix.com/d443n0k.png)
_Register your Vercel application URL in the Corsfix dashboard_

Once you've added your domain, you can start calling API from your deployed Vercel application.

### 3. Test Your API Integration

With the configuration complete, visit your live Vercel application and try making API calls. Your requests should now go through the Corsfix proxy without encountering CORS restrictions.

![Successful API Request](https://assets.corsfix.com/sd8hl75k.png)
_API calls now work smoothly without CORS blocking_

Open your browser's developer tools to verify that CORS errors are gone and your API requests are completing as expected.

## Custom Domains

When using a custom domain for your Vercel application, remember to register your custom domain URL (such as `https://yourdomain.com`) in the Corsfix dashboard in addition to the default Vercel-generated URL.
