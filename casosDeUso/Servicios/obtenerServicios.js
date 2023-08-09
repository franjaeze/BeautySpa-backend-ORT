const ServiciosRepositorio = require('../../repositorio/serviciosRepositorio');

module.exports = class ObtenerServicios {
    constructor() {
        this.serviciosRepositorio = new ServiciosRepositorio()
    }


    async run() {
        await this.serviciosRepositorio.conectar()
        const resultado = await this.serviciosRepositorio.listar()
        await this.serviciosRepositorio.desconectar()
        return resultado
    }
}