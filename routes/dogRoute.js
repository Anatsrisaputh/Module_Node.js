const express = require('express');
const router = express.Router();


router.get('/walk', function (req, res) {
    res.send('dog walk');
});

router.get('/run', function (req, res) {
    res.send('dog sleep');
});

module.exports = router;