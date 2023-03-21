import ProductCard from "./ProductCard";
import AppContext from "../utils/context";
import { useContext } from "react";
const Products = () => {
  const { products,loadingProducts } = useContext(AppContext);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">
        {loadingProducts ? (
          <>Loading..</>
        ) : (
          products?.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
