const express = require('express');
const mongoose = require('mongoose');

// set up our express app
const app = express();

// connect to mongodb
mongoose.connect("mongodb+srv://muvieapp:muvie24022@cluster0.0maqawq.mongodb.net/?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;

app.use(express.static('public'));
const cors = require('cors');
app.use(cors());
app.use(express.json());
// initialize routes
app.use('/api',require('./routes/api'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 8080, function(){
    console.log('Ready to Go!');
});