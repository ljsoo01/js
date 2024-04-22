import { useState } from "react";
import { useNavigate } from "react-router-dom";
// 서버 요청 처리
import { createPost } from "../service/post";
import { FaCamera } from "react-icons/fa6";

export default function PostForm() {
  // 게시물 사진 저장
  const [files, setFiles] = useState([]);
  // 게시물 내용 저장
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  // 폼 제출퍼리
  async function handleSubmit(e) {};

  // 사진 미리보기 렌더링
  const photoPreviewList = files.map(file => (
    <img 
      key={file.name}
      className="w-12 h-12 object-cover"
      // URL.createObjectURL(파일): 이미지 미리보기 URL을 생성한다
      src={URL.createObjectURL(file)}
      alt={file.name}
    />
  ))

  return (
    <form className="px-4" onSubmit={handleSubmit}>
      <h3 className="my-4 text-lg font-semibold">게시물 업로드</h3>

      {/* 업로드 버튼 */}
      <label className="mb-4 inline-flex cursor-pointer">
        <input 
          type="file"
          className="hidden"
          // Array.from(iterables) - 순회 가능한 객체를 배열(Array)로 변환한다
          onChange={({ target }) => setFiles(Array.from(target.files))}
          // 파일 여러개 선택 가능
          multiple={true}
          accept="image/png, image/jpg, image/jpeg, image/webp"
        />
        <span className="px-4 py-2 font-semibold text-sm border border-black rounded-lg">
          사진 선택
        </span>
      </label>

      {/* 사진 미리보기 */}
      {files.length > 0 && (
        <div className="flex mb-4">
          {photoPreviewList}
        </div>
      )}

      {/* 캡션 */}
      <textarea 
        rows="2"
        id="caption"
        className="mb-4 block w-full px-2 py-1 rounded border resize-none"
        placeholder="사진 설명..."
        onChange={({ target }) => setCaption(target.value)}
        value={caption}
      />
    </form>
  )
};