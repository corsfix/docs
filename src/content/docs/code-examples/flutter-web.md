---
title: Flutter Web
description: Fix CORS errors in your Flutter Web code using Corsfix CORS proxy.
---

Use this code example for bypassing CORS errors in Flutter Web code with Corsfix CORS proxy.

```dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String data = 'Loading...';

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  Future<void> fetchData() async {
    try {
      final response = await http.get(
        Uri.parse('https://proxy.corsfix.com/?https://api.example.com/data'),
      );
      setState(() {
        data = response.body;
      });
    } catch (e) {
      setState(() {
        data = 'Error: $e';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text('CORS Fix Example')),
        body: Center(
          child: Text(data),
        ),
      ),
    );
  }
}
```
