describe("Endpoint /api/v1/users", () => {
  test("Retornar todos os usuários", async () => {
    const response = await fetch("http://localhost:3000/api/v1/users", {
      method: "GET",
    });
    const responseBody = await response.json();
    expect(response.status).toBe(200);
    expect(Array.isArray(responseBody)).toBe(true);
  });

  test("Retornar usuário específico", async () => {
    const response = await fetch(
      "http://localhost:3000/api/v1/users/abc12345",
      { method: "GET" },
    );
    const responseBody = await response.json();
    expect(response.status).toBe(200);
    expect(responseBody.id).toBe("abc12345");
  });

  test("Criar usuário deve retornar boolean true", async () => {
    const response = await fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: "123456",
        email: "test@example.com",
        name: "Test User",
      }),
    });
    const responseBody = await response.json();
    expect(responseBody).toBe(true);
  });
});
