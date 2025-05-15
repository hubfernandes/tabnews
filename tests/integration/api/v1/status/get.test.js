test("GET:/api/v1/status", async () => {
  var response = await fetch("http://localhost:3000/api/v1/status");
  console.log(response.body);
  expect(response.status).toBe(200);
});
