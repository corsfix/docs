---
title: Figma Plugin
description: Use Corsfix in your Figma plugin to make API requests without CORS error.
---

Figma plugins run in a sandboxed environment with strict security restrictions. When you try to call the Corsfix proxy API (or any API) directly from a Figma plugin, you'll encounter an error related to a "null origin". To work around this limitation, we need to use what Figma calls a ["non-null origin" iframes](https://www.figma.com/plugin-docs/creating-ui/#non-null-origin-iframes).

## Setting Up a Non-null Origin Webpage

Create a simple HTML (index.html) file that will be hosted on a web server. This page will use Corsfix to make the API request and then send the data back to your Figma plugin.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Figma Plugin Data Fetcher</title>
  </head>
  <body>
    <script>
      // Use Corsfix to make the request
      fetch(`https://proxy.corsfix.com/?<TARGET_URL>`)
        .then((response) => response.json())
        .then((data) => {
          // Send data back to the Figma plugin
          parent.postMessage(
            { pluginMessage: { type: "fetch-result", data }, pluginId: "*" },
            "*"
          );
        })
        .catch((error) => {
          parent.postMessage(
            {
              pluginMessage: { type: "fetch-error", error: error.message },
              pluginId: "*",
            },
            "*"
          );
        });
    </script>
  </body>
</html>
```

Host this file on a static website hosting service (like GitHub Pages, Netlify, Vercel, etc.), then add it to your [application allowed origins](/docs/dashboard/application) via the dashboard.

You can also work locally when developing your plugin, see the [Development Environment](#development-environment) section for more details.

## Configuring Your Figma Plugin

### Manifest File Configuration

Add your webpage domain to the allowed domains in your plugin's manifest.json file:

```json
{
  "name": "Your Plugin Name",
  "id": "your-plugin-id",
  "api": "1.0.0",
  "main": "code.js",
  "editorType": ["figma"],
  "networkAccess": {
    "allowedDomains": ["https://your-webpage-domain.com"]
  }
}
```

### Plugin Code

In your plugin's main code, load the webpage and listen for messages:

```typescript
// Show the UI with your hosted webpage
figma.showUI(
  '<script>window.location.href="https://your-webpage-domain.com/index.html";</script>'
);

// Listen for messages from the UI
figma.ui.onmessage = async (msg) => {
  if (msg.type === "fetch-result") {
    // Handle the successful response
    console.log("Data received:", msg.data);

    // Do something with the data in your plugin
    // For example, create text nodes with the data:
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    const textNode = figma.createText();
    textNode.characters = JSON.stringify(msg.data, null, 2);
    textNode.x = 100;
    textNode.y = 100;
    figma.currentPage.appendChild(textNode);

    // Optional: close the plugin when done
    figma.closePlugin();
  } else if (msg.type === "fetch-error") {
    // Handle errors
    console.error("Error fetching data:", msg.error);
    figma.notify(`Error: ${msg.error}`);
  }
};
```

## Additional Information

### Hiding the UI

If you don't want users to see the UI frame, you can hide it when showing the UI:

```typescript
figma.showUI(
  `<script>window.location.href="https://your-webpage-domain.com/index.html";</script>`,
  {
    visible: false,
  }
);
```

### Development Environment

During development, Figma allows you to use localhost as an allowed domain. Add the local domain to your manifest:

```json
{
  "networkAccess": {
    "allowedDomains": ["https://your-webpage-domain.com"],
    "devAllowedDomains": ["http://localhost:5500"]
  }
}
```

This allows you to test your plugin with a locally hosted webpage before deployment, and you can utilize Corsfix's free tier for local development. To serve your HTML file locally, you can use Visual Studio Code with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or any similar local development server. Just make sure to update the URL in your plugin code to point to your local server (e.g., `http://localhost:5500/index.html`).

## Sample Repository

Check out our sample repository [https://github.com/corsfix/corsfix-figma-plugin](https://github.com/corsfix/corsfix-figma-plugin).

It provides example code showing how to implement the techniques described in this guide that you can adapt for your own Figma plugins.
