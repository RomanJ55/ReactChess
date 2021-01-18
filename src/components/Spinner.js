import React from "react";
import spinner from "../images/spinner.gif";

const Spinner = () => {
  return (
    <div className="center" style={{ display: "grid", marginTop: 100 }}>
      <img src={spinner} alt="" />
      <h3 style={{ fontSize: 40, paddingLeft: 35 }}>Loading.....</h3>
    </div>
  );
};

export default Spinner;
