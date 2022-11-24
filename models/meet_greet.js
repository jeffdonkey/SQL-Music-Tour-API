'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_greet extends Model {
   static associate({ Band, Event }) {
    Meet_greet.belongsTo (Band, {
      foreignKey: "band_id",
      as: "band"
    })
    Meet_greet.belongsTo(Event, {
      foreignKey: "event_id",
      as: "event"
    })
   }
  }

  Meet_greet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER
    },
    band_id: {
      type: DataTypes.INTEGER
    },
    
  }, {
    sequelize,
    modelName: 'Meet_greet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return Meet_greet;
};