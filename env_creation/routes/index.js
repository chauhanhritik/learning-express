const express = require("express") 
const router = express.Router()

router.get('/',(req,res)=>{
    res.render("index")
}) //root of the application

module.exports = router