'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    static associate ({ Event, Stage_event, Set_time}) {
      Stage.belongsToMany (Event, {
        foreignKey: "stage_id",
        as: "events",
        through: 'Stage_event'
      })
      Stage.hasMany(Set_time, {
        foreignKey: "stage_id",
        as: "set_times"
      })
    }
  }

  Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_name: { 
      type: DataTypes.STRING
    },
    stage_type: {       
      type:DataTypes.STRING },
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
  });
  return Stage;
};