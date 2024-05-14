import { useParams } from "react-router-dom";
import Headling from "../../components/Headling/Headling";

function Product() {
   const { id } = useParams();
   return (
      <>
         <Headling>Product: {id}</Headling>
      </>
   );
}

export default Product;
