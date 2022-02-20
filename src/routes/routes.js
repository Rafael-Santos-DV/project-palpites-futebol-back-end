const router = require("express").Router();
const Palpites = require("../models/Palpites");

// RECEBE OS DADOS E ADICIONA NO MONGODB
router.post("/add-palpites", async (req, res) => {
    const { userName, timeOneGols, timeTwoGols } = req.body;
    console.log(req.body);
    const palpites = await Palpites.create({
        userName: userName,
        timeOneGols: timeOneGols,
        timeTwoGols: timeTwoGols,
        dataHours: new Date()
    });

    await palpites.save();

    return res.json({ response: res.statusCode });
})


router.get("/get-palpites", async (req, res) => {
    const result = await Palpites.find();
    return res.json(result);
})

module.exports = router;