const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("test");
});
app.listen(port, console.log(`Sever is running on ${port}`));
