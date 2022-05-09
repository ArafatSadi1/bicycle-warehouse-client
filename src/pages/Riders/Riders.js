import React from "react";
import classic from '../../images/classic.jpg'

const Riders = () => {
  return (
    <div className="row my-5 border shadow container mx-auto">
      <div className="col-lg-8 mx-auto text-center p-3">
        <img width={150} src={classic} alt="" />
        <h3>Where All Riders Belong</h3>
        <p>
          Things are better as a member. Get first and exclusive access to the
          newest styles & innovations, birthday rewards, points for purchases
          and more.
        </p>
        <button className="btn btn-warning">Join Us</button>
      </div>
    </div>
  );
};

export default Riders;
