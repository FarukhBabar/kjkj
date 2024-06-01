import React, { useEffect, useState } from 'react'
import './Style.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useCart } from './Pages/Adminside/CartContext'
const Navbar = () => {
  const userlogin = localStorage.getItem("user");
  const navigate = useNavigate();
  const { cartItems } = useCart();
const [cartCount, setCartCount] = useState(0);

useEffect(() => {
   
  setCartCount(cartItems.length);
}, [cartItems]);


  const Logout=()=>{
    localStorage.clear("user")
    alert("Logout Sucessfully")
    navigate("/log")
  }
  return (
    <div>
       <div>
  <div className="note">
    <center>
      <p className>NEW FEATURE ALERT: You can now Favourite Products, allowing faster adding to your basket on core
        lines.</p>
    </center>
  </div>
  <div className="d-flex">
    {/* <div className="ms-3 login">
      <Link to="/Register" className="mt-2 text-decoration-none text-black"><i className="bi bi-person" />REGISTER &nbsp;|&nbsp;</Link>
      {userlogin?(

<Link to=""  onClick={Logout} className=" snavl mt-3  text-decoration-none text-black"><i className="bi bi-person" />LOGOUT</Link>

):(

<Link to="/log" className=" snavl mt-3  text-decoration-none text-black"><i className="bi bi-person" />LOGIN</Link>
)
}
    </div> */}
    <div className>
    
      <img src="/Images/logo.png" alt className="logo" />
    </div>
    <div className="phone">
      <p><i className="bi bi-telephone" />0208 805 5756</p>
    </div>
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search..." /><i className="bi bi-search" />
    </div>
  </div>
  <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link ms-5 text-white " aria-current="page" href="/">HOME</a>
          {/* <Link className="nav-link ms-5 text-white" to="/deparments">DEPARTMENTS</Link> */}
          <div className="dropdown">
 <Link to="/deparments"><button
    className="btn navbarsa dropdown-toggle text-white"
    type="button"
    id="dropdownMenuButton"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="true"
  >
    DEPARTMENTS
  </button></Link> 
  <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
    <div className="d-flex flex-wrap">
      <div className="d-flex flex-column flex-md-row">
        <div className="me-5 mb-3 mb-md-0">
        <p className="foodsnv ms-3 d-inline">Batteries</p> <br/><br/>
          <p className="foodsnv ms-3 d-inline">FOOD&DRINK</p>
          <Link className="dropdown-item" to="/drinks">
            DRINK
          </Link>
          <Link className="dropdown-item" to="/foods">
            FOOD
          </Link>
          <p className="foodsnv ms-3 d-inline">SmokingProducts</p>

          <Link className="dropdown-item" to="/lighter">
            Lighter & Matches
          </Link>
          <Link className="dropdown-item" to="/electrical">
            Electrical
          </Link>
          <Link className="dropdown-item" to="/essentional">
            Smoking Essential
          </Link>

          <p className="foodsnv ms-3 d-inline">Bathroom</p>
          <Link className="dropdown-item" to="/bathroommain">
            Bathroom Scale
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Mirror
          </Link>
          <Link className="dropdown-item" to="/showermain">
            Shower Curtains
          </Link>
          <Link className="dropdown-item" to="/deparmentbathroom">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Pound Line</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Bathroom/Cosmetics
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Electrical
          </Link>
          <Link className="dropdown-item" to="/showermain">
            First Aid/Pharmacy
          </Link>
          <Link className="dropdown-item" to="/poundline">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Textile</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Aprons
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Bedding
          </Link>
          <Link className="dropdown-item" to="/showermain">
            Clothing
          </Link>
          <Link className="dropdown-item" to="/poundline">
            view all
          </Link>
        </div>
        <div className="me-5 mb-3 mb-md-0">
        <p className="foodsnv ms-3 d-inline">Phone Accessories</p> <br/> <br/>
        <p className="foodsnv ms-3 d-inline">Diy</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Air Freshners
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Akzonobel
          </Link>
          {/* <Link className="dropdown-item" to="/showermain">
            AMTECH TOOLS
          </Link> */}
          <Link className="dropdown-item" to="/poundline">
            view all
          </Link>

          <p className="foodsnv ms-3 d-inline">Electrical</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            COLCKS
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            DUMMY CAMERAS
          </Link>
          <Link className="dropdown-item" to="/showermain">
            DIGITAL ACCESSORIES
          </Link>
          <Link className="dropdown-item" to="/poundline">
            view all
          </Link>

          <p className="foodsnv ms-3 d-inline">CHINA</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            COOKWARE
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            CROCKERY
          </Link>
          <Link className="dropdown-item" to="/showermain">
            DINNER SETS
          </Link>
          <Link className="dropdown-item" to="/poundline">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Pest Control</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            RENTOKIL
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
           STV INTERNATIONAL
          </Link>
          <p className="foodsnv ms-3 d-inline">Toiletries</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Baby Care
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Cotton Wool
          </Link>
          {/* <Link className="dropdown-item" to="/showermain">
            AMTECH TOOLS
          </Link> */}
          <Link className="dropdown-item" to="/poundline">
            view all
          </Link>

         
          
        </div>
        <div className="me-5 mb-3 mb-md-0">
        <p className="foodsnv ms-3 d-inline">Obsolete</p> <br/> <br/>
        <p className="foodsnv ms-3 d-inline">HOUSE HOLD</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Air Freshner
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Car Care
          </Link>
          <Link className="dropdown-item" to="/showermain">
            Bleach
          </Link>
          <Link className="dropdown-item" to="/poundline">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Kitchenware</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Bakeware
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
           Bareware
          </Link>
          {/* <Link className="dropdown-item" to="/mirrormain">
           Chrome
          </Link> */}
          <Link className="dropdown-item" to="/kitechenwear">
           View all
          </Link>

          <p className="foodsnv ms-3 d-inline">Pet Products</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Bird Products
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Cat Products
          </Link>
         
          <Link className="dropdown-item" to="/poundline">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Kids Products</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Babay Products
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
           Kids Storage
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
           View all
          </Link>

          <p className="foodsnv ms-3 d-inline">Toys</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Art & Craft
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Balls
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            view all
          </Link>
        </div>
        <div className="me-5 mb-3 mb-md-0">
        <p className="foodsnv ms-3 d-inline">Laundry</p>
          <Link className="dropdown-item" to="/airers">
            Airers
          </Link>
          <Link className="dropdown-item" to="/iorining">
            Ironing Boards
          </Link>
          <Link className="dropdown-item" to="/laacess">
            Laundry Accessories
          </Link>
          <Link className="dropdown-item" to="/deparmentloundry">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Gardening</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Bbq
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
           Birdcare
          </Link>
          {/* <Link className="dropdown-item" to="/mirrormain">
           Chrome
          </Link> */}
          <Link className="dropdown-item" to="/gardening">
           View all
          </Link>

          <p className="foodsnv ms-3 d-inline">Glassware</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Cakestands
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Crystal
          </Link>
         
          <Link className="dropdown-item" to="/poundline">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Hardware</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Furniture
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
           Mats & Rugs
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
           View all
          </Link>
          <p className="foodsnv ms-3 d-inline">Home & Decore</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            St George
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Candels
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Disposable Bags</p>
          <Link className="dropdown-item" to="/disposible">
            Bin Bag
          </Link>
          <Link className="dropdown-item" to="/tablewear">
            Disposible Tablewear
          </Link>
          <Link className="dropdown-item" to="/deparmentdisposible">
            view all
          </Link>
        </div>
        <div className="me-5 mb-3 mb-md-0">
        <p className="foodsnv ms-3 d-inline">Party Ware</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Balloon Weights
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
           Baloons Pumps
          </Link>
          <Link className="dropdown-item" to="/showermain">
            Banners
          </Link>
          <Link className="dropdown-item" to="/poundline">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Plastic Houseware</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Food Containers
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
           Kids Plastic Products
          </Link>
          {/* <Link className="dropdown-item" to="/mirrormain">
           Chrome
          </Link> */}
          <Link className="dropdown-item" to="/mirrormain">
           View all
          </Link>

          <p className="foodsnv ms-3 d-inline">Seasonal Sports</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Cooler Bags
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Flasks
          </Link>
         
          <Link className="dropdown-item" to="/poundline">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Stationery</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Art & Craft
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
           Books
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
           View all
          </Link>
          <p className="foodsnv ms-3 d-inline">Cleaning Matterials</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Brushware
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Cloths And Dusters
          </Link>
          <Link className="dropdown-item" to="/cleaning">
            view all
          </Link>
          <p className="foodsnv ms-3 d-inline">Artifical Flower</p>
          <Link className="dropdown-item" to="/bathroombeauty">
            Artifical Trees
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            Bouquets
          </Link>
          <Link className="dropdown-item" to="/mirrormain">
            view all
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

             
          <Link className="nav-link ms-5 text-white" to="/Supersunday">SUPER SUNDAY OFFERS</Link>
          <Link className="nav-link ms-5 text-white" to="/Palletdeals">PALLETS DEALS</Link>
          <Link className="nav-link ms-5 text-white" to="/Shopbybrand">SHOP BY BRAND</Link>
          <Link className="nav-link ms-5 text-white" to="/newarriv">NEW ARRIVALS</Link>
          <div className=" login">
      <Link to="/Register" className="mt-2 text-decoration-none text-white"><i className="bi bi-person" />REGISTER &nbsp;|&nbsp;</Link>
      {userlogin?(

<Link to=""  onClick={Logout} className=" snavl mt-3  text-decoration-none text-white"><i className="bi bi-person" />LOGOUT</Link>

):(

<Link to="/log" className=" snavl mt-3  text-decoration-none text-white"><i className="bi bi-person" />LOGIN</Link>
)
}
    </div>
   < div className="cart scart mt-1 ms-4 text-decoration-none text-white position-relative">
        <Link to="/addtocart" className="text-decoration-none text-white">
         <h5><i className="bi bi-cart" />  ({cartCount})</h5> 
        </Link>
      </div>
        </div>
        
      </div>
    </div>
  </nav>
  <div className="d-flex freedd">
    <div className="d-flex">
      <a href className="text-decoration-none mt-1 ms-4">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/d111f8175d1341dc869b9e957676bdfb.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1">
        <a href className="text-decoration-none  "> FREE UK DELIVERY AVAILABLE
        </a>
      </div>
    </div>
    <div className="export d-flex">
      <a href className="text-decoration-none mt-1">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/491b00b8e0974e549fb58b25678df23a.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1 ">
        <a href className="text-decoration-none"> EXPORT &amp; FMCG SALES INFO</a>
      </div>
    </div>
    <div className="export d-flex">
      <a href className="text-decoration-none mt-1 ms-4">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/df15fb3cb3c44772b63088dd8b72acea.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1">
        <a href className="text-decoration-none">AMAZON &amp; EBAY SELLER GUIDE</a>
      </div>
    </div>
    <div className="export d-flex">
      <a href className="text-decoration-none mt-1 ms-4">
        <img src="https://www.efghousewares.co.uk/Content/14/images/Deliverybanner/2b8af9cd62a84861b239107437c01880.png" className="freedel mt-1" alt />
      </a>
      <div className="mt-2 ms-1">
        <a href className="text-decoration-none "> HELP / FAQ</a>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Navbar