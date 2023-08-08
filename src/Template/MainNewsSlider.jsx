import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router";

const MainNewsSlider = ({ agencyDetails }) => {
  // console.log(agencyDetails);
  const navigate = useNavigate();
  console.log("MainNewsSlider Called");
  return (
    <div className="container-fluid py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Carousel
              showControls
              showIndicators
              infiniteLoop
              showThumbs={false}
            >
              <div className="w-100 d-block" style={{ height: 435 }}>
                <img src={require("./img/news-700x435-1.jpg")} alt="..." />
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
              <div className="w-100 d-block" style={{ height: 435 }}>
                <img src={require("./img/news-700x435-2.jpg")} alt="..." />
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="w-100 d-block" style={{ height: 435 }}>
                <img src={require("./img/news-700x435-1.jpg")} alt="..." />
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </Carousel>
          </div>
          <div className="col-lg-4">
            <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
              <h3 className="m-0">Categories</h3>
              <p
                className="text-secondary font-weight-medium text-decoration-none"
                href=""
              >
                View All
              </p>
            </div>
            <div
              className="position-relative overflow-hidden mb-3"
              style={{ height: 80 }}
              onClick={() =>
                navigate(`/${agencyDetails._id}/Category/Political`, {
                  state: { agencyDetails },
                })
              }
            >
              <img
                className="img-fluid w-100 h-100"
                src={require("./img/cat-500x80-1.jpg")}
                style={{ objectFit: "cover" }}
              />
              <p className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
                Political
              </p>
            </div>
            <div
              className="position-relative overflow-hidden mb-3"
              style={{ height: 80 }}
              onClick={() =>
                navigate(`/${agencyDetails._id}/Category/Bollywood`, {
                  state: { agencyDetails },
                })
              }
            >
              <img
                className="img-fluid w-100 h-100"
                src={require("./img/cat-500x80-2.jpg")}
                style={{ objectFit: "cover" }}
              />
              <p className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
                Bollywood
              </p>
            </div>
            <div
              className="position-relative overflow-hidden mb-3"
              style={{ height: 80 }}
              onClick={() =>
                navigate(`/${agencyDetails._id}/Category/Education`, {
                  state: { agencyDetails },
                })
              }
            >
              <img
                className="img-fluid w-100 h-100"
                src={require("./img/cat-500x80-3.jpg")}
                style={{ objectFit: "cover" }}
              />
              <p className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
                Education
              </p>
            </div>
            <div
              className="position-relative overflow-hidden"
              style={{ height: 80 }}
              onClick={() =>
                navigate(`/${agencyDetails._id}/Category/Healthcare`, {
                  state: { agencyDetails },
                })
              }
            >
              <img
                className="img-fluid w-100 h-100"
                src={require("./img/cat-500x80-4.jpg")}
                style={{ objectFit: "cover" }}
              />
              <p className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
                Healthcare
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNewsSlider;
