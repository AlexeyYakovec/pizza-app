import { useEffect, useState } from "react";

import styles from "./Menu.module.css";

import Headling from "../../components/Headling/Headling";
import Search from "../../components/Search/Search";
import ProductCard from "../../components/ProductCard/ProductCard";
import { PREFIX } from "../../helpers/API";
import { Product } from "../../interfaces/product.interface";
import { error } from "console";
import axios from "axios";

const Menu = () => {
   const [products, setProducts] = useState<Product[]>([]);
   console.log(products);

   const getMenu = async () => {
      try {
         const { data } = await axios.get<Product[]>(`${PREFIX}/products`);
         setProducts(data);
      } catch (e) {
         console.error(e);
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
            {products.map((p) => (
               <ProductCard
                  key={p.id}
                  id={p.id}
                  description={p.ingredients.join(", ")}
                  title={p.name}
                  rating={p.rating}
                  price={p.price}
                  image={p.image}
               />
            ))}
         </div>
      </>
   );
};

export default Menu;
