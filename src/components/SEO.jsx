import { useEffect } from 'react';

const DEFAULT_TITLE = 'PNG to WebP & JPG to WebP Converter Free Online | Image4me';
const DEFAULT_DESCRIPTION = 'Free online PNG to WebP and JPG to WebP converter. Batch convert images to WebP instantly in your browser with maximum compression and zero server uploads. 100% private & ultra-fast.';
const DEFAULT_KEYWORDS = 'png to webp, jpg to webp, jpeg to webp, webp to png, webp to jpg, convert image to webp, free online webp converter, bulk webp converter, image compressor, web design image optimization';
const SITE_URL = 'https://i4me.netlify.app';


function SEO({ 
  title = DEFAULT_TITLE, 
  description = DEFAULT_DESCRIPTION, 
  keywords = DEFAULT_KEYWORDS,
  canonicalPath = '',
  jsonLd = null 
}) {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to set meta attributes
    const setMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=');
        element.setAttribute(attrName, attrVal.replace(/"/g, ''));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Helper to set link attributes
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    const fullCanonical = `${SITE_URL}${canonicalPath}`;

    // 2. Standard Meta Tags
    setMetaTag('meta[name="title"]', 'content', title);
    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[name="keywords"]', 'content', keywords);

    // 3. Canonical Link
    setLinkTag('canonical', fullCanonical);

    // 4. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', fullCanonical);

    // 5. Twitter Tags
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:url"]', 'content', fullCanonical);

    // 6. Dynamic JSON-LD Schema
    let scriptElement = document.getElementById('dynamic-seo-schema');
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = 'dynamic-seo-schema';
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [title, description, keywords, canonicalPath, jsonLd]);

  return null;
}

export default SEO;
