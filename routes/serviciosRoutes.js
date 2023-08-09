const express = require ('express');
const router = express.Router();
const ServiciosControlador = require("../controladores/serviciosControlador");
const serviciosController = new ServiciosControlador()

router.get('/', serviciosController.mostrar);


router.get('/:id', serviciosController.buscar);


router.post('/', serviciosController.crear);


router.put('/:id', serviciosController.modificar);


router.delete('/:id', serviciosController.borrar);


module.exports= router;