import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo Message',
            isCompleted: false
        }
    ],
    addTodo: () => { },
    updateTodo: () => { },
    toggleCompleted: () => { },
    deleteTodo: () => { },
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;
