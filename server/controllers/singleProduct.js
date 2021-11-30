const axios = require("axios");

const getSingleProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const article = await axios.get(
      `https://api.mercadolibre.com/items/${productId}`
    );
    const productDescription = await axios.get(
      `https://api.mercadolibre.com/items/${productId}/description`
    );

    const {
      id,
      title,
      price: amount,
      currency_id: currency,
      pictures,
      attributes,
      shipping,
      sold_quantity,
    } = article.data;

    const decimals = parseInt(amount.toString().split(".")[1]);
    const description = productDescription.data.plain_text;
    const picture = pictures[0].url;
    const free_shipping = shipping.free_shipping;
    const conditionInfo = attributes.filter(
      (attribute) => attribute.id == "ITEM_CONDITION"
    );

    const product = {
      author: { name: "Juan Cruz", lastname: "Lanuti" },
      item: { id },
      title,
      price: { currency, amount, decimals },
      picture,
      condition: conditionInfo[0].value_name,
      free_shipping,
      sold_quantity,
      description,
    };

    res.status(200).send(product);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getSingleProduct;
