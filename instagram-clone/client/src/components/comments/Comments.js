import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// 서버 요청
import { getComments, createComments, deleteComments } from "../../service/comment";
// 댓글 폼
import Form from "./Form";
// 각각의 댓글
import Comment from "./Comment";
import { FaCircleNotch } from "react-icons/fa6";


export default function Comments() {
  // 게시물의 id
  const { id } = useParams();
  // 에러 관리
  const [error, setError] = useState(null);
  // 대기상태 관리
  const [isLoaded, setIsLoaded] = useState(false);
  // 댓글 저장
  const [comments, setComments] = useState([]);

  // 키 스테이트 확인
  console.log(comments);

  // 댓글 가져오기 요청
  useEffect(() => {
    fetchData();
  }, [])

  // 댓글 가져오기 요청 처리
  async function fetchData() {
    try {
      // 서버요청
      const data = await getComments(id);

      // comments 업데이트
      setComments(data.comments);

    } catch (error) {
      setError(error)
    } finally {
      setIsLoaded(true)
    }
  }

  // 댓글 추가 처리
  async function handleAddComment (content) {};

  // 댓글 삭제 처리
  async function handleDelete(id) {};

  // 댓글 렌더링 처리
  const commentList = comments.map(comment => (
    <Comment 
      key={comment.id}
      id={comment.id}
      username={comment.user.username}
      avatarUrl={comment.user.avatarUrl}
      content={comment.content}
      displayDate={comment.displayDate}
      handleDelete={handleDelete}
    />
  ))
};