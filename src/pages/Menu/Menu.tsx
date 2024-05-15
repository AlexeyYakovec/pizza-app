import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

import styles from "./Menu.module.css";

import { PREFIX } from "../../helpers/API";

import { Product } from "../../interfaces/product.interface";

import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import { MenuList } from "./MenuList/MenuList";

const Menu = () => {
   const [products, setProducts] = useState<Product[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | undefined>();

   const getMenu = async () => {
      try {
         setIsLoading(true);

         const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
         setProducts(data);
         setIsLoading(false);
      } catch (e) {
         console.error(e);
         if (e instanceof AxiosError) {
            setError(e.message);
         }
         setIsLoading(false);
         return;
      }
   };

   useEffect(() => {
      getMenu();
   }, []);

   return (
      <>
         <div className={styles["head"]}>
            <Headling>Menu</Headling>
            <Search placeholder="Введите блюдо или состав..." />
         </div>
         <div className={styles["products-grid"]}>
            {error && <>{error}</>}
            {!isLoading && <MenuList products={products} />}
            {isLoading && <>Загрузка продукта...</>}
         </div>
      </>
   );
};

export default Menu;
