import React from "react";

const Lists = ({ images }) => {
  return (
    <ul>
      {images.map((img) => (
        <li key={img.alpha2Code}>
          <img src={img.flag}></img>
        </li>
      ))}
    </ul>
  );
};

export default Lists;
