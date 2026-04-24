import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const analyses = sqliteTable("analyses", {
  id: text("id").primaryKey(), // UUID
  sentence: text("sentence").notNull(),
  result: text("result").notNull(), // JSON string of the analysis response
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});