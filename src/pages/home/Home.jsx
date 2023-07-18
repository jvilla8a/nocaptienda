import { useEffect, useState } from "react";

import { getProductsByPage } from "../../api/products";
import ProductCard from "../../components/products/card";
import ProductsList from "../../components/products/list";
import Pagination from "../../components/pagination";
import Filterbar from "../../components/filterBar";
import {
  COLLEGE_URL,
  HOME_URL,
  MILB_URL,
  MLB_URL,
  MOTOR_URL,
  NBA_URL,
  NFL_URL,
  SOCCER_URL,
  WNBA_URL,
  FIFTY59_URL,
  LPFIFTY59_URL,
  FIFTY9_URL,
  LPFIFTY9_URL,
  THIRTY39_URL,
  FORTY9_URL,
  TWENTY9_URL,
  CASUAL_URL,
  WOMEN_URL,
  KIDS_URL,
} from "../../utils/consts";
import "./home.scss";
import Loader from "../../components/loader";

const Home = () => {
  const [page, setPage] = useState(1);
  const [collection, setCollection] = useState(HOME_URL);
  const [products, setProducts] = useState([]);
  const [lastPage] = useState(1);
  const [title, setTitle] = useState("");
  const [loader, setLoader] = useState(false);
  const limit = 18;

  const handlefetch = async () => {
    setLoader(true);
    try {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
        });
      }, 5);
      const { data } = await getProductsByPage(page, collection, limit);
      console.log("DATA ===> ", data);
      setProducts(data);
      // from === "collection" &&
      //   pagination != lastPage &&
      //   setLastPage(count / limit);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 500);
    }
  };

  useEffect(() => {
    handlefetch();
  }, [page]);

  useEffect(() => {
    handlefetch("collection");
    setPage(1);
    switch (collection) {
      case HOME_URL:
        setTitle("");
        break;
      case MLB_URL:
        setTitle("MLB");
        break;
      case NFL_URL:
        setTitle("NFL");
        break;
      case NBA_URL:
        setTitle("NBA");
        break;
      case MILB_URL:
        setTitle("MiLB");
        break;
      case WNBA_URL:
        setTitle("WNBA");
        break;
      case COLLEGE_URL:
        setTitle("NCAA");
        break;
      case MOTOR_URL:
        setTitle("MotorSport");
        break;
      case SOCCER_URL:
        setTitle("Fútbol");
        break;
      case FIFTY59_URL:
        setTitle("59FIFTY");
        break;
      case LPFIFTY59_URL:
        setTitle("Low Profile 59FIFTY");
        break;
      case FIFTY9_URL:
        setTitle("9FIFTY");
        break;
      case LPFIFTY9_URL:
        setTitle("Low Profile 9FIFTY");
        break;
      case THIRTY39_URL:
        setTitle("39THIRTY");
        break;
      case FORTY9_URL:
        setTitle("9FORTY");
        break;
      case TWENTY9_URL:
        setTitle("9TWENTY");
        break;
      case CASUAL_URL:
        setTitle("CASUAL CLASIC");
        break;
      case WOMEN_URL:
        setTitle("Mujer");
        break;
      case KIDS_URL:
        setTitle("Niños");
        break;
      default:
        setTitle("");
        break;
    }
  }, [collection]);

  return (
    <main id="home">
      {loader && <Loader />}
      <Filterbar setCollection={setCollection} />
      <section>
        <h2>Catálogo{title && ` - ${title}`}</h2>
        <Pagination setPage={setPage} lastPage={lastPage} page={page} />
        <ProductsList>
          {products.length > 0 &&
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
