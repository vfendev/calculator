const express = require('express');
const router = new express.Router();

router.get('/', async (req, res) => {
    try {
       await res.render('index')
    } catch (error) {
        res.status(500).send()
    }
})


module.exports = router