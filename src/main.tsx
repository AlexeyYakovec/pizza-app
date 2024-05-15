import React, { lazy, Suspense } from "react";
import axios from "axios";

import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";

import { PREFIX } from "./helpers/API.ts";

import Layout from "./layout/Menu/Layout.tsx";
import AuthLayout from "./layout/Auth/AuthLayout.tsx";

// import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import { Error as ErrorPage } from "./pages/Error/Error";
import { Product } from "./pages/Product/Product.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { Register } from "./pages/Register/Register.tsx";

const Menu = lazy(() => import("./pages/Menu/Menu.tsx"));

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            path: "/",
            element: (
               <Suspense fallback={<>Загрузка...</>}>
                  <Menu />
               </Suspense>
            ),
         },
         { path: "/cart", element: <Cart /> },
         {
            path: "/product/:id",
            element: <Product />,
            errorElement: <>Ошибка получения данных</>,
            loader: async ({ params }) => {
               return defer({
                  data: new Promise((resolve, reject) => {
                     setTimeout(() => {
                        axios
                           .get(`${PREFIX}/products/${params.id}`)
                           .then((data) => resolve(data))
                           .catch((e) => reject(e));
                     }, 1000);
                  }),
               });
            },
         },
      ],
   },
   {
      path: "/auth",
      element: <AuthLayout />,
      children: [
         { path: "login", element: <Login /> },
         { path: "register", element: <Register /> },
      ],
   },
   {
      path: "*",
      element: <ErrorPage />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
