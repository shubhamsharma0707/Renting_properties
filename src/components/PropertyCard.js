import { formatINR, getBudgetStatus } from '../utils/api.js';

const TYPE_ICONS = { flat: '🏢', house: '🏠', pg: '🛋️', studio: '🪴' };

// Gradient themes per property type
const CARD_GRADIENTS = {
  flat:   ['135deg, #0d2233 0%, #1a3a52 50%, #0a1f2e 100%', '#00d4ff'],
  house:  ['135deg, #1a1a2e 0%, #2d1b3d 50%, #0f0f1a 100%', '#8b5cf6'],
  pg:     ['135deg, #0f2027 0%, #203a43 50%, #2c5364 100%', '#22c55e'],
  studio: ['135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%', '#f59e0b'],
};

export class PropertyCard {
  constructor(property, budget, index = 0) {
    this.property = property;
    this.budget = budget;
    this.index = index;
    this.onClick = null;
    this.element = this.build();
  }

  build() {
    const p = this.property;

    // Safety: ensure price is a valid number
    const price = typeof p.price === 'number' && !isNaN(p.price) ? p.price : 0;
    const status = getBudgetStatus(price, this.budget);
    const statusLabel = {
      'in-budget':   '✓ In Budget',
      'near-budget': '≈ Near Budget',
      'over-budget': '↑ Over Budget'
    }[status] || '—';

    const propType = p.type || 'flat';
    const icon     = TYPE_ICONS[propType] || '🏠';
    const [gradient, accentColor] = CARD_GRADIENTS[propType] || CARD_GRADIENTS.flat;

    const source = p.source || 'curated';
    const sourceBadgeClass = source === 'google_places' ? 'google' : source === 'web_search' ? 'serp' : 'mock';
    const sourceLabel      = source === 'google_places' ? 'Google' : source === 'web_search' ? 'Web' : 'Curated';

    // Sanitize the property name — remove unicode math chars from web search titles
    const cleanName = (p.name || 'Property')
      .replace(/[\u{1D400}-\u{1D7FF}]/gu, '') // remove math bold/italic unicode
      .replace(/[^\x00-\x7F\u00C0-\u024F\u0900-\u097F₹]/g, '') // strip other non-standard chars
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 48) || 'Rental Property';

    // Format address sensibly
    const address = p.address
      ? p.address.replace(/https?:\/\/[^\s]+/g, '').trim().slice(0, 60)
      : 'Location available on request';

    const el = document.createElement('div');
    el.className = 'property-card';
    el.dataset.id = p.id;
    el.style.animationDelay = `${this.index * 55}ms`;

    el.innerHTML = `
      ${p.photo
        ? `<img class="card-image" src="${p.photo}" alt="${cleanName}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
           <div class="card-image-placeholder" style="display:none;background:linear-gradient(${gradient});">
             <div class="card-placeholder-inner" style="--accent:${accentColor};">${icon}</div>
           </div>`
        : `<div class="card-image-placeholder" style="background:linear-gradient(${gradient});">
             <div class="card-placeholder-inner" style="--accent:${accentColor};">
               <span class="placeholder-icon">${icon}</span>
               <span class="placeholder-type">${(p.bhk || 2)} BHK ${propType}</span>
               ${p.area ? `<span class="placeholder-area">${p.area} sq ft</span>` : ''}
             </div>
           </div>`
      }

      <div class="card-body">
        <div class="card-header">
          <div class="card-title">${cleanName}</div>
          <div class="price-badge ${status}">
            ${price > 0 ? `₹${price.toLocaleString('en-IN')}/mo` : '—'}
          </div>
        </div>

        <div class="card-address">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          ${address}${p.distance ? ` · ${p.distance} km` : ''}
        </div>

        <div class="card-meta">
          <span class="meta-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
            ${icon} ${p.bhk || 2} BHK ${propType}
          </span>
          ${p.area  ? `<span class="meta-tag">📐 ${p.area} sq ft</span>` : ''}
          ${p.floor ? `<span class="meta-tag">🏗️ Fl ${p.floor}</span>` : ''}
          ${p.rating ? `<span class="meta-tag">⭐ ${p.rating}</span>` : ''}
        </div>

        ${p.amenities?.length ? `
          <div class="card-amenities">
            ${p.amenities.slice(0, 4).map(a => `<span class="amenity-tag">${a}</span>`).join('')}
            ${p.amenities.length > 4 ? `<span class="amenity-tag" style="color:var(--text-muted);background:transparent;">+${p.amenities.length - 4}</span>` : ''}
          </div>
        ` : ''}

        <div class="card-footer">
          <button class="btn btn-primary" style="font-size:0.72rem;padding:6px 12px;flex:1;" onclick="void 0">
            📍 View on Map
          </button>
          ${p.contactPhone ? `
            <a href="tel:${p.contactPhone}" class="btn btn-secondary" style="font-size:0.72rem;padding:6px 12px;" title="${p.contactName || 'Contact owner'}">
              📞
            </a>
          ` : ''}
          <span class="source-badge ${sourceBadgeClass}">${sourceLabel}</span>
        </div>

        ${p.deposit ? `
          <div class="card-deposit">
            Deposit: <strong>₹${p.deposit.toLocaleString('en-IN')}</strong>
            &nbsp;·&nbsp;
            <span style="color:${p.available ? 'var(--green)' : 'var(--red)'};">
              ${p.available ? '✅ Available' : '❌ Not Available'}
            </span>
          </div>
        ` : ''}
      </div>
    `;

    el.addEventListener('click', () => this.onClick?.(this.property));
    return el;
  }
}
