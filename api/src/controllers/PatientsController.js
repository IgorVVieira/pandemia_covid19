const Patient = require('../models/Patient');

const PatientMiddleware = require('../middlewares/PatientMiddleware');

module.exports = {

    async index(req, res) {
        const patient = await Patient.findAll();
        return res.json(patient);
    },

    async store(req, res) {
        const { name, age, cpf, gender, health_condition, locale } = req.body;

        if (!PatientMiddleware.verifyAge(age)) {
            return res.status(400).json({ erro: 'Age invalid' });
        }
        const patient = await Patient.create({
            name,
            age,
            cpf,
            gender,
            health_condition,
            locale,
        });

        return res.json(patient);
    },

    async show(req, res) {
        const { id } = req.params;
        const patient = await Patient.findByPk(id);

        if (!patient) {
            return res.status(400).json({ erro: 'Patients not found' });
        }

        return res.json(patient);
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, age, cpf, gender, health_condition, locale } = req.body;

        const patient = await Patient.update({
            name,
            age,
            cpf,
            gender,
            health_condition,
            locale,
        }, {
            returning: true,
            where: {
                id,
            },
        });

        if (!patient) {
            return res.status(400).json({ erro: 'Patient not found' });
        }
        return res.json(patient);
    },

    async delete(req, res) {
        const { id } = req.params;
        const patient = await Patient.destroy({
            where: {
                id,
            },
        });

        if (!patient) {
            return res.status(400).json({ erro: 'Patient not found' });
        }
        return res.status(200);
    },

    //Fim do CRUD

    // async showAdults(req, res) {
    //     const patients = await Patient.findAll({
    //         where: {
    //             age: {
    //                 [Op.gte]: 18, //verifica se a idade é maior de 18;
    //             },
    //         },
    //     });

    //     if (!patients) {
    //         return res.status(400).json({ erro: 'Patients not found' });
    //     }
    //     return res.json(patients);
    // },

    // async showChildrens(req, res) {
    //     const patients = await Patient.findAll({
    //         where: {
    //             age: {
    //                 [Op.lt]: 18, //retorna menor que 18 
    //             },
    //         },
    //     });

    //     if (!patients) {
    //         return res.status(400).json({ erro: 'Patients not found' });
    //     }
    //     return res.json(patients);
    // },

    // async showMen(req, res) {
    //     const patients = await Patient.findAll({
    //         where: {
    //             gender: 'MASCULINO',
    //         },
    //     });

    //     if (!patients) {
    //         return res.status(400).json({ erro: 'Patient not found' });
    //     }
    //     return res.json(patients);
    // },

    // async showWomans(req, res) {
    //     const patients = await Patient.findAll({
    //         where: {
    //             gender: 'FEMININO',
    //         },
    //     });

    //     if (!patients) {
    //         return res.status(400).json({ erro: 'Patient not found' });
    //     }
    //     return res.json(patients);
    // },

}