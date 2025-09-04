---
title: JSONP
description: Learn how to use Corsfix with JSONP for requests in strict security or constrained environments.
sidebar:
  badge: Preview
---

JSONP (JSON with Padding) is useful when traditional CORS requests are blocked or unavailable. You will need to use JSONP in these situations:

- **Strict Content Security Policy** - When your application's CSP policy blocks `fetch` or `XMLHttpRequest` but allows script tags
- **Null origin environments** - When working in sandboxed environments where origin is null

JSONP works by using a `<script>` tag that loads JavaScript from the proxy server, bypassing CORS restrictions since script tags are not subject to the same-origin policy.

## Using JSONP

To use JSONP, you import the Corsfix proxy as a script tag with a callback parameter, and it will execute your callback function with the response data.

### Complete HTML Example

Here's a complete HTML example showing how to use JSONP:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JSONP Example</title>
  </head>
  <body>
    <h1>JSONP Response:</h1>
    <pre id="output">Loading...</pre>

    <script>
      function myCallbackFunction(data) {
        // data.body contains the remote content
        console.log("Status:", data.status);
        console.log("Headers:", data.headers);
        console.log("Type:", data.type);
        console.log("Body:", data.body);

        // Display the result
        document.getElementById("output").textContent = JSON.stringify(
          data,
          null,
          2
        );
      }
    </script>

    <script src="https://proxy.corsfix.com/?url=https://api.example.com/data&callback=myCallbackFunction"></script>
  </body>
</html>
```

### jQuery Example

If you're using jQuery, you can use the `$.getJSON()` method with JSONP:

```javascript
$.getJSON(
  "https://proxy.corsfix.com/?url=https://api.example.com/data&callback=?",
  function (data) {
    console.log("Status:", data.status);
    console.log("Response body:", data.body);

    // Handle the response
    if (data.status === 200) {
      // Process successful response
      $("#result").html(JSON.stringify(data.body, null, 2));
    } else {
      // Handle error response
      $("#result").html("Error: " + data.status);
    }
  }
);
```

## Response Format

The proxy will respond with an object containing the following properties:

| Property  | Type   | Description                                          |
| --------- | ------ | ---------------------------------------------------- |
| `status`  | number | HTTP status code from the target API                 |
| `headers` | object | Response headers with lowercase keys                 |
| `type`    | string | Content type: `empty`, `json`, `string`, or `base64` |
| `body`    | any    | The response body (varies by type)                   |

The body type is determined by the target API response, and we handle them as follows:

| Type     | Description                        | Body Content             |
| -------- | ---------------------------------- | ------------------------ |
| `empty`  | No response body                   | `null` or empty          |
| `json`   | Valid JSON response                | Parsed JavaScript object |
| `string` | Text that cannot be parsed as JSON | String value             |
| `base64` | Binary data (images, files, etc.)  | Base64-encoded string    |

## Limitations

JSONP has inherent limitations due to its script-based nature:

- **HTTP method restriction** - Only GET requests are supported (no POST, PUT, DELETE, etc.)
- **Response size limit** - Target API responses are limited to 3MB
- **No caching** - The cached response feature is not supported with JSONP
- **Header limitations** - Sending custom request headers is not supported
