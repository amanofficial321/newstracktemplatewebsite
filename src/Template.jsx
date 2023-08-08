import React, { useEffect, useMemo, useState } from "react";
import Topbar from "./Template/Topbar";
import Navbar from "./Template/Navbar";
import MainNewsSlider from "./Template/MainNewsSlider";
import Footer from "./Template/Footer";
import EducationSports from "./Template/EducationSports";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/slices/UserSlice";

const Template = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [agencyDetails, setAgencyDetails] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://174.138.101.222:8080/${id}/get-publication-details`
      );
      setAgencyDetails(response.data.data[0]);
      dispatch(addUser(response.data.data[0]));
      console.log("Fetch Data API called template page");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Topbar />
      {agencyDetails && <Navbar agencyDetails={agencyDetails} />}
      {agencyDetails && <MainNewsSlider agencyDetails={agencyDetails} />}
      {agencyDetails && <EducationSports agencyDetails={agencyDetails} />}
      {agencyDetails && <Footer agencyDetails={agencyDetails} />}
    </div>
  );
};

export default Template;
