require('./config/config');

const express = require('express');
const bodyParser= require('body-parser');
const app =express();


//para usar el bodyparser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/usuario', (req,res) => {
  res.json ('{"get":"usuario"}')
});


app.post('/usuario', (req,res) => {
  let body = req.body;
  if  (typeof body.nombre == 'undefined') {
    res.status(400).json(
      {
        success: false,
        data : {},
        err: 125554,
        message: 'el nombre es requerido'
      }
    )
  }else {
    res.json (
      {
        
        success: false,
        data : body,
        err: 0,
        message: 'OK'
      
        
      }
    )
  }
  
});


app.put('/usuario/:id', (req,res) => {
  let idUsuario = req.params.id;
  res.json ( {"put": idUsuario})
});

app.delete('/usuario', (req,res) => {
  res.json ('{"delete":"usuario"}')
});

app.listen(process.env.PORT, () => {
  console.log('escuchando puerto 3000');
});