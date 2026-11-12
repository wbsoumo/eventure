/**
 * Eventure Frontend API Client
 * Connects Vercel frontend to Hostbet backend on admin.myeventure.in
 * Includes local static fallbacks so the site remains fast and 100% resilient
 */

import { portfolioData as localPortfolio } from '../data/portfolioData';
import { galleryData as localGallery } from '../data/galleryData';
import { siteData as localSiteData } from '../data/siteData';

const API_BASE = 'https://admin.myeventure.in/api';

/**
 * Fetch portfolio events from live CMS with fallback
 */
export async function fetchPortfolioEvents() {
  try {
    const res = await fetch(`${API_BASE}/events.php`, {
      headers: { Accept: 'application/json' },
      cache: 'no-cache',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.success && Array.isArray(data.events) && data.events.length > 0) {
      return data.events.map((ev) => ({
        id: ev.id,
        title: ev.title,
        category: ev.category,
        location: ev.location,
        description: ev.summary || ev.description,
        image: ev.hero_image,
        stats: ev.stats,
        scope: ev.scope,
      }));
    }
  } catch (err) {
    console.warn('[Eventure API] Falling back to local portfolio data:', err.message);
  }
  return localPortfolio;
}

/**
 * Fetch gallery archive photos from live CMS with fallback
 */
export async function fetchGalleryPhotos() {
  try {
    const res = await fetch(`${API_BASE}/gallery.php`, {
      headers: { Accept: 'application/json' },
      cache: 'no-cache',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.success && Array.isArray(data.photos) && data.photos.length > 0) {
      return data.photos.map((p) => {
        const url = p.image_url || p.thumbnail_url;
        return {
          id: p.id,
          src: url,
          alt: p.title || 'Eventure Photo',
          title: p.title || 'Eventure Photo',
          category: (p.category || 'all').toLowerCase(),
          thumb: p.thumbnail_url || url,
          full: url,
          aspect: p.aspect_ratio || 'landscape',
        };
      });
    }
  } catch (err) {
    console.warn('[Eventure API] Falling back to local gallery data:', err.message);
  }
  return localGallery;
}

/**
 * Fetch global site settings from live CMS with fallback
 */
export async function fetchSiteSettings() {
  try {
    const res = await fetch(`${API_BASE}/site.php`, {
      headers: { Accept: 'application/json' },
      cache: 'no-cache',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.success && data.settings) {
      return data.settings;
    }
  } catch (err) {
    console.warn('[Eventure API] Falling back to local site data:', err.message);
  }
  return localSiteData;
}

/**
 * Fetch specific page hero & content from live CMS
 */
export async function fetchPageContent(slug) {
  try {
    const res = await fetch(`${API_BASE}/page.php?slug=${encodeURIComponent(slug)}`, {
      headers: { Accept: 'application/json' },
      cache: 'no-cache',
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (data.success && data.page) {
      return data;
    }
  } catch (err) {
    console.warn(`[Eventure API] Error fetching page content [${slug}]:`, err.message);
  }
  return null;
}

/**
 * Submit client inquiry / lead to backend database
 */
export async function submitInquiry(formData) {
  try {
    const res = await fetch(`${API_BASE}/inquiry.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('[Eventure API] Inquiry submission error:', err);
    return { success: false, error: err.message };
  }
}
