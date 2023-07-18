'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.belongsTo(models.Group, { foreignKey: 'group_id', as: 'userDataFlowGroup' })
        }
    }
    User.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        birthday: DataTypes.DATE,
        gender: DataTypes.STRING,
        user_name: DataTypes.STRING,
        password: DataTypes.STRING,
        group_id: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};