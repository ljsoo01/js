import { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AuthContext from "./auth/AuthContext";
// 프로필 관련 서버 요청 처리
import { getProfile, getTimeline, follow, unfollow } from "../service/profile";
import { FaCircleNotch, FaArrowRightFromBracket, FaHeart, FaComment } from "react-icons/fa6";


export default function Profile() {
  // username 매개변수
  const { username } = useParams();
  // value 객체
  const { user, setUser } = useContext(AuthContext);
  // 프로필 
  const [profile, setProfile] = useState(null);
  // 게시물 
  const [posts, setPosts] = useState([]);

  // 로그인 유저가 본인 프로필 페이지를 방문한 경우 참이 된다
  const isMaster = user.username === profile?.username;
  // profile?.username - profile이 null이 아닐 때 username에 접근한다
  const navigate = useNavigate();
};