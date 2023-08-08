import axios from "axios";
import React, { useEffect, useState } from "react";

const EducationSports = ({ agencyDetails }) => {
  const categories = ["Political", "Bollywood", "Education", "Healthcare"];
  const [data, setData] = useState([]);
  const [fetch, setFetch] = useState(false);
  // console.log(data);
  console.log("Education Sports Called");

  const getData = async (categories) => {
    try {
      const promises = categories.map((category) =>
        axios.get(
          `http://174.138.101.222:8080/${agencyDetails._id}/get-Postnews/${category}`
        )
      );

      const responses = await Promise.all(promises);

      const newData = responses.map((response, index) => ({
        category: categories[index],
        data: response.data.data,
      }));

      setData((prevData) => [...prevData, ...newData]);
      setFetch(true);

      // console.log("data fetched");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(categories);
  }, []);
  return (
    // <div className="container-fluid">
    <div className="container">
      <div className="row">
        {fetch &&
          data.map((item, index) => {
            return (
              <div key={index} className="col-lg-12 py-3">
                <div className="bg-light py-2 px-4 mb-3">
                  {item.data.length > 0 && (
                    <h3 className="m-0">{item.category}</h3>
                  )}
                </div>
                <div
                  style={{
                    justifyContent: "space-between",
                  }}
                  className="mb-3 row owl-carousel owl-carousel-3 carousel-item-2 position-relative d-flex flex-wrap"
                >
                  {item.data
                    .reverse()
                    .slice(0, 2)
                    .map((news, index) => {
                      return (
                        <div
                          key={index}
                          className="position-relative col-sm-12 col-md-6"
                          style={{
                            height: "400px",
                          }}
                        >
                          <img
                            className="img-fluid w-100 h-75"
                            // src={news.image}
                            src={`http://174.138.101.222:8080${news.image}`}
                            style={{
                              objectFit: "cover",

                              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                              borderRadius: "1rem 1rem 0 0",
                            }}
                          />
                          <div
                            className="overlay position-relative bg-light"
                            style={{
                              borderRadius: "0 0 1rem 1rem",
                              boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
                            }}
                          >
                            <div className="mb-2" style={{ fontSize: 13 }}>
                              <a href="">Technology</a>
                              <span className="px-1">/</span>
                              <span>January 01, 2045</span>
                            </div>
                            <a className="h4 m-0" href="">
                              {news.title}
                            </a>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
    // </div>
  );
};

export default EducationSports;
