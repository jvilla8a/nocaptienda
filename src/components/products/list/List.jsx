import "./list.scss";

const ProductsList = (props) => {
  const { children } = props;

  return <section className="product-list">{children}</section>;
};

export default ProductsList;
