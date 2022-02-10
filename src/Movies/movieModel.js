const sequelize = require("..db/connection.js");
const { DataTypes } = require('sequelize');

const Flim = sequelize.define('PrimeVideo', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = Film;
