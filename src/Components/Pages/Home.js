import React from 'react'

import Footer from '../Footer'
const Home = () => {
  return (
    <>
   <div className="container">
  <div className="row ">
    <div className="col-lg-4 col-md-3 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/d933897ad6e74cd38b9a1deb550590b8.jpg" alt className="Home" />
    </div>
    <div className="col-lg-4 col-md-3 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/5ebeebd9814446248f57ebc0b6845f93.jpg" alt className="Home" />
    </div>
    <div className="col-lg-4 col-md-3 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/960a07b2eac5487f90acf4a04f2a1f82.jpg" alt className="Home" />
    </div>
  </div>
  <div className="row ">
    <div className="col-lg-6 col-md-6 col-sm-12"><img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/a6adbe3f11024640a51b1d6ace221296.jpg" alt className="banner" /></div>
    <div className="col-lg-6 col-md-6 col-sm-12"><img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/5ba271744e4846838cf41949fceeaee5.jpg" alt className="banner" /></div>
  </div>
  <div className="row mt-3 revie">
    <div className="col-lg-12 col-md-12 col-sm-12 reviews">
      <p className="title">Customer Reviews</p>
      <div className="row  rrr ">
        <div className="col-lg-2 col-md-3 col-sm-12 card ms-4 mt-3" style={{width: '16rem', height: 169}}>
          <div className="star-rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" title="5 stars">☆</label>
            <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" title="4 stars">☆</label>
            <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" title="3 stars">☆</label>
            <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" title="2 stars">☆</label>
            <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" title="1 star">☆</label>
          </div>
          <div className="card-body">
            <h6 className="card-title">It was a really pleasant experiance</h6>
            <h6 className="card-subtitle mb-2 text-muted">It was a really pleasant experiance</h6>
            <br />
            <p className="time">Yanky, 1 day ago</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12  card  ms-4 mt-3" style={{width: '16rem', height: 169}}>
          <div className="star-rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" title="5 stars">☆</label>
            <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" title="4 stars">☆</label>
            <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" title="3 stars">☆</label>
            <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" title="2 stars">☆</label>
            <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" title="1 star">☆</label>
          </div>
          <div className="card-body">
            <h6 className="card-title">It was a really pleasant experiance</h6>
            <h6 className="card-subtitle mb-2 text-muted">It was a really pleasant experiance</h6>
            <br />
            <p className="time">Yanky, 1 day ago</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12  card  ms-4 mt-3" style={{width: '16rem', height: 169}}>
          <div className="star-rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" title="5 stars">☆</label>
            <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" title="4 stars">☆</label>
            <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" title="3 stars">☆</label>
            <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" title="2 stars">☆</label>
            <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" title="1 star">☆</label>
          </div>
          <div className="card-body">
            <h6 className="card-title">It was a really pleasant experiance</h6>
            <h6 className="card-subtitle mb-2 text-muted">It was a really pleasant experiance</h6>
            <br />
            <p className="time">Yanky, 1 day ago</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12  card ms-4 mt-3" style={{width: '16rem', height: 169}}>
          <div className="star-rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" title="5 stars">☆</label>
            <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" title="4 stars">☆</label>
            <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" title="3 stars">☆</label>
            <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" title="2 stars">☆</label>
            <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" title="1 star">☆</label>
          </div>
          <div className="card-body">
            <h6 className="card-title">It was a really pleasant experiance</h6>
            <h6 className="card-subtitle mb-2 text-muted">It was a really pleasant experiance</h6>
            <br />
            <p className="time">Yanky, 1 day ago</p>
          </div>
        </div>
      </div>
      <div className="row rating mt-4">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <center><p className="card-subtitle ">Rated 4.5 / 5 based on  &nbsp;45 reviews  &nbsp;Showing our 4 &amp; 5 star reviews.</p> </center> 
        </div>
      </div>
      <center><img src="https://linkwwwebsite.000webhostapp.com/Group%2078.png" alt /></center>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/4b2b0dbd54e542779cf571cb9d88e848.jpg" alt className="ca" />
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/a8cbf64b039245b0aa6a47452697245b.jpg" alt className="ca" />
    </div>
  </div>
  {/* ------- */}
  <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/527e699024f941409e564a47f8f31403.jpg" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/0235edb4b34f4a358ff0c269790c3754.jpg" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/e82f6ca83cbb4a47a89c6cd323f177bc.jpg" alt className="caa" />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/4c036f1a459540fea3818a9782ca2ec2.jpg" alt className="caa" />
    </div>
  </div>
  <div className="row  ">
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/9af54e62b0bf4dfe804fb579fd3aba4d.jpg" className="caa " alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/c98f3771721d4e07a74c0675086585e8.jpg" className="caa " alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/d07ef40b8dce4d819c68b554a6eb632f.jpg" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/bcae3d9df54e4b8794777665d1ab1f24.jpg" className="caa" alt />
    </div>
  </div>
  <div className="row  ">
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/36cf74abf4fe4ed1a875c799650901e0.jpg" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/9b69c04a4e7247a28afb989450cf120d.jpg" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/9fa07f15533d4c568ad50e7fab6b8b6f.jpg" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="https://www.efghousewares.co.uk/Content/14/images/homebanner/228bd2a2b2ce400096c7c55df721d5e0.jpg" className="caa" alt />
    </div>
  </div>
  <div>
    <div className="mt-2 reviews">
      <p className="title1">WE ARE UK'S LARGEST INDEPENDENT WHOLESALER</p>
    </div>
    <p className="ms-2  mt-4">Welcome to EFG Housewares, your trusted <b>trade only</b> wholesaler with over 45 years of industry experience!
      Explore our extensive selection of 50,000+ products from 1,000+ reputable UK brands, now available online.
      Open a trade account today for seamless ordering and delivery, backed by our dedicated team who will assist
      you every single step of the way.</p>
    <p className="mt-3 ms-2">EFG: Everything under One Roof</p>
  </div>
  <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-12 form1">
      <center><h3 className="registerform text-white">CREATE AN ACCOUNT</h3></center>
      <p className="te ms-3">PLEASE CLICK ON THE REGISTER BUTTON BELOW TO CREATE AN ACCOUNT</p>
      <center><button className="sizebutton mb-3  ">REGISTER</button></center>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12  homeage ">
      <center><h3 className="registerform text-white">EMAIL</h3></center>
      <div className="formm">
        <div>
          <label className="ms-2">EMAIL</label>
          <input type="text" className="input" placeholder="Type Your Email" />
        </div>
        <div>
          <label className="ms-2" htmlFor>Password</label>
          <input type="text" className="input" placeholder="Type Your Password" />
        </div>
      </div>     
      <div className="logi d-flex">
        <div className="forgot"> <a href>FORGOT PASSWORD</a></div>
        <div>
          <button className=" sizebutton1 ms-2 ">LOGIN</button>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 mt-2 reviews">
      <p className="title">FEATURED BRANDS</p>
    </div>
  </div>
  <div className="row img-m">
    <div className="col-lg-12 col-md-12 col-sm-12 img-s d-flex">
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/655857d34d9f48f0bb57298ba4efa29c.jpg" alt className="sliimg sasa" />
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/142cc78ff34640d1899c77dfe0d66496.jpg" alt className="sliimg" />
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/02beb9a5e10c4f4a847406158222cda2.jpg" alt className="sliimg" />
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/c8ada3393abf463fa6f2a016e80386a6.jpg" alt className="sliimg" />
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/6436ee1233344abbbbcf90d82d69dae5.jpg" alt className="sliimg" />
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/37f51d5132b24473906028d623d30ab5.jpg" alt className="sliimg" />
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/2c689aaf4d9c48c990640f6c70fc55b8.jpg" alt className="sliimg" />
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/093f9422000e4e6883be7b281ae95545.jpg" alt className="sliimg" />
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/26cad78f12d9404cbf5c8a64fb1a888a.jpg" alt className="sliimg" />
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/dc65ce50a7434978ab3534eb2eecae01.jpg" alt className="sliimg" />
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/fd66e73b317d478ebd3c9c11560fa104.jpg" alt className="sliimg" />
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/88b88d29caef4765be995bc32e7aa862.jpg" alt className="sliimg" />
    </div>
  </div>
</div>
<Footer/>
</>
  )
}

export default Home