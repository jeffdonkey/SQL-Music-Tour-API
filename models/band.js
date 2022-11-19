// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize({
    storage: process.env.PG_URI,
    dialect: 'postgres',
    username: 'postgres',
    password: 'dudjlk94'
})

// MODEL
// below creates the model for "Band"
// note that "Band" is the singularized version of the
// Postgres database/table name of "Bands".  Considered best practice for the
// tables of the sqlDB to be plural and the models to be singular
// " class Band " names the model
// " Band.init " defines the model
// inside the first set of {} are columns configs
// inside the second set of {} are table configs
class Band extends Model{}

Band.init({
    band_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: false 
    },
    genre: { 
        type: DataTypes.TEXT, 
        allowNull: false 
    },
    available_start_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
    end_time: { 
        type: DataTypes.DATE, 
        allowNull: false 
    },
}, {
    sequelize,
    modelName: 'Band',
    tableName: 'band',
    timestamps: false
}) 


// EXPORT
module.exports = Band