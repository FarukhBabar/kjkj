import React from 'react'

const Footer = () => {
  return (
    <div> <div className="container footer-sec mt-3 ">
    <div className=" row  tttt w-100% ">
      <div className="col-lg-6 col-md-6 col-sm-12 w-100%">
        <p className="te ms-4">Stay up to date with OFFERS by signing up for our newsletter:</p>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 ms-1 d-flex w-100%">
        <input className="input2" type="text" placeholder="Enter Your Email Address" /> 
        <button className="input222">SUBMIT</button>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 d-flex icon">
        <div><p className="te">FOLLOW US</p></div>
        <div><a href className="text-decoration-none "><i className="bi bi-facebook ms-2" /></a></div>
        <div><a href className="text-decoration-none"><i className="bi bi-twitter ms-2" /></a></div>
        <div><a href className="text-decoration-none"><i className="bi bi-instagram ms-2" /></a></div>
      </div>
    </div>
  </div>
  {/* -------------------------FOOTER SECTION */}
  <div className="container w-100%">
    <div className="row  footer">
      <div className="col-lg-3 col-md-4 col-sm-12 ms-5 mt-2">
        <b><p>CUSTOMER SERVICE</p></b>
        <a href="/Contact.html" className="tex text-decoration-none text-black">Contact Us</a><br />
        <a href="/Aboutus.html" className="tex text-decoration-none text-black">About Us</a><br />
        <a href="/Delivery.html" className="tex text-decoration-none text-black">Delivery</a><br />
        <a href="/Export.html" className="tex text-decoration-none text-black">Export</a><br />
        <a href="/Help&FAQ.html" className="tex text-decoration-none text-black">Help / FAQ</a><br />
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 first mt-2">
        <b><p>Website</p></b>
        <a href="/Blog.html" className="tex text-decoration-none text-black">Blog</a><br />
        <a href="/Privacy Policy.html" className="tex text-decoration-none text-black">Privacy Policy</a><br />
        <a href="/Terma&condition.html" className="tex text-decoration-none text-black">Terms &amp; Conditions</a><br />
        <a href="/Cookies Policy.html" className="tex text-decoration-none text-black">Cookies Policy</a>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12 first mt-2 pb-3">
        <b><p>Contact Us</p></b>
        <a href className="tex text-decoration-none text-black">29 Mollison Avenue, Brimsdown, Enfield <br />, EN3 7NL</a><br />
        <a href className="tex text-decoration-none text-black">E : enquiries@efghousewares.co.uk</a><br />
        <a href className="tex text-decoration-none text-black">T: 0208 805 5756</a><br />
      </div>
    </div>
  </div>
</div>


  )
}

export default Footer