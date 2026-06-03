import { formatINR } from '../utils/api.js';

export class PriceInsights {
  constructor(insights, budget, location) {
    this.insights = insights;
    this.budget   = budget;
    this.location = location;
    this.element  = this.build();
    // Fetch AI advice after rendering
    this.fetchAIAdvice();
  }

  build() {
    const i   = this.insights;
    const pct = Math.min(100, i.budgetPercentile || 50);

    const trendSVG = i.marketTrend === 'rising'
      ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
      : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;
    const trendColor = i.marketTrend === 'rising' ? 'var(--amber)' : 'var(--green)';

    const el = document.createElement('div');
    el.className = 'insights-panel';
    el.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-family:var(--font-body);font-size:0.85rem;font-weight:700;color:var(--text-primary);display:flex;align-items:center;gap:6px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          Market Insights — ${this.location?.split(',')[0] || 'This Area'}
        </div>
        <div style="font-size:0.72rem;color:${trendColor};background:rgba(212,160,74,0.1);padding:3px 10px;border-radius:4px;font-weight:600;display:flex;align-items:center;gap:4px;">
          ${trendSVG} ${i.marketTrend === 'rising' ? `+${i.trendPercent}% MoM` : 'Stable'}
        </div>
      </div>

      <div class="insights-grid">
        <div class="insight-stat">
          <span class="value">${formatINR(i.avgPrice)}</span>
          <span class="label">Avg Rent</span>
        </div>
        <div class="insight-stat">
          <span class="value">${formatINR(i.minPrice)}</span>
          <span class="label">Cheapest</span>
        </div>
        <div class="insight-stat">
          <span class="value" style="color:var(--green);">${i.inBudgetCount}</span>
          <span class="label">In Budget</span>
        </div>
        <div class="insight-stat">
          <span class="value">${i.totalCount}</span>
          <span class="label">Total Found</span>
        </div>
      </div>

      <div style="margin-bottom:8px;">
        <div style="display:flex;justify-content:space-between;font-size:0.7rem;color:var(--text-muted);margin-bottom:4px;">
          <span>Your budget: ${formatINR(this.budget)}</span>
          <span>Beats <strong style="color:var(--accent);">${pct}%</strong> of listings</span>
        </div>
        <div class="budget-bar-wrapper">
          <div class="budget-bar-fill" style="width:${pct}%;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.65rem;color:var(--text-muted);margin-top:2px;">
          <span>${formatINR(i.minPrice)}</span>
          <span>${formatINR(i.maxPrice)}</span>
        </div>
      </div>

      <div style="font-size:0.78rem;color:var(--text-secondary);padding:8px 12px;background:rgba(109,191,130,0.04);border-radius:6px;border-left:2px solid var(--accent);margin-bottom:8px;display:flex;align-items:flex-start;gap:6px;">
        <svg style="flex-shrink:0;margin-top:1px;" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <span>${i.recommendation}</span>
      </div>

      <!-- AI Advice block -->
      <div id="ai-advice-block" style="
        display:flex;align-items:flex-start;gap:10px;
        padding:10px 12px;
        background:rgba(109,191,130,0.06);
        border:1px solid rgba(109,191,130,0.2);
        border-radius:8px;
        min-height:44px;
      ">
        <svg style="flex-shrink:0;margin-top:2px;" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--sage)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2"/><path d="M12 8v4l3 3"/></svg>
        <div id="ai-advice-text" style="font-size:0.78rem;color:var(--text-secondary);line-height:1.55;">
          <span style="color:var(--text-muted);font-style:italic;animation:pulse 1.5s ease infinite;">
            Gemini is analysing the market...
          </span>
        </div>
      </div>
    `;

    return el;
  }

  async fetchAIAdvice() {
    const adviceEl = this.element?.querySelector('#ai-advice-text');
    if (!adviceEl) return;

    try {
      const qs   = new URLSearchParams({ location: this.location, budget: String(this.budget) });
      const resp = await fetch(`/api/ai-advice?${qs}`);
      const data = await resp.json();

      if (data.error || (!data.advice && !data.tip)) {
        adviceEl.innerHTML = `<span style="color:var(--text-muted);font-size:0.72rem;">AI insights unavailable — add GEMINI_API_KEY to .env</span>`;
        return;
      }

      adviceEl.innerHTML = `
        <div style="color:var(--text-primary);margin-bottom:${data.tip ? '6px' : '0'};">${data.advice}</div>
        ${data.tip ? `
          <div style="font-size:0.72rem;color:var(--earth);display:flex;align-items:flex-start;gap:4px;margin-top:4px;">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--earth)" stroke="none"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>
            <span>${data.tip}</span>
          </div>
        ` : ''}
      `;
    } catch {
      adviceEl.innerHTML = `<span style="color:var(--text-muted);font-size:0.72rem;">AI insights unavailable</span>`;
    }
  }
}
