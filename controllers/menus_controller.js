const Categories = require("../models/categories_model");
const Menus = require("../models/menus_model");

const getMenus = async (req, res, next) => {
  try {
    const menus = await Menus.findAll();
    res.locals.menus = menus;
    next();
  } catch (error) {
    console.log(error);
  }
};

const getMenusByCategories = async (req, res, next) => {
  try {
    const categories = await Categories.findOne({
      where: {
        name: req.params.category,
      },
    });
    const menus = await Menus.findAll({
      where: {
        category: categories.id,
      },
    });
    res.locals.menus = menus;
    next();
  } catch (error) {
    console.log(error);
  }
};

const getMenusById = async (req, res, next) => {
  try {
    const menus = await Menus.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.locals.menus = menus
  } catch (error) {
    console.log(error)
  }
};

module.exports = { getMenus, getMenusByCategories, getMenusById };
