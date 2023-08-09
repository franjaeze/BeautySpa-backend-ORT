const Mongoose_dao = require('../repositorio/Mongoose_dao');

module.exports = class TurnosRepositorio {
  constructor() {
    this.turnos = new Mongoose_dao();
  }

  async conectar() {
    await this.turnos.conectar('turnos');
  }

  async desconectar() {
    await this.turnos.desconectar('turnos');
  }

  guardar(turno) {
    return this.turnos.guardar(turno);
  }

  eliminar(id) {
    return this.turnos.quitar(id);
  }

  modificar(id, actualizacion = {}) {
    return this.turnos.cambiar(id, actualizacion);
  }

  buscarPorId(id = null) {
    return this.turnos.buscar(id);
  }

  listar() {
    return this.turnos.listar();
  }

  contar(property = null) {
    return this.turnos.countDocuments(property);
  }
};