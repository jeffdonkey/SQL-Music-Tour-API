'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stages_event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stages_event.init({
    stages_events: DataTypes.INTEGER,
    stage_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    event_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stages-event',
    tableName:  'stages_events',
    timestamps: false
  });
  return Stages - event;
};