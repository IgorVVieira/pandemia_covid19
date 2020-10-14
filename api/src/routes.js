const routes = require('express').Router();

const PatientController = require('../src/controllers/PatientsController');

// Rotas de CRUD
routes.get('/', PatientController.index);

routes.get('/patient/:id', PatientController.show);

routes.post('/patients', PatientController.store);

routes.put('/patient/:id', PatientController.update);

routes.delete('/patients/:id', PatientController.delete);

module.exports = routes;