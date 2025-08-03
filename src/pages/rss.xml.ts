import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts
    .filter((post) => post.data.title && post.data.publishDate)
    .sort(
      (a, b) => new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
    );

  return rss({
    title: 'Tyler Staut - Blog',
    description: 'Latest blog posts from Tyler Staut',
    site: context.site ?? 'https://tylerstaut.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.publishDate),
      link: `/blog/${post.slug}/`,
    })),
  });
}
