---
title: Secrets
description: Learn more about managing your secrets in Corsfix dashboard.
---

Before using secrets variables, you need to add your secrets in the dashboard. This guide will help you understand how to set up and manage your secrets.

## Adding a Secret

A secret is tied to an application, and only applications with access to that secret can use its value.
To add a secret, you'll need to configure three values:

- **Secret Name**: Must be unique and can only contain alphanumeric characters and underscores
- **Secret Value**: Can be any string (API keys, tokens, etc.)

Once you add your secret, you won't be able to see the complete value again for security reasons, so make sure to store it somewhere safe if needed.

## Updating a Secret

You have the option to update your secret's name and value after you add it.
You can:

- Leave the secret value empty if you want to keep the existing value
- Input a new value to update the secret
- Update the name when needed

## Keeping Your Secrets Safe

Security of your secrets is a shared responsibility between Corsfix and you as a user.

**What Corsfix does:**

- Encrypts your secrets at rest using layered encryption
- Performs decryption safely in memory only when processing the request
- Never logs or stores decrypted secret values

**What you should do:**

- Specify allowed domains for your application instead of using wildcard domains (`*`), in order to prevent your secrets from being exposed to unauthorized domains

When you make a request with a secrets variable, Corsfix will replace the variable with the actual value of your secret before proxying the request to the target URL. If you configure an application with all domains allowed, a warning will appear in the dashboard to remind you of the potential security implications.
