import {createContext,useContext} from "react";

export const TodoContext = createContext({
    Todos:[{
        todo:"todo msg",
        id:"1",
        completed:false
    }],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
    updateTodo:(id,todo)=>{}
});

export const TodoContextProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext)
}