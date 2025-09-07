---
title: Observable
description: Fix CORS errors in Observable with Corsfix when calling external APIs.
---

Observable notebooks and data apps are powerful tools for data visualization and analysis. However, when making API requests directly from the browser environment within these tools, you may encounter Cross-Origin Resource Sharing (CORS) issues if the target API isn't configured to allow requests from Observable's domains.

In this guide, we'll fix CORS errors in Observable using Corsfix, a secure proxy service that enables your application to communicate with any API without CORS restrictions.

## Observable Notebook

When you run code that fetches data directly within an Observable notebook cell (e.g., using `fetch`), the request originates from a unique domain specific to your user account.

To allow Corsfix to proxy requests from your notebook, you must add your specific Observable user domain to the **Origin Domains** list for your application in the [Corsfix dashboard](/docs/dashboard/application/#adding-a-new-application).

The format for this origin is:
`https://<username>.static.observableusercontent.com`

Replace `<username>` with your Observable username, which you can find in the URL of any of your notebooks (e.g., `https://observablehq.com/@<username>/notebook-name`).

Once you've added this origin in the Corsfix dashboard, you can make API requests from your notebook without CORS errors by prefixing the target URL with the Corsfix proxy endpoint:

```javascript
// Example: Fetching data from an API within an Observable notebook cell
async function fetchData() {
  const response = await fetch(
    "https://proxy.corsfix.com/?https://api.example.com/data"
  );
  const data = await response.json();
  return data;
}

// Call the function to get the data
const apiData = fetchData();
```

Remember to also ensure the target domain (`api.example.com` in this case) is listed in your application's **Allowed Domains** in the Corsfix dashboard.

## Observable Data Apps (Framework)

With the Observable Framework, CORS issues are less common for data loaded via [data loaders](https://observablehq.com/framework/loaders). Data loaders run during the build process (server-side or locally), fetch the data, and store it as static files alongside your deployed app. Browser CORS policies do not apply during this build step.

However, if you perform `fetch` requests **directly from the client-side code** within your Observable Framework application (e.g., inside a JavaScript code block in a Markdown file or within a custom component reacting to user input), these requests _are_ subject to browser CORS restrictions.

To resolve CORS errors for these client-side requests:

1.  **Development:** While developing locally, requests might originate from `localhost` or a similar local address. You can often use Corsfix's free tier without needing specific origin configuration for `localhost`. Simply prefix the URL:

    ```javascript
    fetch("https://proxy.corsfix.com/?https://api.example.com/data");
    ```

2.  **Deployment:** When you deploy your Observable Framework application, it will be hosted on a specific domain. You **must** add this deployment domain to your **Origin Domains** in the [Corsfix dashboard](/docs/dashboard/application/#adding-a-new-application).
    - If using Observable's default hosting, the domain is typically:
      `https://<username>.observablehq.cloud` (replace `<username>` with your Observable username).
    - If using a custom domain, add your specific custom domain (e.g., `https://my-data-app.com`).

After configuring the origin domain for your deployed app, client-side fetch requests using the Corsfix proxy URL will work correctly.

```javascript
// Example: Client-side fetch within an Observable Framework component
document.getElementById("myButton").addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://proxy.corsfix.com/?https://api.example.com/data"
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    console.log("Data fetched:", data);
    // Update UI with data
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
});
```

Again, ensure the target API domain (`api.example.com`) is included in your **Allowed Domains** in the Corsfix dashboard.
