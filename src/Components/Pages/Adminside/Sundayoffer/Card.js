import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ user }) => {
  return (
    <div className="col-6 col-sm-2 col-md-4 col-lg-3 mt-4">
      <div className="card11212 ">
        <h5 className='image'>
          {/* <Link to={`/freedel/${user._id}`} className="btn"> */}
            {user.image && (
              <img
                src={`http://localhost:8001/${user.image}`}
                alt={user.name}
                className="img-fluid border"
                style={{ height: '120px', width: '200px' }}
              />
            )}
          {/* </Link> */}
        </h5>
        <h5 className='ms-1'>{user.name}</h5>
        <p className='ms-1'>{user.title.slice(0, 25)}...</p>
        <center>
          <div className="d-flex">
            <h5>${user.price}</h5>
            <small className="text-danger">(36% off)</small>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Card;
