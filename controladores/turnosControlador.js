const Turno = require('../modelos/turno.js');
const ObtenerTurnos = require('../casosDeUso/Turnos/obtenerTurnos');
const ModificarTurno = require('../casosDeUso/Turnos/modificarTurno');
const CancelarTurno = require('../casosDeUso/Turnos/cancelarTurno');
const EliminarTurno = require('../casosDeUso/Turnos/eliminarTurno');
const BuscarTurnoPorId = require('../casosDeUso/Turnos/buscarTurnoPorId');
const CrearTurno = require('../casosDeUso/Turnos/crearTurno');
const PorcentajeTurnosDisponibles = require('../casosDeUso/Turnos/porcentajeTurnosDisponibles');


module.exports = class TurnosControlador {
  constructor() {
    this.header = { 'content-type': 'application/json' }
    this.body = {}
  }


  crear = async (req, res) => {
    try {
      const turno = new Turno(req.body)
      const turnoCreado = new CrearTurno(turno);
      const resultado = await turnoCreado.run();
      console.log('el resultado es '+ resultado)
      if (resultado) {
        res.status(200).json({ mensaje: 'Turno creado correctamente' });
      } else {
        res.status(500).json({ mensaje: 'Error al crear el turno' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
    }
  };


  mostrar = async (req, res) => {
    try {
      const obtener = new ObtenerTurnos()
      const resultado = await obtener.run()
      res.status(200).json(resultado);
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: 'Error al obtener los turnos' });
    }
  };


  buscar = async (req, res) => {
    try {
      const turnoID = req.params.id;
      const buscador = new BuscarTurnoPorId(turnoID);
      const resultado = await buscador.run();

      if (resultado) {
        res.json(resultado);
      } else {
        res.status(404).json({ mensaje: 'Turno no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el turno' });
    }
  };


  borrar = async (req, res) => {
    try {
      const turnoID = req.params.id;
      const eliminador = new EliminarTurno(turnoID);
      const resultado = await eliminador.run();

      if (resultado) {
        res.json({ mensaje: 'Turno eliminado correctamente' });
      } else {
        res.status(404).json({ mensaje: 'Turno no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al eliminar el Turno' });
    }
  };


  modificar = async (req, res) => {
    try {
      const turnoID = req.params.id;
      const datosTurno = req.body;
      const turnoEstado = req.body.estado;
      let resultado;
  
      const buscarTurno = new BuscarTurnoPorId(turnoID)
      const turnoEncontrado = await buscarTurno.run()

      if (!turnoEncontrado) {
        return res.status(404).json({ mensaje: 'Turno no encontrado' });
      } 



      if (turnoEstado === "Cancelado") {
        console.log("entra a cancelar")
        const cancelador = new CancelarTurno(turnoEncontrado);
        resultado = await cancelador.run();
      } else {
        const modificador = new ModificarTurno(turnoID, datosTurno);
        resultado = await modificador.run();
      }
      console.log(resultado + 'valor del resultado de cancelar turno')
      if (resultado) {
        res.status(200).json({ mensaje: 'Turno modificado' });
      } else {
        res.status(404).json({ mensaje: 'Turno no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al obtener el turno' });
    }
  };


  cancelar = async (req, res) => {
    try {
      const turnoID = req.params.id;
      const buscarTurno = new BuscarTurnoPorId(turnoID)
      const turnoEncontrado = await buscarTurno.run()

      if (!turnoEncontrado) {
        return res.status(404).json({ mensaje: 'Turno no encontrado' });
      } 
      if(turnoEncontrado.estado== "Disponible"){
       return  res.status(404).json({ mensaje: 'El turno se encuentra actualmente Disponible' });
      }
      const modificador = new CancelarTurno(turnoEncontrado)
      const resultado = await modificador.run()
      console.log(`resultado de la cancelacion de turno ${json.stringyfy(resultado)}`)
      if (resultado) {
      return  res.status(200).json({ mensaje: 'Turno cancelado' });
      } else {
        return res.status(404).json({ mensaje: 'Turno no puede cancelarse con menos de 24 hs de antelacion' });
      }
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al cancelar el turno' });
    }

  };


  porcentajeTurnosDisponibles = async (req, res) => {
    try {
      const calcular = new PorcentajeTurnosDisponibles()
      const resultado = await calcular.run()
      res.status(200).json({ mensaje: 'Turnos disponibles: ' + resultado + '%' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: 'Error al obtener porcentaje turnos disponibles' });
    }
  };
}