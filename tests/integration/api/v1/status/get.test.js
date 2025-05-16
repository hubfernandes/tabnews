test("GET: /api/v1/status => 200", async () => {
  var response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  var body = await response.json();

  const parsed = new Date(body.updated_at).toISOString();

  expect(body.updated_at).toBe(parsed);

  const database = body.dependencies.database;

  const dbVersion = database.version;

  expect(dbVersion).toBe("16.0");

  const dbMaxConnections = database.max_connections;

  expect(dbMaxConnections).toBe(100);

  const dbOpennedConnections = database.opened_connections;

  expect(dbOpennedConnections).toBe(1);
});
