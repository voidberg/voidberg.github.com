import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Articles, newest first. Drafts are visible while developing and dropped from
 * the production build, so an unfinished piece can sit committed in the repo
 * without going live. There is no admin anywhere in a static site: `astro dev`
 * is where you see everything, and what `astro build` emits is what ships.
 */
export async function getArticles(): Promise<CollectionEntry<'articles'>[]> {
  const all = await getCollection('articles', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return all.sort((a, b) => +b.data.date - +a.data.date);
}
