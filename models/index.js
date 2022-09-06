const Menus = require("./menus_model");
const Categories = require("./categories_models");

async function create() {
  await Categories.create({
    name: "Makanan",
  });

  await Menus.create({
    name: "Soto Lamongan",
    price: 15000,
    category: 1,
  });
}

create();
