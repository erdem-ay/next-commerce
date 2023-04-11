import { useCallApi } from "@/utils/api";
import ProductCard from "./ProductCard";
import loadingGif from "../assets/loading.gif";
import Image from "next/image";

const Products = () => {
  const { data, error, loading } = useCallApi(
    `${process.env.BACKEND_URL}/products`
  );


  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">
        {loading ? (
          <div className="flex justify-center items-center h-screen w-screen">
            <Image src={loadingGif} alt="Gif" width={500} height={500} />
          </div>
        ) : (
          data?.map((item, index) => <ProductCard key={index} product={item} />)
        )}
      </div>
    </div>
  );
};

export default Products;
