import { Link, Outlet } from "react-router-dom";

import styles from "./Layout.module.css";

import Button from "../../components/Button/Button";

import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { MdMotionPhotosOff } from "react-icons/md";

import photo from "../../assets/img/avatar.avif";

const Layout = () => {
   return (
      <div className={styles["layout"]}>
         <div className={styles["layout_sidebar"]}>
            <div className={styles["user"]}>
               <img src={photo} alt="" className={styles["user_photo"]} />
               <h3 className={styles["user_name"]}>Ярослав Журавлев</h3>
               <h3 className={styles["user_email"]}>yakovec2222@gmail.com</h3>
            </div>

            <div className={styles["menu"]}>
               <Link to="/" className={styles["link"]}>
                  <RxHamburgerMenu className={styles["link-svg"]} />
                  Меню
               </Link>
               <Link to="/cart" className={styles["link"]}>
                  <PiShoppingCartSimpleFill className={styles["link-svg"]} />
                  Корзина
               </Link>
            </div>
            <Button className={styles["button-layout"]}>
               <MdMotionPhotosOff className={styles["link-svg"]} />
               <span>Выйти</span>
            </Button>
         </div>
         <div className={styles["outlet"]}>
            <Outlet />
         </div>
      </div>
   );
};

export default Layout;
