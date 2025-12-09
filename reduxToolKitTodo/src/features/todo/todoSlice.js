import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialStore = {
    todos: [{ id: 1, text: 'Hello world', completed: false }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialStore,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(6),
                text: action.payload.text,
                completed: action.payload.completed
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todo = state.todos.find((t) => t.id === id);
            if (todo) todo.text = newText;
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;