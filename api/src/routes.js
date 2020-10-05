const routes = require('express').Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Ola mundo' });
});

module.exports = routes;