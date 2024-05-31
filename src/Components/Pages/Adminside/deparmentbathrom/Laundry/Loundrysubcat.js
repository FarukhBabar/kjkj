
import React from 'react'
import Footer from '../../../../Footer'
import { Link } from 'react-router-dom'
import "../../../../Style.css"
const Loundrysubcat = () => {
  return (
    <div><div>
  <div className="department">
    <p className="departments">DEPARTMENTS  BATHROOM</p>
  </div>
  <div className="container">
  <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/airers"><img src="/Images/Loundry1.png" alt className="img" /></Link>   
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/mirrormain"><img src="/Images/Loundry2.png" alt className="img1" /></Link> 
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/showermain"> <img src="/Images/Loundry3.png" alt className="img2" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/bathmatesmain"><img src="/Images/Loundry4.png" alt className="img3" /></Link>   
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/bathacessories"><img src="/Images/Loundry5.png" alt className="img" /></Link>   
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/showerhead"><img src="/Images/Loundry6.png" alt className="img1" /></Link> 
        </div>
      </div>
      
    </div>
  </div>
</div>
<Footer/>
</div>
  )
}

export default Loundrysubcat;