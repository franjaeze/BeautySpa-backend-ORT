const Servicio = require('../modelos/servicio.js')
const ModificarServicio = require('../casosDeUso/Servicios/modificarServicio')
const ObtenerServicios = require('../casosDeUso/Servicios/obtenerServicios.js')
const BuscarServiciosPorId = require('../casosDeUso/Servicios/buscarServicioPorId.js')
const CrearServicio = require('../casosDeUso/Servicios/crearServicio.js')
const EliminarServicios = require('../casosDeUso/Servicios/eliminarServicio.js')



module.exports = class serviciosControlador {
  constructor() {
    this.header = { 'content-type': 'application/json' }
    this.body = {}
  }

  crear = async (req, res) => {
    try {
      const servicio = new Servicio(req.body);
      const servicioCreado = new CrearServicio(servicio);
      const resultado = await servicioCreado.run();
      if (resultado) {
        res.status(200).json({ mensaje: 'Servicio creado correctamente' });
      } else {
        res.status(400).json("El servicio no pudo ser creado")
      }

    } catch (err) {
      res.status(500).json(err);
    }
  };




  mostrar = async (req, res) => {
    try {
      const obtener = new ObtenerServicios()
      const resultado = await obtener.run()
      res.status(200).json(resultado);
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: 'Error al obtener los servicios' });
    }
  };



  buscar = async (req, res) => {
    try {
      const servicioId = req.params.id
      const buscador = new BuscarServiciosPorId(servicioId);
      const resultado = await buscador.run();
      if (resultado) {
        res.json(resultado);
      } else {
        res.status(404).json({ mensaje: 'Servicio no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el servicio' });
    }
  };


  borrar = async (req, res) => {
    try {
      const servicioId = req.params.id;
      const eliminador = new EliminarServicios(servicioId);
      const resultado = await eliminador.run();

      if (resultado) {
        res.json({ mensaje: 'Servicio eliminado correctamente' });
      } else {
        res.status(404).json({ mensaje: 'Servicio no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el servicio' });
    }
  };


  modificar = async (req, res) => {
    try {
      const servicioId = req.params.id;
      const datosServicio = req.body;

      const modificador = new ModificarServicio(servicioId, datosServicio)
      const resultado = modificador.run()

      if (resultado) {
        res.status(200).json({ mensaje: 'El servicio fue modificado' });
      } else {
        res.status(404).json({ mensaje: 'El servicio no fue encontrado' })
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'El servicio no pudo ser modificado' });
    }
  }


}