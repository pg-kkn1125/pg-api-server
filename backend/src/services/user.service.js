const sql = require("../database/mariadb");

const user = require("../models/user");

user.findAll = (req, res) => {
  sql.query("select * from user", (err, rows) => {
    if (err) {
      res.status(500).json({
        ok: false,
        message: "error",
      });
    } else {
      res.status(200).json({
        ok: true,
        payload: rows,
      });
    }
  });
};

user.findById = (req, res) => {
  sql.query("select * from user where ?", req.params, (err, rows) => {
    if (err) {
      res.status(500).json({
        ok: false,
        message: "error",
      });
    } else {
      res.status(200).json({
        ok: true,
        payload: rows[0],
      });
    }
  });
};

user.create = (req, res) => {
  sql.query("select * from user", (err, rows) => {
    if (err) {
      res.status(500).json({
        ok: false,
        message: "error",
      });
    } else {
      res.status(200).json({
        ok: true,
        payload: rows,
      });
    }
  });
};

user.update = (req, res) => {
  sql.query("select * from user", (err, rows) => {
    if (err) {
      res.status(500).json({
        ok: false,
        message: "error",
      });
    } else {
      res.status(200).json({
        ok: true,
        payload: rows,
      });
    }
  });
};

user.delete = (req, res) => {
  sql.query("select * from user", (err, rows) => {
    if (err) {
      res.status(500).json({
        ok: false,
        message: "error",
      });
    } else {
      res.status(200).json({
        ok: true,
        payload: rows,
      });
    }
  });
};

module.exports = user;
