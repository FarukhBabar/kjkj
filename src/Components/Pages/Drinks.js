import React from 'react'
import '../Style.css'
const Drinks = () => {
  return (
    <div>
         <div>
  <h2 className="newarrival">Drink</h2>
  <hr />
  <hr className="mt-5" />
  <div className="showing">
  </div>
  <div>
    <div className="d-flex">
      <div className="ms-4 lite"><h2 className="newar">Shop By</h2>
        <h2 className="newarr">STOCK STATUS </h2>
        <p className="mew">IN STOCK <input type="checkbox" id="subscribe" name="subscribe" defaultValue="yes" className="ms-5" /></p> 
        <p className="mew">OUT OF STOCK  <input type="checkbox" id="subscribe" name="subscribe" defaultValue="yes" className="ms-2" /></p>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
            <div className="card card12 ms-2">
              <div>
                <img src="https://www.efghousewares.co.uk/Content/14/images/Productimages/rsz_0_400_52ced_011506.jpg" className="card-titl" alt />
                <div className="card-body">
                  <h2 className="pack">GOLDEN PRIDE 75CL <br /> APPLE
                    PK12</h2>
                  <h6 className="code"><b>Code:</b> 011506</h6> 
                  <button className="butt">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
            <div className="card card12 ">
              <div>
                <img src="https://www.efghousewares.co.uk/Content/14/images/Productimages/rsz_0_400_64d4e_087504.JPG" className="card-img-top card-titl" alt />
                <div className="card-body">
                  <h2 className="pack">GOLDEN PRIDE 75CL BLUE <br /> COCKTAIL PK12</h2>
                  <h6 className="code"><b>Code:</b>087504</h6>
                  <button className="butt">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
            <div className="card card12">
              <div>
                <img src="https://www.efghousewares.co.uk/Content/14/images/Productimages/rsz_0_400_00d8b_087503.JPG" className="card-img-top card-titl" alt />
                <div className="card-body">
                  <h2 className="pack">GOLDEN PRIDE 75CL PINK <br />
                    COCKTAIL PK12</h2>
                  <h6 className="code"><b>Code:</b> 087503</h6>
                  <button className="butt">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
            <div className="card card12">
              <div>
                <img src="https://www.efghousewares.co.uk/Content/14/images/Productimages/rsz_0_400_6ed36_011504.jpg" className="card-img-top card-titl" alt />
                <div className="card-body">
                  <h2 className="pack">GOLDEN PRIDE 75CL RED <br />
                    GRAPE PK12</h2>
                  <h6 className="code"><b>Code:</b> 011504</h6>
                  <button className="butt">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div></div>

    </div>
  )
}

export default Drinks