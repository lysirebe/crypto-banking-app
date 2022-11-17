const { User, Portfolio, Transaction } =  require('../models')
const {db} = require('./db')

const seed = async () =>{
  await db.sync({force:true})

// prepopulate database with existing users 
  await User.bulkCreate([
    {
      firstName: 'Lys',
      lastName: 'Irebe',
      email: 'test@gmail.com',
      password:'password123'
    },

    {
      firstName: 'Steve',
      lastName: 'Doe',
      email: 'test1@gmail.com',
      password:'password456'
    }

  ], {validate:true})

  await Portfolio.bulkCreate([
    {
      coin: 'XRP',
      amount: 2000,
      value: 753,
      UserId: 1
    },
    {
      coin: 'ADA',
      amount: 300,
      value: 50,
      UserId: 2
    },
    {
      coin: 'ETH',
      amount: 10000,
      value: 3000000,
      UserId: 2
    },
    {
      coin: 'Solana',
      amount: 2000,
      value: 300,
      UserId: 1
    },

  ], {validate:true})

  await Transaction.bulkCreate([
    {
      balance: 40,
      deposits: 50,
      UserId:1
    },
    {
      balance: 90,
      withdrawals: 10,
      UserId:1
    },
    
    {
      balance: 80,
      UserId:1
    },

    {
      balance: 1600,
      deposits: 50,
      UserId:2
    },
    {
      balance: 2100,
      withdrawals: 100,
      UserId:2
    },
    
    {
      balance: 2000,
      UserId:2
    }
  ], {validate:true})

  console.log('Database has been populated with placeholder info')
}


module.exports = seed