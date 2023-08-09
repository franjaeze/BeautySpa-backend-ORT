const Mongoose_dao = require('../repositorio/Mongoose_dao');

module.exports = class usuariosRepositorio {
    constructor() {
        this.usuarios = new Mongoose_dao();
    }


    async conectar() {
        await this.usuarios.conectar('usuarios')
    }


    async desconectar() {
        await this.usuarios.desconectar('usuarios')
    }


    existeDNI(dni = null) {
        return this.usuarios.existeDNI(dni);
    }


    guardar(usuario) {
        return this.usuarios.guardar(usuario)
    }


    eliminar(id) {
        return this.usuarios.quitar(id)
    }


    modificar(id, actualizacion = {}) {
        return this.usuarios.cambiar(id, actualizacion)
    }


    buscarPorId(id = null) {
        return this.usuarios.buscar(id)
    }


    listar() {
        return this.usuarios.listar();
    }
}