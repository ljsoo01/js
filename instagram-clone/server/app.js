const express = require("express")
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const looger = require("morgan");
const cors = require("cors");
const indexRouter = require("./routes/index");
const app = express();
const mongoose = require("mongoose");
const compression = require("compression");
const helmet = require("helmet");
require("dotenv").config();


/*
  데이터베이스 연결
*/


mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .catch(err => console.log(err));



/*
  앱 레벨 미들웨어
*/


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(helmet.crossOriginResourcePolicy({
  policy: "cross-origin"
}));
app.use(cors());


/*
  파일 서버 주소 설정
*/


app.use("/api/files", express.static("files"));