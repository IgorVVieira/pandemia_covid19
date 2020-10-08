const { destroy } = require('../models/Patient');
const Patient = require('../models/Patient');

module.exports = {

    async index(req, res) {
        const patient = await Patient.findAll();
        return res.json(patient);
    },

    async store(req, res) {
        const patient = await Patient.create(req.body);

        return res.json(patient);
    },

    async show(req, res) {
        const { id } = req.params.id;
        const patient = await Patient.findByPk(id);

        if (!patient) {
            return res.status(400).json({ erro: 'User not found' });
        }

        return res.json(patient);
    },

    async showAdults(req, res) {
        const patient = await Patient.findAll({
            where: {
                age: 18,
            },
        });
    }
}