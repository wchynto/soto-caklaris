const { Sequelize } = require("sequelize");

const db = new Sequelize("soto_cak_laris", "root", "", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

const connectionTest = async () => {
  try {
    await db.authenticate();
    console.log("database connection success");
  } catch (error) {
    console.log("database connection failed : ", error);
  }
};

connectionTest();

module.exports = db;
