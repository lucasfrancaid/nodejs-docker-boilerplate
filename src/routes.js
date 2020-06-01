const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Hello world from Docker on Linux.')
});

module.exports = routes;
