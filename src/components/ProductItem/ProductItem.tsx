import React from "react";
import { Product } from "../../interfaces/product.interface";
import Headling from "../Headling/Headling";

function ProductItem(data: Product) {
   return (
      <div>
         <Headling>{data.name}</Headling>
      </div>
   );
}

export default ProductItem;
