import { configureStore } from "@reduxjs/toolkit";
import tasks from '../features/todo-tracker/todoSlice';

const store = configureStore({
    reducer: tasks,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;