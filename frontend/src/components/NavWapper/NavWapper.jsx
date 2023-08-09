import React from "react";
import { Outlet } from "react-router-dom";
const NavWapper = () => {
  return (
    <div>
      NavWapper
      <Outlet />
    </div>
  );
};

export default NavWapper;
