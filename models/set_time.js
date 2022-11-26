'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_time extends Model {
    static associate({ Band, Event, Stage }) {
      Set_time.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
      Set_time.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
      Set_time.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }

  Set_time.init({
    set_time_id: {
      type: DataTypes.INTEGER,
    primaryKey: true,
  autoIncrement: true
},
    event_id: {
      type: DataTypes.INTEGER
    },
    stage_id: {
      type: DataTypes.INTEGER
    },
    start_time: {
      type: DataTypes.DATE
    },
    band_id: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Set_time',
    tableName: 'set_times',
    timestamps: false
  });
  return Set_time;
};