import './styles/index.css';
import { Landing } from './pages/Landing.js';
import { MapView } from './pages/MapView.js';

const app = document.getElementById('app');
let currentPage = null;

/**
 * Simple client-side router
 * @param {'landing'|'map'} page
 * @param {object} params
 */
export function navigate(page, params = {}) {
  // Destroy old page
  if (currentPage?.destroy) {
    currentPage.destroy();
  }
  app.innerHTML = '';

  // Mount new page
  if (page === 'landing') {
    currentPage = new Landing(app, navigate);
  } else if (page === 'map') {
    currentPage = new MapView(app, navigate, params);
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

// Start at landing page
navigate('landing');
