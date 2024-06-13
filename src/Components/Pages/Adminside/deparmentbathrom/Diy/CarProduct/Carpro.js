
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Carprocard from './Carprocard';

const Carpro = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/v1/data/carprofreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Carprocard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Carpro;

