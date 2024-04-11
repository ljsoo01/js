const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");
const Comment = require("./Comment");
const Likes = require("./Likes");


/*
  Post Schema
*/


const postSchema = new Schema({
  // 사진
  photos: [{ type: String, required: true }],
  // 사진에 대한 설명
  caption: { type: String },
  // 게시물 작성자 ref - User컬렉션과 조인한다
  user: { type: Schema.ObjectId, required: true, ref: "User" },
  // 좋아요 수
  likesCount: { type: Number, default: 0 },
}, { // 옵션
  // 도큐먼트의 생성시간 자동 저장
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})


/*
  가상 필드
*/


// 보여주기용 날짜
postSchema.virtual("displayDate").get(function () {
  const displayDate = DateTime
    .fromJSDate(this.createdAt) // createdAt - 타임스탬프
    .toLocaleString(DateTime.DATE_MED);

  return displayDate;
})


// 게시물 사진 URL 생성 - 클라이언트의 접근에 도움
postSchema.virtual("photoUrls").get(function () {
  const urls = this.photos.map(photoName => {
    return process.env.FILE_URL + "/photos/" + photoName
  })

  return urls;
})


// 댓글 갯수 
postSchema.virtual("commentCount", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
  count: true
})

// 사용자의 게시물 좋아요 여부
postSchema.virtual("liked", {
  ref: "Likes",
  localField: "_id", 
  foreignField: "post",
  justOne: true
})


// 모델 export
module.exports = mongoose.model("Post", postSchema);