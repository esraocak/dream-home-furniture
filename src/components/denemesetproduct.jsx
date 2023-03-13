const filteredProducts = () => {
    // console.log(filters);
    const { text, category, company, color, price, shipping } = filters;

    if (text) {
      dispatch(
        setFilteredList(
          productList?.filter((product) =>
            product.name.toLowerCase().startsWith(text)
          )
        )
      );
    }
    if (category !== "all") {
      dispatch(
        setFilteredList(
          productList?.filter((product) => product.category === category)
        )
      );
    }
    if (company !== "all") {
      dispatch(
        setFilteredList(
          productList?.filter((product) => product.company === company)
        )
      );
    }
    if (color !== "all") {
      dispatch(
        setFilteredList(
          productList?.filter((product) => {
            return product.colors.find((c) => c === color);
          })
        )
      );
    }
    if (price) {
      dispatch(
        setFilteredList(
          productList?.filter((product) => product.price <= price)
        )
      );
    }

    if (shipping) {
      dispatch(
        setFilteredList(
          productList?.filter((product) => product.shipping === true)
        )
      );
    }
  };