require('../../src/database'); // Pega método estático init do Model

const Patient = require('../../src/models/Patient');

describe('Patients', () => {

    it('should not list all patients ', () => {
        const patient = await Patient.findAll();

        expect(patient.length).to(0);
    });

    it('should create patient', async () => {
        const patient = await Patient.create({
            name: 'Igor Vitor',
            age: 20,
            cpf: '12345678945',
            gender: 'MASCULINO',
            health_condition: 'EM TRATAMENTO',
            locale: 'SUDESTE',
        });

        expect(patient.age).toBe(20);
    });

    it('should list all patients', async () => {
        const patients = await Patient.findAll();

        expect(patients.length).not.toBe(0);
    });

    it('should list one patient', async () => {
        let id = 5;
        const patient = await Patient.findByPk(id);

        expect(patient.id).toBe(id);
    });

    it('it should not find one patient', async () => {
        let id = 10000;
        const patient = await Patient.findByPk(id);

        expect(patient).toBeNull();
    })
});
