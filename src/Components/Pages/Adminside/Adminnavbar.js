import React from 'react'
import "./admin.css"
import { Link } from 'react-router-dom'

const Adminnavbar = () => {
  return (
    <div>
        <div>
  <nav className="navbar navbar-expand-lg navbar-dark" >
    <div className="container-fluid">
      <a className="navbar-brand fw-bold" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/adminsunday">SundayOffer</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/listpal">Palletdeals</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/listarr">New Arrivals</Link></li>
        
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Department
            </a>
            <ul className="dropdown-menu">
              {/* <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li> */}
              <li>
               
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 FoodandDrink
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listfood">Foods</Link></li>
                  <li><Link className="dropdown-item" to="/listdrink">Drinks</Link></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="nav-item dropend">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="nav-item dropend">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Smoking
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listlighter">Lighter & Matches</Link></li>
                  <li><Link className="dropdown-item" to="/listelectric">Electrical</Link></li>
                  <li><Link className="dropdown-item" to="/listsmokigess">Smoking Essentials</Link></li>
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pound Lines
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listbathrom">Bathroom / Cosmetics / Beauty</Link></li>
                  <li><Link className="dropdown-item" to="/listfirstaid">First Aid/Pharmacy/Personal</Link></li>
                  <li><Link className="dropdown-item" to="/listelectricde">Electrical</Link></li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="nav-item dropend">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="nav-item dropend">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Bathroom
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listbathromde">Bathroom Scales</Link></li>
                  <li><Link className="dropdown-item" to="/listmirror">Mirrors</Link></li>
                  <li><Link className="dropdown-item" to="/listshower">Shower</Link></li>
                  <li><Link className="dropdown-item" to="/listbathmate">Bathmates</Link></li>
                  <li><Link className="dropdown-item" to="/listbathacess">Bathroom Acessories</Link></li>
                  <li><Link className="dropdown-item" to="/listshowhead">Shower Heads</Link></li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="nav-item dropend">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="nav-item dropend">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Disposible
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listdisposible">Bin Bag</Link></li>
                  <li><Link className="dropdown-item" to="/listTablewear">Table Wear</Link></li>
                
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Laundry
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listaiers">Airers</Link></li>
                  <li><Link className="dropdown-item" to="/listioring">Ironing Boards</Link></li>
                  <li><Link className="dropdown-item" to="/listlaacess">Loundry Acessories</Link></li>
                  <li><Link className="dropdown-item" to="/listshowhead">Shower Heads</Link></li>
                  
                </ul>
              </li>
              <li><Link className="dropdown-item" to="/listbatteries">Batteries</Link></li>
              <li><Link className="dropdown-item" to="/listphone">Phone Accessories</Link></li>
              <li><Link className="dropdown-item" to="/listobstical">OBSOLETE</Link></li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Textileaccessories
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listaprons">Aprons</Link></li>
                  <li><Link className="dropdown-item" to="/listbedding">Bedding</Link></li>
                  <li><Link className="dropdown-item" to="/listclothing">Clothing</Link></li>
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="nav-item dropend">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="nav-item dropend">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Diy
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listfreshner">Air Freshner</Link></li>
                  <li><Link className="dropdown-item" to="/listakonobol">Akzonobol</Link></li>
                 
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="nav-item dropend">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="nav-item dropend">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item dropend">
                <a className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Electrical
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/listclock">Clock</Link></li>
                  <li><Link className="dropdown-item" to="/listcamera">Camera</Link></li>
                 
                  {/* <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="nav-item dropend">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li className="nav-item dropend">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                        </a>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Action</a></li>
                          <li><a className="dropdown-item" href="#">Another action</a></li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/" >UserPanal</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/listcontact" >Contact Users</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

    
    </div>
  )
}

export default Adminnavbar