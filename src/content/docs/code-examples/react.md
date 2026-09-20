---
title: React
description: Fix CORS errors in your React code using Corsfix CORS proxy.
---

Use this code example for bypassing CORS errors in React code with Corsfix CORS proxy. It uses the [Corsfix SDK](/docs/cors-proxy/sdk):

```bash
npm install corsfix
```

```jsx
import { useEffect, useState } from "react";
import corsfix from "corsfix";

function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    corsfix
      .fetch("https://example.com/api")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
