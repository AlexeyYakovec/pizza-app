import styles from "./Menu.module.css";

import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import ProductCard from "../../components/ProductCard/ProductCard";

const Menu = () => {
   return (
      <>
         <div className={styles["head"]}>
            <Headling>Menu</Headling>
            <Search placeholder="Введите блюдо или состав..." />
         </div>
         <div>
            <ProductCard
               id={1}
               description="Салями, руккола, помидоры, оливки"
               title="Наслаждение"
               rating={4.5}
               price={300}
               image="/product"
            />
         </div>
      </>
   );
};

export default Menu;
