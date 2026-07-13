import { defineCollection, z } from 'astro:content';

export const CATEGORIES = [
  'AI and ML',
  'Genomics',
  'Immunology',
  'Clinical Research',
  'Bioinformatics',
  'Cancer Biology'
] as const;

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    categories: z.array(z.enum(CATEGORIES)).min(1),
    difficulty: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Intermediate'),
    tools: z.array(z.string()).default([]),
    readingTime: z.number().describe('Estimated reading time in minutes'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    heroAlt: z.string().optional()
  })
});

export const collections = { articles };
