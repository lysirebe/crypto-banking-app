const {DataTypes, Model} = require('sequelize')

const {db} = require('../db/db')

class User extends Model{}

User.init(
  {
    firstName:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {sequelize: db}
)

module.exports = {User}