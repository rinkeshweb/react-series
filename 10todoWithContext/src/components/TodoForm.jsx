import { useState } from "react"
import { useTodo } from "../context"

export default function TodoForm() {

    const [todo, setTodo] = useState("")

    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return;
        addTodo({ todo, isCompleted: false })
        setTodo('')
    }

    return (
        <form onSubmit={add} className="flex shadow rounded-lg overflow-hidden">
            <input type="text" placeholder="Add your todo items" className="bg-white outline-none max-w-full w-full py-1 px-3 text-grat" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className="bg-blue-500 text-white px-3 py-2 cursor-pointer w-32 hover:bg-blue-600">Add Todo</button>
        </form>
    )
}