const Empleado = require('../modelos/empleado.js');
const ObtenerEmpleados = require('../casosDeUso/Empleados/obtenerEmpleados');
const ModificarEmpleado = require('../casosDeUso/Empleados/modificarEmpleado');
const BuscarEmpleado = require('../casosDeUso/Empleados/buscarEmpleado');
const CrearEmpleado = require('../casosDeUso/Empleados/crearEmpleado');
const EliminarEmpleado = require('../casosDeUso/Empleados/eliminarEmpleado.js');

module.exports = class EmpleadosControlador {
  constructor() {
    this.header = { 'content-type': 'application/json' }
    this.body = {}
  }


  crear = async (req, res) => {
    try {
      const empleado = new Empleado(req.body)
      const empleadoCreado = new CrearEmpleado(empleado);
      const resultado = await empleadoCreado.run();
      console.log(resultado);
      if (resultado) {
        res.status(200).json({ mensaje: 'Empleado creado correctamente' });
      } else {
        res.status(500).json({ mensaje: 'Error al crear empleado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  };


  mostrar = async (req, res) => {
    try {
      const obtener = new ObtenerEmpleados()
      const resultado = await obtener.run()
      res.status(200).json(resultado);
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: 'Error al obtener los empleados' });
    }
  };



  buscar = async (req, res) => {
    try {
      const empleadoID = req.params.id;
      const buscador = new BuscarEmpleado(empleadoID);
      const resultado = await buscador.run();


      if (resultado) {
        res.json(resultado);
      } else {
        res.status(404).json({ mensaje: 'Empleado no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el empleado' });
    }
  };


  borrar = async (req, res) => {
    try {
      const empleadoId = req.params.id;
      const eliminador = new EliminarEmpleado(empleadoId);
      const resultado = await eliminador.run();

      if (resultado) {
        res.json({ mensaje: 'Empleado eliminado correctamente' });
      } else {
        res.status(404).json({ mensaje: 'Empleado no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el empleado' });
    }
  };


  buscarPortipo = async (req, res) => {
    try {
      const tipoServicio = req.params.tipo;
      const servicio = await this.empleadosRepositorio.buscarEmpleadoPorTipoServicio(tipoServicio);
      if (servicio) {
        res.json(servicio);

      } else {
        res.status(404).json({ mensaje: 'Servicio no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el servicio' });
    }
  };


  modificar = async (req, res) => {
    try {
      const empleadoID = req.params.id;
      const datosEmpleado = req.body;

      const modificador = new ModificarEmpleado(empleadoID, datosEmpleado)
      const resultado = modificador.run()

      if (resultado) {
        res.status(200).json({ mensaje: 'Empleado modificado' });
      } else {
        res.status(404).json({ mensaje: 'Empleado no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el empleado' });
    }

  }

}