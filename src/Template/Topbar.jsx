import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addUser } from "../redux/slices/UserSlice";
import { memo } from "react";
const TopbarStart = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const agencyDetails = useSelector((state) => {
    return state.User;
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/${id}/get-publication-details`
      );
      dispatch(addUser(response.data.data[0]));
      // console.log("Fetch Data API called topbar page");
    } catch (error) {
      console.log(error);
    }
  };
  if (!agencyDetails._id) {
    fetchData();
  }
  // console.log(agencyDetails);
  // console.log("Topbar Called");
  return (
    <div className="container-fluid">
      <div className="row align-items-center py-2 px-lg-5">
        {/* <div className="col-lg-4">
          <div className="navbar-brand d-none d-lg-block">
            <h1 className="m-0 display-5 ">
              <p className="text-danger" style={{ textOverflow: "unset" }}>
                {agencyDetails.publication_name}
              </p>
            </h1>
          </div>
        </div> */}
        <div
          onClick={() => navigate(`/Home/${id}`)}
          className="col-lg-3 col-md-4 col-sm-12 text-center text-lg-right d-flex"
        >
          <img
            // className="img-fluid"
            src={`http://174.138.101.222:8080${agencyDetails.logo_small}`}
            alt=""
            width={"100%"}
            height={"100px"}
          />
        </div>
        <div className="col-lg-9 col-md-8 text-center text-lg-right d-flex justify-content-center ">
          <img
            // className="img-fluid"
            src={require("./img/adv.png.jpg")}
            alt="Advertisement Topbar"
            width={"100%"}
            height={"100px"}
            // style={{ backgroundColor: "gray" }}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(TopbarStart);
