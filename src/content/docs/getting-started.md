---
title: Getting Started
description: Get started with using Corsfix CORS proxy to bypass CORS errors.
prev:
  link: /docs
  label: Corsfix Docs
---

To use Corsfix, add `https://proxy.corsfix.com/?` before your URL when making fetch requests.

## Basic Usage

```javascript
// Instead of:
fetch("https://api.example.com/data");

// Use:
fetch("https://proxy.corsfix.com/?https://api.example.com/data");
```

Make sure you have added your website in the [dashboard](/docs/dashboard/application) to use in production.

## Example

```javascript
// GET request
fetch("https://proxy.corsfix.com/?https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));

// POST request
fetch("https://proxy.corsfix.com/?https://api.example.com/users", {
  method: "POST",
  body: JSON.stringify({ name: "John" }),
  headers: {
    "Content-Type": "application/json",
  },
});
```
