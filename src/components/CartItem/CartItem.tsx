import { useDispatch } from "react-redux";

import styles from "./CartItem.module.css";
import cn from "classnames";

import { CartItemProps } from "./CartItems.props";

import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { BiRuble } from "react-icons/bi";

import { MouseEvent } from "react";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";

function CartItem(props: CartItemProps) {
   const dispatch = useDispatch<AppDispatch>();

   const remove = () => {
      console.log("remove");
   };
   const increase = () => {
      console.log("increase");
   };
   const descrease = () => {
      console.log("descrease");
   };

   const add = (e: MouseEvent) => {
      e.preventDefault();
      dispatch(cartActions.add(props.id));
   };

   return (
      <div className={styles["cart"]}>
         <div className={styles["cart-section-desc"]}>
            <div
               className={styles["image"]}
               style={{ backgroundImage: `url('${props.image}')` }}
            ></div>
            <div className={styles["cart-description"]}>
               <span className={styles["title"]}>{props.name}</span>
               <span className={styles["price"]}>
                  {props.price}
                  <BiRuble className={cn(styles["cart-currency"])} />
               </span>
            </div>
         </div>
         <div className={styles["cart-section-buttons"]}>
            <button className={styles["cart-button"]} onClick={descrease}>
               <IoIosRemoveCircleOutline
                  className={cn(styles["remove"], styles["cart-button_svg"])}
               />
            </button>
            <span className={styles["count"]}>{props.count}</span>
            <button className={styles["cart-button"]} onClick={increase}>
               <IoIosAddCircle
                  className={cn(styles["add"], styles["cart-button_svg"])}
               />
            </button>

            <button className={styles["cart-button"]} onClick={remove}>
               <IoIosClose
                  className={cn(styles["close"], styles["cart-button_svg"])}
               />
            </button>
         </div>
      </div>
   );
}

export default CartItem;
