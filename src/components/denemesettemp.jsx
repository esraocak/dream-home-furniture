const filteredProducts = () => {
  const { text, category, company, color, price, shipping } = filters;
  console.log(filters);
  let tempProducts = [...productList];
  console.log(tempProducts);
  if (text) {
    tempProducts = tempProducts.filter((product) =>
      product.name.toLowerCase().startsWith(text)
    );
  }
  if (category !== "all") {
    tempProducts = tempProducts.filter(
      (product) => product.category === category
    );
  }
  if (company !== "all") {
    tempProducts = tempProducts.filter(
      (product) => product.company === company
    );
  }
  if (color !== "all") {
    tempProducts = tempProducts.filter((product) => {
      return product.colors.find((c) => c === color);
    });
  }

  tempProducts = tempProducts.filter((product) => product.price <= price);

  if (shipping) {
    tempProducts = tempProducts.filter((product) => product.shipping === true);
  }

  return setFilteredList(tempProducts);
};
