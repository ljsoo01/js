const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Post = require("./Post");
const Following = require("./Following");


/*
  User Schema
*/


const userSchema = new Schema({
  // 이메일
  email: { type: String, minLength: 5 },
  // 비밀번호
  password: { type: String, minLength: 5 },
  // 비밀번호 암호화에 사용되는 키
  salt: { type: String },
  // 아이디
  username: { type: String, minLength: 3, required: true },
  // 이름
  name: { type: String },
  // 프로필 사진
  avatar: { type: String, default: "default.png" },
  // 자기 소개
  bio: { type: String }
}, { // 옵션
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});