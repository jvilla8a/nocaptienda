const language = "es-CO";
const priceOptions = {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
  currencyDisplay: "symbol",
};

export const formatPrice = (price) => {
  let numberPrice = parseFloat(price.replace("$", "").trim());
  numberPrice += 4;
  numberPrice *= 5000;
  numberPrice += 50000;

  numberPrice = numberPrice.toLocaleString(language, priceOptions);

  return numberPrice;
};
