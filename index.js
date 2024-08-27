// para automatizar el desarrollo instalamos un nuevo modulo npm i nodemon --save-dev el save dev es para que sea solo en desarrollo
// modificamos el script de estar para que ejecute server.js y que el archivo principal sea server.js con esto podemos  correr el servidor con el comando npm run start
// instalamos los modulos de mysql que seria npm i mysql express-myconnection
// bcrptjs para encriptar contraseñas
// cors para peticiones de otros dominios
// dotenv para variables de entorno
// express es elm freamwork express-validator para que tenga los datos que quiero
// jsonwebtoken generar tokens para los accesos a la aplicacion
//npm install express socket.io mysql2 para ver en teimpo real no me funciono por conflictos de los demas servicios


//los modulos para conecta
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const path = require("path")
// constante para la aplicacion ---------
const app = express()


//Directorio publico------------
app.use(express.static('public'))//pasa por un middleware

// escuchar en una puerta usando el metodo listen y se le pasa el (numero de puerta de salida, funcion)
app.set('port', process.env.PORT)

//mid leware---------------
app.use(cors());

//Manejar las demas rutas
app.get( '*', (req,res) => {
    res.sendFile( path.resolve( __dirname, 'public/index.html'))
})

//server running-------------------
app.listen(app.get('port'), ()=>{
    console.log('Servidor corriendo en puerto', app.get('port'))
})
