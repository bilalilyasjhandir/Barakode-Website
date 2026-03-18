#!/bin/bash

# Production Readiness Script for Barakode Website
echo "🚀 Preparing for Production Deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Step 1: Checking .env file...${NC}"
if git ls-files --error-unmatch .env > /dev/null 2>&1; then
    echo -e "${RED}⚠️  WARNING: .env is tracked by git!${NC}"
    echo "Run: git rm --cached .env && git commit -m 'Remove .env from tracking'"
else
    echo -e "${GREEN}✓ .env is not tracked by git${NC}"
fi

echo -e "\n${YELLOW}Step 2: Updating dependencies...${NC}"
npm update

echo -e "\n${YELLOW}Step 3: Running build test...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Build successful!${NC}"
else
    echo -e "${RED}✗ Build failed. Fix errors before deploying.${NC}"
    exit 1
fi

echo -e "\n${YELLOW}Step 4: Running linter...${NC}"
npm run lint

echo -e "\n${GREEN}✓ Pre-deployment checks complete!${NC}"
echo -e "\n${YELLOW}Next steps:${NC}"
echo "1. Test the build locally: npm run preview"
echo "2. Set environment variables in Vercel dashboard"
echo "3. Deploy: vercel --prod"
