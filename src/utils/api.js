/**
 * API client for RentRadar frontend
 * Communicates with the Express backend via /api/* (proxied by Vite)
 */

const BASE = '/api';

/**
 * Search for rental properties
 * @param {{ location: string, budget: number, type: string, bhk: string }} params
 */
export async function searchProperties(params) {
  const qs = new URLSearchParams({
    location: params.location || 'Bangalore',
    budget:   String(params.budget || 20000),
    type:     params.type || 'all',
    bhk:      params.bhk  || 'all',
  });

  const resp = await fetch(`${BASE}/search?${qs}`);
  if (!resp.ok) {
    const err = await resp.json().catch(() => ({}));
    throw new Error(err.error || `HTTP ${resp.status}`);
  }
  return resp.json();
}

/**
 * Geocode an address
 * @param {string} address
 */
export async function geocodeAddress(address) {
  const qs = new URLSearchParams({ address });
  const resp = await fetch(`${BASE}/geocode?${qs}`);
  if (!resp.ok) throw new Error(`Geocode failed: HTTP ${resp.status}`);
  return resp.json();
}

/**
 * Format a number as Indian Rupee
 */
export function formatINR(amount) {
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
  if (amount >= 1000) return `₹${(amount / 1000).toFixed(0)}K`;
  return `₹${amount}`;
}

/**
 * Get budget status: 'in-budget' | 'near-budget' | 'over-budget'
 */
export function getBudgetStatus(price, budget) {
  if (price <= budget) return 'in-budget';
  if (price <= budget * 1.2) return 'near-budget';
  return 'over-budget';
}

/**
 * Show a toast notification
 */
export function showToast(message, duration = 3000) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}
