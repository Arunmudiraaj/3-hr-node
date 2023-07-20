const express = require("express");
const app = express();
const todoRoutes = require("./routes/todos");
const sequelize = require("./util/database");
const cors = require("cors");
// imports ends

app.use(cors());
app.use(express.json());
app.use("/todos", todoRoutes);
app.use((req, res) => {
  res.send("<h2>404 Error. Not foundd</h1>");
});

sequelize
  .sync()
  .then(() => {
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
