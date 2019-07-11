const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  email: {
    type: String,
    required: [true, 'El correo es necesario']
  },
  password: {
    type: String,
    required: [true, 'El psw es necesario']
  },
  img: {
    type: String,
    required: false
  },
  rol: {
    type: String,
    required: false,
    default: 'USER_ROLE'
  },
  estatus: {
    type: Boolean,
    required: [true, 'El estatus es necesario'],
    default: true

  },
  google: {
    type: Boolean,
    required: [true, 'El google es necesario'],
    default: true
  },
});


module.exports = mongoose.model ('usuario', usuarioSchema);