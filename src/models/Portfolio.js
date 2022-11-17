const {DataTypes,Model} = require('sequelize')
const {db} = require('../db/db')

class Portfolio extends Model{}

Portfolio.init(
  {
    coin:{
      type:DataTypes.STRING
    },
    amount: {
      type:DataTypes.NUMBER
    }, 
    value: {
      type:DataTypes.NUMBER
    },
  }, {sequelize:db}

)

module.exports = {Portfolio}