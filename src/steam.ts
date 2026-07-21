/**
 * Steam store data (top sellers & specials)
 */

export interface SteamGame {
  id: number;
  name: string;
  price: string;
  discount?: number;
  url: string;
}

export interface SteamData {
  topSellers: SteamGame[];
  specials: SteamGame[];
  fetchSuccess: boolean;
}

const MAX_ITEMS = 25;

export async function fetchSteamData(): Promise<SteamData> {
  try {
    const url = "https://store.steampowered.com/api/featuredcategories/?cc=cn";
    const resp = await fetch(url, {
      headers: { "User-Agent": "agents-radar/1.0" },
    });
    
    if (!resp.ok) {
      console.error(`[steam] HTTP ${resp.status}`);
      return { topSellers: [], specials: [], fetchSuccess: false };
    }
    
    const data = await resp.json();
    
    const topSellers = (data.top_sellers?.items || []).slice(0, MAX_ITEMS).map((g: any) => ({
      id: g.id,
      name: g.name || "Unknown",
      price: g.final_price ? `¥${(g.final_price / 100).toFixed(2)}` : "Free",
      url: `https://store.steampowered.com/app/${g.id}/`,
    }));
    
    const specials = (data.specials?.items || []).slice(0, MAX_ITEMS).map((g: any) => ({
      id: g.id,
      name: g.name || "Unknown",
      price: g.final_price ? `¥${(g.final_price / 100).toFixed(2)}` : "Free",
      discount: g.discount_percent || 0,
      url: `https://store.steampowered.com/app/${g.id}/`,
    }));
    
    return {
      topSellers,
      specials,
      fetchSuccess: topSellers.length > 0 || specials.length > 0,
    };
  } catch (err) {
    console.error("[steam] Fetch error:", err);
    return { topSellers: [], specials: [], fetchSuccess: false };
  }
}
