const EmpleadosRepositorio = require('../../repositorio/empleadosRepositorio');

module.exports = class EliminarEmpleado {
  constructor(idEmpleado) {
    this.idEmpleado = idEmpleado;
    this.empleadosRepositorio = new EmpleadosRepositorio()

  }

  async run() {
    try {
      await this.empleadosRepositorio.conectar();
      const empleadoAEliminar = await this.empleadosRepositorio.eliminar(this.idEmpleado);
      return empleadoAEliminar;

    } catch (error) {
      console.error('Error al buscar el empleado por ID:', error);
      return null;
    } finally {
      await this.empleadosRepositorio.desconectar();
    }
  }
}