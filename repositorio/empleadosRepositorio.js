const Mongoose_dao = require('../repositorio/Mongoose_dao');

module.exports = class EmpleadosRepositorio {
  constructor() {
    this.empleados = new Mongoose_dao();
  }

  async conectar() {
    await this.empleados.conectar('empleados');
  }

  async desconectar() {
    console.log("Desconexión a BD!!!!");
    await this.empleados.desconectar('empleados');
  }


  guardar(empleado) {
    return this.empleados.guardar(empleado);
  }


  eliminar(dni) {
    return this.empleados.quitar(dni);
  }


  modificar(id, actualizacion = {}) {
    return this.empleados.cambiar(id, actualizacion);
  }


  buscarEmpleado(id = null) {
    return this.empleados.buscar(id);
  }

  existeDNI(dni = null) {
    return this.empleados.existeDNI(dni);
  }


  buscarEmpleadoPorTipoServicio(tipo = null) {
    return this.empleados.buscarEmpleadoTipoServicio(tipo);
  }


  cantidadEmpleados() {
    return this.empleados.tamanio();
  }


  listar() {
    return this.empleados.listar();
  }
};
