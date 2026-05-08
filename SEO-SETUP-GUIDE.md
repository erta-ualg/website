# ERTA Website - Google Search Console Setup Guide

## What We've Implemented

### 1. **Dynamic Meta Tags (react-helmet-async)**
   - Each page now has custom title, description, and keywords
   - Open Graph tags for better social media sharing
   - Twitter Card tags for Twitter optimization
   - Canonical URLs to prevent duplicate content issues

### 2. **Structured Data (JSON-LD)**
   - Organization schema on homepage
   - WebPage schema on individual pages
   - This helps Google understand your site structure better

### 3. **Robots.txt & Sitemap.xml**
   - `robots.txt` - Tells search engines what to crawl
   - `sitemap.xml` - Lists all your pages for indexing

### 4. **Performance Optimizations (.htaccess)**
   - GZIP compression for faster loading
   - Browser caching to reduce server requests
   - Security headers (X-Frame-Options, X-Content-Type-Options, etc.)

## Next Steps for Google SEO Success

### 1. **Submit to Google Search Console**
   - Go to: https://search.google.com/search-console/about
   - Add your domain: `https://fs-erta.com`
   - Verify ownership via DNS record or HTML file
   - Submit sitemap from: `https://fs-erta.com/sitemap.xml`

### 2. **Submit Sitemap to Bing**
   - Go to: https://www.bing.com/webmasters/
   - Add your site and verify
   - Submit sitemap

### 3. **Update Domain URL References**
   - Replace `fs-erta.com` with your actual domain throughout:
     - `index.html` - Open Graph and JSON-LD
     - `public/sitemap.xml` - All URLs
     - `src/hooks/useSEO.ts` - Base URL references
   
### 4. **Add OG Image**
   - Place an image at `/public/og-image.png` (1200x630px recommended)
   - This appears when people share your site on social media

### 5. **Add Favicon**
   - Replace `/vite.svg` with your actual favicon

### 6. **Monitor & Improve**
   - Check Google Search Console for:
     - Indexing status
     - Crawl errors
     - Mobile usability issues
     - Core Web Vitals
   - Use Google Lighthouse: DevTools → Lighthouse → SEO audit

## SEO Best Practices for Content

### On-Page SEO Tips:
1. **Use H1 tags** for main page title (one per page)
2. **Use H2-H3 tags** for section headings in hierarchical order
3. **Include keywords naturally** in headings and content
4. **Add alt text** to all images
5. **Use descriptive anchor text** for links

### Technical SEO Checklist:
- ✅ Mobile responsive design (Tailwind handles this)
- ✅ Fast loading speed (implement lazy loading, optimize images)
- ✅ HTTPS (ensure your hosting uses SSL)
- ✅ Meta descriptions on all pages
- ✅ Unique titles for each page
- ✅ Proper heading hierarchy
- ✅ Sitemap and robots.txt
- ✅ Structured data

### Content Strategy:
1. Create blog posts about Formula Student and engineering
2. Update the sitemap when adding new pages
3. Ensure all links are internal where possible
4. Create quality backlinks through partnerships/press releases

## Monitoring Tools

Free tools for monitoring SEO:
- **Google Search Console**: Track indexing and search performance
- **Google Analytics 4**: Monitor traffic and user behavior
- **Google Lighthouse**: Audit performance, SEO, accessibility
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Rich Results Test**: https://search.google.com/test/rich-results

## Page Titles & Meta Descriptions Currently Set

| Page | Title | Focus Keywords |
|------|-------|-----------------|
| Home | Home \| ERTA | Formula Student, UAlg, racing team |
| Team | Team \| ERTA | Formula Student team, engineering, departments |
| Partners | Partners & Sponsors \| ERTA | sponsors, partnerships, motorsport |
| The Car | The Car \| ERTA | Formula Student car, electric, engineering |
| Join | Join Us \| ERTA | recruitment, apply, Formula Student |
| Contact | Contact Us \| ERTA | contact, sponsorship, partnership |

## Future Enhancements

1. **Blog/News Section**: Create regular content to improve rankings
2. **Video Schema**: Add schema for videos if you embed race footage
3. **Event Schema**: If you participate in competitions, add event structured data
4. **Mobile App Schema**: If you plan an app
5. **AMP Pages**: Consider Accelerated Mobile Pages for content
6. **Hreflang Tags**: If you support multiple languages (you already have i18n!)

## Internationalization (i18n) SEO Note

Your site already supports Portuguese and English. For proper SEO:
- Add hreflang tags to link language versions
- Ensure language switcher is working properly
- Create separate metadata for each language version

## Important Reminders

- **Update URLs**: Change `fs-erta.com` references to your actual domain
- **Monitor Search Console**: Check regularly for errors and opportunities
- **Content is King**: Quality content ranks better than technical tricks
- **Backlinks Matter**: Building quality backlinks from relevant sites helps
- **User Experience**: Fast, mobile-friendly sites rank better

---

For more information, visit: https://developers.google.com/search/docs
