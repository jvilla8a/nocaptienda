import { useEffect, useState } from "react";

import { getProductsByPage } from "../../api/products";
import ProductCard from "../../components/products/card";
import ProductsList from "../../components/products/list";
import Pagination from "../../components/pagination";
import Filterbar from "../../components/filterBar";
import Loader from "../../components/loader";
import useTitle from "../../hooks/useTitle";
import "./home.scss";

const Home = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loader, setLoader] = useState(false);
  const [filter, setFilter] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [title, updateTitle] = useTitle();
  const limit = 18;

  const handlefetch = async () => {
    setLoader(true);
    try {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
        });
      }, 5);
      const { data, count } = await getProductsByPage(
        page,
        limit,
        filter,
        filterValue
      );
      setProducts(data);
      setTotalCount(count);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 500);
    }
  };

  const handleFilter = (type, value) => {
    setFilter(type);
    setFilterValue(value);
  };

  useEffect(() => {
    handlefetch();
  }, [page]);

  useEffect(() => {
    handlefetch();
    setPage(1);
    updateTitle(filterValue);
  }, [filter, filterValue]);

  return (
    <main id="home">
      {loader && <Loader />}
      <Filterbar setFilter={handleFilter} />
      <section>
        <h2>
          Catálogo{title && ` - ${title} `}
          <span>{` (${totalCount})`}</span>
        </h2>
        <Pagination
          setPage={setPage}
          lastPage={Math.ceil(totalCount / limit)}
          page={page}
        />
        <ProductsList>
          {products.length > 0 &&
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </ProductsList>
        <Pagination
          setPage={setPage}
          lastPage={Math.ceil(totalCount / limit)}
          page={page}
        />
      </section>
    </main>
  );
};

export default Home;
