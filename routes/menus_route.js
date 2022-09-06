const express = require("express");
const { getCategories } = require("../controllers/categories_controller");
const { getMenusByCategories, getMenusById } = require("../controllers/menus_controller");
const Categories = require("../models/categories_model");

const router = express.Router();

router.get("/:category", getCategories, getMenusByCategories, (req, res) => {
  res.render("menus", { name: "menus", category_name: req.params.category });
});

router.get("/:category/:id", getCategories, getMenusById,(req, res) => {
  res.render("detail", {name: 'detail', category_name: req.params.category});
});

module.exports = router;
