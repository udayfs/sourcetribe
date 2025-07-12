import { pgTable, varchar } from "drizzle-orm/pg-core";
import { ID } from "@/drizzle/schema-helpers";
import { OrganizerTable } from "./organizer";

export const EventTable = pgTable("event", {
  event_id: ID,
  organizer_id: varchar()
    .references(() => OrganizerTable.organizer_id, {
      onDelete: "cascade",
    })
    .notNull(),
  event_name: varchar().notNull(),
  
});
