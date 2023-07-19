import Topbar from "../Template/Topbar";
import Navbar from "../Template/Navbar";
import axios from "axios";
import React from "react";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Template/Footer";
import "./ViewNews.scss";
import SingleNews from "../Template/SingleNews";
const ViewNews = () => {
  const location = useLocation();
  const data = location?.state?.item;
  console.log(location);
  return (
    <div>
      <Topbar agencyDetails={location.state.agencyDetails} />
      <Navbar />
      {/* <div className="view-news ">
        <h2 className="text-danger px-4">{data?.title}</h2>
        <img src={data?.image} className="px-4" />
        <p className="bhaskar px-4">{data?.body}</p>
      </div> */}
      <SingleNews prop={data} />
      <Footer agencyDetails={location.state.agencyDetails} />
    </div>
  );
};

export default ViewNews;
