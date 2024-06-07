
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import STcards from './STcard';


const St = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/v1/data/stfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <STcards key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default St;
 