const Categories = require("../models/categories_model");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    res.locals.categories = categories;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCategories };
