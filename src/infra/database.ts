import { Client } from "pg";

export default class Database {
  private db;
  async connect() {
    this.db = new Client({
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      ssl: true,
    });
    await this.db.connect();
  }

  async query(consult) {
    this.connect();
    return await this.db.query(consult);
    this.disconnect();
  }

  async disconnect() {
    await this.db.end();
  }
}
