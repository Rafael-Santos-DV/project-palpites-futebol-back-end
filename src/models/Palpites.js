const mongoose = require("mongoose");

const PalpitesSchema = new mongoose.Schema({
    userName: String,
    timeOneGols: Number,
    timeTwoGols: Number,
    dataHours: Date,

});

module.exports = mongoose.model("Palpites", PalpitesSchema);