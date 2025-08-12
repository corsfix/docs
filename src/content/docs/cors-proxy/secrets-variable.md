---
title: Secrets Variable
description: Use secrets variable to store sensitive information when using Corsfix.
---

The secrets variable feature allows you to store sensitive information, such as API keys or tokens. This is especially useful when you need to make requests that require credentials without exposing them in your frontend code.

## Adding Your Secrets

Before using secrets variable, you will need to add your secrets in the dashboard. Follow the [secrets dashboard documentation](/docs/dashboard/secrets) to add your secrets.

## Using Secrets Variable

Once you have added your secrets, you can use them in your requests by using your secret name wrapped with double curly braces `{{SECRET_NAME}}`.

The secrets variable can be used in the:

- Query parameters
- Request headers

```js
fetch("https://proxy.corsfix.com/?https://domain/?apiKey={{SECRET_NAME}}", {
  method: "GET",
  headers: {
    Authorization: "Bearer {{SECRET_NAME}}",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

When you make a request with the secrets variable, Corsfix will replace the variable with the value of your secret before proxying the request to the target URL.

## Security

Secrets variables are secure by default. They are secured at rest using layered encryption. The decryption process is done in memory only when the request using the secret is made, ensuring your sensitive information remains protected throughout the process.
