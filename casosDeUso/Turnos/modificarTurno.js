const TurnosRepositorio = require('../../repositorio/turnosRepositorio');

module.exports = class ModificarTurno {
  constructor(idTurno, datosTurno) {
    this.idTurno = idTurno;
    this.datosTurno = datosTurno;
    this.turnosRepositorio = new TurnosRepositorio();
  }

  async run() {
    await this.turnosRepositorio.conectar();
    const turnoModificado = await this.turnosRepositorio.modificar(this.idTurno, this.datosTurno);
    const turno = await this.turnosRepositorio.buscarPorId(this.idTurno);
    await this.turnosRepositorio.desconectar();
    return turno;
  }
};
