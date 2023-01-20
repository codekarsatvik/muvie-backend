const express = require('express');
const router = express.Router();
const Email = require('../Email');



// add a new student to database
router.post('/addemail',function(req,res,next){
    console.log(req.body);
    Email.create(req.body).then(function(email){
   
        res.send(email);
    }).catch(next);
});



module.exports = router;