const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

//database connection
require("./config/database");

// table associations
require("./models/associations");

//import routes
const homeRoute = require("./routes/home_route");
const menusRoute = require("./routes/menus_route");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/public", express.static("public"));
app.use(morgan("short"));

app.use("/", homeRoute);
app.use("/menus", menusRoute);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
