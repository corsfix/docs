---
title: Self-Hosting
description: Run Corsfix CORS proxy on your own infrastructure for complete control over your data.
---

Corsfix is open source, meaning you can run it on your own infrastructure for complete control over your data.

## Prerequisites

Before getting started, ensure you have:

- A VPS or dedicated server
- Docker and Docker Compose installed
- A domain name (optional, but recommended for production)
- Basic knowledge of Docker and command line operations

## Installation Steps

### 1. Install Docker

Install Docker on your machine by following the official installation guide:

- **macOS**: https://docs.docker.com/desktop/setup/install/mac-install/
- **Windows**: https://docs.docker.com/desktop/setup/install/windows-install/
- **Linux**: https://docs.docker.com/engine/install/

Verify Docker installation:

```bash
docker --version
docker compose --version
```

### 2. Clone the Repository

Clone the [Corsfix repository](https://github.com/corsfix/corsfix) to your server:

```bash
git clone https://github.com/corsfix/corsfix.git
cd corsfix
```

### 3. Configure Environment Variables

Copy the example environment file and customize it:

```bash
cp .env.example .env
```

Edit the `.env` file with your preferred text editor:

```bash
nano .env
```

Configure the following variables:

```bash
# Database credentials
MONGODB_USER=proxy
MONGODB_PASSWORD=your_secure_mongodb_password

# Redis password
REDIS_PASSWORD=your_secure_redis_password

# Generate these encryption keys using OpenSSL
KEK_VERSION_1=your_32_char_base64_key
AUTH_SECRET=your_32_char_base64_key

# Your domain (use localhost for local development)
DOMAIN=yourdomain.com
```

Generate secure encryption keys:

```bash
# Generate KEK_VERSION_1
openssl rand -base64 32

# Generate AUTH_SECRET
openssl rand -base64 32
```

### 4. Start the Services

Launch all Corsfix services using Docker Compose:

```bash
docker compose -f prod.yaml --env-file .env up -d
```

This command will:

- Pull the latest Corsfix images from GitHub Container Registry
- Start MongoDB, Redis, the dashboard app, proxy service, and Caddy reverse proxy
- Run all services in the background

Verify all services are running:

```bash
docker compose -f prod.yaml ps
```

### 5. Access the Dashboard

Once all services are up and running:

- **Dashboard**: `https://app.yourdomain.com` (or `http://app.localhost` for local setup)
- **Proxy**: `https://proxy.yourdomain.com` (or `http://proxy.localhost` for local setup)

### 6. Create Your Account

1. Navigate to the dashboard URL in your browser
2. Create a new account using your email and a secure password
3. Add your websites to the allowlist in the dashboard

### 7. Test the Proxy

Test your CORS proxy by making a request through your proxy domain:

```bash
# Example using curl
curl -X GET "https://proxy.yourdomain.com/?https://api.example.com/data" \
  -H "Origin: https://yourwebsite.com"
```

Or test in JavaScript:

```javascript
fetch("https://proxy.yourdomain.com/?https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Managing Your Installation

### View Logs

Monitor service logs:

```bash
# View all logs
docker compose -f prod.yaml logs -f

# View specific service logs
docker compose -f prod.yaml logs -f app
docker compose -f prod.yaml logs -f proxy
```

### Update to Latest Version

Pull the latest images and restart services:

```bash
docker compose -f prod.yaml pull
docker compose -f prod.yaml --env-file .env up -d
```

### Stop Services

Stop all services:

```bash
docker compose -f prod.yaml down
```

## Domain Configuration

For production deployments with a custom domain:

1. Point your domain's A records to your server's IP address:

   - `app.yourdomain.com` → Your server IP
   - `proxy.yourdomain.com` → Your server IP

2. Caddy will automatically handle SSL certificate generation via Let's Encrypt

3. Update your `.env` file with your domain:
   ```bash
   DOMAIN=yourdomain.com
   ```

### Getting Help

For additional support and community discussion, join our Discord server at: https://discord.gg/WEAeqrRjp2

---

Congratulations! You've successfully deployed Corsfix on your own infrastructure.
