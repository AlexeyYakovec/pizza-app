import React from "react";

import styles from "./Success.module.css";

import pizza from "../../../public/pizza.png";
import { useNavigate } from "react-router-dom";

import Headling from "../../components/Headling/Headling";
import Button from "../../components/Button/Button";

export function Success() {
   const navigate = useNavigate();
   return (
      <div className={styles["success"]}>
         <img src={pizza} alt="" />
         <Headling className={styles["text"]}>
            Ваш заказ успешно оформлен
         </Headling>
         <Button appearance="big" onClick={() => navigate("/")}>
            Сделайте новый
         </Button>
      </div>
   );
}
