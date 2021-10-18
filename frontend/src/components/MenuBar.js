import React from "react";

export const MenuBar = () => {
  return (
    <div className="MenuBar box-shadow">
      <a>
        <img src="/static/images/Winni/home-outline-12.webp" className="" />
        <p>Home</p>
      </a>
      <a>
        <img src="/static/images/Winni/shope-outline-10.webp" className="" />
        <p>Categories</p>
      </a>
      <a>
        <img
          src="/static/images/Winni/location-ouline-new-10.webp"
          className=""
        />
        <p>City</p>
      </a>
      <a>
        <img
          src="/static/images/Winni/person-outline-new-10.webp"
          className=""
        />
        <p>Profile</p>
      </a>
    </div>
  );
};
