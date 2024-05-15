import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Menu from "./pages/Menu/Menu";
import Cart from "./pages/Cart/Cart";
import { Error as ErrorPage } from "./pages/Error/Error";
import Layout from "./layout/Menu/Layout.tsx";
import { Product } from "./pages/Product/Product.tsx";
import { PREFIX } from "./helpers/API.ts";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         { path: "/", element: <Menu /> },
         { path: "/cart", element: <Cart /> },
         {
            path: "/product/:id",
            element: <Product />,
            errorElement: <>Error</>,
            loader: async ({ params }) => {
               await new Promise<void>((resolve) => {
                  setTimeout(() => {
                     resolve();
                  }, 2000);
               });
               const { data } = await axios.get(
                  `${PREFIX}/productss/${params.id}`
               );
               return data;
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
