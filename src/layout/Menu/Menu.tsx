import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <div>
         <div>
            <Link to="/">menu</Link>
            <Link to="/cart">cart</Link>
         </div>
         <div>
            <Outlet />
         </div>
      </div>
   );
};

export default Layout;
