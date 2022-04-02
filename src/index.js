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

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://xenodochial-curran-3baef9.netlify.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    app.use(cors({ origin: "https://palpites-futebol.netlify.app" }));
    next();

});

app.use(express.json());
app.use(require("./routes/routes"));


app.listen(process.env.PORT || 3001);
