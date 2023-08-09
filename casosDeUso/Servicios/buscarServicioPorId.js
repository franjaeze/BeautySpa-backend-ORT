const ServiciosRepositorio = require('../../repositorio/serviciosRepositorio');

module.exports = class BuscarServicioPorId {
  constructor(idServicio) {
    this.idServicio = idServicio;
    this.serviciosRepositorio = new ServiciosRepositorio()
  }


  async run() {
    try {
      await this.serviciosRepositorio.conectar();
      const servicioBuscado = await this.serviciosRepositorio.buscarPorId(this.idServicio);
      return servicioBuscado;
    } catch (error) {
      console.error('Error al buscar el servicio por ID:', error);
      return null;
    } finally {
      await this.serviciosRepositorio.desconectar();
    }
  }

}