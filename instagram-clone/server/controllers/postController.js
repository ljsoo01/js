const User = require("../models/User");
const Following = require("../models/Following");
const Post = require("../models/Post");
const Likes = require("../models/Likes");
const createError = require("http-errors");


/*
  Post 컨트롤러

  1 feed - 피드
  2 find - 게시물 여러개 찾기
  3 findOne - 게시물 한개 찾기
  4 create - 게시물 생성
  5 deleteOne - 게시물 삭제
  6 like - 좋아요 처리
  7 unlike - 좋아요 취소 처리
*/


exports.feed = async (req, res, next) => {};
exports.find = async (req, res, next) => {};
exports.findOne = async (req, res, next) => {};
exports.create = async (req, res, next) => {};
exports.deleteOne = async (req, res, next) => {};
exports.like = async (req, res, next) => {};
exports.unlike = async (req, res, next) => {};