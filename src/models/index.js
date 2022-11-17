const {User} = require('../models/User')
const {Portfolio} = require('../models/Portfolio')
const {Transaction} = require('../models/Transaction')


User.hasMany(Portfolio)
Portfolio.belongsTo(User)

User.hasMany(Transaction)
Transaction.belongsTo(User)

module.exports = {User, Portfolio, Transaction}


