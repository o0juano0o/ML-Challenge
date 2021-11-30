const axios = require("axios");

const getProducts = async (req, res) => {
  const productSearch = req.query.q;

  try {
    const productList = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=:${productSearch}`
    );

    const { results, filters } = productList.data;
    const list = {
      author: {
        name: "Juan Cruz",
        lastname: "Lanuti",
      },
      categories: [],
      items: [],
    };

    if (filters[0]) {
      filters[0].values[0].path_from_root.forEach((category) => {
        list.categories.push(category.name);
      });
    }
    const index = results.length >= 4 ? 4 : results.length;
    for (let i = 0; i < index; i++) {
      const {
        id,
        title,
        prices,
        attributes,
        shipping,
        thumbnail: picture,
        address,
      } = results[i];

      const { amount, currency_id: currency } = prices.prices[0];
      const decimals = parseInt(amount.toString().split(".")[1]);
      const { free_shipping } = shipping;
      const { state_name: state, city_name: city } = address;
      const conditionInfo = attributes.filter(
        (attribute) => attribute.id == "ITEM_CONDITION"
      );

      const productPropertys = {
        id,
        title,
        price: { currency, amount, decimals },
        picture,
        condition: conditionInfo[0].value_name,
        free_shipping,
        address: { state, city },
      };

      list.items.push(productPropertys);
    }

    res.status(200).send(list);
  } catch (err) {
    console.error(err);
  }
};

module.exports = getProducts;
