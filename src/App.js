import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Department from './Components/Pages/Department';
import FoodandDrink from './Components/Pages/FoodandDrink';
import Smoking from './Components/Pages/Smoking';
import Lighter from './Components/Pages/Adminside/Smoking/Lighter';
import Poundline from './Components/Pages/Poundline';
import Electric from './Components/Pages/Adminside/deparmentbathrom/Electricde/Electric';
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
import Smokingsinglepage from './Components/Pages/Adminside/SmokingEssentials/Smokingsinglepage';
import Lightersinglepage from './Components/Pages/Adminside/Smoking/Lightersinglepage';
import Bathroomsingle from './Components/Pages/Adminside/Poudliene/Bathroom/Bathroomsingle';
import Palletsingle from './Components/Pages/Adminside/Palletdeals/Palletsingle';
import Newarrivalsingr from './Components/Pages/Adminside/NewArrevals/Newarrivalsingr';
import Foodssingle from './Components/Pages/Adminside/Foods/Foodssingle';
import Electricalsinglepage from './Components/Pages/Adminside/Electrical/Electricalsinglepage';
import Drinkssingle from './Components/Pages/Adminside/Drinks/Drinkssingle';
import Debathroom from './Components/Pages/Adminside/deparmentbathrom/Debathroom';
import Bathroomformde from './Components/Pages/Adminside/deparmentbathrom/Bathroomscale.js/Bathroomformde';
import Bathroomlistde from './Components/Pages/Adminside/deparmentbathrom/Bathroomscale.js/Bathroomlistde';
import Updatebathroomde from './Components/Pages/Adminside/deparmentbathrom/Bathroomscale.js/Updatebathroomde';
import Bathroommain from './Components/Pages/Adminside/deparmentbathrom/Bathroomscale.js/Bathroommain';
import Bathroomsinglede from './Components/Pages/Adminside/deparmentbathrom/Bathroomscale.js/Bathroomsinglede';
import Mirrorform from "./Components/Pages/Adminside/deparmentbathrom/Mirror/Mirrorform"
import Mirrorlist from './Components/Pages/Adminside/deparmentbathrom/Mirror/Mirrorlist'
import Updatemirror from './Components/Pages/Adminside/deparmentbathrom/Mirror/Updatemirror'
import Mirrormain from './Components/Pages/Adminside/deparmentbathrom/Mirror/Mirrormain'
import Mirrorsinglepage from './Components/Pages/Adminside/deparmentbathrom/Mirror/Mirrorsinglepage'
import Showerform from './Components/Pages/Adminside/deparmentbathrom/Shower/Showerform';
import Showerlist from './Components/Pages/Adminside/deparmentbathrom/Shower/Showerlist';
import Showerupdate from './Components/Pages/Adminside/deparmentbathrom/Shower/Showerupdate';
import Showermain from './Components/Pages/Adminside/deparmentbathrom/Shower/Showermain';
import Showersingle from './Components/Pages/Adminside/deparmentbathrom/Shower/Showersingle';
import Bathmatsmain from './Components/Pages/Adminside/deparmentbathrom/Bathmats/Bathmatsmain';
import Bathmatssinglr from './Components/Pages/Adminside/deparmentbathrom/Bathmats/Bathmatssinglr';
import Bathmatsform from './Components/Pages/Adminside/deparmentbathrom/Bathmats/Bathmatsform';
import Bathmatslist from './Components/Pages/Adminside/deparmentbathrom/Bathmats/Bathmatslist';
import Bathmatsupdate from './Components/Pages/Adminside/deparmentbathrom/Bathmats/Bathmatsupdate';
import Bathacessoriessingle from './Components/Pages/Adminside/deparmentbathrom/Bathroomacessories/Bathacessoriessingle';
import Bathacessories from './Components/Pages/Adminside/deparmentbathrom/Bathroomacessories/Bathacessories';
import Bathacessroiesform from './Components/Pages/Adminside/deparmentbathrom/Bathroomacessories/Bathacessroiesform';
import Bathacessorieslist from './Components/Pages/Adminside/deparmentbathrom/Bathroomacessories/Bathacessorieslist';
import Bathacessoriesupdate from './Components/Pages/Adminside/deparmentbathrom/Bathroomacessories/Bathacessoriesupdate';
import Showhead from './Components/Pages/Adminside/deparmentbathrom/Showershead/Showhead';
import Showheadsingle from './Components/Pages/Adminside/deparmentbathrom/Showershead/Showheadsingle'
import Showheadform from './Components/Pages/Adminside/deparmentbathrom/Showershead/Showheadform'
import Showheadlist from './Components/Pages/Adminside/deparmentbathrom/Showershead/Showheadlist'
import Showheadupdate from './Components/Pages/Adminside/deparmentbathrom/Showershead/Showheadupdate'
import Disposiblecat from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposiblesub/Disposiblecat'
import Disposibleform from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposibleform'
import Disposiblelist from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposiblelist'
import Disposibleupdate from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposibleupdate'
import Disposiblemain from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposiblemain'
import Disposiblesingle from './Components/Pages/Adminside/deparmentbathrom/Disposible/Disposiblesingle'
import Tablewearform from './Components/Pages/Adminside/deparmentbathrom/Disposible/Tablewear/Tablewearform'
import Tablewearlist from './Components/Pages/Adminside/deparmentbathrom/Disposible/Tablewear/Tablewearlist'
import Tablewearupdate from './Components/Pages/Adminside/deparmentbathrom/Disposible/Tablewear/Tablewearupdate'
import Tablewear from './Components/Pages/Adminside/deparmentbathrom/Disposible/Tablewear/Tablewear';
import Tablewearsingle from './Components/Pages/Adminside/deparmentbathrom/Disposible/Tablewear/Tablewearsingle'
import Loundrysubcat from './Components/Pages/Adminside/deparmentbathrom/Laundry/Loundrysubcat';
import Airers from './Components/Pages/Adminside/deparmentbathrom/Laundry/Airers/Airers'
import Airerssingle from './Components/Pages/Adminside/deparmentbathrom/Laundry/Airers/Airerssingle'
import Airersform from './Components/Pages/Adminside/deparmentbathrom/Laundry/Airers/Airersform'
import Airerslist from './Components/Pages/Adminside/deparmentbathrom/Laundry/Airers/Airerslist'
import Airersupdate from './Components/Pages/Adminside/deparmentbathrom/Laundry/Airers/Airersupdate'
import Iorining from './Components/Pages/Adminside/deparmentbathrom/Laundry/Ironing Board/Iorining'
import Ioriningsingle from './Components/Pages/Adminside/deparmentbathrom/Laundry/Ironing Board/Ioriningsingle'
import Ironingform from './Components/Pages/Adminside/deparmentbathrom/Laundry/Ironing Board/Ironingform'
import Ironinglist from './Components/Pages/Adminside/deparmentbathrom/Laundry/Ironing Board/Ironinglist'
import Ioriningupdate from './Components/Pages/Adminside/deparmentbathrom/Laundry/Ironing Board/Ioriningupdate'
import Adminnavbar from './Components/Pages/Adminside/Adminnavbar';
import Laacess from './Components/Pages/Adminside/deparmentbathrom/Laundry/Laundryacessories/Laacess';
import Laacessform from'./Components/Pages/Adminside/deparmentbathrom/Laundry/Laundryacessories/Laacessfrom'
import Laacesslist from './Components/Pages/Adminside/deparmentbathrom/Laundry/Laundryacessories/Laacesslist'
import Laacesssingle from './Components/Pages/Adminside/deparmentbathrom/Laundry/Laundryacessories/Laacesssingle'
import Laacessupdate from './Components/Pages/Adminside/deparmentbathrom/Laundry/Laundryacessories//Laacessupdate'
import Kitechendde from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Kitechendde';
import Leaning from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Leaning';
import Gardeningmain from './Components/Pages/Adminside/deparmentbathrom/Gardening/Gardeningmain';
import Homedecoremain from './Components/Pages/Adminside/deparmentbathrom/Home decore/Homedecoremain';
import Tolitriesmain from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Tolitriesmain';
import Diymainpage from './Components/Pages/Adminside/deparmentbathrom/Diy/Diymainpage';
import Artificalmain from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalmain';
import Stationerymain from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Stationerymain';
import Textilesmainpage from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Textilesmainpage';
import Houseclenermain from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Houseclenermain';
import Plastichousewearmain from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Plastichousewearmain';
import Petproductsmain from './Components/Pages/Adminside/deparmentbathrom/Pet products/Petproductsmain';
import Chinamain from './Components/Pages/Adminside/deparmentbathrom/China/Chinamain';
import Hardwaremain from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Hardwaremain';
import Seasonalsportsmain from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Seasonalsportsmain';
import Pestcontromain from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Pestcontromain';
import Kidsmain from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Kidsmain';
import Glasswaremain from './Components/Pages/Adminside/deparmentbathrom/Glassware/Glasswaremain';
import Electricaldemain from './Components/Pages/Adminside/deparmentbathrom/Electrical/Electricaldemain';
import Partywaremain from './Components/Pages/Adminside/deparmentbathrom/Partyware/Partywaremain';
import Batteriesmain from './Components/Pages/Adminside/deparmentbathrom/Batteries/Batteriesmain'
import Batteriessinge from './Components/Pages/Adminside/deparmentbathrom/Batteries/Batteriessinge'
import Batteriesupdate from './Components/Pages/Adminside/deparmentbathrom/Batteries/Batteriesupdate';
import Batteriesform from './Components/Pages/Adminside/deparmentbathrom/Batteries/Batteriesform'
import Batterieslist from './Components/Pages/Adminside/deparmentbathrom/Batteries/Batterieslist'
import Phone from './Components/Pages/Adminside/deparmentbathrom/Phoneaccessories/Phone';
import Phonesingle from './Components/Pages/Adminside/deparmentbathrom/Phoneaccessories/Phonesingle';
import Phoneform from './Components/Pages/Adminside/deparmentbathrom/Phoneaccessories/Phoneform';
import Phonelist from './Components/Pages/Adminside/deparmentbathrom/Phoneaccessories/Phonelist';
import Phoneupdate from './Components/Pages/Adminside/deparmentbathrom/Phoneaccessories/Phoneupdate';
import Obticalform from './Components/Pages/Adminside/deparmentbathrom/Obsticals/Obticalform';
import Obsticallist from './Components/Pages/Adminside/deparmentbathrom/Obsticals/Obsticallist';
import Obsticalupdate from './Components/Pages/Adminside/deparmentbathrom/Obsticals/Obsticalupdate';
import Obstical from './Components/Pages/Adminside/deparmentbathrom/Obsticals/Obstical';
import Obticalsigle from './Components/Pages/Adminside/deparmentbathrom/Obsticals/Obticalsigle';
import Electricform from './Components/Pages/Adminside/deparmentbathrom/Electricde/Electricform';
import Electriclist from './Components/Pages/Adminside/deparmentbathrom/Electricde/Electriclist';
import Electricupdate from './Components/Pages/Adminside/deparmentbathrom/Electricde/Electricupdate';
import Electricsingle from './Components/Pages/Adminside/deparmentbathrom/Electricde/Electricsingle';
import Firstaidform from './Components/Pages/Adminside/deparmentbathrom/Firstaidpharmacy/Firstaidform';
import Firstaidlist from './Components/Pages/Adminside/deparmentbathrom/Firstaidpharmacy/Firstaidlist';
import Firstaidupdate from './Components/Pages/Adminside/deparmentbathrom/Firstaidpharmacy/Firstaidupdate';
import Firstaidmain from './Components/Pages/Adminside/deparmentbathrom/Firstaidpharmacy/Firstaidmain';
import Firstaidsingle from './Components/Pages/Adminside/deparmentbathrom/Firstaidpharmacy/Firstaidsingle';
import Aprons from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Aprons/Aprons';
import Apronssingle from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Aprons/Apronssingle';
import Apronsform from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Aprons/Apronsform';
import Apronsupdate from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Aprons/Apronsupdate';
import Apronslist from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Aprons/Apronslist'
// Admin Layout without Navbar
const AdminLayout = ({ children }) => (
  <>
  <Adminnavbar/>
  <div>{children}</div>
  </>
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

        <Route path='/bathroomform' element={<AdminLayout><Bathroomformde /></AdminLayout>} />
        <Route path='/listbathromde' element={<AdminLayout><Bathroomlistde/></AdminLayout>} />
        <Route path='/listbathromde/:id' element={<AdminLayout><Updatebathroomde /></AdminLayout>} /> 

        <Route path='/mirrorform' element={<AdminLayout><Mirrorform /></AdminLayout>} />
        <Route path='/listmirror' element={<AdminLayout><Mirrorlist/></AdminLayout>} />
        <Route path='/listmirror/:id' element={<AdminLayout><Updatemirror /></AdminLayout>} /> 

        <Route path='/showerform' element={<AdminLayout><Showerform /></AdminLayout>} />
        <Route path='/listshower' element={<AdminLayout><Showerlist/></AdminLayout>} />
        <Route path='/listshower/:id' element={<AdminLayout><Showerupdate /></AdminLayout>} /> 
       
        <Route path='/bathmateform' element={<AdminLayout><Bathmatsform /></AdminLayout>} />
        <Route path='/listbathmate' element={<AdminLayout><Bathmatslist/></AdminLayout>} />
        <Route path='/listbathmate/:id' element={<AdminLayout><Bathmatsupdate /></AdminLayout>} /> 

        <Route path='/bathacessform' element={<AdminLayout><Bathacessroiesform /></AdminLayout>} />
        <Route path='/listbathacess' element={<AdminLayout><Bathacessorieslist/></AdminLayout>} />
        <Route path='/listbathacess/:id' element={<AdminLayout><Bathacessoriesupdate /></AdminLayout>} /> 

        <Route path='/showheadform' element={<AdminLayout><Showheadform /></AdminLayout>} />
        <Route path='/listshowhead' element={<AdminLayout><Showheadlist/></AdminLayout>} />
        <Route path='/listshowhead/:id' element={<AdminLayout><Showheadupdate /></AdminLayout>} /> 

        <Route path='/disposibleform' element={<AdminLayout><Disposibleform /></AdminLayout>} />
        <Route path='/listdisposible' element={<AdminLayout><Disposiblelist/></AdminLayout>} />
        <Route path='/listdisposible/:id' element={<AdminLayout><Disposibleupdate /></AdminLayout>} /> 

        <Route path='/tablewearform' element={<AdminLayout><Tablewearform /></AdminLayout>} />
        <Route path='/listTablewear' element={<AdminLayout><Tablewearlist/></AdminLayout>} />
        <Route path='/listTablewear/:id' element={<AdminLayout><Tablewearupdate /></AdminLayout>} /> 

        <Route path='/airersform' element={<AdminLayout><Airersform /></AdminLayout>} />
        <Route path='/listaiers' element={<AdminLayout><Airerslist/></AdminLayout>} />
        <Route path='/listairers/:id' element={<AdminLayout><Airersupdate /></AdminLayout>} /> 

        <Route path='/ioringform' element={<AdminLayout><Ironingform /></AdminLayout>} />
        <Route path='/listioring' element={<AdminLayout><Ironinglist/></AdminLayout>} />
        <Route path='/listioring/:id' element={<AdminLayout><Ioriningupdate /></AdminLayout>} /> 

        <Route path='/laacessform' element={<AdminLayout><Laacessform /></AdminLayout>} />
        <Route path='/listlaacess' element={<AdminLayout><Laacesslist/></AdminLayout>} />
        <Route path='/listlaacess/:id' element={<AdminLayout><Laacessupdate /></AdminLayout>} /> 

        <Route path='/batteryform' element={<AdminLayout><Batteriesform /></AdminLayout>} />
        <Route path='/listbatteries' element={<AdminLayout><Batterieslist/></AdminLayout>} />
        <Route path='/listbatteries/:id' element={<AdminLayout><Batteriesupdate /></AdminLayout>} /> 

        <Route path='/phoneform' element={<AdminLayout><Phoneform /></AdminLayout>} />
        <Route path='/listphone' element={<AdminLayout><Phonelist/></AdminLayout>} />
        <Route path='/listphone/:id' element={<AdminLayout><Phoneupdate /></AdminLayout>} /> 
        
        <Route path='/obsticalform' element={<AdminLayout><Obticalform /></AdminLayout>} />
        <Route path='/listobstical' element={<AdminLayout><Obsticallist/></AdminLayout>} />
        <Route path='/listobstical/:id' element={<AdminLayout><Obsticalupdate /></AdminLayout>} /> 

        <Route path='/electricdeform' element={<AdminLayout><Electricform /></AdminLayout>} />
        <Route path='/listelectricde' element={<AdminLayout><Electriclist/></AdminLayout>} />
        <Route path='/listelectricde/:id' element={<AdminLayout><Electricupdate /></AdminLayout>} /> 

        <Route path='/firstaidform' element={<AdminLayout><Firstaidform /></AdminLayout>} />
        <Route path='/listfirstaid' element={<AdminLayout><Firstaidlist/></AdminLayout>} />
        <Route path='/listfirstaid/:id' element={<AdminLayout><Firstaidupdate /></AdminLayout>} /> 

        <Route path='/apronsform' element={<AdminLayout><Apronsform /></AdminLayout>} />
        <Route path='/listaprons' element={<AdminLayout><Apronslist/></AdminLayout>} />
        <Route path='/listaprons/:id' element={<AdminLayout><Apronsupdate /></AdminLayout>} /> 
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
        <Route path='/essentional/:id' element={<MainLayout><Smokingsinglepage/></MainLayout>}/>
        <Route path='/lightersingle/:id' element={<MainLayout><Lightersinglepage/></MainLayout>}/>
        <Route path='/bathroomsingle/:id' element={<MainLayout><Bathroomsingle/></MainLayout>}/>
        <Route path='/palletsingle/:id' element={<MainLayout><Palletsingle/></MainLayout>}/>
        <Route path='/newarrsingle/:id' element={<MainLayout><Newarrivalsingr/></MainLayout>}/>
        <Route path='/foodssinglepage/:id' element={<MainLayout><Foodssingle/></MainLayout>}/>
        <Route path='/electricalsinglepage/:id' element={<MainLayout><Electricalsinglepage/></MainLayout>}/>
        <Route path='/drinkssinglepage/:id' element={<MainLayout><Drinkssingle/></MainLayout>}/>

        <Route path='/deparmentbathroom' element={<MainLayout><Debathroom/></MainLayout>}/>
        <Route path='/deparmentdisposible' element={<MainLayout><Disposiblecat/></MainLayout>}/>
        <Route path='/deparmentloundry' element={<MainLayout><Loundrysubcat/></MainLayout>}/>
        <Route path='/bathroommain' element={<MainLayout><Bathroommain/></MainLayout>}/>
        <Route path='/bathroomsinglepage/:id' element={<MainLayout><Bathroomsinglede/></MainLayout>}/>

        <Route path='/mirrormain' element={<MainLayout><Mirrormain/></MainLayout>}/>
        <Route path='/mirrorsinglepage/:id' element={<MainLayout><Mirrorsinglepage/></MainLayout>}/>

        <Route path='/showermain' element={<MainLayout><Showermain/></MainLayout>}/>
        <Route path='/showersinglepage/:id' element={<MainLayout><Showersingle/></MainLayout>}/>

        <Route path='/bathmatesmain' element={<MainLayout><Bathmatsmain/></MainLayout>}/>
        <Route path='/bathmatessinglepage/:id' element={<MainLayout><Bathmatssinglr/></MainLayout>}/>

        <Route path='/bathacessories' element={<MainLayout><Bathacessories/></MainLayout>}/>
        <Route path='/bathacesssinglepage/:id' element={<MainLayout><Bathacessoriessingle/></MainLayout>}/>

        <Route path='/showerhead' element={<MainLayout><Showhead/></MainLayout>}/>
        <Route path='/showerheadsinglepage/:id' element={<MainLayout><Showheadsingle/></MainLayout>}/>

        <Route path='/disposible' element={<MainLayout><Disposiblemain/></MainLayout>}/>
        <Route path='/disposiblesinglepage/:id' element={<MainLayout><Disposiblesingle/></MainLayout>}/>

        <Route path='/tablewear' element={<MainLayout><Tablewear/></MainLayout>}/>
        <Route path='/tablewearsinglepage/:id' element={<MainLayout><Tablewearsingle/></MainLayout>}/>

        <Route path='/airers' element={<MainLayout><Airers/></MainLayout>}/>
        <Route path='/airerssinglepage/:id' element={<MainLayout><Airerssingle/></MainLayout>}/>

        <Route path='/iorining' element={<MainLayout><Iorining/></MainLayout>}/>
        <Route path='/ioriningsinglepage/:id' element={<MainLayout><Ioriningsingle/></MainLayout>}/>

        <Route path='/laacess' element={<MainLayout><Laacess/></MainLayout>}/>
        <Route path='/laacesssinglepage/:id' element={<MainLayout><Laacesssingle/></MainLayout>}/>

        <Route path='/batteries' element={<MainLayout><Batteriesmain/></MainLayout>}/>
        <Route path='/batteriessinglepage/:id' element={<MainLayout><Batteriessinge/></MainLayout>}/>

        <Route path='/phoneaccessories' element={<MainLayout><Phone/></MainLayout>}/>
        <Route path='/phonesinglepage/:id' element={<MainLayout><Phonesingle/></MainLayout>}/>

        <Route path='/obstical' element={<MainLayout><Obstical/></MainLayout>}/>
        <Route path='/obsticalsinglepage/:id' element={<MainLayout><Obticalsigle/></MainLayout>}/>

        <Route path='/electric' element={<MainLayout><Electric/></MainLayout>}/>
        <Route path='/electricsinglepage/:id' element={<MainLayout><Electricsingle/></MainLayout>}/>

        <Route path='/firstaid' element={<MainLayout><Firstaidmain/></MainLayout>}/>
        <Route path='/firstaidsinglepage/:id' element={<MainLayout><Firstaidsingle/></MainLayout>}/>

        <Route path='/aprons' element={<MainLayout><Aprons/></MainLayout>}/>
        <Route path='/apronssinglepage/:id' element={<MainLayout><Apronssingle/></MainLayout>}/>

        <Route path='/kitechenwear' element={<MainLayout><Kitechendde/></MainLayout>}/>

        <Route path='/cleaning' element={<MainLayout><Leaning/></MainLayout>}/>

        <Route path='/gardening' element={<MainLayout><Gardeningmain/></MainLayout>}/>

        <Route path='/homedecore' element={<MainLayout><Homedecoremain/></MainLayout>}/>

        <Route path='/toiletries' element={<MainLayout><Tolitriesmain/></MainLayout>}/>

        <Route path='/diye' element={<MainLayout><Diymainpage/></MainLayout>}/>

        <Route path='/flowers' element={<MainLayout><Artificalmain/></MainLayout>}/>

        <Route path='/stationery' element={<MainLayout><Stationerymain/></MainLayout>}/>

        <Route path='/textiles & Accessories' element={<MainLayout><Textilesmainpage/></MainLayout>}/>

        <Route path='/household Cleaners' element={<MainLayout><Houseclenermain/></MainLayout>}/>

        <Route path='/plastic Housewares' element={<MainLayout><Plastichousewearmain/></MainLayout>}/>

        <Route path='/petproducts' element={<MainLayout><Petproductsmain/></MainLayout>}/>

        <Route path='/chinaproducts' element={<MainLayout><Chinamain/></MainLayout>}/>

        <Route path='/hardware' element={<MainLayout><Hardwaremain/></MainLayout>}/>

        <Route path='/seasonalsports' element={<MainLayout><Seasonalsportsmain/></MainLayout>}/>

        <Route path='/pestcontrol' element={<MainLayout><Pestcontromain/></MainLayout>}/>

        <Route path='/kidsproduct' element={<MainLayout><Kidsmain/></MainLayout>}/>

        <Route path='/glassweare' element={<MainLayout><Glasswaremain/></MainLayout>}/>

        <Route path='/electricalde' element={<MainLayout><Electricaldemain/></MainLayout>}/>

        <Route path='/partyware' element={<MainLayout><Partywaremain/></MainLayout>}/>
      </Routes>
      </CartProvider>
    </>
  );
};

export default App;
