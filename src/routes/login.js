const {Router} = require('express')
const{User, Transaction, Portfolio} = require('../models')
const loginRouter = Router()

loginRouter.get('/', (req,res) =>{
  res.status(200)
  // .send('user router is working')
  .render('login')
})

loginRouter.post('/', async(req,res) => {
  const user = await User.findOne({
    // where: {email: req.body.email}
    where: {email:'test@gmail.com'}
  })
  if(user){
    // if(req.body.password === user.password)
    if('password123' === user.password){
      // use this to get all user details + use eagerloading and attributes to specify when finding user above too ???
      res.status(200).render('home',{
        firstName:user.firstName
      })
      } else {
        res.status(400).render('error', {
          error:'incorrect password'
      })
    }} else {
      res.status(404).render('error', {
        error:'user does not exist'
    })
}})



module.exports = loginRouter