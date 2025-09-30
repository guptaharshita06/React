import { useState } from 'react'
import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//step1: Create Context
// const UserContext = createContext();
const ThemeContext = createContext();
//step2: wrap all the child inside a provider
//step3: pass value
//step4: consumer k andr jaake consume krlo

function App() {
  // const [user, setUser] = useState({name:"Love"});
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value ={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'? "beige":"black"}}>
        <ChildA/>
      </div>
    </ThemeContext.Provider>
    // <>
    // <UserContext.Provider value={user}>
    //   <ChildA/>
    // </UserContext.Provider>
    // </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}
