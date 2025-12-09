import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Todos</h1>
            <ul className="space-y-2">
                {todos.map((item) => (
                    <li key={item.id} className={`flex border w-full border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${item.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}                    >
                        <input type="checkbox" className="cursor-pointer" checked={item.completed} readOnly />
                        <input type="text" className={`border outline-none w-full bg-transparent rounded-lg ${item.text ? "border-black/10 px-2" : "border-transparent"} ${item.completed ? "line-through" : ""}`} value={item.text} readOnly />
                        <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0" onClick={() => dispatch(removeTodo(item.id))}                       >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}
