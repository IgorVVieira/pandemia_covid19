const { Model, DataTypes } = require('sequelize');

class Patient extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            age: DataTypes.INTEGER,
            cpf: DataTypes.STRING,
            gender: DataTypes.STRING,
            health_condition: DataTypes.STRING,
            locale: DataTypes.STRING,
        }, {
            sequelize
        });
    }
}

module.exports = Patient;