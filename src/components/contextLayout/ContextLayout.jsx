import { useState } from "react";

import Context from "../../utils/context";

const ContextLayout = (props) => {
  const { children } = props;
  const width = window.innerWidth;

  const [products, setProducts] = useState([]);
  const [lastPage, setLastPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [filterBarOpen, setFilterBarOpen] = useState(
    width <= 600 ? false : true
  );

  return (
    <Context.Provider
      value={{
        loader,
        setLoader,
        products,
        setProducts,
        lastPage,
        setLastPage,
        filterBarOpen,
        setFilterBarOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextLayout;
