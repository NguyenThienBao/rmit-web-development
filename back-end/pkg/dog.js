const express = require('express')
const router = express.Router();

const timeLog = (req, res, next) => {
    console.log('Time', Date.now());
    next();
}

router.use(timeLog);

router.get('/', (req, res) => {
    res.send("Dog message");
})

router.get('/about', (req, res) => {
    res.send("Dog About");
})

module.exports = router;