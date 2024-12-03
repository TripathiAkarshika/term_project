import React from "react";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications


const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/shop.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">Cyber Monday Sale!! LIVE NOW!</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Fresh Finds, Shop Everything, Endless Choices – Shop the New Season Now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
