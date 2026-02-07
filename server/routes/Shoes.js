const express = require('express');
const router = express.Router();
const { Shoes } = require('../models');

router.get('/', async (req, res) => {
    try {
        const shoes = await Shoes.findAll();
        res.json(shoes);
    } catch (error) {
        console.error('❌ Sequelize error:', error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/byId/:id', async (request, response) => {
    const id = request.params.id;
    const shoe = await Shoes.findByPk(id);
    response.json(shoe);
})

router.post('/', async (request, response) => {
    const shoe = request.body;
    await Shoes.create(shoe);
    response.json(shoe);
});

module.exports = router;
