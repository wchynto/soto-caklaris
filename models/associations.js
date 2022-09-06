const Menus = require("./menus_model");
const Categories = require("./categories_model");

Menus.hasOne(Categories, { foreignKey: "id" });
Categories.belongsTo(Menus, { foreignKey: "id" });
