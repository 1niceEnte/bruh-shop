# GitHub Pages Setup Guide

This guide will help you deploy the Buffbolzen Shop to GitHub Pages using the included CI/CD pipeline.

## Prerequisites

1. A GitHub repository containing this code
2. GitHub Pages enabled for your repository

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**

### 2. Configure Repository Settings (if needed)

If your repository is not at the root domain (e.g., `username.github.io/repository-name`), you need to:

1. Open `next.config.ts`
2. Uncomment and update the `basePath` line:
   ```typescript
   basePath: '/your-repository-name',
   ```

### 3. Push to Main Branch

The GitHub Actions workflow will automatically trigger when you push to the `main` or `master` branch:

```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

### 4. Monitor Deployment

1. Go to the **Actions** tab in your GitHub repository
2. Watch the "Deploy to GitHub Pages" workflow run
3. Once complete, your site will be available at:
   - `https://username.github.io/repository-name` (if using basePath)
   - `https://username.github.io` (if this is your main GitHub Pages site)

## Workflow Features

The included GitHub Actions workflow (`buffbolzen-shop/.github/workflows/deploy.yml`) provides:

- **Automatic builds** on push to main/master branch
- **Manual deployment** via GitHub Actions interface
- **Static export** optimized for GitHub Pages
- **Concurrent deployment protection** to prevent conflicts

## Troubleshooting

### Build Failures

If the build fails, check:

1. **Dependencies**: Ensure all dependencies are correctly listed in `package.json`
2. **Environment**: The build runs on Node.js 18
3. **Static compatibility**: Ensure no server-side features are used

### Routing Issues

If pages don't load correctly:

1. Check if `basePath` is configured correctly in `next.config.ts`
2. Ensure `trailingSlash: true` is set in the config
3. Verify that all internal links use Next.js `Link` component

### Image Loading Issues

If images don't display:

1. Images should be in the `public` directory
2. The config already includes `images: { unoptimized: true }`
3. Use relative paths for image sources

## Local Testing

To test the static export locally:

```bash
cd buffbolzen-shop
pnpm run build
# The static files will be in the 'out' directory
# You can serve them with any static file server
```

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS records with your domain provider
3. Update GitHub Pages settings to use the custom domain
