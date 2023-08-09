const express = require ('express');
const router = express.Router();
const EmpleadosControlador = require("../controladores/empleadosControlador");
const empleadosController = new EmpleadosControlador()

router.get('/', empleadosController.mostrar);


router.get('/:id', empleadosController.buscar);


router.post('/', empleadosController.crear);


router.put('/:id', empleadosController.modificar); // **** el PUT debe enviarse sin id *****


router.delete('/:id', empleadosController.borrar);


module.exports= router;