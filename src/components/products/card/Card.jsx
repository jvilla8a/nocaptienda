import "./card.scss";

const ProductCard = (props) => {
  const { product } = props;
  const { team, label, imgs, name, price, priceSale, sizes } = product;
  const sku = sizes[0].sku;

  return (
    <article className={`product-card ${label === "Sold Out" && "sold-out"}`}>
      <img width="300" src={imgs[0]} />
      <ul>
        <li>
          <p>
            {team}
            {team && label ? " - " : ""}
            {label}
          </p>
          <h2>{name}</h2>
        </li>
        <li className="details">
          <p className="sku">{/*`SKU: ${sku}`*/}</p>
          <div className="price-container">
            <p className={`price ${price !== priceSale && "on-sale"}`}>
              {price}
            </p>
            {priceSale !== price && <p className="price">{priceSale}</p>}
          </div>
        </li>
      </ul>
    </article>
  );
};

export default ProductCard;
