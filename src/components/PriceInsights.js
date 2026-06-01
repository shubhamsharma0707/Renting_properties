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
    const trendIcon  = i.marketTrend === 'rising' ? '📈' : '📊';
    const trendColor = i.marketTrend === 'rising' ? 'var(--amber)' : 'var(--green)';

    const el = document.createElement('div');
    el.className = 'insights-panel';
    el.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <div style="font-family:var(--font-display);font-size:0.85rem;font-weight:700;color:var(--text-primary);">
          📊 Market Insights — ${this.location?.split(',')[0] || 'This Area'}
        </div>
        <div style="font-size:0.72rem;color:${trendColor};background:rgba(245,158,11,0.1);padding:3px 8px;border-radius:4px;font-weight:600;">
          ${trendIcon} ${i.marketTrend === 'rising' ? `+${i.trendPercent}% MoM` : 'Stable'}
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

      <div style="font-size:0.78rem;color:var(--text-secondary);padding:8px 12px;background:rgba(255,255,255,0.03);border-radius:6px;border-left:2px solid var(--accent);margin-bottom:8px;">
        💡 ${i.recommendation}
      </div>

      <!-- Gemini AI Advice block -->
      <div id="ai-advice-block" style="
        display:flex;align-items:flex-start;gap:10px;
        padding:10px 12px;
        background:rgba(139,92,246,0.07);
        border:1px solid rgba(139,92,246,0.2);
        border-radius:8px;
        min-height:44px;
      ">
        <span style="font-size:1.1rem;flex-shrink:0;margin-top:1px;">🤖</span>
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
          <div style="font-size:0.72rem;color:var(--violet);display:flex;align-items:flex-start;gap:4px;margin-top:4px;">
            <span>✨</span><span>${data.tip}</span>
          </div>
        ` : ''}
      `;
    } catch {
      adviceEl.innerHTML = `<span style="color:var(--text-muted);font-size:0.72rem;">AI insights unavailable</span>`;
    }
  }
}
