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
import Lighter from './Components/Pages/Adminside/Smoking/Lighter';
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



import Shopbybrand from './Components/Pages/Shopbybrand';
import Newarrivals from './Components/Pages/Adminside/NewArrevals/Newarrivals';
import Giftcard from './Components/Pages/Giftcard';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';

import Adminside from './Components/Pages/Adminside/Adminside';
import Form from './Components/Pages/Adminside/Sundayoffer/Form'; 
import Listofproducts from './Components/Pages/Adminside/Sundayoffer/Listofproducts';
import Update from './Components/Pages/Adminside/Sundayoffer/Update';
import Sundaypage from "./Components/Pages/Adminside/Sundayoffer/Sundayoffer"
import Pallet from './Components/Pages/Adminside/Palletdeals/Pallet';
import Form1 from "./Components/Pages/Adminside/Palletdeals/Form1"
import Listofpallet from "./Components/Pages/Adminside/Palletdeals/Listofpallet"
import Updatepallet from "./Components/Pages/Adminside/Palletdeals/Updatepallet"
import NewForm from './Components/Pages/Adminside/NewArrevals/NewForm';
import Listofnewarrivals from './Components/Pages/Adminside/NewArrevals/Listofnewarrivals';
import Newupdate from './Components/Pages/Adminside/NewArrevals/Newupdate';
import FoodForm from './Components/Pages/Adminside/Foods/FoodForm';
import Listoffoods from './Components/Pages/Adminside/Foods/Listoffoods';
import Updatefoods from './Components/Pages/Adminside/Foods/Updatefoods';
import Foodsproduct from './Components/Pages/Adminside/Foods/Foodsproduct';
import Drinkform from './Components/Pages/Adminside/Drinks/Drinkform';
import Listofdrink from './Components/Pages/Adminside/Drinks/Listofdrink';
import Updatedrink from './Components/Pages/Adminside/Drinks/Updatedrink';
import Drinkproduct from './Components/Pages/Adminside/Drinks/Drinkproduct';
import Lighterform from './Components/Pages/Adminside/Smoking/Lighterform';
import Listoflighter from './Components/Pages/Adminside/Smoking/Listoflighter';
import Updatelighter from './Components/Pages/Adminside/Smoking/Updatelighter';
import Electricalform from "./Components/Pages/Adminside/Electrical/Electricalform"
import  Listofelectrical from "./Components/Pages/Adminside/Electrical/Listofelectrical"
import Updateelectrical from './Components/Pages/Adminside/Electrical/Updateelectrical'
import Electricalde from './Components/Pages/Adminside/Electrical/Electricalde';
import Smokingessentials from './Components/Pages/Adminside/SmokingEssentials/Smokingessentials';
import Smokingessform from './Components/Pages/Adminside/SmokingEssentials/Smokingessform';
import Smokingesslist from './Components/Pages/Adminside/SmokingEssentials/Smokingesslist';
import Updatesmokingess from './Components/Pages/Adminside/SmokingEssentials/Updatesmokingess';
import Blog from './Components/Footerpages/Blog';
import Hotwater from './Components/Footerpages/Hotwater';
import Privacy from './Components/Footerpages/Privacy';
import Termscondition from './Components/Footerpages/Terms&condition';
import Cookies from './Components/Footerpages/Cookies';
import Contactus from './Components/Footerpages/Contactus';
import Aboutus from './Components/Footerpages/Aboutus';
import Delivery from './Components/Footerpages/Delivery';
import Export from './Components/Footerpages/Export';
import Faq from './Components/Footerpages/Faq';
import Bathroomform from './Components/Pages/Adminside/Poudliene/Bathroom/Bathroomform';
import Bathroomlist from './Components/Pages/Adminside/Poudliene/Bathroom/Bathroomlist';
import Updatebathroom from './Components/Pages/Adminside/Poudliene/Bathroom/Updatebathroom';
import Bathroomp from './Components/Pages/Adminside/Poudliene/Bathroom/Bathroomp';
import Contactuser from './Components/Pages/Adminside/Contactuser';
import Sundayoffersinglr from './Components/Pages/Adminside/Sundayoffer/Sundayoffersinglr';
import { CartProvider } from './Components/Pages/Adminside/CartContext';
import Addtocart from './Components/Pages/Adminside/Addtocart';
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
     <CartProvider>
      <Routes>
        {/* Admin Routes */}
        
        <Route path='/adminpanal' element={<AdminLayout><Adminside /></AdminLayout>} />
        <Route path='/adminsunday' element={<AdminLayout><Form /></AdminLayout>} />
        <Route path='/list' element={<AdminLayout><Listofproducts/></AdminLayout>} />
        <Route path='/list/:id' element={<AdminLayout><Update /></AdminLayout>} />
        <Route path='/pallet' element={<AdminLayout><Form1 /></AdminLayout>} />
        <Route path='/listpal' element={<AdminLayout><Listofpallet/></AdminLayout>} />
        <Route path='/listpal/:id' element={<AdminLayout><Updatepallet /></AdminLayout>} />
        <Route path='/newarrivals' element={<AdminLayout><NewForm /></AdminLayout>} />
        <Route path='/listarr' element={<AdminLayout><Listofnewarrivals/></AdminLayout>} />
        <Route path='/listarr/:id' element={<AdminLayout><Newupdate /></AdminLayout>} />
        <Route path='/foodform' element={<AdminLayout><FoodForm /></AdminLayout>} />
        <Route path='/listfood' element={<AdminLayout><Listoffoods/></AdminLayout>} />
        <Route path='/listfood/:id' element={<AdminLayout><Updatefoods /></AdminLayout>} />
        <Route path='/drinkform' element={<AdminLayout><Drinkform /></AdminLayout>} />
        <Route path='/listdrink' element={<AdminLayout><Listofdrink/></AdminLayout>} />
        <Route path='/listdrink/:id' element={<AdminLayout><Updatedrink /></AdminLayout>} />
        <Route path='/lighterform' element={<AdminLayout><Lighterform /></AdminLayout>} />
        <Route path='/listlighter' element={<AdminLayout><Listoflighter/></AdminLayout>} />
        <Route path='/listlighter/:id' element={<AdminLayout><Updatelighter /></AdminLayout>} /> 
        <Route path='/electricalform' element={<AdminLayout><Electricalform /></AdminLayout>} />
        <Route path='/listelectric' element={<AdminLayout><Listofelectrical/></AdminLayout>} />
        <Route path='/listelectric/:id' element={<AdminLayout><Updateelectrical /></AdminLayout>} /> 
        <Route path='/essionaform' element={<AdminLayout><Smokingessform /></AdminLayout>} />
        <Route path='/listsmokigess' element={<AdminLayout><Smokingesslist/></AdminLayout>} />
        <Route path='/listsmokigess/:id' element={<AdminLayout><Updatesmokingess /></AdminLayout>} /> 
        <Route path='/bathform' element={<AdminLayout><Bathroomform /></AdminLayout>} />
        <Route path='/listbathrom' element={<AdminLayout><Bathroomlist/></AdminLayout>} />
        <Route path='/listbathrom/:id' element={<AdminLayout><Updatebathroom /></AdminLayout>} /> 
        <Route path='/listcontact' element={<AdminLayout><Contactuser /></AdminLayout>} />
        {/* Main Routes */}
        <Route path='/' element={<MainLayout><Home /></MainLayout>} />
        <Route path='/deparments' element={<MainLayout><Department /></MainLayout>} />
        <Route path='/foodanddrinks' element={<MainLayout><FoodandDrink /></MainLayout>} />
        <Route path='/foods' element={<MainLayout><Foodsproduct /></MainLayout>} />
        <Route path='/drinks' element={<MainLayout><Drinkproduct /></MainLayout>} />
        <Route path='/smoking' element={<MainLayout><Smoking /></MainLayout>} />
        <Route path='/lighter' element={<MainLayout><Lighter /></MainLayout>} />
        <Route path='/electrical' element={<MainLayout><Electricalde /></MainLayout>} />
        <Route path='/essentional' element={<MainLayout><Smokingessentials /></MainLayout>} />
        <Route path='/addtocart' element={<MainLayout><Addtocart/></MainLayout>}/>
        <Route path='/poundline' element={<MainLayout><Poundline /></MainLayout>} />
        <Route path='/bathroombeauty' element={<MainLayout><Bathroomp /></MainLayout>} />
        <Route path='/First Aid Pharmacy Personal' element={<MainLayout><Firstaidpharmacy /></MainLayout>} />
        <Route path='/Electric' element={<MainLayout><Electric /></MainLayout>} />
        <Route path='/Diy' element={<MainLayout><Diytools /></MainLayout>} />
        <Route path='/Disposables Party Bin Liners' element={<MainLayout><Partybin /></MainLayout>} />
        <Route path='/Craft' element={<MainLayout><Craft /></MainLayout>} />
        <Route path='/Carproduct' element={<MainLayout><Carproduct /></MainLayout>} />
        <Route path='/Candles Air Freshner' element={<MainLayout><Candels /></MainLayout>} />
        <Route path='/Food' element={<MainLayout><Foodsproduct /></MainLayout>} />
        <Route path='/Supersunday' element={<MainLayout><Sundaypage /></MainLayout>} />
        <Route path='/Palletdeals' element={<MainLayout><Pallet /></MainLayout>} />
        <Route path='/Shopbybrand' element={<MainLayout><Shopbybrand /></MainLayout>} />
        <Route path='/newarriv' element={<MainLayout><Newarrivals /></MainLayout>} />
        <Route path='/Giftmakercard' element={<MainLayout><Giftcard /></MainLayout>} />
        <Route path='/Brighthomly' element={<MainLayout><Giftcard /></MainLayout>} />
        <Route path='/log' element={<MainLayout><Login /></MainLayout>} />
        <Route path='/Register' element={<MainLayout><Register /></MainLayout>} />
        <Route path='/blog' element={<MainLayout><Blog /></MainLayout>} />
        <Route path='/hotwater' element={<MainLayout><Hotwater/></MainLayout>} />
        <Route path='/privacy' element={<MainLayout><Privacy/></MainLayout>} />
        <Route path='/termscondition' element={<MainLayout><Termscondition/></MainLayout>} />
        <Route path='/cookies' element={<MainLayout><Cookies/></MainLayout>} />
        <Route path='/contact' element={<MainLayout><Contactus/></MainLayout>} />
        <Route path='/aboutus' element={<MainLayout><Aboutus/></MainLayout>} />
        <Route path='/delivery' element={<MainLayout><Delivery/></MainLayout>} />
        <Route path='/export' element={<MainLayout><Export/></MainLayout>} />
        <Route path='/faq' element={<MainLayout><Faq/></MainLayout>} />
        <Route path='/Supersunday/:id' element={<MainLayout><Sundayoffersinglr/></MainLayout>}/>
      </Routes>
      </CartProvider>
    </>
  );
};

export default App;
