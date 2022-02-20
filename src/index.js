require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");


const app = express();

const mongoose = require("mongoose");

mongoose.connect(process.env.URL_MONGODB, error => {
    if (error) throw new Error(error);
    console.log("conexão feita com sucesso!");
})

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(require("./routes/routes"));


app.listen(3001);