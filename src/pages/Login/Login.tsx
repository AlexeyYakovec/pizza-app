import { useEffect } from "react";
import { FormEvent } from "react";

import { Link, useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../store/store";
import { login, userActions } from "../../store/user.slice";

export type LoginForm = {
   email: {
      value: string;
   };
   password: {
      value: string;
   };
};

export function Login() {
   const navigate = useNavigate();
   const dispatch = useDispatch<AppDispath>();
   const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

   useEffect(() => {
      if (jwt) {
         navigate("/");
      }
   }, [jwt, navigate]);

   const submit = async (e: FormEvent) => {
      e.preventDefault();
      dispatch(userActions.clearLoginError());
      const target = e.target as typeof e.target & LoginForm;
      const { email, password } = target;
      await sendLogin(email.value, password.value);
   };

   const sendLogin = async (email: string, password: string) => {
      dispatch(login({ email, password }));
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
                  placeholder="введите password..."
               />
            </div>
            {loginErrorMessage && (
               <div className={styles["error"]}>{loginErrorMessage}</div>
            )}
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
