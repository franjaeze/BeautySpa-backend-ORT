const EmpleadosRepositorio = require('../../repositorio/empleadosRepositorio');
const ExisteDNIEmpleado = require('../Empleados/existeDNIEmpleado');

module.exports = class CrearEmpleado {
  constructor(empleado) {
    this.empleado = empleado;
    this.empleadoRepositorio = new EmpleadosRepositorio();
  }


  async run() {
    try {
      await this.empleadoRepositorio.conectar();
      const dniExistente = new ExisteDNIEmpleado(this.empleado.dni);
      let resultado = null;
      const existe = await dniExistente.run();
      console.log(existe + "existe");
      if (existe) {
        console.log('Error DNI ya existente')
      } else {
        resultado = await this.empleadoRepositorio.guardar(this.empleado);

      }

      await this.empleadoRepositorio.desconectar();
      return resultado;
    } catch (error) {
      console.error('Error al crear el empleado:', error);
      throw new Error('Error al crear empleado');
    }
  }
};

