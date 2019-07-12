require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const bodyParser= require('body-parser');
const app =express();


//para usar el bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require('./routes/usuario'));


mongoose.connect(process.env.URLDB, 
                {useNewUrlParser: true, useCreateIndex: true}  ,
                (err, resp)=>{
                  
 if (err) throw err;

 console.log ('BD online')
});


app.listen(process.env.PORT, () => {
  console.log('escuchando puerto 3000');
});