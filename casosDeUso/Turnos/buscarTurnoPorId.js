const TurnosRepositorio = require('../../repositorio/turnosRepositorio');

module.exports = class BuscarTurnoPorId {
  constructor(idTurno) {
    this.idTurno = idTurno;
    this.turnosRepositorio = new TurnosRepositorio()
  }


  async run() {
    try {
      await this.turnosRepositorio.conectar();
      const turnoBuscado = await this.turnosRepositorio.buscarPorId(this.idTurno);
      return turnoBuscado;
    } catch (error) {
      console.error('Error al buscar el turno por ID:', error);
      return null;
    } finally {
      await this.turnosRepositorio.desconectar();
    }
  }
}