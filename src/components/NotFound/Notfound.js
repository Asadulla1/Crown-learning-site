import React from "react";
import img from "./undraw_Page_not_found_re_e9o6.png";
const Notfound = () => {
  return (
    <div className="App">
      <img src={img} alt="" />
      <h1 className="mt-2 mb-5">
        The page you are looking for is not available at this moment!!
      </h1>
    </div>
  );
};

export default Notfound;
