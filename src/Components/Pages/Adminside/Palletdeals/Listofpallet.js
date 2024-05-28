import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Adminnavbar from '../Adminnavbar';

const Listofproducts = () => {
    const [user, setUsers] = useState([]);
    

    useEffect(() => {
      axios.get("http://localhost:8001/api/v1/data/paletuser")
        .then(response => setUsers(response.data))
        .catch(error => console.log(error));
    }, []);
    const deleteuser = async(id)=>{
        // console.log(id)
        try {
            let result= await fetch(`http://localhost:8001/api/v1/data/paletuserid/${id}`,{
          method:"delete"
       
        })
        result= await result.json()
        if(result){
            alert("Item Deleted Sucessfully")
        }
        
       
    
        } catch (error) {
            alert("Error in deleting data")
        }
        
        
      }
    
  return (
    <div>
        <Adminnavbar/>
    <div className='container w-75'>
           <h4 className='my-4 text-center text-warning display-4 fw-bold'>List of Pallets Products</h4>
           <Link to="/pallet" ><button className='btn btn-success mb-2 w-10'>+ Add New Product </button></Link>  
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
                                             <Link to={`/listpal/${ele._id}`} className='btn btn-success'>Edit</Link>
                                             <a onClick={()=>deleteuser(ele._id)} className='btn btn-danger ms-2'>Delete</a>
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
  )
}

export default Listofproducts