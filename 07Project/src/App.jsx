import TodoForm from "./components/todoform/TodoForm"
import TodoItem from "./components/todoitem/TodoItem"
import { TodoContextProvider } from "./context/TodoContext"
import {useState,useEffect} from "react"

function App() {
  const [Todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(),...todo},...prev])
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? todo : prevtodo))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo,completed:!todo.completed} : todo))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(Todos))
  },[Todos])
  return (
    <TodoContextProvider value={{Todos, addTodo,deleteTodo,updateTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {
                            Todos.map((todo) => (
                              <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                              </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
