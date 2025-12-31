# IMAGE OPTIMIZATION REQUIRED

These images need manual compression before next deploy:

| File | Current Size | Target | Tool |
|------|-------------|--------|------|
| public/headshot.png | ~1.5MB | <200KB | squoosh.app |
| public/favicon-logo.png | ~1.4MB | <100KB | squoosh.app |
| public/images/portfolio/* | ~1MB each | <300KB | squoosh.app |

## Steps:
1. Go to squoosh.app
2. Upload each image
3. Resize to appropriate dimensions:
   - headshot: 400x400px
   - favicon-logo: 512x512px
   - portfolio: 800x600px
4. Convert to WebP format
5. Quality: 80-85%
6. Replace files in /public
7. Update any hardcoded .png references to .webp

## Expected Impact:
- ~4MB reduction in total assets
- ~70% faster image loading
- Better Lighthouse score
