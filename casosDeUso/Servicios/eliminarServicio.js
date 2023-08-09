const ServiciosRepositorio = require('../../repositorio/serviciosRepositorio');

module.exports = class EliminarServicios {
  constructor(idServicio) {
    this.idServicio = idServicio;
    this.serviciosRepositorio = new ServiciosRepositorio()
  }


  async run() {
    try {
      await this.serviciosRepositorio.conectar();
      const servicioBuscado = await this.serviciosRepositorio.eliminar(this.idServicio);
      return servicioBuscado;
    } catch (error) {
      console.error('Error al eliminar el servicio', error);
      return null;
    } finally {
      await this.serviciosRepositorio.desconectar();
    }
  }

}