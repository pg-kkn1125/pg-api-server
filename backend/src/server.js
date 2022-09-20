process.env.NODE_ENV =
  process.env.NODE_ENV &&
  process.env.NODE_ENV.trim().toLowerCase() === "production"
    ? "production"
    : "development";

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
dotenv.config({
  // dotent connect
  path: path.join(__dirname, "./../.env"),
});
// env variables
const { PORT, HOST } = process.env;
// routers
const memberController = require("./controllers/user.controller");
// multer setting
// x-www-for-urlencoded -> form-data body 데이터 요청 방식 변경
const formDataMiddleWare = multer();

app.use(formDataMiddleWare.any());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", memberController);

// index contents (개발환경 임시 표시)
app.get("/", (req, res) => {
  res.send(`${process.env.NODE_ENV}`);
});

// listening info
app.listen(PORT, () => {
  console.debug(`app listening on port http://${HOST}:${PORT}`);
});
