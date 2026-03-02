import { createContext, useContext, useState } from 'react'
import './App.css'

const UserProvider = createContext();

function UserProviderComponent({ children }){
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [isUserCorrect, setIsUserCorrect] = useState(false)
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false)

  return(
    <UserProvider.Provider value={{user, setUser, password, setPassword, isUserCorrect, setIsUserCorrect, isPasswordCorrect, setIsPasswordCorrect}}>
      {children}
    </UserProvider.Provider>
  )
}
function UserData(){
  const {user, setUser, password, setPassword, isUserCorrect, setIsUserCorrect, isPasswordCorrect, setIsPasswordCorrect } = useContext(UserProvider)
  
    return(
      <>
        {!isUserCorrect && (
          <div className='card'>
            <div className='header'>
              <h1>Login</h1>
            </div>
            <div className='data'>
              <div className='userId'>
                <img src="./public/pfPic.png" alt="" />
              </div>
              <h3>Username</h3>
              <input type="text" value={user} onChange={(e) => setUser(e.target.value)} className='textBox'/>
              <h3>Password</h3>
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className='textBox'/>
              <br /> <br /> <br /> <br />
              <button className='handleButton' onClick={()=>{
                if(user == "Felipe", password == "fp123") setIsUserCorrect(true), setIsPasswordCorrect(true), console.log("deu certo")
                else{alert("Dados Incorretos!")}
                }}>
                Log-In
              </button>
            </div>
          </div>
        )}
        {isUserCorrect && (
          <>
            <h1 className='correctName'>
              Seja bem vindo {user}
            </h1>
            <div className='inbox'>
              caixa de entrada
            </div>
          </>
        )}
      </>
    )
  }
export default function App(){
  return(
    <>
      <UserProviderComponent>
        <UserData/>
      </UserProviderComponent>
    </>
  )
}