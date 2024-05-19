import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import styles from "./Layout.module.css";
import cn from "classnames";

import Button from "../../components/Button/Button";

import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { MdMotionPhotosOff } from "react-icons/md";

import photo from "../../../public/avatar.avif";

import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../store/store";
import { getProfile, userActions } from "../../store/user.slice";

const Layout = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch<AppDispath>();
   const profile = useSelector((s: RootState) => s.user.profile);
   const items = useSelector((s: RootState) => s.cart.items);

   useEffect(() => {
      dispatch(getProfile());
   }, [dispatch]);

   const logout = () => {
      dispatch(userActions.logout());
      navigate("/auth/login");
   };

   return (
      <div className={styles["layout"]}>
         <div className={styles["layout_sidebar"]}>
            <div className={styles["user"]}>
               <img src={photo} alt="" className={styles["user_photo"]} />
               <h3 className={styles["user_name"]}>{profile?.name}</h3>
               <h3 className={styles["user_email"]}>{profile?.email}</h3>
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
                  <span>
                     Корзина:{" "}
                     {items.reduce((acc, item) => {
                        return (acc = acc + item.count);
                     }, 0)}
                  </span>
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
