//import packages
const loginRouter = require('./routes/login')
const session = require('express-session')
const bodyParser = require('body-parser')
const express = require('express')
const seed = require('./db/seed')
const path =  require('path')
const app = express()


//middleware that parses the incoming requests 
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(bodyParser.json());

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

//set
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs' )

//routers
app.use('/login',loginRouter)


app.listen(4000, async() => {
  // await seed()
  console.log('listening on port 4000 ')
})

module.exports = app