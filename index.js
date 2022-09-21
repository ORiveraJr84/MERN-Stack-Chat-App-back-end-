const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connection to MongoDB Atlas successful!`);
  })
  .catch(({ message: errorMessage }) => {
    console.log(errorMessage);
  });

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
