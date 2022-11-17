const {DataTypes,Model} = require('sequelize')
const {db} = require('../db/db')

class Transaction extends Model{}

Transaction.init(
  {
    balance:{
      type:DataTypes.NUMBER
    },
    deposits: {
      type:DataTypes.NUMBER
    }, 
    withdrawals: {
      type:DataTypes.NUMBER
    }
  }, {sequelize:db}

)

module.exports = {Transaction}

