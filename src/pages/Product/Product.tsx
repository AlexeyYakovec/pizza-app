import { useLoaderData, Await } from "react-router-dom";
import Headling from "../../components/Headling/Headling";
import { Product } from "../../interfaces/product.interface";
import { Suspense } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";

export function Product() {
   const data = useLoaderData() as { data: Product };
   return (
      <>
         <Suspense fallback={"Загрузка..."}>
            <Await
               //    errorElement можно еще указывать в компоненте Await
               //    errorElement={"...Ошибка получения данных"}
               resolve={data.data}
            >
               {({ data }: { data: Product }) => <ProductItem {...data} />}
            </Await>
         </Suspense>
      </>
   );
}
