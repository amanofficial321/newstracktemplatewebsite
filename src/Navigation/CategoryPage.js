import Topbar from "../Template/Topbar";
import Navbar from "../Template/Navbar";
import axios from "axios";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Template/Footer";

const CategoryPage = () => {
  const location = useLocation();
  console.log("Category Page Called");
  const navigate = useNavigate();
  const { category } = useParams();
  const { id } = useParams();
  const [data, setData] = useState();
  const getData = async () => {
    try {
      let response = await axios.get(
        `http://174.138.101.222:8080/${location.state.agencyDetails._id}/get-Postnews/${category}`
      );
      console.log("Category API Called");
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Topbar />
      <Navbar agencyDetails={location.state.agencyDetails} />
      <div className="row">
        <div className="col-lg-12 py-3">
          <div className="bg-light py-2 px-4 mb-3">
            <h3 className="m-0">{category}</h3>
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="col-lg-12 py-3 d-flex"
          style={{
            gap: "5px",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {data &&
            data.reverse().map((item, index) => {
              return (
                <div
                  key={index}
                  className="card"
                  style={{ minWidth: "18rem", width: "20rem" }}
                >
                  <img
                    // src={item.image}
                    src={`http://174.138.101.222:8080${item.image}`}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "200px" }}
                  />
                  <div className="card-body  ">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.short_details}</p>
                    <a
                      //   href="#"
                      className="btn btn-primary mx-auto d-flex justify-content-center "
                      //   style={{ width: "150px", }}
                      onClick={() => {
                        navigate(`/${id}/DetailedNews/${item._id}`, {
                          state: {
                            item: item,
                            agencyDetails: location.state.agencyDetails,
                          },
                        });
                      }}
                    >
                      Read In Detail
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Footer agencyDetails={location.state.agencyDetails} />
    </div>
  );
};

export default CategoryPage;
