const TurnosRepositorio = require('../../repositorio/turnosRepositorio');

module.exports = class PorcentajeTurnosDisponibles {
  constructor() {
    this.turnosRepositorio = new TurnosRepositorio()
  }

  async run() {
    try {
      await this.turnosRepositorio.conectar()

      const turnosAsignados = await this.turnosRepositorio.contar({ estado: 'Asignado' });
      const turnosDisponibles = await this.turnosRepositorio.contar({ estado: 'Disponible' });
      const turnosValidos = turnosAsignados + turnosDisponibles;
      const porcentaje = (turnosDisponibles / turnosValidos) * 100;

      await this.turnosRepositorio.desconectar();
      return porcentaje.toFixed(2);
    } catch (error) {
      console.error('Error calculando el porcentaje', error);
      throw error;
    }
  }
}