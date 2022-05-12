const knexSqLite = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./DB/backend.sqlite",
  },
  useNullAsDefault: true,
});

module.exports = { knexSqLite };
