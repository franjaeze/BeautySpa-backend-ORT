const ServiciosRepositorio = require('../../repositorio/serviciosRepositorio');

module.exports = class CrearServicio {
  constructor(servicio) {
    this.servicio = servicio;
    this.serviciosRepositorio = new ServiciosRepositorio()
  }


  async run() {
    try {
      await this.serviciosRepositorio.conectar();
      const resultado = await this.serviciosRepositorio.guardar(this.servicio);
      return resultado;
    } catch (error) {
      console.error('Error al crear el Servicio:', error);
      return null;
    } finally {
      await this.serviciosRepositorio.desconectar();
    }
  }

}