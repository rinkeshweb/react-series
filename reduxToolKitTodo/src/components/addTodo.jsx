import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!todo.trim()) return;
        dispatch(addTodo({
            text: todo,
            completed: false
        }))
        setTodo('')
    }

    return (
        <form onSubmit={addTodoHandler} className="flex shadow rounded-lg overflow-hidden">
            <input type="text" placeholder="Add your todo items" className="bg-white outline-none max-w-full w-full py-1 px-3 text-grat" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="bg-blue-500 text-white px-3 py-2 cursor-pointer w-32 hover:bg-blue-600">Add Todo</button>
        </form>
    )
}