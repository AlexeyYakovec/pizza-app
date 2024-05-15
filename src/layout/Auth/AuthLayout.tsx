import styles from "./AuthLayout.module.css";

import { Outlet } from "react-router-dom";

import logo from "/logo.svg";

function AuthLayout() {
   return (
      <div className={styles["layout"]}>
         <div className={styles["logo"]}>
            <img src={logo} alt="Логотип компании" />
         </div>
         <div className={styles["content"]}>
            <Outlet />
         </div>
      </div>
   );
}

export default AuthLayout;
