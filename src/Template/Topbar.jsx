import React from "react";

const TopbarStart = ({ agencyDetails }) => {
  // console.log(agencyDetails);
  return (
    <div className="container-fluid">
      {/* <div className="row align-items-center bg-light px-lg-5">
        <div className="col-12 col-md-8">
          <div className="d-flex justify-content-between">
            <div
              className="bg-primary text-white text-center py-2"
              style={{ width: 100 }}
            >
              Trending
            </div>
            <div
              className=" position-relative d-inline-flex align-items-center ml-3"
              style={{ width: "calc(100% - 100px)", paddingLeft: 90 }}
            >
              <div className="text-truncate">
                <a className="text-secondary" href="">
                  Your Only Destination for Most Authentic News
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-right d-none d-md-block">
          {`${date.toLocaleDateString()}`}
        </div>
      </div> */}
      <div className="row align-items-center py-2 px-lg-5">
        <div className="col-lg-4">
          <div className="navbar-brand d-none d-lg-block">
            <h1 className="m-0 display-5 ">
              <span className="text-danger">
                {agencyDetails.publication_name}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-lg-8 text-center text-lg-right d-flex justify-content-end">
          <img
            className="img-fluid"
            src={`http://174.138.101.222:8080${agencyDetails.logo_small}`}
            alt=""
            width={"200px"}
            height={"100px"}
          />
        </div>
      </div>
    </div>
  );
};

export default TopbarStart;
