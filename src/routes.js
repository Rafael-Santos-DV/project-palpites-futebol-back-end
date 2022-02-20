const router = require("express").Router();

router.get("/", (req, res) => {
    return res.json({ response: res.statusCode });
})

router.post("/teste", (req, res) => {
    
    return res.json({ response: res.statusCode });
})

module.exports = router;