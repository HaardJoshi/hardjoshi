# Deploying Your Portfolio to GitHub Pages

## Quick Setup Guide

### Step 1: Push to GitHub

```bash
cd hard-joshi-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: portfolio website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/hardjoshi.github.io.git

# Push to GitHub
git push -u origin main
```

### Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)** or **/dist**
4. Click **Save**

### Step 3: Update Vite Config (IMPORTANT)

If deploying to `https://YOUR_USERNAME.github.io/portfolio`:
- Update `vite.config.ts` with: `base: '/portfolio/'`

If deploying to `https://YOUR_USERNAME.github.io`:
- Update `vite.config.ts` with: `base: '/'`

### Step 4: Build and Deploy

```bash
# Build the project
npm run build

# Deploy (option 1: use GitHub Actions - recommended)
# Push changes and let GitHub Pages automatically deploy from /dist

# Deploy (option 2: manual deployment)
# Use the deploy.sh script provided
chmod +x deploy.sh
./deploy.sh
```

## Method 1: Automatic Deployment with GitHub Actions (RECOMMENDED)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install pnpm
        run: npm install -g pnpm
          
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Method 2: Deploy to Custom Domain (Optional)

1. In `public/` folder, create a file named `CNAME`
2. Add your domain: `www.yourname.com`
3. In your domain provider, add DNS records:
   - Type: `A` → Value: GitHub Pages IPs
   - Type: `CNAME` → Value: `YOUR_USERNAME.github.io`

## Troubleshooting

**Blank page after deployment?**
- Check `vite.config.ts` has correct `base` path
- Rebuild: `npm run build`
- Clear browser cache

**Images not loading?**
- Ensure images are in `public/images/` folder
- Use relative paths: `/images/filename.jpg`

## Your Repository Setup

**For username repository** (`hardjoshi.github.io`):
- URL will be: `https://hardjoshi.github.io`
- Set `base: '/'` in vite.config.ts

**For project repository** (`portfolio`):
- URL will be: `https://hardjoshi.github.io/portfolio`
- Set `base: '/portfolio/'` in vite.config.ts

## After Deployment

1. Wait 2-5 minutes for GitHub Pages to build
2. Visit your site at the URL shown in Settings → Pages
3. Share your portfolio link!

## Need Help?

- Check GitHub Pages docs: https://pages.github.com/
- Repository settings → Pages for deployment status
- Actions tab for build logs (if using GitHub Actions)
