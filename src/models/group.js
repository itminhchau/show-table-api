'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Group extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Group.hasMany(models.User, { foreignKey: 'group_id', as: 'userDataFlowGroup' })
        }
    }
    Group.init({
        group_name: DataTypes.STRING,
        requirements: DataTypes.TEXT,
        work_start_time: DataTypes.DATE,
        work_end_time: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Group',
    });
    return Group;
};