//var http = require('http');
//http.createServer(function (req, res) {
//res.writeHead(200, {'Content-Type': 'text/html'});
//res.end('Hello Mundo');
//}).listen(8080);

//const express = require ('express')
//const app = express()
//app.listen(8080)

//const http = require('http');
//http.createServer(
  //function(req, res){
    //res.writeHead(200, {'Context-type':'text/plain'})
    //res.end('Hola Mundo 01')
  //}
//).listen(8000);

// Librerias o paquetes necesarios para Node
const express = require('express');
const app = express();
const mysql = require('mysql')//Paquetes de BD
const myconn = require('express-myconnection')//PARA CONECCION A BASE DE DATOS (LIBRERIAS)
const routes = require ('./routes');
app.use (express.json())
// Levantando el servidor Web
app.set('puerto', process.env.PORT || 7000) // PARA CREAR UN PUERTO
const optionBD = {
  host : 'localhost',
  user : 'root',
  password : '',
  database : 'apinodemysql',
  port : 3306
}
//MIDDLEWARE
app.use(myconn(mysql, optionBD, 'single'))
//Ruta principal
app.get('/', (req,res)=>{
  res.send('PRUEBA FINAL');
})
/*
  app.get('/carnes', function(req, res){
  res.send('Servidor')
  })

  app.get('/api/crearLibro',(req, res)=>{
  res.send("Crear un libro nuevo")
})

app.get('/fondos',function(req, res){
  res.send('ESTE ES UN EJEMPLO DE PRUEBA')
})

app.get('/practicando',function(req, res){
  res.send('Este es un segundo ejemplo')
})

app.get('/js',function(req, res){
  res.send('Esto es un juego')
})

app.get('/programando',function(req, res){
  res.send('Programando sin miedo ')
})

app.get('/0201',function(req, res){
  res.send('Ha ver que sale programando')
})

app.get('/juego',function(req, res){
  res.send('Todo es un juego')
})

app.get('/vista',function(req, res){
  res.send('JUGANDO A SER VISTO')
})

app.get('/proyect',function(req, res){
  res.send('Tratando de programar')
})*/
app.use('/',routes)
app.use(express.json())
//app.listen(3000,function(){
  app.listen(app.get('puerto'),()=>{// PARA RECUPERAR EL PUERTO GENERADO
  console.log('Servidor ejecutando el puerto', app.get('puerto'))
});