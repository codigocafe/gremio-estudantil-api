import Database from "../../../infra/database";

describe("unitary test - Database", () => {
  test("Database is connected.", async () => {
    const db = new Database();
    const response = await db.query("SELECT 1 + 1 as sum;");
    const result = await response.rows[0].sum;
    expect(result).toEqual(2);
  });
});
