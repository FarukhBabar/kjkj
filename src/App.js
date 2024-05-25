// import React from 'react'
// import Navbar from './Components/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Components/Pages/Home'
// import Department from './Components/Pages/Department'
// import FoodandDrink from './Components/Pages/FoodandDrink'
// import Food from './Components/Pages/Food'
// import Drinks from './Components/Pages/Drinks'
// import Smoking from './Components/Pages/Smoking'
// import Lighter from './Components/Pages/Lighter'
// import Electrical from './Components/Pages/Electrical'
// import Essentional from './Components/Pages/Essentional'
// import Poundline from './Components/Pages/Poundline'
// import Bathroombeauty from './Components/Pages/Bathroombeauty'
// import Firstaidpharmacy from './Components/Pages/Firstaidpharmacy'
// import Electric from './Components/Pages/Electric'
// import Diytools from './Components/Pages/Diytools'
// import Partybin from './Components/Pages/Partybin'
// import Craft from './Components/Pages/Craft'
// import Carproduct from './Components/Pages/Carproduct'
// import Candels from './Components/Pages/Candels'
// import Foods from './Components/Pages/Foods'

// import Palletdeals from './Components/Pages/Palletdeals'
// import Shopbybrand from './Components/Pages/Shopbybrand'
// import Newarrivals from './Components/Pages/Newarrivals'
// import Giftcard from './Components/Pages/Giftcard'
// import Login from './Components/Pages/Login'
// import Register from './Components/Pages/Register'
// import Form from './Components/Pages/Adminside/Sundayoffer/Form'
// import Adminside from './Components/Pages/Adminside/Adminside'
// import Sundaypage from './Components/Pages/Adminside/Sundayoffer/Sundayoffer'
// import Listofproducts from './Components/Pages/Adminside/Sundayoffer/Listofproducts'
// import Update from './Components/Pages/Adminside/Sundayoffer/Update'
// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/deparments' element={<Department/>}/>
//         <Route path='/foodanddrinks' element={<FoodandDrink/>}/>
//         <Route path='/foods' element={<Food/>}/>
//         <Route path='/drinks' element={<Drinks/>}/>
//         <Route path='/smoking' element={<Smoking/>}/>
//         <Route path='/lighter' element={<Lighter/>}/>
//         <Route path='/electrical' element={<Electrical/>}/>
//         <Route path='/essentional' element={<Essentional/>}/>
//         <Route path='/poundline' element={<Poundline/>}/>
//         <Route path='/bathroombeauty' element={<Bathroombeauty/>}/>
//         <Route path='/First Aid Pharmacy Personal' element={<Firstaidpharmacy/>}/>
//         <Route path='/Electric' element={<Electric/>}/>
//         <Route path='/Diy' element={<Diytools/>}/>
//         <Route path='/Disposables Party Bin Liners' element={<Partybin/>} />
//         <Route path='/Craft' element={<Craft/>} />
//         <Route path='/Carproduct' element={<Carproduct/>} />
//         <Route path='/Candles Air Freshner' element={<Candels/>} />
//         <Route path='/Food' element={<Foods/>} />
//         <Route path='/Supersunday' element={<Sundaypage/>} />
//         <Route path='/Palletdeals' element={<Palletdeals/>} />
//         <Route path='/Shopbybrand' element={<Shopbybrand/>} />
//         <Route path='/Newarrivals' element={<Newarrivals/>} />
//         <Route path='/Giftmakercard' element={<Giftcard/>} />
//         <Route path='/Brighthomly' element={<Giftcard/>} />
//         <Route path='/log' element={<Login/>}/>
//         <Route path='/Register' element={<Register/>} />
//         {/* <Route path='/adminpanal' element={<Adminside/>} /> */}
//         <Route path='/adminsunday' element={<Form/>} />
//         <Route path='/list' element={<Adminside/>} />
//          <Route path='/list/:id' element={<Update/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Department from './Components/Pages/Department';
import FoodandDrink from './Components/Pages/FoodandDrink';
import Food from './Components/Pages/Food';
import Drinks from './Components/Pages/Drinks';
import Smoking from './Components/Pages/Smoking';
import Lighter from './Components/Pages/Lighter';
import Electrical from './Components/Pages/Electrical';
import Essentional from './Components/Pages/Essentional';
import Poundline from './Components/Pages/Poundline';
import Bathroombeauty from './Components/Pages/Bathroombeauty';
import Firstaidpharmacy from './Components/Pages/Firstaidpharmacy';
import Electric from './Components/Pages/Electric';
import Diytools from './Components/Pages/Diytools';
import Partybin from './Components/Pages/Partybin';
import Craft from './Components/Pages/Craft';
import Carproduct from './Components/Pages/Carproduct';
import Candels from './Components/Pages/Candels';
import Foods from './Components/Pages/Foods';

