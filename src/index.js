require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const PORT = 7777;
app.use(express.json());

app.post("/signup", (req, res) => {});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Server connection failed : ${err}`);
  });
