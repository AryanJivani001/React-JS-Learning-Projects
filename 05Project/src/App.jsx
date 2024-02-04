
import './App.css'
import Login from './Componets/login/Login'
import Profile from './Componets/profile/Profile'
import Usercontextprovider from './Context/Usercontextprovider'

function App() {

  return (
  <Usercontextprovider>
    <Login/>
    <Profile/>
  </Usercontextprovider>
  )
}

export default App
