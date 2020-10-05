const { Sequelize } = require('sequelize');
const config = require('../config/database');

const Patient = require('../models/Patient');

const connection = new Sequelize(config);

Patient.init(connection);

module.exports = connection;