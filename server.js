// installing module dependencies

const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const nodemailer= require('nodemailer')
const bodyparser= require('body-parser')

//setting express app
const app= express()

 //setting view engine
app.engine('handlebars', exphbs.engine())
appset('view engine', 'handlebars')

//static folder to use static files
app.use('/public', express.static(path.join(__dirname, 'public')))

//body parser middleware
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())