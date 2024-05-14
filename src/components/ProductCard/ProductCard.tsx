import styles from "./ProductCard.module.css";
// import cn from "classnames";

import { ProductCardProps } from "./ProductCard.props";

import { FaOpencart } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { BiRuble } from "react-icons/bi";

import { Link } from "react-router-dom";

function ProductCard(props: ProductCardProps) {
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
               <button className={styles["head-add-to-cart"]}>
                  <FaOpencart className={styles["head-add-to-cart-svg"]} />
               </button>
               <span className={styles["head-rating"]}>
                  {props.rating}
                  <IoMdStar />
               </span>
            </div>
            <div className={styles["card-footer"]}>
               <span className={styles["footer-title"]}>{props.title}</span>
               <span className={styles["footer-description"]}>
                  {props.description}
               </span>
            </div>
         </div>
      </Link>
   );
}

export default ProductCard;
