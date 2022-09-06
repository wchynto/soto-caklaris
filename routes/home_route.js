const express = require("express");
const { getMenus } = require("../controllers/menus_controller");

const router = express.Router();

router.get("/", getMenus, (req, res) => {
  res.render("home", { name: "home" });
});

module.exports = router;
