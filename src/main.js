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