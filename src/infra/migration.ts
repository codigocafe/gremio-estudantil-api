import { runner } from "node-pg-migrate";
import { join } from "node:path";
import * as dotenv from "dotenv";
import Database from "./database.js";

dotenv.config({
  path: ".env.development",
});

const db = new Database();
const cleanDatabase = db.query(
  "drop schema public cascade; create schema public;",
);

const urlConnection = `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}?sslmode=require&channel_binding=require`;

runner({
  databaseUrl: urlConnection,
  dir: join("src", "infra", "migrations"),
  migrationsTable: "pgmigrations",
  direction: "up",
  verbose: true,
});
