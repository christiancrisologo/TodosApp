// Declarations
const express = require('express'),
    path = require('path'),
    router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index.html');
});

module.exports = router;