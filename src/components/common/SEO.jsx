// src/components/common/SEO.jsx
import React, { useEffect } from 'react';

/**
 * Simple SEO helper component.
 * Sets the document title and updates the meta description tag.
 * If a <meta name="description"> tag does not exist, it is created.
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
  }, [title, description]);

  // No visual output needed
  return null;
}
