import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router";
import axios from "axios";

const MainNewsSlider = ({ agencyDetails, breakingNews }) => {
  const navigate = useNavigate();

  const [categories, setCategory] = useState();
  const getCategories = async () => {
    try {
      const response = await axios.get(
        "http://174.138.101.222:8080/getmastercategories"
      );
      setCategory(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container-fluid py-3">
      <div className="container">
        <div className="row row-col3-3">
          <div className="col-lg-8">
            <Carousel
              showControls
              showIndicators
              infiniteLoop
              showThumbs={false}
            >
              {breakingNews.length &&
                breakingNews.map((news) => {
                  return (
                    <div
                      key={news._id}
                      className="w-100 d-block"
                      style={{ height: 435 }}
                      onClick={() => {
                        console.log("Img clicked");
                        navigate(
                          `/${agencyDetails._id}/DetailedNews/${news._id}`,
                          {
                            state: {
                              item: news,
                              agencyDetails: agencyDetails,
                            },
                          }
                        );
                      }}
                    >
                      <img
                        src={
                          news.image
                            ? `http://174.138.101.222:8080${news.image}`
                            : `https://www.newsclick.in/sites/default/files/2018-09/xfakenews_0.jpg.pagespeed.ic_.232PSP6q2x_0.jpg`
                        }
                        alt="..."
                      />
                      <h5>{news.title}</h5>
                      <p>{news.short_details}</p>
                    </div>
                  );
                })}
            </Carousel>
            <div style={{ backgroundColor: "gray", height: "37%" }}>
              <img
                src={require("./img/Advslider.jpg")}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-1">
              <h3 className="m-0">Categories</h3>
            </div>
            {categories &&
              categories.map((item) => {
                return (
                  <div
                    className="position-relative overflow-hidden mb-2"
                    style={{ height: "11%",backgroundColor:'rgb(232, 232, 232)' }}
                    onClick={() =>
                      navigate(
                        `/${agencyDetails._id}/Category/${item.categories_Name_Url}`,
                        {
                          state: { agencyDetails },
                        }
                      )
                    }
                  >
                    {/* <img
                      className="img-fluid w-100 h-100"
                      src={require("./img/cat-500x80-1.jpg")}
                      style={{ objectFit: "cover" }}
                    /> */}
                    <p className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none">
                      {item.categories_Name_Hindi}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNewsSlider;
