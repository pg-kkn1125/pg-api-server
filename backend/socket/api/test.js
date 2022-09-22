const sql = require("../database/mariadb");

const findAll = (req, res) => {
  sql.query("SELECT * FROM users", (err, rows) => {
    try {
      if (err) {
        throw new Error("서버 에러");
      }
      res.status(200).json({
        ok: true,
        payload: rows,
      });
    } catch (e) {
      res.status(500).json({
        ok: false,
        message: e.message,
      });
    }
  });
};

module.exports = { findAll };
