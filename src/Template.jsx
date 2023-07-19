import React, { useEffect, useState } from "react";
import Topbar from "./Template/Topbar";
import Navbar from "./Template/Navbar";
// import TopNewsSlider from "./Template/TopNewsSlider";
import MainNewsSlider from "./Template/MainNewsSlider";
// import Featured from "./Template/Featured";
import Footer from "./Template/Footer";
import Popular from "./Template/Popular";
import EducationSports from "./Template/EducationSports";
import { useParams } from "react-router";
import axios from "axios";

const Template = () => {
  // 64aeab7fe8713888bf0df393
  const { id } = useParams();

  const [agencyDetails, setAgencyDetails] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/${id}/get-publication-details`
      );
      setAgencyDetails(response.data.data[0]);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {agencyDetails && <Topbar agencyDetails={agencyDetails} />}
      <Navbar />
      {/* <TopNewsSlider /> */}
      {agencyDetails && <MainNewsSlider agencyDetails={agencyDetails} />}
      {/* <MainNewsSlider /> */}
      {/* <Featured /> */}
      <EducationSports />
      <Popular />
      {agencyDetails && <Footer agencyDetails={agencyDetails} />}
    </div>
  );
};

export default Template;
