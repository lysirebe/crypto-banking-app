const {Router} = require('express')
const{User} = require('../models')
const loginRouter = Router()


// displays the page when client opens up http://localhost:4000/login
loginRouter.get('/', (req,res) =>{
  res.status(200)
  .render('login')
})

// receives users login details, checks them against db and displays appropiate page
loginRouter.post('/', async(req,res) => {
  const user = await User.findOne({
    where: {email: req.body.email}
  })

  if(user){ // if a user with this email exists 
    if(req.body.password === user.password){

      // display homepage + store their first name from db
      res.status(200).render('home',{
        firstName:user.firstName
      })

      // else display appropiate error messages 
      } else {
        res.status(400).render('error', {error:'incorrect password'})
          
          // 'login', {
          // incorrectPassword: true,
          // error:'incorrect password'

    }} else {
      res.status(404).render('error', {error:'user does not exist'})
        
        // 'login', {
        //   userNotFound: true,
        //   error2:'user does not exist'
        // }
  }
})



module.exports = loginRouter