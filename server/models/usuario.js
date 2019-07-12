const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;

/*
let rolesValidos = {
  values: ['ADMIN_ROLE', 'USER_ROLE'],
  message: '{VAÑUE} no es un rol válido'
};
*/

let usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es necesario']
  },
  email: {
    type: String,
    unique: true, 
    required: [true, 'El correo es necesario']
  },
  password: {
    type: String,
    required: [true, 'El password es necesario ']
  },
  img: {
    type: String,
    required: false
  },
  role: {
    type: String,
    required: true,
    default: 'USER_ROLE',
    enum: {
      values: ['ADMIN_ROLE', 'USER_ROLE'],
      message: '{VALUE} no es un rol válido'
    }
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

usuarioSchema.plugin(uniqueValidator,{ message:'{PATH} debe de ser único'})

module.exports = mongoose.model ('usuario', usuarioSchema);