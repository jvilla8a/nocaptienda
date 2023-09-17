import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProducts } from "../../api/products";
import { calculateURL, scrollToTop } from "../../utils";
import ProductCard from "../../components/products/card";
import ProductsList from "../../components/products/list";
import Pagination from "../../components/pagination";
import Filterbar from "../../components/filterBar";
import Loader from "../../components/loader";
import useTitle from "../../hooks/useTitle";
import Navbar from "../../components/navbar";
import "./home.scss";

const Home = () => {
  const limit = 18;
  const url = new URL(window.location.href);
  const urlPage = parseInt(url?.searchParams?.get("page"));
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loader, setLoader] = useState(false);
  const [filter, setFilter] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [title, updateTitle] = useTitle();
  const lastPage = Math.ceil(totalCount / limit);
  const [page, setPage] = useState(urlPage <= lastPage ? urlPage : 1);

  const handlefetch = async () => {
    setLoader(true);
    try {
      scrollToTop();
      const { data, count } = await getProducts(page, filter, filterValue);
      setProducts(data);
      setTotalCount(count);
    } catch (error) {
      throw new Error(error);
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 500);
    }
  };

  const handleFilter = (type, value) => {
    setPage(1);
    setFilter(type);
    setFilterValue(value);
  };

  useEffect(() => {
    const newURL = calculateURL(page, filter, filterValue);
    navigate(newURL);
    updateTitle(filterValue);
    handlefetch();
  }, [page, filter, filterValue]);

  return (
    <main id="home">
      <Navbar />
      {loader && <Loader />}
      <Filterbar onFilterChange={handleFilter} />
      <section id="products-container">
        <h2>
          Catálogo{title && ` - ${title} `}
          <span>{` (${totalCount})`}</span>
        </h2>
        <Pagination setPage={setPage} lastPage={lastPage} page={page} />
        <ProductsList>
          {products?.length > 0 &&
            products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
        </ProductsList>
        <Pagination setPage={setPage} lastPage={lastPage} page={page} />
      </section>
    </main>
  );
};

export default Home;
