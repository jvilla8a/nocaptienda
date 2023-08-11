import {
  collection,
  query,
  getCountFromServer,
  limit,
  getDocs,
  startAfter,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "../libs/firebase";

export const getProductsByPage = async (page, perPage, type, typeValue) => {
  let products = [];
  const coll = collection(db, "products");

  const allProductsQ =
    type && typeValue ? query(coll, where(type, "==", typeValue)) : query(coll);
  const snapshotAllProducts = await getCountFromServer(allProductsQ);
  const start = (page - 1) * perPage;
  console.log("START ==> ", start);

  const productsQ =
    type && typeValue
      ? query(
          coll,
          where(type, "==", typeValue),
          orderBy("position", "asc"),
          startAfter(start),
          limit(18)
        )
      : query(coll, orderBy("position", "asc"), startAfter(start), limit(18));

  const snapshotProducts = await getDocs(productsQ);
  snapshotProducts.forEach((doc) => {
    products.push(doc.data());
  });

  return {
    data: products,
    count: snapshotAllProducts.data().count,
  };
};
