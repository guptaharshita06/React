import { useState } from "react";
import UserCard from "./components/UserCard";
import phonepic from './assets/phonepic.png' 
import MaharanaPratap from './assets/MaharanaPratap.png'
import PrithvirajChauchan from './assets/PrithvirajChauchan.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard name="Love Rana" desc="desc1" image={phonepic} style={{"border-radius":"10px"}}/>
      <UserCard name="Maharana Pratap" desc="desc2" image={MaharanaPratap}/>
      <UserCard name="PrithviRaj Chauchan" desc="desc3" image={PrithvirajChauchan}/>
    </div>
  )
}

export default App
