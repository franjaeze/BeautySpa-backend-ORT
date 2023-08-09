const TurnosRepositorio = require('../../repositorio/turnosRepositorio');

module.exports = class EliminarTurnos {
  constructor(idTurno) {
    this.idTurno = idTurno;
    this.turnosRepositorio = new TurnosRepositorio()
  }

  async run() {
    try {
      await this.turnosRepositorio.conectar();
      const resultado = await this.turnosRepositorio.eliminar(this.idTurno)
      return resultado;
    } catch (error) {
      console.error('Error al eliminar el turno', error);
      return null;
    } finally {
      await this.turnosRepositorio.desconectar();
    }
  }
} 