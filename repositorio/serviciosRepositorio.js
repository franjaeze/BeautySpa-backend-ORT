const Mongoose_dao = require('./Mongoose_dao.js')

module.exports = class serviciosRepositorio {
    constructor() {
        this.servicios = new Mongoose_dao
    }

    async conectar() {
        await this.servicios.conectar("servicios")
    }

    async desconectar() {
        await this.servicios.desconectar("servicios")
    }

    guardar(servicio) {
        return this.servicios.guardar(servicio)
    }


    eliminar(id) {
        return this.servicios.quitar(id)
    }


    modificar(id, actualizacion = {}) {
        return this.servicios.cambiar(id, actualizacion)
    }


    buscarPorId(id = null) {
        return this.servicios.buscar(id)
    }

    listar() {
        return this.servicios.listar()
    }
}