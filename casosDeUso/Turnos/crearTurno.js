const TurnosRepositorio = require('../../repositorio/turnosRepositorio');

module.exports = class CrearTurno {
  constructor(turno) {
    this.turno = turno;
    this.turnosRepositorio = new TurnosRepositorio();
  }


  async run() {
    try {
      await this.turnosRepositorio.conectar();
      const resultado = await this.turnosRepositorio.guardar(this.turno);
      await this.turnosRepositorio.desconectar();
      return resultado;
    } catch (error) {
      console.error('Error al crear el turno:', error);
      throw new Error('Error al crear turno');
    }
  }


};