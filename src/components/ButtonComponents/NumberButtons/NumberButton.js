import React from "react";


const NumberButton = props => {
  console.log(props);
  return (
    <button className="number_button" >
       {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.numbers}
    </button>
  );
};
export default NumberButton;