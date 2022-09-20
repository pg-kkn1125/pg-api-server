const sql = require("../database/mariadb");
const HTTP_STATUS = require("../customStatus/httpStatus");
const ErrorException = require("../customStatus/errorException");

const user = require("../models/user");
const { isEmpty } = require("../utils/tools");

user.findAll = (req, res) => {
  sql.query("select * from user", (err, rows) => {
    try {
      if (err) {
        ErrorException.throw(500);
      } else {
        HTTP_STATUS.jsonResponse(res, 200, rows);
      }
    } catch (e) {
      ErrorException.catch(res, e);
    }
  });
};

user.findById = (req, res) => {
  sql.query("select * from user where ?", req.params, (err, rows) => {
    try {
      if (err) {
        ErrorException.throw(500);
      } else {
        if (isEmpty(rows)) {
          ErrorException.throw(404);
        } else {
          HTTP_STATUS.jsonResponse(res, 200, rows[0]);
        }
      }
    } catch (e) {
      ErrorException.catch(res, e);
    }
  });
};

user.create = (req, res) => {
  sql.query("INSERT user SET ?", req.body, (err, rows) => {
    try {
      if (err) {
        console.log(err);
        ErrorException.throw(500);
      } else if (isEmpty(req.body)) {
        ErrorException.throw(422);
      } else {
        HTTP_STATUS.jsonResponse(res, 201, rows);
      }
    } catch (e) {
      ErrorException.catch(res, e);
    }
  });
};

// 미작업분
user.update = (req, res) => {
  sql.query(
    "UPDATE user SET ? WHERE ?",
    [req.body, req.params],
    (err, rows) => {
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
    }
  );
};

// 미작업분
user.delete = (req, res) => {
  sql.query("DELETE from user WHERE ?", req.params, (err, rows) => {
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
