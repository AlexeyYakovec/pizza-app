import { useDispatch } from "react-redux";

import styles from "./ProductCard.module.css";
// import cn from "classnames";

import { ProductCardProps } from "./ProductCard.props";

import { FaOpencart } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { BiRuble } from "react-icons/bi";

import { Link } from "react-router-dom";
import { MouseEvent } from "react";
import { AppDispatch } from "../../store/store";
import { cartActions } from "../../store/cart.slice";

function ProductCard(props: ProductCardProps) {
   const dispatch = useDispatch<AppDispatch>();

   const add = (e: MouseEvent) => {
      e.preventDefault();
      dispatch(cartActions.add(props.id));
   };

   return (
      <Link to={`/product/${props.id}`} className={styles["link"]}>
         <div className={styles["card"]}>
            <div
               className={styles["card-head"]}
               style={{ backgroundImage: `url(${props.image})` }}
            >
               <span className={styles["head-price"]}>
                  {props.price}
                  <BiRuble className={styles["currency"]} />
               </span>
               <button className={styles["head-add-to-cart"]} onClick={add}>
                  <FaOpencart className={styles["head-add-to-cart-svg"]} />
               </button>
               <span className={styles["head-rating"]}>
                  {props.rating}
                  <IoMdStar />
               </span>
            </div>
            <div className={styles["card-footer"]}>
               <span className={styles["footer-title"]}>{props.name}</span>
               <span className={styles["footer-description"]}>
                  {props.description}
               </span>
            </div>
         </div>
      </Link>
   );
}

export default ProductCard;
