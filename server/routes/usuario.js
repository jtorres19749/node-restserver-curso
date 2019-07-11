const express = require('express');
const app =express();
const Usuario = require('../models/usuario');


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

    //procesa

    let usuario = new Usuario({
      nombre: body.nombre,
      email: body.email,
      password: body.password,
      role: body.role 
    })

    usuario.save( (err, usuarioDB) => {
      if (err) {
        resp.status(400).json({
          success: false,
          data : {},
          err: 125553,
          message: 'error al grabar el usuario a la bd '
        })
      }

      res.json({id})


    })

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




module.exports = app;