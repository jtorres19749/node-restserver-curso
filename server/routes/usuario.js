const express = require('express');
const app =express();
const Usuario = require('../models/usuario');
const _ = require('underscore');


app.get('/usuario', (req,res) => {

  let desde = req.query.desde || 0;
  desde = Number(desde);

  let limite = req.query.limite || 100;
  limite = Number(limite);


  
  Usuario.find({estatus: true}, 'nombre email role' )
    .limit (limite)
    .skip (desde)
    .exec ( (err,usuarios) => {

      if (err){
        return res.status(400).json({
          success: true,
          err
        })
      } else {
        
        Usuario.countDocuments({estatus:true} , (err, conteo) => {
          res.json({
            success: true,
            registros: conteo,
            usuarios
          })
        });

        

      }
    });

  //res.json ('{"get":"usuario"}')
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

       return res.status(400).json({
          success: false,
          data : {},
          err,
          message: 'error al grabar el usuario a la bd '
        });
        
      }

      res.json({usuarioDB})


    })

    /*
    res.json (
      {
        
        success: false,
        data : body,
        err: 0,
        message: 'OK'
      
        
      }
    )
    */
  }
  
});


app.put('/usuario/:id', (req,res) => {

  let id= req.params.id;
  //let body = req.body;


  //descartar propiedades
  /*
  delete body.password;
  delete body.google;
  */

  let body = _.pick(req.body,['nombre',  'img',  'role', 'estatus']);

  Usuario.findByIdAndUpdate (id, body, {new : true, runValidators : true}, (err,usuarioDB) => {

    if (err) {
      return res.status(400).json ({
        ok: false,
        err
      })
    } else{

      res.json({
        status:true,
        err: null,
        usuario: usuarioDB
      })
    }

  });
   

});




app.delete('/usuario/:id', (req,res) => {
  //res.json ('{"delete":"usuario"}')
  let id= req.params.id;

  Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {
    
    if (err) {
      return res.status(400).json ({
        ok: false,
        err
      })
    } else{

      if (!usuarioBorrado){
        return res.status(400).json ({
          ok: false,
          err: {
            err: 3333,
            message: 'Usuario no encontrado'
          }
        })
      }
      
      res.json({
        status:true,
        err: null,
        usuario: usuarioBorrado
      })



    }

  });


});



app.unlink('/usuario/:id', (req,res) => {
  //res.json ('{"delete":"usuario"}')
  let id= req.params.id;

  let dat = {
    estatus : false
  };

  Usuario.findByIdAndUpdate(id, dat, {new : true}, (err, usuarioBorrado) => {
    
    if (err) {
      return res.status(400).json ({
        ok: false,
        err
      })
    } else{

      if (!usuarioBorrado){
        return res.status(400).json ({
          ok: false,
          err: {
            err: 3333,
            message: 'Usuario no encontrado'
          }
        })
      }
      
      res.json({
        status:true,
        err: null,
        usuario: usuarioBorrado
      })
    }
  });
});

module.exports = app;