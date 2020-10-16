const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");

require("dotenv").config({ path: "../.env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(
	"mongodb+srv://name:password@cluster0.qorzf.mongodb.net/webapp?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("Mongodb connected successfully!");
});
app.use("/", userRouter);

app.listen(port, () => {
	console.log(`Server is up and running on port ${port}`);
});
