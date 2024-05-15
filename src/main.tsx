import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import "./index.css";

import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";

// import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import { Error as ErrorPage } from "./pages/Error/Error";
import Layout from "./layout/Menu/Layout.tsx";
import { Product } from "./pages/Product/Product.tsx";
import { PREFIX } from "./helpers/API.ts";

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
               //    return defer({
               //       data: axios
               //          .get(`${PREFIX}/products/${params.id}`)
               //          .then((data) => data),
               //    });
               //    await new Promise<void>((resolve) => {
               //       setTimeout(() => {
               //          resolve();
               //       }, 2000);
               //    });
               //    const { data } = await axios.get(
               //       `${PREFIX}/products/${params.id}`
               //    );
               //    return data;
            },
         },
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
