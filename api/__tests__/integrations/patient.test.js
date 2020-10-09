require('../../src/database'); // Pega método estático init do Model

const Patient = require('../../src/models/Patient');

describe('Patients', () => {
    it('should create patient', async () => {
        const patient = await Patient.create({
            name: 'Amanda Lopes Adriano',
            age: 18,
            cpf: '12345678945',
            gender: 'FEMININO',
            health_condition: 'EM TRATAMENTO',
            locale: 'SUDESTE',
        });

        expect(patient.age).toBe(18);
    });

    it('should list all patients', async () => {
        const patients = await Patient.findAll();

        expect(patients).toBe(patients);
    });

    it('should list one patient', async () => {
        const patient = await Patient.findByPk(2);

        expect(patient.id).toBe(2);
    });
    it('should delete one patient', async () => {
        const patient = await Patient.destroy({
            where: 2,
        });

        expect(patient).toBe(0);
    });
});
