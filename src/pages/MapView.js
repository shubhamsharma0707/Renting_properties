import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { searchProperties, formatINR, getBudgetStatus, showToast } from '../utils/api.js';
import { PropertyCard } from '../components/PropertyCard.js';
import { PriceInsights } from '../components/PriceInsights.js';

// Fix Leaflet's default marker icon path issue with Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export class MapView {
  constructor(container, navigate, params = {}) {
    this.container = container;
    this.navigate = navigate;
    this.params = params;
    this.properties = [];
    this.selectedId = null;
    this.map = null;
    this.markers = [];
    this.render();
    this.loadData();
  }

  render() {
    this.container.innerHTML = `
      <div class="map-view">
        <!-- LEFT SIDEBAR -->
        <div class="sidebar">
          <div class="sidebar-header">
            <button class="btn btn-ghost" id="back-btn" style="padding:6px 12px;" title="Back to search">
              ← Back
            </button>
            <div class="sidebar-logo">RentRadar</div>
          </div>

          <!-- Search bar -->
          <div class="search-bar">
            <div class="search-input-wrap">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                id="location-input"
                class="input-field"
                type="text"
                placeholder="Search location..."
                value="${this.params.location || ''}"
              />
            </div>
            <button class="btn btn-primary" id="re-search-btn" style="padding:10px 16px;font-size:0.82rem;">Go</button>
          </div>

          <!-- Filters -->
          <div style="padding:12px 16px;border-bottom:1px solid var(--border);flex-shrink:0;">
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:10px;">
              <span style="font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;white-space:nowrap;">Budget max:</span>
              <input type="range" class="slider" id="budget-filter"
                min="5000" max="150000" step="1000"
                value="${this.params.budget || 20000}" style="flex:1;"/>
              <span id="budget-filter-label" style="font-size:0.78rem;color:var(--accent);font-weight:700;white-space:nowrap;font-family:var(--font-display);">
                ${formatINR(this.params.budget || 20000)}
              </span>
            </div>
            <div class="chip-group" id="type-filter" style="gap:6px;">
              <button class="chip ${!this.params.type || this.params.type === 'all' ? 'active' : ''}" data-value="all" style="padding:4px 10px;font-size:0.72rem;">All</button>
              <button class="chip ${this.params.type === 'flat'   ? 'active' : ''}" data-value="flat"   style="padding:4px 10px;font-size:0.72rem;">Flat</button>
              <button class="chip ${this.params.type === 'house'  ? 'active' : ''}" data-value="house"  style="padding:4px 10px;font-size:0.72rem;">House</button>
              <button class="chip ${this.params.type === 'pg'     ? 'active' : ''}" data-value="pg"     style="padding:4px 10px;font-size:0.72rem;">PG</button>
              <button class="chip ${this.params.type === 'studio' ? 'active' : ''}" data-value="studio" style="padding:4px 10px;font-size:0.72rem;">Studio</button>
            </div>
          </div>

          <!-- Stats -->
          <div class="stats-row" style="padding:10px 16px;">
            <div class="stat-item"><strong id="count-num">—</strong> properties</div>
            <div class="stat-item"><strong id="budget-count-num" style="color:var(--green);">—</strong> in budget</div>
            <div style="margin-left:auto;">
              <span id="data-source-badge" class="source-badge mock">curated</span>
            </div>
          </div>

          <!-- Results list -->
          <div class="results-area" id="results-area">
            ${this.renderSkeletons(5)}
          </div>
        </div>

        <!-- RIGHT: Map + Insights -->
        <div class="map-main">
          <!-- AI Insights panel -->
          <div id="insights-container"></div>

          <!-- Leaflet map -->
          <div id="map-container" style="flex:1;min-height:0;position:relative;border-radius:var(--radius-md);overflow:hidden;border:1px solid var(--border);">
            <div id="leaflet-map" style="width:100%;height:100%;"></div>
            <div class="loading-overlay" id="map-loading">
              <div class="spinner"></div>
              <div class="loading-text">Loading map & properties...</div>
            </div>
          </div>

          <!-- Legend -->
          <div style="display:flex;gap:16px;align-items:center;padding:6px 2px;flex-shrink:0;">
            <span style="font-size:0.65rem;color:var(--text-muted);letter-spacing:0.1em;text-transform:uppercase;">Legend:</span>
            <div style="display:flex;align-items:center;gap:5px;font-size:0.68rem;color:var(--green);">
              <div style="width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 5px var(--green);"></div> In budget
            </div>
            <div style="display:flex;align-items:center;gap:5px;font-size:0.68rem;color:var(--amber);">
              <div style="width:8px;height:8px;border-radius:50%;background:var(--amber);box-shadow:0 0 5px var(--amber);"></div> Slightly over
            </div>
            <div style="display:flex;align-items:center;gap:5px;font-size:0.68rem;color:var(--red);">
              <div style="width:8px;height:8px;border-radius:50%;background:var(--red);box-shadow:0 0 5px var(--red);"></div> Over budget
            </div>
            <div style="margin-left:auto;font-size:0.6rem;color:var(--text-muted);">© OpenStreetMap contributors</div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
    this.initMap();
  }

  renderSkeletons(n) {
    return Array.from({ length: n }, () => `
      <div style="padding:14px;border:1px solid var(--border);border-radius:var(--radius-md);overflow:hidden;">
        <div class="skeleton" style="height:130px;border-radius:8px;margin-bottom:12px;"></div>
        <div class="skeleton" style="height:14px;width:70%;margin-bottom:8px;"></div>
        <div class="skeleton" style="height:12px;width:50%;margin-bottom:12px;"></div>
        <div style="display:flex;gap:8px;">
          <div class="skeleton" style="height:24px;width:60px;border-radius:4px;"></div>
          <div class="skeleton" style="height:24px;width:60px;border-radius:4px;"></div>
        </div>
      </div>
    `).join('');
  }

  bindEvents() {
    document.getElementById('back-btn')?.addEventListener('click', () => this.navigate('landing'));

    document.getElementById('re-search-btn')?.addEventListener('click', () => this.reSearch());
    document.getElementById('location-input')?.addEventListener('keydown', e => {
      if (e.key === 'Enter') this.reSearch();
    });

    const budgetSlider = document.getElementById('budget-filter');
    const budgetLabel  = document.getElementById('budget-filter-label');
    budgetSlider?.addEventListener('input', e => {
      this.params.budget = parseInt(e.target.value);
      budgetLabel.textContent = formatINR(this.params.budget);
      this.updateSliderGradient(budgetSlider);
      this.refreshCards();   // re-render cards + markers with new budget threshold
    });
    this.updateSliderGradient(budgetSlider);

    document.getElementById('type-filter')?.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      document.querySelectorAll('#type-filter .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      this.params.type = chip.dataset.value;
      this.reSearch();
    });
  }

  reSearch() {
    const location = document.getElementById('location-input')?.value?.trim();
    if (!location) return;
    this.params.location = location;
    this.properties = [];
    document.getElementById('results-area').innerHTML = this.renderSkeletons(5);
    document.getElementById('map-loading').style.display = 'flex';
    this.loadData();
  }

  // ── Data Loading ───────────────────────────────────────────────────────────

  async loadData() {
    try {
      const data = await searchProperties({
        location: this.params.location,
        budget:   this.params.budget,
        type:     this.params.type,
        bhk:      this.params.bhk,
      });

      this.properties = data.properties || [];
      this.center     = data.center;
      this.insights   = data.insights;
      this.dataSource = data.dataSource;

      this.renderResults();
      this.renderInsights();
      this.updateMapCenter();
      this.renderMarkers();
      this.updateStats();

    } catch (err) {
      console.error('Search failed:', err);
      showToast('Could not load properties. Is the backend running?');
      document.getElementById('results-area').innerHTML = `
        <div class="no-results">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <strong>Could not load properties</strong>
          <p>${err.message}</p>
          <p style="font-size:0.75rem;margin-top:4px;color:var(--text-muted);">Make sure backend is running: <code>npm run server</code></p>
        </div>
      `;
    } finally {
      document.getElementById('map-loading').style.display = 'none';
    }
  }

  renderResults() {
    const area = document.getElementById('results-area');
    if (!area) return;
    const filtered = this.getFiltered();

    if (!filtered.length) {
      area.innerHTML = `
        <div class="no-results">
          <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
          <strong>No properties found</strong>
          <p>Try a broader search, different location, or increase your budget.</p>
        </div>
      `;
      return;
    }

    area.innerHTML = '';
    filtered.forEach((prop, i) => {
      const card = new PropertyCard(prop, this.params.budget, i);
      // Card body click → pan map to this property
      card.onClick = () => this.selectProperty(prop);
      area.appendChild(card.element);

      // Wire up "View on Map" button specifically (doesn't bubble to card.onClick)
      const mapBtn = card.element.querySelector('.card-map-btn');
      if (mapBtn) {
        mapBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.selectProperty(prop);
          // Open popup on the matching marker
          const marker = this.markers.find(m => {
            const ll = m.getLatLng();
            return Math.abs(ll.lat - prop.lat) < 0.0001 && Math.abs(ll.lng - prop.lng) < 0.0001;
          });
          marker?.openPopup();
        });
      }
    });
  }

  refreshCards() {
    this.renderResults();
    this.renderMarkers();
    this.updateStats();
  }

  getFiltered() {
    let props = [...this.properties];
    if (this.params.type && this.params.type !== 'all') {
      props = props.filter(p => p.type === this.params.type);
    }
    return props;
  }

  renderInsights() {
    const container = document.getElementById('insights-container');
    if (!container || !this.insights) return;
    const pi = new PriceInsights(this.insights, this.params.budget, this.params.location);
    container.innerHTML = '';
    container.appendChild(pi.element);
  }

  updateStats() {
    const budget   = this.params.budget || 20000;
    const inBudget = this.properties.filter(p => p.price <= budget).length;
    const el = (id) => document.getElementById(id);

    if (el('count-num'))       el('count-num').textContent = this.properties.length;
    if (el('budget-count-num')) el('budget-count-num').textContent = inBudget;
    if (el('data-source-badge')) {
      const src = this.dataSource || 'curated';
      el('data-source-badge').textContent = src;
      el('data-source-badge').className = `source-badge ${src.includes('google') ? 'google' : src.includes('serp') ? 'serp' : 'mock'}`;
    }
  }

  selectProperty(prop) {
    this.selectedId = prop.id;
    document.querySelectorAll('.property-card').forEach(el => el.classList.remove('selected'));
    const card = document.querySelector(`[data-id="${prop.id}"]`);
    card?.classList.add('selected');
    card?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    if (this.map && prop.lat && prop.lng) {
      this.map.setView([prop.lat, prop.lng], 16, { animate: true });
    }
  }

  // ── Leaflet Map ────────────────────────────────────────────────────────────

  initMap() {
    const mapEl = document.getElementById('leaflet-map');
    if (!mapEl) return;

    const center = this.center || { lat: 12.9279, lng: 77.6271 };

    // Create map
    this.map = L.map('leaflet-map', {
      center: [center.lat, center.lng],
      zoom: 14,
      zoomControl: true,
    });

    // Dark tile layer using CartoDB Dark Matter (free, no key needed!)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap © CARTO',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(this.map);

    document.getElementById('map-loading').style.display = 'none';
  }

  updateMapCenter() {
    if (!this.map || !this.center) return;
    this.map.setView([this.center.lat, this.center.lng], 14, { animate: true });
  }

  renderMarkers() {
    if (!this.map) return;

    // Clear existing markers
    this.markers.forEach(m => m.remove());
    this.markers = [];

    const budget   = this.params.budget || 20000;
    const filtered = this.getFiltered();
    const bounds   = [];

    filtered.forEach((prop, i) => {
      if (!prop.lat || !prop.lng) return;

      const status = getBudgetStatus(prop.price, budget);
      const color  = { 'in-budget': '#6aad8a', 'near-budget': '#b8a060', 'over-budget': '#b06060' }[status];
      const shadow = { 'in-budget': 'rgba(106,173,138,0.3)', 'near-budget': 'rgba(184,160,96,0.3)', 'over-budget': 'rgba(176,96,96,0.3)' }[status];

      // Custom HTML marker — nature themed
      const icon = L.divIcon({
        className: '',
        html: `
          <div style="
            background:#0c1520;
            border:1px solid ${color}40;
            border-radius:14px;
            padding:3px 10px;
            font-size:11px;
            font-weight:500;
            color:${color};
            white-space:nowrap;
            box-shadow:0 4px 20px rgba(0,0,0,0.75),0 0 8px ${shadow};
            font-family:'Jost',sans-serif;
            letter-spacing:0.04em;
            animation:markerDrop 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 40}ms both;
            position:relative;
          ">
            ${formatINR(prop.price)}
            <div style="
              position:absolute;bottom:-7px;left:50%;transform:translateX(-50%);
              border:5px solid transparent;border-top-color:${color};
            "></div>
          </div>
        `,
        iconAnchor: [30, 32],
        popupAnchor: [0, -32],
      });

      const marker = L.marker([prop.lat, prop.lng], { icon })
        .addTo(this.map)
        .bindPopup(this.buildPopupHTML(prop, color), {
          className: 'dark-popup',
          maxWidth: 260,
        })
        .on('click', () => this.selectProperty(prop));

      this.markers.push(marker);
      bounds.push([prop.lat, prop.lng]);
    });

    // Fit map to all markers
    if (bounds.length > 1) {
      this.map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
    }

    // Inject dark popup styles once
    this.injectPopupStyles();
  }

  buildPopupHTML(prop, color) {
    return `
      <div style="font-family:'Jost',sans-serif;min-width:200px;">
        <div style="font-weight:500;font-size:0.85rem;margin-bottom:3px;color:#e8f0f8;letter-spacing:0.02em;font-family:'Playfair Display',serif;">${prop.name}</div>
        <div style="font-size:0.68rem;color:#3a4a5a;margin-bottom:8px;">${prop.address}</div>
        <div style="font-size:1.05rem;font-weight:500;color:${color};margin-bottom:4px;font-family:'Playfair Display',serif;letter-spacing:0.02em;">
          ₹${prop.price.toLocaleString('en-IN')}/mo
        </div>
        <div style="font-size:0.68rem;color:#8090a8;">
          ${prop.bhk} BHK · ${prop.type}${prop.area ? ` · ${prop.area} sq ft` : ''}
        </div>
        ${prop.distance ? `<div style="font-size:0.64rem;color:#3a4a5a;margin-top:3px;">${prop.distance} km away</div>` : ''}
        ${prop.amenities?.length ? `
          <div style="display:flex;flex-wrap:wrap;gap:3px;margin-top:6px;">
            ${prop.amenities.slice(0, 3).map(a => `<span style="font-size:0.58rem;background:rgba(168,196,216,0.08);color:#a8c4d8;padding:2px 5px;border-radius:3px;letter-spacing:0.06em;text-transform:uppercase;">${a}</span>`).join('')}
          </div>
        ` : ''}
        ${prop.contactName ? `<div style="font-size:0.64rem;color:#8090a8;margin-top:6px;border-top:1px solid rgba(168,196,216,0.1);padding-top:5px;">Contact: <strong style="color:#a8c4d8;">${prop.contactName}</strong></div>` : ''}
      </div>
    `;
  }

  injectPopupStyles() {
    if (document.getElementById('leaflet-popup-style')) return;
    const style = document.createElement('style');
    style.id = 'leaflet-popup-style';
    style.textContent = `
      .dark-popup .leaflet-popup-content-wrapper {
        background: #0c1520 !important;
        border: 1px solid rgba(168,196,216,0.18) !important;
        border-radius: 10px !important;
        box-shadow: 0 12px 48px rgba(0,0,0,0.85) !important;
        color: #e8f0f8 !important;
      }
      .dark-popup .leaflet-popup-tip {
        background: #0c1520 !important;
      }
      .dark-popup .leaflet-popup-close-button {
        color: #8090a8 !important;
      }
      .leaflet-control-zoom a {
        background: #0c1520 !important;
        color: #e8f0f8 !important;
        border-color: rgba(160,200,240,0.15) !important;
      }
      .leaflet-control-zoom a:hover { background: #111e2e !important; }
      .leaflet-bar { border: 1px solid rgba(160,200,240,0.12) !important; }
      @keyframes markerDrop {
        from { opacity:0; transform: translateY(-16px) scale(0.6); }
        to   { opacity:1; transform: translateY(0) scale(1); }
      }
    `;
    document.head.appendChild(style);
  }

  updateSliderGradient(slider) {
    if (!slider) return;
    const pct = ((+slider.value - +slider.min) / (+slider.max - +slider.min)) * 100;
    slider.style.background = `linear-gradient(90deg, var(--accent) ${pct}%, var(--border) ${pct}%)`;
  }

  destroy() {
    this.map?.remove();
    this.map = null;
  }
}
