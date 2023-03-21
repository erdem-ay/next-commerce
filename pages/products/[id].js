import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState({});


  return (
    <div>
      {/* <ProductDetails product={data} /> */}
    </div>
  );
};

export default product;
