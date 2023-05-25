import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { state.tasks.push(action.payload) },
        deleteTodo: (state, action) => { state.tasks = state.tasks.filter(item => item.id != action.payload) },
        completeTask: (state, action) => {
            state.tasks.map(item => {
                if (item.id === action.payload) {
                    item.isTaskDone = !item.isTaskDone;
                }
            })
        }
    }
})

const { actions, reducer } = todoSlice;
export const { addTodo, deleteTodo, completeTask } = actions;

export default reducer;


