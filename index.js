require("dotenv").config()
 
const bodyParser = require('body-parser')

const express = require('express')

const mongoose = require('mongoose');

const cors = require ('cors');
const serviciosControlador = require("./controladores/serviciosControlador");
const EmpleadosControlador = require("./controladores/empleadosControlador");

const  usuariosRoutes= require("./routes/usuariosRoutes.js")
const  empleadosRoutes= require("./routes/empleadosRoutes.js")
const  turnosRoutes= require("./routes/turnosRoutes.js")
const  serviciosRoutes= require("./routes/serviciosRoutes.js")

const app = express()
app.use(cors())
app.use(express.json()) 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use("/usuarios", usuariosRoutes);
app.use("/empleados", empleadosRoutes);
app.use("/turnos", turnosRoutes);
app.use("/servicios", serviciosRoutes);

app.get('/', function(request, response) {
  console.log(`Recibimos GET`)
 response.send('Hello world!')
})

const PORT = process.env.PORT || 6000;
app.listen(PORT,() => {
  console.log (" Server is running on PORT", PORT)
});

