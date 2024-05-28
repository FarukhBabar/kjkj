import React from 'react'
import Footer from '../Footer'

const Contactus = () => {
  return (
    <div>
        <div className="container">
  <div className="row  mt-3">
    <div className="col-lg-12 col-md-12 col-sm-12 ">
      <center> <u><h2 className="contact">Contact US</h2></u></center>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div>
        <p>  <b>ADDRESS:</b> 29 Mollison Avenue, Brimsdown, Enfield, EN3 7NL</p>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div>
        <p>  <b> EMAIL : </b>enquiries@efghousewares.co.uk</p>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div>
        <p>  <b> TELEPHONE:</b> 0208 805 5756</p>
      </div>
    </div>
  </div>
  <div className="row mt-3">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div>
        <p> Please Complete The Form Below</p>
        <hr />
      </div>
    </div>
  </div>
  <div className="row contactform">
    <div className="col-md-8">
      <form action="/post" method="post">
        <input className="form-control" name="name" placeholder="Name..." /><br />
        <input className="form-control" name="phone" placeholder="Phone..." /><br />
        <input className="form-control" name="email" placeholder="E-mail..." /><br />
        <textarea className="form-control" name="text" placeholder="How can we help you?" style={{height: 150}} defaultValue={""} /><br />
        <input className="butto" type="submit" defaultValue="Send" /><br /><br />
      </form>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Contactus