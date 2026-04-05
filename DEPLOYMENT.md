# Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended)

Vercel offers the easiest deployment for Vite/React apps:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository at [vercel.com](https://vercel.com) for automatic deployments.

### 2. Netlify

```bash
# Build the project
npm run build

# Deploy with Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

Or drag and drop the `dist` folder at [netlify.com/drop](https://app.netlify.com/drop).

### 3. GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

Update `vite.config.js` with base path:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
});
```

### 4. Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Create `nginx.conf`:

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
    gzip_comp_level 9;
}
```

Build and run:

```bash
docker build -t webp-converter .
docker run -p 80:80 webp-converter
```

### 5. AWS S3 + CloudFront

```bash
# Build
npm run build

# Upload to S3
aws s3 sync dist/ s3://your-bucket-name

# Configure S3 for static hosting
aws s3 website s3://your-bucket-name --index-document index.html

# Create CloudFront distribution for HTTPS and CDN
```

### 6. Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Configure firebase.json:
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}

# Deploy
npm run build
firebase deploy
```

## Environment Variables

If you need environment variables:

1. Create `.env.production`:
```
VITE_API_URL=https://api.example.com
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Performance Optimization

### 1. Enable Compression

Most hosting platforms enable gzip/brotli automatically. For custom servers:

**Nginx:**
```nginx
gzip on;
gzip_types text/css application/javascript application/json image/svg+xml;
gzip_comp_level 6;
```

### 2. Set Cache Headers

```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|webp)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 3. CDN Configuration

Use CloudFlare, AWS CloudFront, or similar for:
- Global content delivery
- DDoS protection
- SSL/TLS
- Caching

## Security Headers

Add these headers for production:

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;" always;
```

## SSL/TLS

Always use HTTPS in production:
- Let's Encrypt (free)
- CloudFlare (free)
- Hosting provider certificates

## Monitoring

Set up monitoring for:
- Uptime (UptimeRobot, Pingdom)
- Analytics (Google Analytics, Plausible)
- Error tracking (Sentry)
- Performance (Lighthouse CI)

## Post-Deployment Checklist

- [ ] Test all features on production URL
- [ ] Verify HTTPS is working
- [ ] Check mobile responsiveness
- [ ] Test file upload and conversion
- [ ] Verify download functionality
- [ ] Test with different browsers
- [ ] Check console for errors
- [ ] Verify all assets load correctly
- [ ] Test drag and drop
- [ ] Verify ZIP download works

## Troubleshooting

**Issue: 404 on refresh**
- Solution: Configure server for SPA routing (see configs above)

**Issue: Assets not loading**
- Solution: Check `base` path in `vite.config.js`

**Issue: Build fails**
- Solution: Run `npm ci` to clean install dependencies

**Issue: Slow loading**
- Solution: Enable compression and use CDN

## Custom Domain

1. Point your domain's DNS to hosting provider
2. Add CNAME or A record
3. Configure SSL certificate
4. Update any environment variables with new domain

## Scaling

For high traffic:
1. Use CDN for static assets
2. Enable browser caching
3. Consider serverless architecture
4. Use multiple regions
5. Implement rate limiting
6. Add monitoring and alerts

---

**Need help?** Check hosting provider documentation or open an issue.
