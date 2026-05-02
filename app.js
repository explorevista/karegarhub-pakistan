/**
 * app.js - Core Application Logic
 * No image-related changes needed here
 * Keep your existing functional code
 */

// ... your existing app.js code remains unchanged ...

// Optional: Add image error handling globally
document.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.classList.add('error');
    console.warn('Image failed to load:', e.target.src);
  }
}, true);
