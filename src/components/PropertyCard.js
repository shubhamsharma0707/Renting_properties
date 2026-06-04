import { formatINR, getBudgetStatus } from '../utils/api.js';

// SVG icons per property type (no emojis)
const TYPE_SVG = {
  flat:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>`,
  house:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`,
  pg:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`,
  studio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
};

// Gradient themes per property type — navy frost
const CARD_GRADIENTS = {
  flat:   ['135deg, #0c1520 0%, #142030 50%, #080f18 100%', '#a8c4d8'],
  house:  ['135deg, #0e1828 0%, #182840 50%, #08101c 100%', '#c8d8e8'],
  pg:     ['135deg, #101820 0%, #182030 50%, #0a1018 100%', '#7898b0'],
  studio: ['135deg, #0a1420 0%, #101c2c 50%, #080e18 100%', '#d8eaf8'],
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

    const price = typeof p.price === 'number' && !isNaN(p.price) ? p.price : 0;
    const status = getBudgetStatus(price, this.budget);
    const statusLabel = {
      'in-budget':   'In Budget',
      'near-budget': 'Near Budget',
      'over-budget': 'Over Budget'
    }[status] || '—';

    const propType = p.type || 'flat';
    const svg      = TYPE_SVG[propType] || TYPE_SVG.flat;
    const [gradient, accentColor] = CARD_GRADIENTS[propType] || CARD_GRADIENTS.flat;

    const source = p.source || 'curated';
    const sourceBadgeClass = source === 'google_places' ? 'google' : source === 'web_search' ? 'serp' : 'mock';
    const sourceLabel      = source === 'google_places' ? 'Google' : source === 'web_search' ? 'Web' : 'Curated';

    // Sanitize the property name
    const cleanName = (p.name || 'Property')
      .replace(/[\u{1D400}-\u{1D7FF}]/gu, '')
      .replace(/[^\x00-\x7F\u00C0-\u024F\u0900-\u097F₹]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 48) || 'Rental Property';

    const address = p.address
      ? p.address.replace(/https?:\/\/[^\s]+/g, '').trim().slice(0, 60)
      : 'Location available on request';

    const el = document.createElement('div');
    el.className = 'property-card';
    el.dataset.id = p.id;
    el.style.animationDelay = `${this.index * 55}ms`;

    // Leaf SVG for placeholder
    const leafSVG = `<svg class="placeholder-icon-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 8 C18 20 14 38 32 56 C50 38 46 20 32 8Z" fill="${accentColor}" opacity="0.6"/>
      <path d="M32 8 C32 8 32 56 32 56" stroke="${accentColor}" stroke-width="1.5" opacity="0.4"/>
      <path d="M32 20 C24 24 22 34 32 40" stroke="${accentColor}" stroke-width="1" opacity="0.3" stroke-linecap="round"/>
      <path d="M32 28 C40 32 42 42 32 48" stroke="${accentColor}" stroke-width="1" opacity="0.3" stroke-linecap="round"/>
    </svg>`;

    el.innerHTML = `
      ${p.photo
        ? `<img class="card-image" src="${p.photo}" alt="${cleanName}" loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
           <div class="card-image-placeholder" style="display:none;background:linear-gradient(${gradient});">
             <div class="card-placeholder-inner" style="--accent:${accentColor};">
               ${leafSVG}
             </div>
           </div>`
        : `<div class="card-image-placeholder" style="background:linear-gradient(${gradient});">
             <div class="card-placeholder-inner" style="--accent:${accentColor};">
               ${leafSVG}
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
            ${p.bhk || 2} BHK ${propType}
          </span>
          ${p.area  ? `<span class="meta-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
            ${p.area} sq ft</span>` : ''}
          ${p.floor ? `<span class="meta-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
            Floor ${p.floor}</span>` : ''}
          ${p.rating ? `<span class="meta-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="${accentColor}" stroke="${accentColor}" stroke-width="1.5"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
            ${p.rating}</span>` : ''}
        </div>

        ${p.amenities?.length ? `
          <div class="card-amenities">
            ${p.amenities.slice(0, 4).map(a => `<span class="amenity-tag">${a}</span>`).join('')}
            ${p.amenities.length > 4 ? `<span class="amenity-tag" style="color:var(--text-muted);background:transparent;">+${p.amenities.length - 4}</span>` : ''}
          </div>
        ` : ''}

        <div class="card-footer">
          <button class="btn btn-primary card-map-btn" style="font-size:0.72rem;padding:6px 12px;flex:1;">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            View on Map
          </button>
          ${p.url ? `
            <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="font-size:0.72rem;padding:6px 10px;" title="Open original listing" onclick="event.stopPropagation()">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          ` : ''}
          ${p.contactPhone ? `
            <a href="tel:${p.contactPhone}" class="btn btn-secondary" style="font-size:0.72rem;padding:6px 12px;gap:5px;" title="Call ${p.contactName || 'owner'}" onclick="event.stopPropagation()">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.97-1.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              ${p.contactName ? `<span style="max-width:60px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${p.contactName.split(' ')[0]}</span>` : 'Call'}
            </a>
          ` : ''}
          <span class="source-badge ${sourceBadgeClass}">${sourceLabel}</span>
        </div>

        ${p.deposit ? `
          <div class="card-deposit">
            Deposit: <strong>₹${p.deposit.toLocaleString('en-IN')}</strong>
            &nbsp;·&nbsp;
            <span style="color:${p.available ? 'var(--green)' : 'var(--red)'};">
              ${p.available
                ? `<svg style="display:inline;vertical-align:-2px;" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Available`
                : `<svg style="display:inline;vertical-align:-2px;" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Not Available`
              }
            </span>
          </div>
        ` : ''}
      </div>
    `;

    el.addEventListener('click', () => this.onClick?.(this.property));
    return el;
  }
}
