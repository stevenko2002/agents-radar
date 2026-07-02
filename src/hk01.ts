/**
 * HK01 news articles fetched via HK01 public API.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Hk01Article {
  id: string;
  title: string;
  url: string;
  category: string;
  description: string;
  publishTime: number;
}

export interface Hk01Data {
  articles: Hk01Article[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ZONES = [
  { id: 1, name: "港聞" },
  { id: 4, name: "國際" },
  { id: 11, name: "科技" },
];

const MAX_ARTICLES_PER_ZONE = 15;

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

export async function fetchHk01Data(): Promise<Hk01Data> {
  const allArticles: Hk01Article[] = [];

  try {
    await Promise.all(
      ZONES.map(async (zone) => {
        try {
          const url = `https://web-data.api.hk01.com/v2/feed/zone/${zone.id}`;
          const resp = await fetch(url, {
            headers: { "User-Agent": "agents-radar/1.0" },
          });
          if (!resp.ok) {
            console.error(`  [hk01] Zone ${zone.id} (${zone.name}): HTTP ${resp.status}`);
            return;
          }
          const data = await resp.json();
          const items = data.items || [];
          
          for (const item of items.slice(0, MAX_ARTICLES_PER_ZONE)) {
            const articleData = item.data;
            if (!articleData) continue;

            allArticles.push({
              id: String(articleData.articleId),
              title: articleData.title || "",
              url: articleData.publishUrl || "",
              category: zone.name,
              description: (articleData.description || "").slice(0, 300),
              publishTime: articleData.publishTime || 0,
            });
          }
        } catch (err) {
          console.error(`  [hk01] Zone ${zone.id} fetch error:`, err);
        }
      })
    );

    // Sort by publish time (newest first)
    allArticles.sort((a, b) => b.publishTime - a.publishTime);

    return {
      articles: allArticles,
      fetchSuccess: allArticles.length > 0,
    };
  } catch (err) {
    console.error("  [hk01] Overall fetch error:", err);
    return {
      articles: [],
      fetchSuccess: false,
    };
  }
}
