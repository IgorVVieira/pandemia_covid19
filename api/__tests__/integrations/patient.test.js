const Patient = require('../../src/models/Patient');

describe('Patients', () => {
    it('should create patient', async () => {
        const patient = await Patient.create({
            name: 'Igor Vitor Vieira',
            age: 20,
            cpf: '14697884620',
            gender: 'MASCULINO',
            health_condition: 'EM TRATAMENTO',
            locale: 'SUDESTE',
        });

        console.log(patient);

        expect(patient.age).toBe(20);
    });

    // it('should list all patients', async () => {
    //     const patients = await Patient.findAll();

    //     console.log(patients);

    //     expect(patients).toBe(patients !== null);
    // });

    // it('should list one patient', async () => {
    //     const patient = await Patient.findByPk(1);
    //     console.log(patient);

    //     expect(patient).toBe(patient !== null);
    // });
});
