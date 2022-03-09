import express from "express"
const app=express()
import expressLayouts from "express-ejs-layouts"

// Setting view engines-
app.set("view engine","ejs") //using ejs as view engine
app.set('views',__dirname+'/views')  //Setting where views will be coming from. __dirname signifies current directory

//Hooking up express layouts--
app.set("layouts","layouts/layout") //inside layout file within layouts folder 
app.use(expressLayouts) //telling we want to use expressLayouts

// telling server where our public files will be i.e our html file and css, js etc
app.use(express.static('public')) //public folder will be containing thode files

