import { useEffect } from "react";
import { FormEvent } from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./Register.module.css";

import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";

import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../store/store";
import { register, userActions } from "../../store/user.slice";

export type RegisterForm = {
   email: {
      value: string;
   };
   password: {
      value: string;
   };
   name: {
      value: string;
   };
};

export function Register() {
   const navigate = useNavigate();
   const dispatch = useDispatch<AppDispatch>();
   const { jwt, registerErrorMessage } = useSelector((s: RootState) => s.user);

   useEffect(() => {
      if (jwt) {
         navigate("/");
      }
   }, [jwt, navigate]);

   const submit = async (e: FormEvent) => {
      e.preventDefault();
      dispatch(userActions.clearRegisterError());
      const target = e.target as typeof e.target & RegisterForm;
      const { email, password, name } = target;
      dispatch(
         register({
            email: email.value,
            password: password.value,
            name: name.value,
         })
      );
   };

   return (
      <div className={styles["login"]}>
         <Headling className={styles["headling"]}>Регистрация</Headling>
         <form className={styles["form-login"]} onSubmit={submit}>
            <div className={styles["form-field"]}>
               <label htmlFor="email">Ваш email</label>
               <Input
                  className={styles["form-input"]}
                  id="email"
                  placeholder="введите email..."
                  name="email"
               />
            </div>
            <div className={styles["form-field"]}>
               <label htmlFor="password">Ваш пароль</label>
               <Input
                  className={styles["form-input"]}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="введите пароль..."
               />
            </div>
            <div className={styles["form-field"]}>
               <label htmlFor="name">Ваше имя</label>
               <Input
                  className={styles["form-input"]}
                  id="name"
                  name="name"
                  placeholder="введите имя..."
               />
            </div>
            {registerErrorMessage && (
               <div className={styles["error"]}>{registerErrorMessage}</div>
            )}
            <Button appearance="big" className={styles["button-register"]}>
               Зарегистрироваться
            </Button>
         </form>
         <div className={styles["links"]}>
            <span>Есть аккаунт?</span>
            <Link to="/auth/login" className={styles["register"]}>
               Войти
            </Link>
         </div>
      </div>
   );
}
