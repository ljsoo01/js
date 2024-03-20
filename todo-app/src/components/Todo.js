export default function Todo({
  id,
  name,
  completed,
  deleteTask,
  toggleTaskCompleted,
  editTask
}) {

  // 삭제 처리
  function handleDelete() {
    // 사용자가 '예' 하는 경우 true, '아니오' 하는 경우 false를 리턴한다
    var q = window.confirm("삭제하시겠습니까?");

    if (q) {
      deleteTask(id);
    }
  };

  return (
    <div className="flex h-16 items-center mb-3 border rounded">
      {/* 체크박스 */}
      <label className="px-4">
        <input
          type="checkbox"
          id={id}
          className="peer hidden"
          checked={completed}
          // 체크박스의 change이벤트 - 체크 상태가 바뀔 때 발생한다
          onChange={() => toggleTaskCompleted(id)}
        />
        <svg 
          className="w-6 fill-gray-200 peer-checked:fill-blue-400"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512"
        >
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
        </svg>
      </label>

      {/* 이름 (입력란) */}
      <input
        type="text"
        className="grow outline-none focus:border-b focus:border-black"
        value={name}
        onChange={(e) => editTask(id, e.target.value)}
      />

      {/* 삭제 버튼 */}
      <button 
        className="px-4 text-gray-400"
        onClick={handleDelete}
      >
        -
      </button>
    </div>
  )
};