#!/usr/bin/env bash

# Exit on error
set -e

# Build the project
npm run build

# Navigate to the build output directory
cd dist

# Create a .nojekyll file to bypass Jekyll processing
touch .nojekyll

# If you are deploying to a custom domain, add a CNAME file
# echo "your-custom-domain.com" > CNAME

# Initialize Git in the build directory
git init
git add -A
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push -f git@github.com:psiddighi/zzp-kompas-inzicht-nu.git main:gh-pages

# Return to the previous directory
cd ..

echo "Deployment complete!"