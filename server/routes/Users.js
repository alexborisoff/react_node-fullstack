const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require('bcrypt');

router.post('/', async (request, response) => {
    const { username, password } = request.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        });
        response.json('SUCCESS');
    });
});

router.post('/login', async (request, response) => {
    const { username, password } = request.body;

    const user = await Users.findOne({
        where: { username: username },
    });

    if (!user) response.json({ error: "User Doesn't Exist" });

    bcrypt.compare(password, user.password).then((match) => {
        if (!match)
            response.json({ error: 'Wrong Username and password' });

        response.json('You log in now, great job');
    });
});

module.exports = router;
