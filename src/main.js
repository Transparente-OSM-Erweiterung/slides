import Reveal from 'reveal.js';
import './style.css';

const deck = new Reveal();
deck.initialize({
  hash: true,
  width: 1920,
  height: 1080,
  margin: 0.1,
  minScale: 0.2,
  maxScale: 2.0,
  preloadIframes: true,
  pdfMaxPagesPerSlide: 1
});

deck.on('slidechanged', event => {
  // --- Hintergrund Parallax Effekt ---
  const bodyEl = document.body;
  if (bodyEl) {
    // Verschiebt den Hintergrund um 100px pro Folienwechsel (Horizontal & Vertikal)
    const xOffset = -(event.indexh || 0) * 100;
    const yOffset = -(event.indexv || 0) * 100;
    bodyEl.style.setProperty('--bg-x', `${xOffset}px`);
    bodyEl.style.setProperty('--bg-y', `${yOffset}px`);
  }

  // --- Iframe SVG Animation Reset ---
  const iframes = event.currentSlide.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    try {
      // Versuche, die SVG-Animation zurückzusetzen, falls die Iframe-Quelle denselben Ursprung hat
      if (iframe.contentDocument) {
        const svg = iframe.contentDocument.querySelector('svg');
        if (svg && typeof svg.setCurrentTime === 'function') {
          svg.setCurrentTime(6);
        }
      }
    } catch (e) {
      // Ignoriere Cross-Origin-Fehler bei externen Iframes (wie Google Maps)
    }
  });
});