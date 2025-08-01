---
title: Firebase Hosting
description: Use Corsfix in your Firebase Hosting applications to make API requests without CORS errors.
---

Firebase Hosting is Google's web hosting platform for static sites and progressive web apps. When calling external APIs directly from your Firebase-hosted application, you may encounter CORS errors since many APIs only accept requests from server environments.

Corsfix eliminates these errors by providing a secure proxy service that allows your Firebase Hosting application to communicate with any API without CORS restrictions.

## Getting Started

### 1. Deploy Your Application to Firebase Hosting

Start by deploying your project to Firebase Hosting using the Firebase CLI or your preferred deployment method. After deployment completes, you can access your live application URL from the Firebase Console under the Hosting tab.

![Firebase Hosting Deployment URL](https://assets.corsfix.com/e7uxkoz.png)
_Access your live application URL from the Firebase Console Hosting section_

Keep this URL handy as you'll need it for configuring Corsfix in the upcoming step.

### 2. Set Up Your Application in Corsfix

Go to the [Corsfix application dashboard](https://app.corsfix.com) and register your Firebase Hosting deployment URL as an origin domain for API requests.

![Adding origin domain](https://assets.corsfix.com/8bna8zej.png)
_Add your origin domain the Corsfix dashboard_

Once you've configured your domain as an origin domain, your API requests through Corsfix will operate correctly in your deployed application.

### 3. Test Your API Integration

With the setup complete, navigate to your live Firebase Hosting application and test your API functionality. Your requests should now route through the Corsfix proxy without encountering any CORS restrictions.

![Successful API Request](https://assets.corsfix.com/pys9md3j.png)
_API requests now function properly without CORS errors_

Open your browser's developer tools to verify that CORS errors have been resolved and your API calls are completing as intended.

## Custom Domains

If you've connected a custom domain to your Firebase Hosting project, be sure to add your custom domain (e.g., `https://yourdomain.com`) to the origin domains in the Corsfix dashboard instead of the default Firebase-generated URL.
