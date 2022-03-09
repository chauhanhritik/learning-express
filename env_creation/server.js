// npm run devstart --> used to run the server using devstart script


const express=require("express")
const app=express() 

// Routes are integrated with views using layouts
// we define boiler plate for every page using layouts
const  expressLayouts = require('express-ejs-layouts')
const indexRouter=require('./routes/index') //using the route we have built
// INDEXROUTER is a reference to route within index.js


// Setting view engines-
app.set("view engine","ejs") //using ejs as view engine
app.set('views',__dirname+'/views')  //Setting where views will be coming from. __dirname signifies current directory

//Hooking up express layouts--
app.set("layout","layouts/layout") //inside layout file within layouts folder 
app.use(expressLayouts) //telling we want to use expressLayouts

// telling server where our public files will be i.e our html file and css, js etc
app.use(express.static('public')) //public folder will be containing thode files

app.use('/',indexRouter)



app.listen(process.env.PORT||3000)  // when run without routes error will be shown in browser :: Cannot GET /
// routes can be addded within server.js only or can be defined externally too based on complexity of the program
// ROUTES ARE CONTROLLERS
