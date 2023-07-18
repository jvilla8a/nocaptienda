import {
  collection,
  query,
  getCountFromServer,
  limit,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { db } from "../libs/firebase";

export const getProductsByPage = async () => {
  let products = [];
  const coll = collection(db, "products");

  const allProductsQ = query(coll);
  const snapshotAllProducts = await getCountFromServer(allProductsQ);

  const productsQ = query(coll, orderBy("position", "asc"), limit(18));
  const snapshotProducts = await getDocs(productsQ);
  snapshotProducts.forEach((doc) => {
    products.push(doc.data());
  });
  // const request = await window.fetch(`${url}${page}`);
  // const response = await request.text();
  // const document = PARSER.parseFromString(response, "text/html");
  // const data = [...document.getElementsByClassName("product-card")].map(
  //   (item) => {
  //     const name = $(item, ".product-card__product-title").innerHTML.trim();
  //     const img = $(item, "img").src;
  //     const price = formatPrice($(item, "s.price-item--regular").innerText);
  //     const priceSale = formatPrice($(item, ".price-item--sale").innerText);
  //     const team = $(item, ".product-card__team").innerText.trim();
  //     const label = $(item, ".product-card__label").innerHTML.trim();
  //     const sku = JSON.parse(
  //       item.getElementsByTagName("script")[1].innerText
  //     ).sku;
  //     return { name, img, price, priceSale, team, label, sku };
  //   }
  // );
  // const pagination = document.getElementsByClassName("pagination__item link");
  // const lastPage = pagination[pagination.length - 2]?.innerText ?? 1;
  return {
    data: products,
    count: snapshotAllProducts.data().count,
  };
};
