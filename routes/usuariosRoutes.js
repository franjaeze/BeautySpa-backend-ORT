const express = require ('express');
const router = express.Router();
const UsuariosControlador = require("../controladores/usuariosControlador");
const usuariosControlador = new UsuariosControlador()


router.get('/', usuariosControlador.mostrar);


router.get('/:id', usuariosControlador.buscar);


router.post('/',usuariosControlador.crear);


router.put('/:id', usuariosControlador.modificar); // ********** el PUT debe enviarse sin id ***********


router.delete('/:id', usuariosControlador.borrar);


module.exports= router;