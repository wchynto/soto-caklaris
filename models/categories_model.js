const { Sequelize } = require("sequelize");

const db = require("../config/database");

const { DataTypes } = Sequelize;

const Categories = db.define(
  "Categories",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Categories;
