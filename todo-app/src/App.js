import { useState, useEffect } from "react";
import Todo from "./components/Todo";

// 씨드 데이터 (샘플 데이터)
const SEED = [
  { id: "todo-0", name: "운동하기", completed: true },
  { id: "todo-1", name: "춤 연습하기", completed: false },
  { id: "todo-2", name: "밥 먹기", completed: false },
]

// 로컬스토리지 동기화 처리
function saveData(tasks) {
  localStorage.setItem("tasksData", JSON.stringify(tasks));
}

// 앱을 처음 사용하는 경우 씨드데이터를 생성한다
if (!localStorage.getItem("tasksData")) {
  saveData(SEED);
}

// 필터 앱 객체
const FILTER_MAP = {
  전체: () => true,
  완료: (task) => task.completed,
  미완료: (task) => !task.completed
}

// 필터 이름 - 전체, 완료, 미완료
const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function App() {
  const initialTasks = JSON.parse(localStorage.getItem("tasksData"));
  const [tasks, setTasks] = useState(initialTasks);
  // 현재 적용중인 필터
  const [filter, setFilter] = useState("전체");

  // 키 스테이트 추적
  console.log(tasks);

  // 로컬 스토리지 동기화
  useEffect(() => {
    saveData(tasks);
  }, [tasks])

  // 문서 타이틀 업데이트
  useEffect(() => {
    document.title = "Todo App"
  }, [])

  // 할일 추가 처리
  function addTask() {
    // 새 할일 객체 생성
    const newTask = {
      id: "todo-" + Date.now(),
      name: "",
      completed: false
    }

    // tasks 업데이트
    const updatedTasks = [newTask, ...tasks];

    setTasks(updatedTasks);
  }

  // 할일 삭제 처리
  function deleteTask(id) {
    // 전달받은 id와 일치하는 id를 가진 task를 제외한다
    const remainingTasks = tasks.filter(task => task.id !== id);

    setTasks(remainingTasks);
  }

  // 할일 수정 처리
  function editTask(id, newName) {
    // tasks 업데이트
    const editedTasks = tasks.map(task => {
      // 전달받은 id와 일치하는 id를 가진 task의 name을 newName으로 수정한다
      if (task.id == id) {
        return { ...task, name: newName }
      }
      // 나머지 task는 그대로 리턴한다
      return task;
    })

    setTasks(editedTasks);
  }

  // 할일 상태변경 처리
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // 전달받은 id와 일치하는 id를 가진 task의 completed를 현재 상태의 반대로 업데이트한다
      if (task.id == id) {
        return { ...task, completed: !task.completed }
      }
      // 나머지는 그대로 리턴한다
      return task;
    })

    setTasks(updatedTasks);
  }

  // 필터 버튼 렌더링
  const filterButtons = FILTER_NAMES.map(name => (
    <button
      key={name}
      className="disabled:font-bold"
      // 필터 버튼의 이름과 현재 필터(filter)가 일치하는 경우 비활성화
      disabled={name == filter}
      onClick={() => setFilter(name)}
    >
      {name}
    </button>
  ))

  // 할일 목록 렌더링 - 필터링한 결과를 순회한다
  const taskList = tasks.filter(FILTER_MAP[filter]).map(task => (
    // 컴포넌트 리스트 렌더링
    <Todo 
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      deleteTask={deleteTask}
      toggleTaskCompleted={toggleTaskCompleted}
      editTask={editTask}
    />
  ))

  return (
    <div className="max-w-sm mx-auto px-4">
      <h1 className="text-2xl font-semibold text-center my-8">
        Todo App
      </h1>

      <div className="flex justify-between mb-4">
        <div className="flex gap-2 py-1">
          {filterButtons}
        </div>
        <button
          type="submit"
          className="px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white font-semibold"
          onClick={addTask}
        >
          새 할일 +
        </button>
      </div>

      <h2 className="mb-4 text-gray-500">
        총 {taskList.length}개 있습니다
      </h2>
      <ul>
        {taskList}
      </ul>
    </div>
  )
}