import Card from "./componets/card/Card"
import ThemeBtn from "./componets/themebtn/ThemeBtn"
import { ThemeProvider } from "./context/theme"
import {useState,useEffect} from 'react'

function App() {
  const [theme, settheme] = useState('light')

  const darktheme=()=>{
    settheme('dark')
  }

  const lighttheme=()=>{
    settheme('light')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(theme)
  }, [theme])
  
  return (
    <ThemeProvider value={{theme,darktheme,lighttheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card/>
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
