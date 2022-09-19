process.env.NODE_ENV =
  process.env.NODE_ENV &&
  process.env.NODE_ENV.trim().toLowerCase() === "production"
    ? "production"
    : "development";

const STATUS = process.env.NODE_ENV;

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// controllers
const memberController = require("./controllers/test.controller");

require("dotenv").config({
  path: path.join(__dirname, "./../.env"),
});

const { PORT, HOST } = process.env;

const app = express();

// x-www-for-urlencoded -> form-data body 데이터 요청 방식 변경
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
  destination: (req, file, cb) => {
    cb(
      null,
      __dirname +
        (process.env.NODE_ENV === "production" ? "" : "/../client/") +
        "public/uploads/"
    );
  },
});
// multer setting
const upload = multer({ storage });

// option settings
app.use(upload.any());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api", memberController);

// index contents
app.get("/", (req, res) => {
  res.send(`${STATUS}`);
});

// listening info
app.listen(PORT, () => {
  console.debug(`app listening on port http://${HOST}:${PORT}`);
});
