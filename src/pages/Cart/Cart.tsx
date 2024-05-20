import { useDispatch, useSelector } from "react-redux";
import Headling from "../../components/Headling/Headling";
import { AppDispath, RootState } from "../../store/store";
import CartItem from "../../components/CartItem/CartItem";

import styles from "./Cart.module.css";
import { Product } from "../../interfaces/product.interface";
import { useEffect, useState } from "react";
import axios from "axios";
import { PREFIX } from "../../helpers/API";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cart.slice";

const DELIVERY_FEE = 169;

const Cart = () => {
   const [cartProducts, setCartProducts] = useState<Product[]>([]);
   const items = useSelector((s: RootState) => s.cart.items);
   const jwt = useSelector((s: RootState) => s.user.jwt);
   const dispatch = useDispatch<AppDispath>();
   const navigate = useNavigate();

   const total = items
      .map((i) => {
         const product = cartProducts.find((p) => p.id === i.id);
         if (!product) {
            return 0;
         }
         return i.count * product.price;
      })
      .reduce((acc, i) => {
         return (acc += i);
      }, 0);

   const getItem = async (id: number) => {
      const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
      return data;
   };

   const loadAllItems = async () => {
      const res = await Promise.all(items.map((i) => getItem(i.id)));
      setCartProducts(res);
   };

   const checkout = async () => {
      await axios.post(
         `${PREFIX}/order`,
         {
            products: items,
         },
         {
            headers: {
               Authorization: `Bearer ${jwt}`,
            },
         }
      );
      dispatch(cartActions.clean());
      navigate("/success");
   };

   useEffect(() => {
      loadAllItems();
   }, [items]);

   return (
      <>
         <Headling className={styles["title"]}>Корзина</Headling>
         {items.map((i) => {
            const product = cartProducts.find((p) => p.id === i.id);
            if (!product) {
               return;
            }
            return <CartItem key={product.id} count={i.count} {...product} />;
         })}
         <div>
            <h2>Итог</h2>
            <div>{total}</div>
         </div>
         <hr />
         <div>
            <h2>Доставка</h2>
            <span>{DELIVERY_FEE} рублей</span>
         </div>
         <hr />
         <div>
            <h2>Итог : {items.length}</h2>
            <h2>{total + DELIVERY_FEE}</h2>
         </div>
         <hr />
         <div>
            <Button appearance="big" onClick={checkout}>
               Оформить
            </Button>
         </div>
      </>
   );
};

export default Cart;
