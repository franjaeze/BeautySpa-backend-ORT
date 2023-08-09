const Usuario = require('../modelos/usuario.js')
const ObtenerUsuarios = require('../casosDeUso/Usuarios/obtenerUsuarios');
const ModificarUsuario = require('../casosDeUso/Usuarios/modificarUsuario');
const BuscarUsuario = require('../casosDeUso/Usuarios/buscarUsuario');
const EliminarUsuario = require('../casosDeUso/Usuarios/eliminarUsuario');
const CrearUsuario = require('../casosDeUso/Usuarios/crearUsuario');


module.exports = class usuarioControlador {
  constructor() {
    this.header = { 'content-type': 'application/json' }
    this.body = {}
  }

  crear = async (req, res) => {
    try {
      const usuario = new Usuario(req.body)
      const usuarioCreado = new CrearUsuario(usuario);
      const resultado = await usuarioCreado.run();
      if (resultado) {
        res.status(200).json({ mensaje: resultado +'Usuario creado correctamente' });
      } else {
        res.status(400).json({ mensaje:  resultado + 'Error al crear el usuario' });
      }
    } catch (error) {
      res.status(400).json({ mensaje: error.message });
    }
  };


  mostrar = async (req, res) => {
    try {
      const obtener = new ObtenerUsuarios()
      const resultado = await obtener.run()
      res.status(200).json(resultado);
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: 'Error al obtener los usuarios' });
    }
  };


  buscar = async (req, res) => {
    try {
      const usuarioID = req.params.id;
      const buscador = new BuscarUsuario(usuarioID);
      const resultado = await buscador.run();

      if (resultado) {
        res.json(resultado);
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el usuario' });
    }
  };


  borrar = async (req, res) => {
    try {
      const usuarioID = req.params.id;
      const eliminador = new EliminarUsuario(usuarioID);
      const resultado = await eliminador.run();

      if (resultado) {
        res.json({ mensaje: 'Usuario eliminado correctamente' });
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el usuario' });
    }
  };


  modificar = async (req, res) => {
    try {
      const usuarioID = req.params.id;
      const datosUsuario = req.body;
      let resultado;

      const modificador = new ModificarUsuario(usuarioID, datosUsuario);
      resultado = await modificador.run();

      if (resultado) {
        res.status(200).json({ mensaje: 'Usuario modificado' });
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el usuario' });
    }
  };
}