import { Link } from "react-router-dom";

import styles from "./Login.module.css";

import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import { FormEvent } from "react";

export function Login() {
   const submit = (e: FormEvent) => {
      e.preventDefault();
      console.log(e);
   };
   return (
      <div className={styles["login"]}>
         <Headling className={styles["headling"]}>Вход</Headling>
         <form className={styles["form-login"]} onSubmit={submit}>
            <div className={styles["form-field"]}>
               <label htmlFor="email">Ваш email</label>
               <Input
                  className={styles["form-input"]}
                  id="email"
                  placeholder="введите email..."
               />
            </div>
            <div className={styles["form-field"]}>
               <label htmlFor="password">Ваш пароль</label>
               <Input
                  className={styles["form-input"]}
                  id="password"
                  type="password"
                  placeholder="введите password..."
               />
            </div>
            <Button appearance="big" className={styles["button-register"]}>
               Вход
            </Button>
         </form>
         <div className={styles["links"]}>
            <span>Нет аккаунта?</span>
            <Link to="/auth/register" className={styles["register"]}>
               Зарегистрироваться
            </Link>
         </div>
      </div>
   );
}
