const { Sequelize } = require("sequelize");

const db = require("../config/database");

const { DataTypes } = Sequelize;

const Menus = db.define(
  "menus",
  {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    photo: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Menus;
