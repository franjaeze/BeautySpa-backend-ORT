const EmpleadosRepositorio = require('../../repositorio/empleadosRepositorio');

module.exports = class BuscarEmpleadoPorId {
  constructor(idempleado) {
    this.idempleado = idempleado;
    this.empleadosRepositorio = new EmpleadosRepositorio()

  }

  async run() {
    try {
      await this.empleadosRepositorio.conectar();
      const empleadoBuscado = await this.empleadosRepositorio.buscarEmpleado(this.idempleado);
      return empleadoBuscado;

    } catch (error) {
      console.error('Error al buscar el empleado por ID:', error);
      return null;
    } finally {
      await this.empleadosRepositorio.desconectar();
    }
  }
}