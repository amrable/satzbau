import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { eq } from "drizzle-orm";
import { analyses } from "./schema.js";

import { mkdirSync } from "node:fs";

mkdirSync("data", { recursive: true });
const sqlite = new Database("data/analyses.db");
export const db = drizzle(sqlite);

// Initialize table
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS analyses (
    id TEXT PRIMARY KEY,
    sentence TEXT NOT NULL,
    result TEXT NOT NULL,
    created_at INTEGER NOT NULL
  )
`);