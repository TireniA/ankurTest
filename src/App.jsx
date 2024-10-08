import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import ChatRoom from './components/ChatRoom'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4  } from 'uuid'
import { addUsers } from './features/users/users'


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const users = useSelector((state) => state.users.users)
  const dispatch = useDispatch()
  const [user, setUser] = useState({})

  const handleLogin = (userName) => {
    console.log(users)
    if (userName.trim() !== "") {
      const user = users.find(user => user.name === userName)
      let newUser = { userName }

      if (user) {
        newUser.id = user.id
      }
      else {
        newUser.id = uuidv4()
        dispatch(addUsers(newUser))
      }
      setUser(newUser)
      setLoggedIn(true)
    }

  }
  return (
    <>
      {loggedIn ? <ChatRoom user={user} /> : <Login handleLogin = {handleLogin} />}
    </>
  )
}

export default App


