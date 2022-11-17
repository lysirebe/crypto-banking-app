//import packages
const express = require('express')
const path =  require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

// import db
const seed = require('./db/seed')

//import routers 
const loginRouter = require('./routes/login')

const app = express()

//use
app.use(express.json())
app.use(express.static(path.join(__dirname, 'static')))
app.use('/login',loginRouter)
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ extended: false }));

//set
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs' )


// 
// app.get('/', (req,res) =>{
// 	// Render login template
// res.sendFile(path.join(__dirname + '/login.html'));
// const path = require('path')
// app.use('./static', express.static(path.join(__dirname, 'public')))
// });



app.listen(4000, async() => {
  // await seed()
  console.log('listening on port 4000 ')
})


module.exports = app