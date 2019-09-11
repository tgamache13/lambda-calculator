import React, { setState } from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import { numbers } from "../../data";

const Display = props => {
  
  return <div className="display">{/* Display any props data here */}
  {props.ninth}</div>;
};

export default Display;