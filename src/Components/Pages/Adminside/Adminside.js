// import React from 'react'
// import { Link } from 'react-router-dom'

// const Adminside = () => {
//   return (
//     <div>
//   <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">WellCome To Admin Panal</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon" />
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/adminsunday">SundayOffer</Link>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Features</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Pricing</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>



//     </div>
//   )
// }

// export default Adminside

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Listofproducts = () => {
    const [user, setUsers] = useState([]);
    const setUsersData = async() =>{
      let result = await fetch("http://localhost:8001/api/v1/data/user")
      result = await result.json()       
      setUsers(result)        
      console.log(result)
  }

    // useEffect(() => {
    //   axios.get("http://localhost:8001/api/v1/data/user")
    //     .then(response => setUsers(response.data))
    //     .catch(error => console.log(error));
    // }, []);
    useEffect(()=>{
      setUsersData()
  },[])
    const deleteuser = async(id)=>{
        // console.log(id)
        try {
            let result= await fetch(`http://localhost:8001/api/v1/data/userid/${id}`,{
          method:"delete"
       
        })
        result= await result.json()
        if(result){
          setUsersData()
        }
        
       
    
        } catch (error) {
            alert("Error in deleting data")
        }
        
        
      }
    
  return (
    <>
       <div>   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/adminsunday">SundayOffer</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>         </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div> </nav>



    </div>
    
   
    <div>
     
     <div className='container w-75'>
           <h4 className='my-4 text-center text-warning display-4 fw-bold'>List of SundayOffer Products</h4>
     
           <table class="table table-striped table-hover">
                 <thead>
                     <tr className='btn-dark text-light text-center'>
                         <th scope="col">#</th>
                         <th scope="col">Name</th>
                         <th scope="col">Title</th>
                         <th scope="col">Price</th>
                         <th scope="col">Image</th>
                         <th scope="col">Operations</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         user.map((ele,ind)=>{
                             return(
                                 <>
                                     <tr>
                                         <th scope="row">{ind+1}</th>
                                         <td>{ele.name}</td>
                                         <td>{ele.title}</td>
                                         <td>{ele.price}</td>
                                         <td> {ele.image && (
                              <img 
                            src={`http://localhost:8001/${ele.image}`} 
                                     alt={ele.name} 
                                         className='img-fluid' 
                                    style={{ height: '70px', width: '100px' }}
                                          />
                               )}</td>
                                         <td>
                                             <Link to={`/list/${ele._id}`} className='btn btn-success'>Edit</Link>
                                             <a onClick={()=>deleteuser(ele._id)} className='btn btn-danger'>Delete</a>
                                         </td>
                                     </tr>
                                 </>
                             )
                         })
                     }
     
                 </tbody>
         </table>
     
     
         </div>
     
     
         </div>
</>
  )
}

export default Listofproducts