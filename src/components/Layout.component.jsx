import React from "react";
import { Outlet } from "react-router-dom";

// Style Imports
import "./Layout.styles.css";

function Layout() {
  return (
    <div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
