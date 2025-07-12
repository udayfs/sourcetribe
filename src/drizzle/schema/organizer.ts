import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "@/drizzle/schema-helpers";

export const OrganizerTable = pgTable("org", {
  organizer_id: varchar().primaryKey(),
  image_url: varchar().notNull(),
  createdAt,
  updatedAt,
});
