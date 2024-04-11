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


/*
  가상 필드 (Virtual field)

  컬렉션 조인을 통해 가상 필드를 생성한다
  가상 필드는 데이터를 풍부하게 만든다
  가상 필드는 데이터베이스 상에서는 존재하지 않는다
*/


// 프로필 사진 주소 - 클라이언트가 파일에 쉽게 접근할 수 있다
userSchema.virtual("avatarUrl").get(function () {
  return process.env.FILE_URL + "/avatar/" + this.avatar;
})

// 유저의 게시물 갯수
userSchema.virtual("postCount", {
  ref: "Post", // Post 컬렉션과 조인
  localField: "_id", // 기본키 - 조인의 기준
  foreignField: "user", // 외래키 - 조인의 기준
  count: true
})

// 팔로워 수
userSchema.virtual("followerCount", {
  ref: "Following", // 조인
  localField: "_id",
  foreignField: "following",
  count: true
})

// 팔로잉 수
userSchema.virtual("followingCount", {
  ref: "Following",
  localField: "_id",
  foreignField: "user",
  count: true
})

// 팔로우 여부
userSchema.virtual("isFollowing", {
  ref: "Following",
  localField: "_id",
  foreignField: "following",
  justOne: true
})


/*
  Operation

  모델이 자신의 데이터를 처리하기 위한 행위
*/


// 비밀번호 암호화
userSchema.methods.setPassword = function (password) {
  // 비밀번호 암호화에 사용되는 키
  this.salt = crypto
    .randomBytes(16).toString("hex");
  
  // 비밀번호 암호화
  this.password = crypto
    .pbkdf2Sync(password, this.salt, 310000, 32, "sha256")
    .toString("hex")
}


// 비밀번호 검사 처리
userSchema.methods.checkPassword = function (password) {
  const hashedPassword = crypto
    .pbkdf2Sync(password, this.salt, 310000, 32, "sha256")
    .toString("hex")
  
  // this.password - 유저가 가입할 때 입력한 암호화된 비밀번호
  // hashedPassword - 유저가 로그인 할때 입력한 암호화된 비밀번호
  return this.password === hashedPassword;
}

// 로그인 토큰 생성
userSchema.methods.generateJWT = function () {
  // 토큰에 저장되는 유저의 정보
  const payload = { 
    sub: this._id, 
    username: this.username 
  }

  // 토큰 생성에 사용되는 키
  const secret = process.env.SECRET;

  // 토큰 생성
  return jwt.sign(payload, secret);
}


// 모델 export
module.exports = mongoose.model("User", userSchema);