const express = require ('express');
const router = express.Router();
const TurnosControlador= require("../controladores/turnosControlador");
const turnosController = new TurnosControlador()

router.get('/porcentajeTurnosDisponibles', turnosController.porcentajeTurnosDisponibles);


router.get('/', turnosController.mostrar);


router.get('/:id', turnosController.buscar);


router.post('/',turnosController.crear);


router.put('/:id', turnosController.modificar); // ********** el PUT debe enviarse sin id ***********


router.delete('/:id', turnosController.cancelar);


module.exports= router;