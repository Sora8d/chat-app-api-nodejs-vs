// Update with your config settings.

const { Config } = require("../../config/config");
console.log(Config)

module.exports = {
    client: 'postgresql',
    connection: Config["dbinfo"]["database_url"],
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
