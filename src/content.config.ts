import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
        docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
        blog: defineCollection({
                schema: z.object({
                        title: z.string(),
                        description: z.string(),
                        publishDate: z.date(),
                        updatedDate: z.date(),
                        author: z.string(),
                        category: z.string(),
                        tags: z.array(z.string()),
                        coverImage: z.string(),
                }),
        }),
};
