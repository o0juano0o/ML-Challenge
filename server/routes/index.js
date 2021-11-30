const express = require("express");
const router = express.Router();
const getSingleProduct = require("../controllers/singleProduct");
const getProducts = require("../controllers/getProducts");

router.get("/items", getProducts);
router.get("/items/:id", getSingleProduct);

module.exports = router;
