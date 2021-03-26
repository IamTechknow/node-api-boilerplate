# node.js API Boilerplate

API Boilerplate for node.js, express.js, and mysql2. For the seeding or ETL (Extract, Transform, Load) process a CSV or JSON file may be used in the seed script.

## Notes

* The username for the account to be used in the mysql database must be set as an environment variable called `DB_USERNAME`.

* The password for the account designed by the `DB_USERNAME` environment variable must be set as an environment variable called `DB_PASSWORD`.

* The server may be launched with `npm start` or `npm debug` to debug it with nodemon.

* Please be mindful when using words in SQL statements that could be keywords or reserved words in MySQL!
