const sequelize = require("../db/connections");
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
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rating: {
    type: DataTypes.INTEGER,
  },
  // director: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // },
  // genre: {
  //   type: DataTypes.STRING,
  //   allowNull: false
  // }
})

module.exports = Flim
