import styles from "./Menu.module.css";

import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";

const Menu = () => {
   return (
      <>
         <div className={styles["head"]}>
            <Headling>Menu</Headling>
            <Search placeholder="Введите блюдо или состав..." />
         </div>
      </>
   );
};

export default Menu;
