import Users from "./Components/Users"

const UserData=fetch("http://localhost:3000/user").then(res=>res.json())
function App() {

  return (
    <>
          <h1>Get started</h1>
          <Users Data={UserData}/>
          
    </>
  )
}

export default App
