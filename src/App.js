import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Department from './Components/Pages/Department'
import FoodandDrink from './Components/Pages/FoodandDrink'
import Food from './Components/Pages/Food'
import Drinks from './Components/Pages/Drinks'
import Smoking from './Components/Pages/Smoking'
import Lighter from './Components/Pages/Lighter'
import Electrical from './Components/Pages/Electrical'
import Essentional from './Components/Pages/Essentional'
import Poundline from './Components/Pages/Poundline'
import Bathroombeauty from './Components/Pages/Bathroombeauty'
import Firstaidpharmacy from './Components/Pages/Firstaidpharmacy'
import Electric from './Components/Pages/Electric'
import Diytools from './Components/Pages/Diytools'
import Partybin from './Components/Pages/Partybin'
import Craft from './Components/Pages/Craft'
import Carproduct from './Components/Pages/Carproduct'
import Candels from './Components/Pages/Candels'
import Foods from './Components/Pages/Foods'
import Supersunday from './Components/Pages/Supersunday'
import Palletdeals from './Components/Pages/Palletdeals'
import Shopbybrand from './Components/Pages/Shopbybrand'
import Newarrivals from './Components/Pages/Newarrivals'
import Giftcard from './Components/Pages/Giftcard'
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/deparments' element={<Department/>}/>
        <Route path='/foodanddrinks' element={<FoodandDrink/>}/>
        <Route path='/foods' element={<Food/>}/>
        <Route path='/drinks' element={<Drinks/>}/>
        <Route path='/smoking' element={<Smoking/>}/>
        <Route path='/lighter' element={<Lighter/>}/>
        <Route path='/electrical' element={<Electrical/>}/>
        <Route path='/essentional' element={<Essentional/>}/>
        <Route path='/poundline' element={<Poundline/>}/>
        <Route path='/bathroombeauty' element={<Bathroombeauty/>}/>
        <Route path='/First Aid Pharmacy Personal' element={<Firstaidpharmacy/>}/>
        <Route path='/Electric' element={<Electric/>}/>
        <Route path='/Diy' element={<Diytools/>}/>
        <Route path='/Disposables Party Bin Liners' element={<Partybin/>} />
        <Route path='/Craft' element={<Craft/>} />
        <Route path='/Carproduct' element={<Carproduct/>} />
        <Route path='/Candles Air Freshner' element={<Candels/>} />
        <Route path='/Food' element={<Foods/>} />
        <Route path='/Supersunday' element={<Supersunday/>} />
        <Route path='/Palletdeals' element={<Palletdeals/>} />
        <Route path='/Shopbybrand' element={<Shopbybrand/>} />
        <Route path='/Newarrivals' element={<Newarrivals/>} />
        <Route path='/Giftmakercard' element={<Giftcard/>} />
        <Route path='/Brighthomly' element={<Giftcard/>} />
        <Route path='/log' element={<Login/>}/>
        <Route path='/Register' element={<Register/>} />
      </Routes>
    </div>
  )
}

export default App