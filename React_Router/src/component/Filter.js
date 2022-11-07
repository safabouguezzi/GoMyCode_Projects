import React from "react";
import { Rating } from "react-simple-star-rating";
import "./style.css";

const Filter = ({ newRate, handelSearch }) => {
  // console.log('rendering Filter', newRate, "and", handelSearch)

  return (
    <div>
      <input
        placeholder="SEARCH MOVIE🔎"
        style={{
          margin: "auto",
          width: "16vw",
          height: "3vw",
          backgroundColor: "white",
          border: "none",
          borderRadius: "10px",
          color: "#032541",
          fontSize: "1.5em",
          fontWeight: "bolder",
        }}
        className="input"
        type="text"
        onChange={(e) => handelSearch(e.target.value)}
      ></input>

      {/* I used React Simple Rating package from https://www.npmjs.com/package/react-simple-star-rating */}
      <Rating
        onClick={(rate) => {
          newRate(rate);
        }}
      />
    </div>
  );
};
export default Filter;
