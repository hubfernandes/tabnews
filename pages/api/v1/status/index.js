import database from "/infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const dbName = process.env.POSTGRES_DB;

  const dbVersionResult = await database.query("SHOW server_version;");

  const dbMaxConnectionsResult = await database.query("SHOW max_connections;");

  const dbOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [dbName],
  });

  const dbVersionValue = dbVersionResult.rows[0].server_version;

  const dbMaxConnectionsValue = parseInt(
    dbMaxConnectionsResult.rows[0].max_connections,
  );

  const dbOpenedConnectionsValue = dbOpenedConnectionsResult.rows[0].count;

  console.log(dbOpenedConnectionsResult.rows[0]);

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: dbVersionValue,
        max_connections: dbMaxConnectionsValue,
        opened_connections: dbOpenedConnectionsValue,
      },
    },
  });
}

export default status;
