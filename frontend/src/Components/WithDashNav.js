import React from "react";
import DashNav from "./DashNav";
import { Outlet } from "react-router";

const WithNav = () => {
  return (
    <>
      <DashNav />
      <Outlet />
    </>
  );
};

export default WithNav;
