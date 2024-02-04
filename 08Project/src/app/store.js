import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Feachers/todo/TodoSlice"

export const store = configureStore({
    reducer: todoReducer
})