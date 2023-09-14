import imagePlaceholder from "../../../assets/image_placeholder.svg";
import "./card.scss";

const ProductCard = (props) => {
  const { product } = props;
  const { name, price, price_sale, code, label, team_name, image } = product;

  return (
    <article className={`product-card ${label === "Sold Out" && "sold-out"}`}>
      <img width="300" src={image || imagePlaceholder} />
      <ul>
        <li>
          <p>
            {team_name}
            {team_name && label ? " - " : ""}
            {label === "Sale" ? "OFERTA" : label}
          </p>
          <h2>{name}</h2>
        </li>
        <li className="details">
          <p className="sku">{`Cod: ${code}`}</p>
          <div className="price-container">
            <p className={`price ${price !== price_sale && "on-sale"}`}>
              {price}
            </p>
            {price_sale !== price && <p className="price">{price_sale}</p>}
          </div>
        </li>
      </ul>
    </article>
  );
};

export default ProductCard;
