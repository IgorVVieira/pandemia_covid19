require('../../src/database'); // Pega método estático init do Model

const Patient = require('../../src/models/Patient');

describe('Patients', () => {

    it('should create patient', async () => {
        const patient = await Patient.create({
            name: 'Lucia Freitas',
            age: 50,
            cpf: '78956321456',
            gender: 'FEMININO',
            health_condition: 'ÓBITO',
            locale: 'CENTRO-OESTE',
        });

        expect(patient.age).toBe(50);
    });

    // it('should update one patient', async () => {
    //     const p = await Patient.findOne({
    //         where: {
    //             name: 'Maria da Silva',
    //         }
    //     });

    //     let id = p.id;

    //     const patient = await Patient.update({
    //         name: 'Maria da Silva',
    //         age: 66,
    //         cpf: '14785262548',
    //         gender: 'FEMININO',
    //         health_condition: 'CURADO',
    //         locale: 'NORDESTE',
    //     }, {
    //         returning: true,
    //         where: {
    //             id,
    //         },
    //     });

    //     expect(patient[0].health_condition).toBe('CURADO');
    // });

    it('should list all patients', async () => {
        const patients = await Patient.findAll();

        expect(patients.length).not.toBe(0);
    });

    it('should list one patient', async () => {
        let id = 1;
        const patient = await Patient.findByPk(id);

        expect(patient.id).toBe(id);
    });

    it('it should not find one patient', async () => {
        let id = 10000;
        const patient = await Patient.findByPk(id);

        expect(patient).toBeNull();
    });
});
