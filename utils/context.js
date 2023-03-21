import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [searchedLoadingProducts, setSearchedLoadingProducts] = useState(false);
  //   const { data, error, loading } = useCallApi(
  //     `${process.env.BACKEND_URL}/products`
  //   );

  useEffect(() => {
    setLoadingProducts(true);
    fetch(`${process.env.BACKEND_URL}/products/`)
      .then((resp) => resp.json())
      .then((res) => {
        console.log("res", res);
        setProducts(res);
        setLoadingProducts(false);
      });
  }, []);

  useEffect(() => {
    setSearchedLoadingProducts(true);
    fetch(`${process.env.BACKEND_URL}/products/search?query=${searchKeyword}`)
      .then((resp) => resp.json())
      .then((res) => {
        console.log("res", res);
        setSearchedProducts(res);
        setSearchedLoadingProducts(false);
      });
  }, [searchKeyword]);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        searchKeyword,
        setSearchKeyword,
        loadingProducts,
        setLoadingProducts,
        searchedProducts,
        setSearchedProducts,
        searchedLoadingProducts,
        setSearchedLoadingProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider };
export default AppContext;
