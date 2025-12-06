import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import { TodoProvider } from "./context"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [...prevTodo, { id: Date.now(), ...todo }])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prevTodo) => prevTodo.map((preVal) => (preVal.id === id ? { ...preVal, isCompleted: !preVal.isCompleted } : preVal)))
  }

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (!saved) return;
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed) && parsed.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTodos(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, toggleCompleted, updateTodo }}>
      <div className="w-full min-h-screen bg-gray-700 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-gray-200 py-3 px-5 rounded-lg shadow-xl">
          <h1 className="text-2xl font-semibold text-center">Manage your Todos</h1>
          <div className="border-y-3 border-indigo-500 py-5 my-5">
            <TodoForm todos={todos} />
          </div>
          <div className="flex flex-wrap gap-y-4">
            {todos.map((item) => (
              <TodoList key={item.id} todo={item} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
