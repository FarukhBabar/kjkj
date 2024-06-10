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
import Beddingform from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Bedding/Beddingform';
import Beddinglist from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Bedding/Beddinglist';
import Beddingupdate from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Bedding/Beddingupdate';
import Bedding from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Bedding/Bedding';
import Beddingsingle from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Bedding/Beddingsingle';
import Clothing from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Clothing/Clothing';
import Clothingsingle from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Clothing/Clothingsingle';
import Clothingform from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Clothing/Clothingform';
import Clothinglist from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Clothing/Clothinglist';
import Clothingupdate from './Components/Pages/Adminside/deparmentbathrom/Textileaccessories/Clothing/Clothingupdate';
import Freshnerform from './Components/Pages/Adminside/deparmentbathrom/Diy/Airfrechner/Freshnerform';
import Freshnerlist from './Components/Pages/Adminside/deparmentbathrom/Diy/Airfrechner/Freshnerlist';
import Freshnerupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Airfrechner/Freshnerupdate';
import Freshner from './Components/Pages/Adminside/deparmentbathrom/Diy/Airfrechner/Freshner';
import Freshnersingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Airfrechner/Freshnersingle';
import Akonobol from './Components/Pages/Adminside/deparmentbathrom/Diy/Akzonobel/Akonobol';
import Akonobolsingle from './Components/Pages/Adminside/deparmentbathrom/Diy/Akzonobel/Akonobolsingle';
import Akonobolform from './Components/Pages/Adminside/deparmentbathrom/Diy/Akzonobel/Akonobolform';
import Akonobolist from './Components/Pages/Adminside/deparmentbathrom/Diy/Akzonobel/Akonobolist';
import Akonobolupdate from './Components/Pages/Adminside/deparmentbathrom/Diy/Akzonobel/Akonobolupdate';
import Clockform from './Components/Pages/Adminside/deparmentbathrom/Electrical/Clock/Clockform';
import Clocklist from './Components/Pages/Adminside/deparmentbathrom/Electrical/Clock/Clocklist';
import Clockupdate from './Components/Pages/Adminside/deparmentbathrom/Electrical/Clock/Clockupdate';
import Clock from './Components/Pages/Adminside/deparmentbathrom/Electrical/Clock/Clock';
import Clocksingle from './Components/Pages/Adminside/deparmentbathrom/Electrical/Clock/Clocksingle';
import Cameras from './Components/Pages/Adminside/deparmentbathrom/Electrical/Cameras/Cameras';
import Camerasingle from './Components/Pages/Adminside/deparmentbathrom/Electrical/Cameras/Camerasingle';
import Camerasform from './Components/Pages/Adminside/deparmentbathrom/Electrical/Cameras/Camerasform';
import Cameraslist from './Components/Pages/Adminside/deparmentbathrom/Electrical/Cameras/Cameraslist';
import Camerasupdate from './Components/Pages/Adminside/deparmentbathrom/Electrical/Cameras/Camerasupdate';
import Digitalform from './Components/Pages/Adminside/deparmentbathrom/Electrical/Digitalaccessories/Digitalform';
import Digitallist from './Components/Pages/Adminside/deparmentbathrom/Electrical/Digitalaccessories/Digitallist';
import Digitalupdate from './Components/Pages/Adminside/deparmentbathrom/Electrical/Digitalaccessories/Digitalupdate';
import Digital from './Components/Pages/Adminside/deparmentbathrom/Electrical/Digitalaccessories/Digital';
import Digitalsingle from './Components/Pages/Adminside/deparmentbathrom/Electrical/Digitalaccessories/Digitalsingle';
import Cookwareform from './Components/Pages/Adminside/deparmentbathrom/China/Cookware/Cookwareform';
import Cookwarelist from './Components/Pages/Adminside/deparmentbathrom/China/Cookware/Cookwarelist';
import Cookwareupdate from './Components/Pages/Adminside/deparmentbathrom/China/Cookware/Cookwareupdate';
import Cookware from './Components/Pages/Adminside/deparmentbathrom/China/Cookware/Cookware';
import Cookwaresingle from './Components/Pages/Adminside/deparmentbathrom/China/Cookware/Cookwaresingle';
import Crockery from './Components/Pages/Adminside/deparmentbathrom/China/Crockery/Crockery';
import Crockerysingle from './Components/Pages/Adminside/deparmentbathrom/China/Crockery/Crockerysingle';
import Crockeryform from './Components/Pages/Adminside/deparmentbathrom/China/Crockery/Crockeryform';
import Crockerylist from './Components/Pages/Adminside/deparmentbathrom/China/Crockery/Crockerylist';
import Crockeryupdate from './Components/Pages/Adminside/deparmentbathrom/China/Crockery/Crockeryupdate';
import Dinner from './Components/Pages/Adminside/deparmentbathrom/China/Dinnersets/Dinner';
import Dinnersingel from './Components/Pages/Adminside/deparmentbathrom/China/Dinnersets/Dinnersingel';
import Dinnerform from './Components/Pages/Adminside/deparmentbathrom/China/Dinnersets/Dinnerform';
import Dinnerlist from './Components/Pages/Adminside/deparmentbathrom/China/Dinnersets/Dinnerlist';
import Dinnerupload from './Components/Pages/Adminside/deparmentbathrom/China/Dinnersets/Dinnerupload';
import Rentokil from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Rentokil/Rentokil';
import Rentokilform from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Rentokil/Rentokilform';
import Rentokillist from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Rentokil/Rentokillist';
import Rntokilupdate from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Rentokil/Rntokilupdate';
import RentokilSingle from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/Rentokil/RentokilSingle';
import Stv from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/STVinternational/Stv';
import StvSingle from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/STVinternational/Stvsingle';
import Stvform from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/STVinternational/Stvform';
import Stvlist from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/STVinternational/Stvlist';
import Stvupdate from './Components/Pages/Adminside/deparmentbathrom/Pestcontrol/STVinternational/Stvupdate';
import Cottonform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Cottonwhool/Cottonform'
import Cottonlist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Cottonwhool/Cottonlist'
import Cottonupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Cottonwhool/Cottonupdate'
import Cotton from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Cottonwhool/Cotton'
import Cottonsingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Cottonwhool/Cottonsingle'
import Babaycareform from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Babycare/Babaycareform';
import Babaylist from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Babycare/Babaylist';
import Babayupdate from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Babycare/Babayupdate';
import Babycare from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Babycare/Babycare';
import Babaysingle from './Components/Pages/Adminside/deparmentbathrom/Tolitires/Babycare/Babaysingle';
import Freshnform from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Airfresh/Freshnform';
import Freshnlist from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Airfresh/Freshnlist';
import Freshnupdate from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Airfresh/Freshnupdate';
import Freshn from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Airfresh/Freshn';
import Freshnsingle from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Airfresh/Freshnsingle';
import Carform from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Carcare/Carform';
import Car from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Carcare/Car';
import Carsingle from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Carcare/Carsingle';
import Carlist from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Carcare/Carlist';
import Carupdate from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Carcare/Carupdate';
import Bleechform from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Bleech/Bleechform';
import Bleecklist from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Bleech/Bleecklist';
import Bleeckupdate from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Bleech/Bleeckupdate';
import Bleech from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Bleech/Bleech';
import Bleechsingl from './Components/Pages/Adminside/deparmentbathrom/HouseCleaner/Bleech/Bleechsingl';
import Bakeware from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Bakeware/Bakeware';
import Bakewaresingle from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Bakeware/Bakewaresingle';
import Bakewareform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Bakeware/Bakewareform';
import Bakewarelist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Bakeware/Bakewarelist';
import Bakewareupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Bakeware/Bakewareupdate';
import Barewear from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Barewear/Barewear';
import Barewearsingl from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Barewear/Barewearsingl';
import Barewearform from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Barewear/Barewearform';
import Barewearlist from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Barewear/Barewearlist';
import Barewearupdate from './Components/Pages/Adminside/deparmentbathrom/Kitechenwear/Barewear/Barewearupdate';
import Birdsform from './Components/Pages/Adminside/deparmentbathrom/Pet products/Birdsproduct/Birdsform';
import Birdslist from './Components/Pages/Adminside/deparmentbathrom/Pet products/Birdsproduct/Birdslist';
import Birdsupdate from './Components/Pages/Adminside/deparmentbathrom/Pet products/Birdsproduct/Birdsupdate';
import Birds from './Components/Pages/Adminside/deparmentbathrom/Pet products/Birdsproduct/Birds';
import Birdssingl from './Components/Pages/Adminside/deparmentbathrom/Pet products/Birdsproduct/Birdssingl';
import Cat from './Components/Pages/Adminside/deparmentbathrom/Pet products/Catproducts/Cat';
import Catsingle from './Components/Pages/Adminside/deparmentbathrom/Pet products/Catproducts/Catsingle';
import Catform from './Components/Pages/Adminside/deparmentbathrom/Pet products/Catproducts/Catform';
import Catlist from './Components/Pages/Adminside/deparmentbathrom/Pet products/Catproducts/Catlist';
import Catupdate from './Components/Pages/Adminside/deparmentbathrom/Pet products/Catproducts/Catupdate';
import Baby from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Babyproducts/Baby';
import Babysingle from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Babyproducts/Babysingle';
import Babyform from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Babyproducts/Babyform';
import Babylist from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Babyproducts/Babylist';
import Babyupdate from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/Babyproducts/Babyupdate';
import Kidssto from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/KidsStorage/Kidssto';
import Kidsstoform from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/KidsStorage/Kidsstoform';
import Kidsstolist from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/KidsStorage/Kidsstolist';
import Kisstoupdate from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/KidsStorage/Kisstoupdate';
import Kidsstosingl from './Components/Pages/Adminside/deparmentbathrom/Kidsproducts/KidsStorage/Kidsstosingl';
import Bbqform from './Components/Pages/Adminside/deparmentbathrom/Gardening/BBq/Bbqform';
import Bbqlist from './Components/Pages/Adminside/deparmentbathrom/Gardening/BBq/Bbqlist';
import Bbqupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/BBq/Bbqupdate';
import Bbq from './Components/Pages/Adminside/deparmentbathrom/Gardening/BBq/Bbq';
import Bbqsingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/BBq/Bbqsingl';
import Birdcareform from './Components/Pages/Adminside/deparmentbathrom/Gardening/Birdcare/Birdcareform';
import Birdlist from './Components/Pages/Adminside/deparmentbathrom/Gardening/Birdcare/Birdlist';
import Birdupdate from './Components/Pages/Adminside/deparmentbathrom/Gardening/Birdcare/Birdupdate';
import Birdsingle from './Components/Pages/Adminside/deparmentbathrom/Gardening/Birdcare/Birdsingle';
import Bird from './Components/Pages/Adminside/deparmentbathrom/Gardening/Birdcare/Bird';
import Baloon from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloons/Baloon';
import Baloonsingl from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloons/Baloonsingl';
import Baloonform from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloons/Baloonsform';
import Baloonlist from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloons/Baloonlist';
import Baloonupdate from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloons/Baloonupdate';
import Pumpsform from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloonpumps/Pumpsform';
import Pumpslist from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloonpumps/Pumpslist';
import Pumpsupdate from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloonpumps/Pumpsupdate';
import Pumps from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloonpumps/Pumps';
import Pumpssingl from './Components/Pages/Adminside/deparmentbathrom/Partyware/Baloonpumps/Pumpssingl';
import Bannerlist from './Components/Pages/Adminside/deparmentbathrom/Partyware/Banner/Bannerlist';
import Bannerupdate from './Components/Pages/Adminside/deparmentbathrom/Partyware/Banner/Bannerupdate';
import Bannerform from './Components/Pages/Adminside/deparmentbathrom/Partyware/Banner/Bannerform';
import Banner from './Components/Pages/Adminside/deparmentbathrom/Partyware/Banner/Banner';
import Bannersingl from './Components/Pages/Adminside/deparmentbathrom/Partyware/Banner/Bannersingl';
import ProtectedRoutes from './ProtectedRoutes'
import Crystalform from './Components/Pages/Adminside/deparmentbathrom/Glassware/Crystal/Crystalform';
import Crystallist from './Components/Pages/Adminside/deparmentbathrom/Glassware/Crystal/Crystallist';
import Crystalupdate from './Components/Pages/Adminside/deparmentbathrom/Glassware/Crystal/Crystalupdate';
import Crystal from './Components/Pages/Adminside/deparmentbathrom/Glassware/Crystal/Crystal';
import Crystalsingl from './Components/Pages/Adminside/deparmentbathrom/Glassware/Crystal/Crystalsingl';
import Cakesform from './Components/Pages/Adminside/deparmentbathrom/Glassware/Cakesstand/Cakesform';
import Cakeslist from './Components/Pages/Adminside/deparmentbathrom/Glassware/Cakesstand/Cakeslist';
import Cakesupdate from './Components/Pages/Adminside/deparmentbathrom/Glassware/Cakesstand/Cakesupdate';
import Cakes from './Components/Pages/Adminside/deparmentbathrom/Glassware/Cakesstand/Cakes';
import Cakessingl from './Components/Pages/Adminside/deparmentbathrom/Glassware/Cakesstand/Cakessing';
import Furniture from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Furniture/Furniture';
import Furnitureform from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Furniture/Furnitureform';
import Furniturelist from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Furniture/Furniturelist';
import Furnitureupdate from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Furniture/Furnitureupdate';
import Furnituresingl from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Furniture/Furnituresingl';
import Mats from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Mats & Rugs/Mats';
import Matssingl from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Mats & Rugs/Matssingl';
import Matsform from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Mats & Rugs/Matsform';
import Matslist from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Mats & Rugs/Matslist';
import Matsupdate from './Components/Pages/Adminside/deparmentbathrom/Hadweare/Mats & Rugs/Matsupdate';
import Candelform from './Components/Pages/Adminside/deparmentbathrom/Home decore/Candels/Candelform';
import Candellist from './Components/Pages/Adminside/deparmentbathrom/Home decore/Candels/Candellist';
import Candelupdate from './Components/Pages/Adminside/deparmentbathrom/Home decore/Candels/Candelupdate';
import Candel from './Components/Pages/Adminside/deparmentbathrom/Home decore/Candels/Candel';
import Candelsingl from './Components/Pages/Adminside/deparmentbathrom/Home decore/Candels/Candelsingl';
import St from './Components/Pages/Adminside/deparmentbathrom/Home decore/St George/St';
import Stsingal from './Components/Pages/Adminside/deparmentbathrom/Home decore/St George/Stsingal';
import STform from './Components/Pages/Adminside/deparmentbathrom/Home decore/St George/STform';
import STlist from './Components/Pages/Adminside/deparmentbathrom/Home decore/St George/STList';
import Stupdate from './Components/Pages/Adminside/deparmentbathrom/Home decore/St George/Stupdate';
import Foodconform from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/FoodContainer/Foodconform';
import Foodconlist from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/FoodContainer/Foodconlist';
import Foodconupdate from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/FoodContainer/Foodconupdate';
import Foodcon from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/FoodContainer/Foodcon';
import Foodconsingl from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/FoodContainer/Foodconsingl';
import Kidsplas from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Kids Plastic Products/Kidsplas';
import Kidsplassingl from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Kids Plastic Products/Kidsplassingl';
import Kidsplasform from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Kids Plastic Products/Kidsplasform';
import Kidsplaslist from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Kids Plastic Products/Kidsplaslist';
import Kidsplasupdate from './Components/Pages/Adminside/deparmentbathrom/Plasticshousewear/Kids Plastic Products/Kidsplasupdate';
import Forgetpassword from './Components/Forgetpassword';
import VerifyOtp from './Components/VerifyOtp';
import Coolerform from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Coolerbags/Coolerform';
import Coolerlist from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Coolerbags/Coolerlist';
import Coolerupdate from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Coolerbags/Coolerupdate';
import Coolerbags from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Coolerbags/Coolerbags';
import Coolersingl from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Coolerbags/Coolersingl';
import Flaskform from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Flask/Flaskform';
import Flasklist from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Flask/Flasklist';
import Flaskupdate from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Flask/Flaskupdate';
import Flas from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Flask/Flas';
import Flasksingl from './Components/Pages/Adminside/deparmentbathrom/SeasonalSPORTS/Flask/Flasksingl';
import Art from './Components/Pages/Adminside/deparmentbathrom/Statinoery/ART & Craft/Art';
import Artsingle from './Components/Pages/Adminside/deparmentbathrom/Statinoery/ART & Craft/Artsingle';
import Artform from './Components/Pages/Adminside/deparmentbathrom/Statinoery/ART & Craft/Artform';
import Artlist from './Components/Pages/Adminside/deparmentbathrom/Statinoery/ART & Craft/Artlist';
import Artupdate from './Components/Pages/Adminside/deparmentbathrom/Statinoery/ART & Craft/Artupdate';
import Books from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Books/Books';
import Bookssingle from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Books/Bookssingl';
import Booksform from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Books/Booksform';
import Bookslist from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Books/Bookslist';
import Booksupdate from './Components/Pages/Adminside/deparmentbathrom/Statinoery/Books/Booksupdate';
import Brushwareform from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Brushare/Brushwareform';
import Brushwarelist from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Brushare/Brushwarelist';
import Brushwareupload from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Brushare/Brushwareupdate';
import Brushware from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Brushare/Brushware';
import Brushwaresingel from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Brushare/Brushwaresingl';
import Duster from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Clothandduster/Duster';
import Dustersingl from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Clothandduster/Dustersingl';
import Dusterform from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Clothandduster/Dusterform';
import Dusterlist from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Clothandduster/Dusterlist';
import Dusterupdate from './Components/Pages/Adminside/deparmentbathrom/Cleaning matterial/Clothandduster/Dusterupdate';
import Artifical from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalflowers/Artifical';
import Artificallist from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalflowers/Artificallist';
import Artificalupdate from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalflowers/Artificalupdate';
import Artificalsingel from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalflowers/Artificalsingl';
import Artificalform from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Artificalflowers/Artificalform';
import Bouquetform from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Bouquet/Bouquetform';
import Bouquetlist from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Bouquet/Bouquetlist';
import Bouquetupdate from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Bouquet/Bouquetupdate';
import Bouquet from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Bouquet/Bouquet';
import Bouquetsingl from './Components/Pages/Adminside/deparmentbathrom/Artificalflowers/Bouquet/Bouquetsingl';
import Diytoolspo from './Components/Pages/Adminside/Poudliene/Diytools/Diytoolspo';
import Diytoolssingl from './Components/Pages/Adminside/Poudliene/Diytools/Diytoolssingl';
import Diytoolsform from './Components/Pages/Adminside/Poudliene/Diytools/Diytoolsform';
import Diytoolslist from './Components/Pages/Adminside/Poudliene/Diytools/Diytoolslist';
import Diytoolsupdate from './Components/Pages/Adminside/Poudliene/Diytools/Diytoolsupdate';
import Disposible from './Components/Pages/Adminside/Poudliene/Disposible/Disposible';
import Disposbilesingle from './Components/Pages/Adminside/Poudliene/Disposible/Disposbilesingle';
import Disposibleformpo from './Components/Pages/Adminside/Poudliene/Disposible/Disposibleformpo';
import Disposiblelistpo from './Components/Pages/Adminside/Poudliene/Disposible/Disposiblelistpo';
import Disposibleupdatepo from './Components/Pages/Adminside/Poudliene/Disposible/Disposibleupdatepo';
import Craftform from './Components/Pages/Adminside/Poudliene/Craft/Craftform';
import Craftlist from './Components/Pages/Adminside/Poudliene/Craft/Craftlist';
import Craftupdate from './Components/Pages/Adminside/Poudliene/Craft/Craftupdate';
import Craftsingl from './Components/Pages/Adminside/Poudliene/Craft/Craftsingl';
import Craftpo from './Components/Pages/Adminside/Poudliene/Craft/Craftpo';
import Carpo from './Components/Pages/Adminside/Poudliene/Carproducts/Carpo';
import Carposingl from './Components/Pages/Adminside/Poudliene/Carproducts/Carposingl';
import Carpoform from './Components/Pages/Adminside/Poudliene/Carproducts/Carpoform';
import Carpolist from './Components/Pages/Adminside/Poudliene/Carproducts/Carpolist';
import Carpoupdate from './Components/Pages/Adminside/Poudliene/Carproducts/Carpoupdate';
import Candelesform from './Components/Pages/Adminside/Poudliene/Candeles/Candelesform';
import Candeleslist from './Components/Pages/Adminside/Poudliene/Candeles/Candeleslist';
import Candelesupdate from './Components/Pages/Adminside/Poudliene/Candeles/Candelesupdate';
import Candeles from './Components/Pages/Adminside/Poudliene/Candeles/Candeles';
import Candelessingl from './Components/Pages/Adminside/Poudliene/Candeles/Candelessingl';
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
        <Route element={<ProtectedRoutes/>}>
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

        <Route path='/beddingform' element={<AdminLayout><Beddingform /></AdminLayout>} />
        <Route path='/listbedding' element={<AdminLayout><Beddinglist/></AdminLayout>} />
        <Route path='/listbedding/:id' element={<AdminLayout><Beddingupdate /></AdminLayout>} />

        <Route path='/clothingform' element={<AdminLayout><Clothingform/></AdminLayout>} />
        <Route path='/listclothing' element={<AdminLayout><Clothinglist/></AdminLayout>} />
        <Route path='/listclothing/:id' element={<AdminLayout><Clothingupdate/></AdminLayout>} />

        <Route path='/freshnerform' element={<AdminLayout><Freshnerform/></AdminLayout>} />
        <Route path='/listfreshner' element={<AdminLayout><Freshnerlist/></AdminLayout>} />
        <Route path='/listfreshner/:id' element={<AdminLayout><Freshnerupdate/></AdminLayout>} />
        
        <Route path='/akonobolform' element={<AdminLayout><Akonobolform/></AdminLayout>} />
        <Route path='/listakonobol' element={<AdminLayout><Akonobolist/></AdminLayout>} />
        <Route path='/listakonobol/:id' element={<AdminLayout><Akonobolupdate/></AdminLayout>} />

        <Route path='/clockform' element={<AdminLayout><Clockform/></AdminLayout>} />
        <Route path='/listclock' element={<AdminLayout><Clocklist/></AdminLayout>} />
        <Route path='/listclock/:id' element={<AdminLayout><Clockupdate/></AdminLayout>} />

        <Route path='/cameraform' element={<AdminLayout><Camerasform/></AdminLayout>} />
        <Route path='/listcamera' element={<AdminLayout><Cameraslist/></AdminLayout>} />
        <Route path='/listcamera/:id' element={<AdminLayout><Camerasupdate/></AdminLayout>} />

        <Route path='/digitalform' element={<AdminLayout><Digitalform/></AdminLayout>} />
        <Route path='/listdigital' element={<AdminLayout><Digitallist/></AdminLayout>} />
        <Route path='/listdigital/:id' element={<AdminLayout><Digitalupdate/></AdminLayout>} />

        <Route path='/cookwareform' element={<AdminLayout><Cookwareform/></AdminLayout>} />
        <Route path='/listcookware' element={<AdminLayout><Cookwarelist/></AdminLayout>} />
        <Route path='/listcookware/:id' element={<AdminLayout><Cookwareupdate/></AdminLayout>} />

        <Route path='/crockeryform' element={<AdminLayout><Crockeryform/></AdminLayout>} />
        <Route path='/listcrockery' element={<AdminLayout><Crockerylist/></AdminLayout>} />
        <Route path='/listcrockery/:id' element={<AdminLayout><Crockeryupdate/></AdminLayout>} />

        <Route path='/dinnerform' element={<AdminLayout><Dinnerform/></AdminLayout>} />
        <Route path='/listdinner' element={<AdminLayout><Dinnerlist/></AdminLayout>} />
        <Route path='/listdinner/:id' element={<AdminLayout><Dinnerupload/></AdminLayout>} />

        <Route path='/rentokilform' element={<AdminLayout><Rentokilform/></AdminLayout>} />
        <Route path='/listrentokil' element={<AdminLayout><Rentokillist/></AdminLayout>} />
        <Route path='/listrentokil/:id' element={<AdminLayout><Rntokilupdate/></AdminLayout>} />

        <Route path='/stvform' element={<AdminLayout><Stvform/></AdminLayout>} />
        <Route path='/liststv' element={<AdminLayout><Stvlist/></AdminLayout>} />
        <Route path='/liststv/:id' element={<AdminLayout><Stvupdate/></AdminLayout>} />

        <Route path='/cottonform' element={<AdminLayout><Cottonform/></AdminLayout>} />
        <Route path='/listcotton' element={<AdminLayout><Cottonlist/></AdminLayout>} />
        <Route path='/listcotton/:id' element={<AdminLayout><Cottonupdate/></AdminLayout>} />
        
        <Route path='/babayform' element={<AdminLayout><Babaycareform/></AdminLayout>} />
        <Route path='/listbabay' element={<AdminLayout><Babaylist/></AdminLayout>} />
        <Route path='/listbabay/:id' element={<AdminLayout><Babayupdate/></AdminLayout>} />

        <Route path='/freshnform' element={<AdminLayout><Freshnform/></AdminLayout>} />
        <Route path='/listfreshn' element={<AdminLayout><Freshnlist/></AdminLayout>} />
        <Route path='/listfreshn/:id' element={<AdminLayout><Freshnupdate/></AdminLayout>} />

        <Route path='/carform' element={<AdminLayout><Carform/></AdminLayout>} />
        <Route path='/listcar' element={<AdminLayout><Carlist/></AdminLayout>} />
        <Route path='/listcar/:id' element={<AdminLayout><Carupdate/></AdminLayout>} />

        <Route path='/bleechform' element={<AdminLayout><Bleechform/></AdminLayout>} />
        <Route path='/listbleech' element={<AdminLayout><Bleecklist/></AdminLayout>} />
        <Route path='/listbleech/:id' element={<AdminLayout><Bleeckupdate/></AdminLayout>} />

        <Route path='/bakewareform' element={<AdminLayout><Bakewareform/></AdminLayout>} />
        <Route path='/listbakeware' element={<AdminLayout><Bakewarelist/></AdminLayout>} />
        <Route path='/listbakeware/:id' element={<AdminLayout><Bakewareupdate/></AdminLayout>} />

        <Route path='/barewareform' element={<AdminLayout><Barewearform/></AdminLayout>} />
        <Route path='/listbareware' element={<AdminLayout><Barewearlist/></AdminLayout>} />
        <Route path='/listbareware/:id' element={<AdminLayout><Barewearupdate/></AdminLayout>} />
        
        <Route path='/birdsform' element={<AdminLayout><Birdsform/></AdminLayout>} />
        <Route path='/listbirds' element={<AdminLayout><Birdslist/></AdminLayout>} />
        <Route path='/listbirds/:id' element={<AdminLayout><Birdsupdate/></AdminLayout>} />

        <Route path='/catform' element={<AdminLayout><Catform/></AdminLayout>} />
        <Route path='/listcat' element={<AdminLayout><Catlist/></AdminLayout>} />
        <Route path='/listcat/:id' element={<AdminLayout><Catupdate/></AdminLayout>} />

        <Route path='/babyform' element={<AdminLayout><Babyform/></AdminLayout>} />
        <Route path='/listbaby' element={<AdminLayout><Babylist/></AdminLayout>} />
        <Route path='/listbaby/:id' element={<AdminLayout><Babyupdate/></AdminLayout>} />
        
        <Route path='/kidsstform' element={<AdminLayout><Kidsstoform/></AdminLayout>} />
        <Route path='/listkidssto' element={<AdminLayout><Kidsstolist/></AdminLayout>} />
        <Route path='/listkidssto/:id' element={<AdminLayout><Kisstoupdate/></AdminLayout>} />

        <Route path='/bbqform' element={<AdminLayout><Bbqform/></AdminLayout>} />
        <Route path='/listbbq' element={<AdminLayout><Bbqlist/></AdminLayout>} />
        <Route path='/listbbq/:id' element={<AdminLayout><Bbqupdate/></AdminLayout>} />

        <Route path='/birdform' element={<AdminLayout><Birdcareform/></AdminLayout>} />
        <Route path='/listbird' element={<AdminLayout><Birdlist/></AdminLayout>} />
        <Route path='/listbird/:id' element={<AdminLayout><Birdupdate/></AdminLayout>} />

        <Route path='/baloonform' element={<AdminLayout><Baloonform/></AdminLayout>} />
        <Route path='/listbaloon' element={<AdminLayout><Baloonlist/></AdminLayout>} />
        <Route path='/listbaloon/:id' element={<AdminLayout><Baloonupdate/></AdminLayout>} />

        <Route path='/pumpsform' element={<AdminLayout><Pumpsform/></AdminLayout>} />
        <Route path='/listpumps' element={<AdminLayout><Pumpslist/></AdminLayout>} />
        <Route path='/listpumps/:id' element={<AdminLayout><Pumpsupdate/></AdminLayout>} />
        
        <Route path='/bannerform' element={<AdminLayout><Bannerform/></AdminLayout>} />
        <Route path='/listbanner' element={<AdminLayout><Bannerlist/></AdminLayout>} />
        <Route path='/listbanner/:id' element={<AdminLayout><Bannerupdate/></AdminLayout>} />

        <Route path='/crystalform' element={<AdminLayout><Crystalform/></AdminLayout>} />
        <Route path='/listcrystal' element={<AdminLayout><Crystallist/></AdminLayout>} />
        <Route path='/listcrystal/:id' element={<AdminLayout><Crystalupdate/></AdminLayout>} />

        <Route path='/cakesform' element={<AdminLayout><Cakesform/></AdminLayout>} />
        <Route path='/listcakes' element={<AdminLayout><Cakeslist/></AdminLayout>} />
        <Route path='/listcakes/:id' element={<AdminLayout><Cakesupdate/></AdminLayout>} />

        <Route path='/furnitureform' element={<AdminLayout><Furnitureform/></AdminLayout>} />
        <Route path='/listfurniture' element={<AdminLayout><Furniturelist/></AdminLayout>} />
        <Route path='/listfurniture/:id' element={<AdminLayout><Furnitureupdate/></AdminLayout>} />

        <Route path='/matsform' element={<AdminLayout><Matsform/></AdminLayout>} />
        <Route path='/listmats' element={<AdminLayout><Matslist/></AdminLayout>} />
        <Route path='/listmats/:id' element={<AdminLayout><Matsupdate/></AdminLayout>} />
        
        <Route path='/candelform' element={<AdminLayout><Candelform/></AdminLayout>} />
        <Route path='/listcandel' element={<AdminLayout><Candellist/></AdminLayout>} />
        <Route path='/listcandel/:id' element={<AdminLayout><Candelupdate/></AdminLayout>} />
        
        <Route path='/stform' element={<AdminLayout><STform/></AdminLayout>} />
        <Route path='/listst' element={<AdminLayout><STlist/></AdminLayout>} />
        <Route path='/listst/:id' element={<AdminLayout><Stupdate/></AdminLayout>} />

        <Route path='/foodconform' element={<AdminLayout><Foodconform/></AdminLayout>} />
        <Route path='/listfoodcon' element={<AdminLayout><Foodconlist/></AdminLayout>} />
        <Route path='/listfoodcon/:id' element={<AdminLayout><Foodconupdate/></AdminLayout>} />
        
        <Route path='/kidsplasform' element={<AdminLayout><Kidsplasform/></AdminLayout>} />
        <Route path='/listkidsplas' element={<AdminLayout><Kidsplaslist/></AdminLayout>} />
        <Route path='/listkidsplas/:id' element={<AdminLayout><Kidsplasupdate/></AdminLayout>} />

        <Route path='/coolerform' element={<AdminLayout><Coolerform/></AdminLayout>} />
        <Route path='/listcooler' element={<AdminLayout><Coolerlist/></AdminLayout>} />
        <Route path='/listcooler/:id' element={<AdminLayout><Coolerupdate/></AdminLayout>} />

        <Route path='/flaskform' element={<AdminLayout><Flaskform/></AdminLayout>} />
        <Route path='/listflask' element={<AdminLayout><Flasklist/></AdminLayout>} />
        <Route path='/listflask/:id' element={<AdminLayout><Flaskupdate/></AdminLayout>} />
        
        <Route path='/art&craftform' element={<AdminLayout><Artform/></AdminLayout>} />
        <Route path='/listart&craft' element={<AdminLayout><Artlist/></AdminLayout>} />
        <Route path='/listart&craft/:id' element={<AdminLayout><Artupdate/></AdminLayout>} />
        
        <Route path='/booksform' element={<AdminLayout><Booksform/></AdminLayout>} />
        <Route path='/listbooks' element={<AdminLayout><Bookslist/></AdminLayout>} />
        <Route path='/listbooks/:id' element={<AdminLayout><Booksupdate/></AdminLayout>} />
        
        <Route path='/brushwareform' element={<AdminLayout><Brushwareform/></AdminLayout>} />
        <Route path='/listbrushware' element={<AdminLayout><Brushwarelist/></AdminLayout>} />
        <Route path='/listbrushware/:id' element={<AdminLayout><Brushwareupload/></AdminLayout>} />

        <Route path='/dusterform' element={<AdminLayout><Dusterform/></AdminLayout>} />
        <Route path='/listduster' element={<AdminLayout><Dusterlist/></AdminLayout>} />
        <Route path='/listduster/:id' element={<AdminLayout><Dusterupdate/></AdminLayout>} />
        
        <Route path='/artificalform' element={<AdminLayout><Artificalform/></AdminLayout>} />
        <Route path='/listartifical' element={<AdminLayout><Artificallist/></AdminLayout>} />
        <Route path='/listartifical/:id' element={<AdminLayout><Artificalupdate/></AdminLayout>} />
        
        <Route path='/bouquetform' element={<AdminLayout><Bouquetform/></AdminLayout>} />
        <Route path='/listbouquet' element={<AdminLayout><Bouquetlist/></AdminLayout>} />
        <Route path='/listbouquet/:id' element={<AdminLayout><Bouquetupdate/></AdminLayout>} />

        <Route path='/diytoolsform' element={<AdminLayout><Diytoolsform/></AdminLayout>} />
        <Route path='/listdiytools' element={<AdminLayout><Diytoolslist/></AdminLayout>} />
        <Route path='/listdiytools/:id' element={<AdminLayout><Diytoolsupdate/></AdminLayout>} />
        
        <Route path='/disposiblepoform' element={<AdminLayout><Disposibleformpo/></AdminLayout>} />
        <Route path='/listdisposiblepo' element={<AdminLayout><Disposiblelistpo/></AdminLayout>} />
        <Route path='/listdisposiblepo/:id' element={<AdminLayout><Disposibleupdatepo/></AdminLayout>} />
        
        <Route path='/craftpoform' element={<AdminLayout><Craftform/></AdminLayout>} />
        <Route path='/listcraftpo' element={<AdminLayout><Craftlist/></AdminLayout>} />
        <Route path='/listcraftpo/:id' element={<AdminLayout><Craftupdate/></AdminLayout>} />
         
        <Route path='/carpoform' element={<AdminLayout><Carpoform/></AdminLayout>} />
        <Route path='/listcarpo' element={<AdminLayout><Carpolist/></AdminLayout>} />
        <Route path='/listcarpo/:id' element={<AdminLayout><Carpoupdate/></AdminLayout>} />
        
        <Route path='/candelsform' element={<AdminLayout><Candelesform/></AdminLayout>} />
        <Route path='/listcandels' element={<AdminLayout><Candeleslist/></AdminLayout>} />
        <Route path='/listcandels/:id' element={<AdminLayout><Candelesupdate/></AdminLayout>} />
        </Route>
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

        <Route path='/freshner' element={<MainLayout><Freshner/></MainLayout>}/>
        <Route path='/freshnersinglepage/:id' element={<MainLayout><Freshnersingle/></MainLayout>}/>

        <Route path='/akonobol' element={<MainLayout><Akonobol/></MainLayout>}/>
        <Route path='/akonobolsinglepage/:id' element={<MainLayout><Akonobolsingle/></MainLayout>}/>
        
        <Route path='/clock' element={<MainLayout><Clock/></MainLayout>}/>
        <Route path='/clocksinglepage/:id' element={<MainLayout><Clocksingle/></MainLayout>}/>

        <Route path='/cameras' element={<MainLayout><Cameras/></MainLayout>}/>
        <Route path='/camerassinglepage/:id' element={<MainLayout><Camerasingle/></MainLayout>}/>

        <Route path='/digital' element={<MainLayout><Digital/></MainLayout>}/>
        <Route path='/digitalsinglepage/:id' element={<MainLayout><Digitalsingle/></MainLayout>}/>

        <Route path='/cookware' element={<MainLayout><Cookware/></MainLayout>}/>
        <Route path='/cookwaresinglepage/:id' element={<MainLayout><Cookwaresingle/></MainLayout>}/>

        <Route path='/crockery' element={<MainLayout><Crockery/></MainLayout>}/>
        <Route path='/crockerysinglepage/:id' element={<MainLayout><Crockerysingle/></MainLayout>}/>

        <Route path='/dinner' element={<MainLayout><Dinner/></MainLayout>}/>
        <Route path='/dinnersinglepage/:id' element={<MainLayout><Dinnersingel/></MainLayout>}/>

        <Route path='/cotton' element={<MainLayout><Cotton/></MainLayout>}/>
        <Route path='/cottonsinglepage/:id' element={<MainLayout><Cottonsingle/></MainLayout>}/>

        <Route path='/babay' element={<MainLayout><Babycare/></MainLayout>}/>
        <Route path='/babysinglepage/:id' element={<MainLayout><Babaysingle/></MainLayout>}/>
        
        <Route path='/freshn' element={<MainLayout><Freshn/></MainLayout>}/>
        <Route path='/freshnsinglepage/:id' element={<MainLayout><Freshnsingle/></MainLayout>}/>

        <Route path='/bleech' element={<MainLayout><Bleech/></MainLayout>}/>
        <Route path='/bleechsinglepage/:id' element={<MainLayout><Bleechsingl/></MainLayout>}/>

        <Route path='/kidssto' element={<MainLayout><Kidssto/></MainLayout>}/>
        <Route path='/kidsstosinglepage/:id' element={<MainLayout><Kidsstosingl/></MainLayout>}/>

        <Route path='/bbq' element={<MainLayout><Bbq/></MainLayout>}/>
        <Route path='/bbqsinglepage/:id' element={<MainLayout><Bbqsingle/></MainLayout>}/>

        <Route path='/bird' element={<MainLayout><Bird/></MainLayout>}/>
        <Route path='/birdinglepage/:id' element={<MainLayout><Birdsingle/></MainLayout>}/>

        <Route path='/baloon' element={<MainLayout><Baloon/></MainLayout>}/>
        <Route path='/baloonsinglepage/:id' element={<MainLayout><Baloonsingl/></MainLayout>}/>

        <Route path='/kitechenwear' element={<MainLayout><Kitechendde/></MainLayout>}/>

        <Route path='/cleaning' element={<MainLayout><Leaning/></MainLayout>}/>

        <Route path='/gardening' element={<MainLayout><Gardeningmain/></MainLayout>}/>

        <Route path='/homedecore' element={<MainLayout><Homedecoremain/></MainLayout>}/>

        <Route path='/toiletries' element={<MainLayout><Tolitriesmain/></MainLayout>}/>

        <Route path='/diye' element={<MainLayout><Diymainpage/></MainLayout>}/>

        <Route path='/flowers' element={<MainLayout><Artificalmain/></MainLayout>}/>

        <Route path='/stationery' element={<MainLayout><Stationerymain/></MainLayout>}/>

        <Route path='/textiles & Accessories' element={<MainLayout><Textilesmainpage/></MainLayout>}/>

        <Route path='/aprons' element={<MainLayout><Aprons/></MainLayout>}/>
        <Route path='/apronssinglepage/:id' element={<MainLayout><Apronssingle/></MainLayout>}/>

        <Route path='/bedding' element={<MainLayout><Bedding/></MainLayout>}/>
        <Route path='/beddingsinglepage/:id' element={<MainLayout><Beddingsingle/></MainLayout>}/>

        <Route path='/clothing' element={<MainLayout><Clothing/></MainLayout>}/>
        <Route path='/clothingsinglepage/:id' element={<MainLayout><Clothingsingle/></MainLayout>}/>

        <Route path='/rentokil' element={<MainLayout><Rentokil/></MainLayout>}/>
        <Route path='/rentokilsinglepage/:id' element={<MainLayout><RentokilSingle/></MainLayout>}/>

        <Route path='/stv' element={<MainLayout><Stv/></MainLayout>}/>
        <Route path='/stvsinglepage/:id' element={<MainLayout><StvSingle/></MainLayout>}/>

        <Route path='/car' element={<MainLayout><Car/></MainLayout>}/>
        <Route path='/carsinglepage/:id' element={<MainLayout><Carsingle/></MainLayout>}/>

        <Route path='/bakeware' element={<MainLayout><Bakeware/></MainLayout>}/>
        <Route path='/bakewaresinglepage/:id' element={<MainLayout><Bakewaresingle/></MainLayout>}/>

        <Route path='/cat' element={<MainLayout><Cat/></MainLayout>}/>
        <Route path='/catsinglepage/:id' element={<MainLayout><Catsingle/></MainLayout>}/>

        <Route path='/bareware' element={<MainLayout><Barewear/></MainLayout>}/>
        <Route path='/barewaresinglepage/:id' element={<MainLayout><Barewearsingl/></MainLayout>}/>

        <Route path='/babyproducts' element={<MainLayout><Baby/></MainLayout>}/>
        <Route path='/babysinglepage/:id' element={<MainLayout><Babysingle/></MainLayout>}/>

        <Route path='/birds' element={<MainLayout><Birds/></MainLayout>}/>
        <Route path='/birdssinglepage/:id' element={<MainLayout><Birdssingl/></MainLayout>}/>

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

        <Route path='/pumps' element={<MainLayout><Pumps/></MainLayout>}/>
        <Route path='/pumpssinglepage/:id' element={<MainLayout><Pumpssingl/></MainLayout>}/>

        <Route path='/banner' element={<MainLayout><Banner/></MainLayout>}/>
        <Route path='/bannersinglepage/:id' element={<MainLayout><Bannersingl/></MainLayout>}/>

        <Route path='/crystal' element={<MainLayout><Crystal/></MainLayout>}/>
        <Route path='/crystalsinglepage/:id' element={<MainLayout><Crystalsingl/></MainLayout>}/>

        <Route path='/cakes' element={<MainLayout><Cakes/></MainLayout>}/>
        <Route path='/cakessinglepage/:id' element={<MainLayout><Cakessingl/></MainLayout>}/>

        <Route path='/furniture' element={<MainLayout><Furniture/></MainLayout>}/>
        <Route path='/furnituresinglepage/:id' element={<MainLayout><Furnituresingl/></MainLayout>}/>

        <Route path='/mats' element={<MainLayout><Mats/></MainLayout>}/>
        <Route path='/matssinglepage/:id' element={<MainLayout><Matssingl/></MainLayout>}/>

        <Route path='/candel' element={<MainLayout><Candel/></MainLayout>}/>
        <Route path='/candelsinglepage/:id' element={<MainLayout><Candelsingl/></MainLayout>}/>

        <Route path='/st' element={<MainLayout><St/></MainLayout>}/>
        <Route path='/stsinglepage/:id' element={<MainLayout><Stsingal/></MainLayout>}/>

        <Route path='/foodcon' element={<MainLayout><Foodcon/></MainLayout>}/>
        <Route path='/foodconsinglepage/:id' element={<MainLayout><Foodconsingl/></MainLayout>}/>

        <Route path='/kidsplas' element={<MainLayout><Kidsplas/></MainLayout>}/>
        <Route path='/kidsplassinglepage/:id' element={<MainLayout><Kidsplassingl/></MainLayout>}/>
        <Route path='/forget' element={<Forgetpassword/>}  />
        <Route path='/verifyotp' element={<VerifyOtp/>}/>
        
        <Route path='/cooler' element={<MainLayout><Coolerbags/></MainLayout>}/>
        <Route path='/coolersinglepage/:id' element={<MainLayout><Coolersingl/></MainLayout>}/>
        
        <Route path='/flask' element={<MainLayout><Flas/></MainLayout>}/>
        <Route path='/flasksinglepage/:id' element={<MainLayout><Flasksingl/></MainLayout>}/>

        <Route path='/art&craft' element={<MainLayout><Art/></MainLayout>}/>
        <Route path='/art&craftsinglepage/:id' element={<MainLayout><Artsingle/></MainLayout>}/>

        <Route path='/books' element={<MainLayout><Books/></MainLayout>}/>
        <Route path='/bookssinglepage/:id' element={<MainLayout><Bookssingle/></MainLayout>}/>

        <Route path='/brushware' element={<MainLayout><Brushware/></MainLayout>}/>
        <Route path='/brushwaresinglepage/:id' element={<MainLayout><Brushwaresingel/></MainLayout>}/>

        <Route path='/duster' element={<MainLayout><Duster/></MainLayout>}/>
        <Route path='/dustersinglepage/:id' element={<MainLayout><Dustersingl/></MainLayout>}/>

        <Route path='/artifical' element={<MainLayout><Artifical/></MainLayout>}/>
        <Route path='/artificalsinglepage/:id' element={<MainLayout><Artificalsingel/></MainLayout>}/>
        
        <Route path='/bouquet' element={<MainLayout><Bouquet/></MainLayout>}/>
        <Route path='/bouquetsinglepage/:id' element={<MainLayout><Bouquetsingl/></MainLayout>}/>

        <Route path='/diytools' element={<MainLayout><Diytoolspo/></MainLayout>}/>
        <Route path='/diytoolssinglepage/:id' element={<MainLayout><Diytoolssingl/></MainLayout>}/>

        <Route path='/disposiblepo' element={<MainLayout><Disposible/></MainLayout>}/>
        <Route path='/disposibleposinglepage/:id' element={<MainLayout><Disposbilesingle/></MainLayout>}/>

        <Route path='/craftpo' element={<MainLayout><Craftpo/></MainLayout>}/>
        <Route path='/craftposinglepage/:id' element={<MainLayout><Craftsingl/></MainLayout>}/>
        
        <Route path='/carpo' element={<MainLayout><Carpo/></MainLayout>}/>
        <Route path='/carposinglepage/:id' element={<MainLayout><Carposingl/></MainLayout>}/>
        
        <Route path='/candeles' element={<MainLayout><Candeles/></MainLayout>}/>
        <Route path='/candelssinglepage/:id' element={<MainLayout><Candelessingl/></MainLayout>}/>
      </Routes>
      </CartProvider>
    </>
  );
};

export default App;
