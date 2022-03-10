const express = require("express") 
const router = express.Router()

// All author routes
router.get('/',(req,res)=>{
    res.render("authors/index")
}) //root of the application


// New author route
router.get('/new',(req,res)=>{
    res.render("authors/new")
}) //only to display the form

// route to create new author
router.post('/',(req,res)=>{
    res.send("Create_new")
})

module.exports = router