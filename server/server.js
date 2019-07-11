require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const bodyParser= require('body-parser');
const app =express();


//para usar el bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));


mongoose.connect('mongodb://localhost:27017/cafe', (err, resp)=>{
 if (err) throw err;

 console.log ('BD online')
});


app.listen(process.env.PORT, () => {
  console.log('escuchando puerto 3000');
});