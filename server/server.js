const express = require("express");
const cors = require("cors");
const reactDom = require("react-router-dom");
const react = require("react");
const redux = require("redux");
const mongoose = require("mongoose");
const login = require("./routes/login");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
  });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("Mongodb connected successfully!");
  });


app.use("/",login);

  
  