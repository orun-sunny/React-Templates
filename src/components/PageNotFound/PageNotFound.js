import React from "react";
import { NavLink } from "react-router-dom";
import SectionBg from "../../assets/Images/sectionBg.png";
import main from "../../assets/Images/bg.png"
const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        // background: `url(${SectionBg})`,
        backgroundColor:"black",
        backgroundAttachment: "fixed",
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="text-center ">
        {/* <h1 style={{ fontSize: "100px", color: "white" }}>404</h1> */}
        <h4 className="text-white">Pardon! Page not Found</h4>
        <img src={main} alt="" />
        <p className="text-muted">

        </p>
        <NavLink to="/home">

        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;