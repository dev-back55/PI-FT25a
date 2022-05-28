const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
     id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
     },

     title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
     },

     image: {
        type: DataTypes.STRING,
        defaultValue: "https://domf5oio6qrcr.cloudfront.net/medialibrary/6054/f5282d05-33f5-4c93-a08e-b000164a54db.jpg"
     },

     summary: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true
        }
     },

     aggregateLikes: {
        type: DataTypes.INTEGER,
     },

     healthScore: {
        type:DataTypes.INTEGER,
     },

     steps: {
        type: DataTypes.TEXT,
     },
   });
};
