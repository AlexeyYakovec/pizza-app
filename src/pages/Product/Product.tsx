import { useLoaderData } from "react-router-dom";
import Headling from "../../components/Headling/Headling";
import { Product } from "../../interfaces/product.interface";

export function Product() {
   const data = useLoaderData() as Product;
   return (
      <>
         <Headling>Product: {data.name}</Headling>
      </>
   );
}
