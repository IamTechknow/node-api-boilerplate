# node.js API Boilerplate

API Boilerplate for node.js, express.js, and mysql2. For the seeding or ETL (Extract, Transform, Load) process a CSV or JSON file may be used in the seed script.

## Notes

* The username for the account to be used in the mysql database must be set as an environment variable called `DB_USERNAME`.

* The password for the account designed by the `DB_USERNAME` environment variable must be set as an environment variable called `DB_PASSWORD`.

* The server may be launched with `npm start` or `npm debug` to debug it with nodemon.

* Use `db-migrate` to create database migrations for desired tables.

  * In an migration script, call `createTable` on the `db` object to set up a table.
  
  * Please refer to [its documentation](https://db-migrate.readthedocs.io/en/latest/API/SQL/) for the SQL API.

  * To create a migration script run the following:

```bash
npx db-migrate create migrationname
```

* Once the DB migration scripts are set up, run the migrate and reset NPM scripts when needed. Please rename the default table name in the scripts to a desired table name!

* Please be mindful when using words in SQL statements that could be keywords or reserved words in MySQL!

* Use `express-validator` to validate the request path and/or query. See [its documentation](https://express-validator.github.io/docs/)