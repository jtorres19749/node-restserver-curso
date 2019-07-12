


//=========================
//Puerto
//=========================
process.env.PORT = process.env.PORT || 3000;




//=========================
//Base de Datos
//=========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
let urlDB;

//produccion
urlDB = 'mongodb+srv://cafeusr:4lfr3d0@cluster0-d3iiz.mongodb.net/cafe?retryWrites=true&w=majority';

/*
if (process.env.NODE_ENV ==='dev') {
  urlDB = 'mongodb://localhost:27017/cafe';
} else {
  urlDB = 'mongodb://cafeusr:4lfr3d0@cluster0-d3iiz.mongodb.net/cafe?retryWrites=true&w=majority';
}
*/

process.env.URLDB = urlDB;

