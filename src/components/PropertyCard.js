import { formatINR, getBudgetStatus } from '../utils/api.js';

const TYPE_ICONS = { flat: '🏢', house: '🏠', pg: '🛋️', studio: '🪴' };
const TYPE_EMOJIS_BIG = { flat: '🏢', house: '🏡', pg: '🛋️', studio: '🪴' };

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
    const status = getBudgetStatus(p.price, this.budget);
    const statusLabel = { 'in-budget': '✓ In Budget', 'near-budget': '~Close', 'over-budget': 'Over Budget' }[status];
    const icon = TYPE_EMOJIS_BIG[p.type] || '🏠';
    const source = p.source || 'mock';
    const sourceBadgeClass = source.includes('google') ? 'google' : source.includes('serp') ? 'serp' : 'mock';
    const sourceLabel = source === 'google_places' ? 'Google' : source === 'web_search' ? 'Web' : 'Curated';

    const el = document.createElement('div');
    el.className = 'property-card';
    el.dataset.id = p.id;
    el.style.animationDelay = `${this.index * 60}ms`;

    el.innerHTML = `
      ${p.photo
        ? `<img class="card-image" src="${p.photo}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" /><div class="card-image-placeholder" style="display:none;">${icon}</div>`
        : `<div class="card-image-placeholder">${icon}</div>`
      }

      <div class="card-body">
        <div class="card-header">
          <div class="card-title">${p.name}</div>
          <div class="price-badge ${status}">₹${p.price.toLocaleString('en-IN')}/mo</div>
        </div>

        <div class="card-address">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          ${p.address}${p.distance ? ` · ${p.distance} km` : ''}
        </div>

        <div class="card-meta">
          <span class="meta-tag">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
            ${TYPE_ICONS[p.type] || '🏠'} ${p.bhk} BHK ${p.type}
          </span>
          ${p.area ? `<span class="meta-tag">📐 ${p.area} sq ft</span>` : ''}
          ${p.floor ? `<span class="meta-tag">🏗️ Floor ${p.floor}</span>` : ''}
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
            View on Map
          </button>
          ${p.contactPhone ? `
            <a href="tel:${p.contactPhone}" class="btn btn-secondary" style="font-size:0.72rem;padding:6px 12px;" title="${p.contactName || 'Contact'}">
              📞
            </a>
          ` : ''}
          <span class="source-badge ${sourceBadgeClass}">${sourceLabel}</span>
        </div>

        ${p.deposit ? `
          <div style="margin-top:8px;font-size:0.7rem;color:var(--text-muted);">
            Deposit: ₹${p.deposit.toLocaleString('en-IN')} · ${p.available ? '✅ Available' : '❌ Not Available'}
          </div>
        ` : ''}
      </div>
    `;

    el.addEventListener('click', () => this.onClick?.(this.property));
    return el;
  }
}
