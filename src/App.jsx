import { useState, useEffect } from "react";
import {
  arrayMove,
} from "@dnd-kit/sortable";
import "./App.css";
import  InputBar  from "./components/InputBar";
import  HeadingBar  from "./components/HeadingBar";
import  LisOfTodos  from "./components/ListOfTodos";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (todo.trim() !== "") {
      setTodos([
        { id: crypto.randomUUID(), text: todo, completed: false },
        ...todos,
      ]);
      setTodo("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];

    newTodos[index].completed = !newTodos[index].completed;

    setTodos(newTodos);
  };

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = todos.findIndex((t) => t.id === active.id);
      const newIndex = todos.findIndex((t) => t.id === over.id);

      setTodos(arrayMove(todos, oldIndex, newIndex));
    }
  }


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }


  const [filter, setFilter] = useState("all");

  const allTodos = () => {
    setFilter("all");
  };

  const activeTodos = () => {
    setFilter("active");
  };

  const completedTodos = () => {
    setFilter("completed");
  };

  const clearTodos = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="container">
      
      <div className="h-auto w-[23rem] mt-[6rem] md:w-[30rem] md:mt-[8rem] ">
        <HeadingBar setDark={setDark} dark={dark} />
        <InputBar todo={todo} setTodo={setTodo} handleKeyDown={handleKeyDown} />
        <LisOfTodos setTodos={setTodos} todos={todos} handleDragEnd={handleDragEnd} filteredTodos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} allTodos={allTodos} activeTodos={activeTodos} completedTodos={completedTodos} clearTodos={clearTodos} />
      </div>

      <span className="text-gray-400 dark:text-gray-600 relative top-[10rem]">Drag and drop to reorder list</span>
    </div>
  );
}
