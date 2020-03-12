const express = require('express');
const router = express.Router();


router.post('/eat', function (req, res) {
    res.send('cat eat');
});

router.post('/sleep', function (req, res) {
    res.send('cat sleep');
});

module.exports = router;



