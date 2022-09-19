const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "./../../.env"),
});

const {
  MARIADB_PORT,
  MARIADB_HOST,
  MARIADB_USERNAME,
  MARIADB_PW,
  MARIADB_DATABASE,
} = process.env;

console.log(process.env.MARIADB_USERNAME);

module.exports = {
  host: MARIADB_HOST,
  port: Number(MARIADB_PORT),
  user: MARIADB_USERNAME,
  password: MARIADB_PW,
  database: MARIADB_DATABASE,
};
