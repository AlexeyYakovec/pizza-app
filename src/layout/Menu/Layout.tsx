import { NavLink, Outlet, useNavigate } from "react-router-dom";

import styles from "./Layout.module.css";

import Button from "../../components/Button/Button";

import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { MdMotionPhotosOff } from "react-icons/md";

import photo from "../../../public/avatar.avif";

import cn from "classnames";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { userActions } from "../../store/user.slice";

const Layout = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch<AppDispatch>();

   const logout = () => {
      dispatch(userActions.logout());
      navigate("/auth/login");
   };

   return (
      <div className={styles["layout"]}>
         <div className={styles["layout_sidebar"]}>
            <div className={styles["user"]}>
               <img src={photo} alt="" className={styles["user_photo"]} />
               <h3 className={styles["user_name"]}>Ярослав Журавлев</h3>
               <h3 className={styles["user_email"]}>yakovec2222@gmail.com</h3>
            </div>

            <div className={styles["menu"]}>
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     cn(styles["link"], {
                        [styles.active]: isActive,
                     })
                  }
               >
                  <RxHamburgerMenu className={styles["link-svg"]} />
                  Меню
               </NavLink>
               <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                     cn(styles["link"], {
                        [styles.active]: isActive,
                     })
                  }
               >
                  <PiShoppingCartSimpleFill className={styles["link-svg"]} />
                  Корзина
               </NavLink>
            </div>
            <Button className={styles["button-layout"]} onClick={logout}>
               <MdMotionPhotosOff className={styles["link-svg"]} />
               <span>Выйти</span>
            </Button>
         </div>
         <div className={styles["content"]}>
            <Outlet />
         </div>
      </div>
   );
};

export default Layout;
