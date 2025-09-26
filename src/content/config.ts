import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    category: z.string(),
    readTime: z.string(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    author: z.string().default('Ariel Benesh'),
  }),
});

const tutorials = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    category: z.string(),
    difficulty: z.enum(['מתחיל', 'בינוני', 'מתקדם']),
    tags: z.array(z.string()),
    image: z.string(),
    duration: z.string(),
    views: z.number(),
    author: z.string().default('Ariel Benesh'),
  }),
});

export const collections = {
  blog,
  tutorials,
};
