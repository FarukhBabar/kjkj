import React from 'react'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const Poundline = () => {
  return (
    <div>
       <div>
  <div className="department">
    <p className="departments">Pound Lines</p>
    <p className="poundtext pb-3">Every shopper enjoys a bargain, so why not stock up on wholesale pound lines and start catering for your customer base today? Here at EFG Housewares, we have a host of pound <br /> line wholesale options, with carefully selected products available to buy in bulk and add to your shelves wi...</p>
  </div>
  {/* ---------------cards------------------ */}
  <div className="container">
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/bathroombeauty"><img src="../Images/Item → Link.png" alt className="img" /></Link>   
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/firstaid"><img src="../Images/Item → Link (7).png" alt className="img1" /></Link> 
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/electric"> <img src="../Images/Item → Link (6).png" alt className="img2" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/Diy"><img src="../Images/Item → Link (5).png" alt className="img3" /></Link>   
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/Disposables Party Bin Liners"><img src="../Images/Item → Link (4).png" alt className="img" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/Craft"> <img src="../Images/Item → Link (3).png" alt className="img1" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/Carproduct"><img src="../Images/Item → Link (2).png" alt className="img2" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/Candles Air Freshner"><img src="../Images/Item → Link (1).png" alt className="img3" /></Link>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/Food"><img src="../Images/Item → Link (11).png" alt className="img" /></Link> 
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <a href><img src="../Images/Item → Link (18).png" alt className="img1" /></a> 
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <a href><img src="../Images/Item → Link (17).png" alt className="img2" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <a href><img src="../Images/Item → Link (16).png" alt className="img3" /></a>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <a href><img src="../Images/Item → Link (15).png" alt className="img" /></a> 
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <a href><img src="../Images/Item → Link (14).png" alt className="img1" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <a href><img src="../Images/Item → Link (13).png" alt className="img2" /></a> 
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <a href><img src="../Images/Item → Link (12).png" alt className="img3" /></a>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <a href><img src="../Images/Item → Link (10).png" alt className="img" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <a href> <img src="../Images/Item → Link (9).png" alt className="img1" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <a href><img src="../Images/Item → Link (8).png" alt className="img2" /></a>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <a href><img src="../Images/Item → Link (19).png" alt className="img3" /></a>
        </div>
      </div>
    </div>
  </div>
</div>
    <Footer/>
    </div>
  )
}

export default Poundline