import Palletdeals from './Components/Pages/Palletdeals';
import Shopbybrand from './Components/Pages/Shopbybrand';
import Newarrivals from './Components/Pages/Newarrivals';
import Giftcard from './Components/Pages/Giftcard';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';

import Adminside from './Components/Pages/Adminside/Adminside';
import Form from './Components/Pages/Adminside/Sundayoffer/Form'; 
import Listofproducts from './Components/Pages/Adminside/Sundayoffer/Listofproducts';
import Update from './Components/Pages/Adminside/Sundayoffer/Update';
import Sundaypage from "./Components/Pages/Adminside/Sundayoffer/Sundayoffer"
// Admin Layout without Navbar
const AdminLayout = ({ children }) => (
  <div>{children}</div>
);

// Main Layout with Navbar
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
  </>
);

const App = () => {
  return (
    <>
      <Routes>
        {/* Admin Routes */}
        <Route path='/adminpanal' element={<AdminLayout><Adminside /></AdminLayout>} />
        <Route path='/adminsunday' element={<AdminLayout><Form /></AdminLayout>} />
        <Route path='/list' element={<AdminLayout><Listofproducts/></AdminLayout>} />
        <Route path='/list/:id' element={<AdminLayout><Update /></AdminLayout>} />
        {/* Main Routes */}
        <Route path='/' element={<MainLayout><Home /></MainLayout>} />
        <Route path='/deparments' element={<MainLayout><Department /></MainLayout>} />
        <Route path='/foodanddrinks' element={<MainLayout><FoodandDrink /></MainLayout>} />
        <Route path='/foods' element={<MainLayout><Food /></MainLayout>} />
        <Route path='/drinks' element={<MainLayout><Drinks /></MainLayout>} />
        <Route path='/smoking' element={<MainLayout><Smoking /></MainLayout>} />
        <Route path='/lighter' element={<MainLayout><Lighter /></MainLayout>} />
        <Route path='/electrical' element={<MainLayout><Electrical /></MainLayout>} />
        <Route path='/essentional' element={<MainLayout><Essentional /></MainLayout>} />
        <Route path='/poundline' element={<MainLayout><Poundline /></MainLayout>} />
        <Route path='/bathroombeauty' element={<MainLayout><Bathroombeauty /></MainLayout>} />
        <Route path='/First Aid Pharmacy Personal' element={<MainLayout><Firstaidpharmacy /></MainLayout>} />
        <Route path='/Electric' element={<MainLayout><Electric /></MainLayout>} />
        <Route path='/Diy' element={<MainLayout><Diytools /></MainLayout>} />
        <Route path='/Disposables Party Bin Liners' element={<MainLayout><Partybin /></MainLayout>} />
        <Route path='/Craft' element={<MainLayout><Craft /></MainLayout>} />
        <Route path='/Carproduct' element={<MainLayout><Carproduct /></MainLayout>} />
        <Route path='/Candles Air Freshner' element={<MainLayout><Candels /></MainLayout>} />
        <Route path='/Food' element={<MainLayout><Foods /></MainLayout>} />
        <Route path='/Supersunday' element={<MainLayout><Sundaypage /></MainLayout>} />
        <Route path='/Palletdeals' element={<MainLayout><Palletdeals /></MainLayout>} />
        <Route path='/Shopbybrand' element={<MainLayout><Shopbybrand /></MainLayout>} />
        <Route path='/Newarrivals' element={<MainLayout><Newarrivals /></MainLayout>} />
        <Route path='/Giftmakercard' element={<MainLayout><Giftcard /></MainLayout>} />
        <Route path='/Brighthomly' element={<MainLayout><Giftcard /></MainLayout>} />
        <Route path='/log' element={<MainLayout><Login /></MainLayout>} />
        <Route path='/Register' element={<MainLayout><Register /></MainLayout>} />

      </Routes>
    </>
  );
};

export default App;
