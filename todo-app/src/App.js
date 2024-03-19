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

export default function App() {}