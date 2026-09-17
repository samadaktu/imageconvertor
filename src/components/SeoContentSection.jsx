import React, { useState } from 'react';

function SeoContentSection() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const faqData = [
    {
      q: "How do I convert PNG to WebP for free?",
      a: "Drag and drop your PNG images into the Image4me converter box above, ensure 'WEBP' is selected as your target format, and click 'Convert All'. Your files will be processed instantly inside your browser with maximum compression and zero quality loss."
    },
    {
      q: "Why should I convert JPG to WebP for my website?",
      a: "WebP images are typically 25% to 34% smaller than equivalent JPG files while maintaining visual fidelity. Converting JPG to WebP improves website load speed, reduces server bandwidth usage, and elevates Google PageSpeed Insights & Core Web Vitals scores."
    },
    {
      q: "Is it safe and private to convert images on Image4me?",
      a: "Yes, 100% safe. Image4me performs all image rendering and conversion directly inside your browser using HTML5 Canvas and JavaScript. Your files are never uploaded to external servers, guaranteeing total privacy and GDPR compliance."
    },
    {
      q: "Does PNG to WebP conversion keep transparent backgrounds?",
      a: "Yes! WebP fully supports 8-bit alpha channel transparency just like PNG. When converting transparent PNGs to WebP, your background transparency is 100% preserved at a fraction of the file size."
    },
    {
      q: "How many images can I batch convert at once?",
      a: "You can convert up to 100 PNG, JPG, or GIF files simultaneously in a single batch. Once converted, you can download them individually or as a single consolidated ZIP file."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Convert PNG and JPG Images to WebP Online",
    "description": "Step-by-step guide to batch converting PNG and JPG files into optimized WebP images using Image4me.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload Images",
        "text": "Drag and drop your PNG or JPG files into the file drop zone, or paste them from your clipboard."
      },
      {
        "@type": "HowToStep",
        "name": "Select Output Options",
        "text": "Choose WEBP as the target format and adjust compression quality or maximum dimension settings."
      },
      {
        "@type": "HowToStep",
        "name": "Convert & Download",
        "text": "Click 'Convert All' to execute instant client-side conversion, then download your optimized WebP images or ZIP package."
      }
    ]
  };

  return (
    <section className="seo-content-section">
      {/* Schema.org FAQ & HowTo JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="container">
        {/* On-Page SEO Articles Grid */}
        <div className="seo-articles-grid">
          <article className="seo-card">
            <div className="seo-card-badge">PNG to WebP</div>
            <h2>Fast PNG to WebP Converter</h2>
            <p>
              WebP is the next-generation image format developed by Google. Converting <strong>PNG to WebP</strong> dramatically reduces image file size by up to <strong>80%</strong> while preserving full alpha-channel transparency and crisp visual details.
            </p>
            <ul className="seo-feature-list">
              <li>✓ Preserves transparent backgrounds seamlessly</li>
              <li>✓ Lossless &amp; lossy WebP compression options</li>
              <li>✓ Speeds up mobile &amp; desktop website rendering</li>
            </ul>
          </article>

          <article className="seo-card">
            <div className="seo-card-badge">JPG to WebP</div>
            <h2>High-Efficiency JPG to WebP Conversion</h2>
            <p>
              Looking to boost your website’s Google PageSpeed score? Converting <strong>JPG to WebP</strong> cuts file sizes by an average of <strong>30%</strong> compared to traditional JPEG compression without perceptual loss in photo quality.
            </p>
            <ul className="seo-feature-list">
              <li>✓ Reduces LCP (Largest Contentful Paint) load times</li>
              <li>✓ Saves storage space &amp; CDN bandwidth costs</li>
              <li>✓ Supported natively by all modern web browsers</li>
            </ul>
          </article>

          <article className="seo-card">
            <div className="seo-card-badge">WebP to PNG / JPG</div>
            <h2>WebP to PNG &amp; JPG Converter</h2>
            <p>
              Need your WebP files in a universal format? Easily convert <strong>WebP to PNG</strong> or <strong>WebP to JPG</strong> for compatibility with desktop photo editors, Adobe Photoshop, Microsoft Office, or legacy web applications.
            </p>
            <ul className="seo-feature-list">
              <li>✓ Quick reversal to standard JPG or PNG</li>
              <li>✓ High-resolution Canvas rendering</li>
              <li>✓ Free bulk conversion up to 100 files</li>
            </ul>
          </article>
        </div>

        {/* How-To Guide Section */}
        <div className="seo-howto-block">
          <div className="section-header center">
            <span className="section-caption">HOW IT WORKS</span>
            <h2 className="section-title">How to Convert Images to WebP in 3 Easy Steps</h2>
            <p className="section-subtitle">No registration, no software installation, and no server uploads required.</p>
          </div>

          <div className="howto-steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Select or Drop Images</h3>
              <p>Upload up to 100 PNG, JPG, or WebP images from your computer or mobile device. You can also paste images directly from your clipboard!</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Choose Format &amp; Quality</h3>
              <p>Select your desired target format (WEBP, PNG, or JPG) and use the quality slider to balance image crispness with file size reduction.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Convert &amp; Download</h3>
              <p>Click &apos;Convert All&apos; for lightning-fast client-side processing. Download your converted files individually or as a single compressed ZIP file.</p>
            </div>

          </div>
        </div>

        {/* Format Comparison Table */}
        <div className="seo-table-block">
          <div className="section-header">
            <span className="section-caption">FORMAT COMPARISON</span>
            <h2 className="section-title">WebP vs PNG vs JPG: Which Format is Best?</h2>
          </div>
          
          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Image Format</th>
                  <th>Transparency</th>
                  <th>Compression Type</th>
                  <th>Relative File Size</th>
                  <th>Best Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr className="highlight-row">
                  <td><strong>WebP (Recommended)</strong></td>
                  <td><span className="badge-green">Yes (Alpha)</span></td>
                  <td>Lossy &amp; Lossless</td>
                  <td><span className="badge-coral">Smallest (~30-80% smaller)</span></td>
                  <td>Modern Web, SEO &amp; Fast Page Speed</td>
                </tr>
                <tr>
                  <td><strong>PNG</strong></td>
                  <td><span className="badge-green">Yes (Alpha)</span></td>
                  <td>Lossless</td>
                  <td>Large</td>
                  <td>Logos, Icons, UI Graphics with Transparency</td>
                </tr>
                <tr>
                  <td><strong>JPG / JPEG</strong></td>
                  <td><span className="badge-gray">No</span></td>
                  <td>Lossy</td>
                  <td>Medium</td>
                  <td>High-Resolution Photography &amp; Print</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="seo-faq-block">
          <div className="section-header center">
            <span className="section-caption">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title">PNG to WebP &amp; Image Converter FAQs</h2>
          </div>

          <div className="faq-accordion">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="faq-question">
                  <h3>{item.q}</h3>
                  <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                </div>
                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeoContentSection;
