import { useState } from "react";
import { useNavigate } from "react-router-dom";
// 서버 요청 처리
import { createPost } from "../service/post";
import { FaCamera } from "react-icons/fa6";

export default function PostForm() {
  const [files, setFiles] = useState([]);
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();
};