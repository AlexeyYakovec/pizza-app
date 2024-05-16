import { useState } from "react";
import { FormEvent } from "react";

import axios, { AxiosError } from "axios";

import { Link, useNavigate } from "react-router-dom";

import styles from "./Login.module.css";

import { PREFIX } from "../../helpers/API";

import Button from "../../components/Button/Button";
import Headling from "../../components/Headling/Headling";
import Input from "../../components/Input/Input";
import { LoginResponse } from "../../interfaces/auth.interface";

export type LoginForm = {
   email: {
      value: string;
   };
   password: {
      value: string;
   };
};

export function Login() {
   const [error, setError] = useState<string | null>();
   const navigate = useNavigate();

   const submit = async (e: FormEvent) => {
      e.preventDefault();
      setError(null);
      const target = e.target as typeof e.target & LoginForm;
      const { email, password } = target;
      sendLogin(email.value, password.value);
   };

   const sendLogin = async (email: string, password: string) => {
      try {
         const { data } = await axios.post<LoginResponse>(
            `${PREFIX}/auth/login`,
            {
               email,
               password,
            }
         );
         console.log(data);
         localStorage.setItem("jwt", data.access_token);
         navigate("/");
      } catch (e) {
         if (e instanceof AxiosError) {
            setError(e.response?.data.message);
         }
      }
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
            {error && <div className={styles["error"]}>{error}</div>}
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
