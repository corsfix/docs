---
title: Angular
description: Fix CORS errors in your Angular code using Corsfix CORS proxy.
---

Use this code example for bypassing CORS errors in Angular code with Corsfix CORS proxy.

```typescript
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-data-display",
  template: `
    <div>
      <h2>Data from API:</h2>
      <p>{{ data ? (data | json) : "Loading..." }}</p>
    </div>
  `,
})
export class DataDisplayComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get("https://proxy.corsfix.com/?https://api.example.com/data")
      .subscribe((response) => (this.data = response));
  }
}
```
