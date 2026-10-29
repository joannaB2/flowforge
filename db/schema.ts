import { FormField } from '@/types/Form';
import {
  pgTable,
  uuid,
  varchar,
  text,
  timestamp,
  jsonb,
} from 'drizzle-orm/pg-core';

export const forms = pgTable('forms', {
  id: uuid('id').defaultRandom().primaryKey(),

  name: varchar('name', { length: 255 }).notNull(),

  description: text('description'),

  slug: varchar('slug', { length: 255 }).notNull().unique(),

  status: varchar('status', { length: 20 }).notNull().default('draft'),

  fields: jsonb('fields').$type<FormField[]>().notNull().default([]),

  createdAt: timestamp('created_at', {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),

  updatedAt: timestamp('updated_at', {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),
});
