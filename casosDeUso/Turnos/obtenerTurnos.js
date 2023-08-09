const TurnosRepositorio = require('../../repositorio/turnosRepositorio');

module.exports = class ObtenerTurnos {
    constructor() {
        this.turnosRepositorio = new TurnosRepositorio()
    }


    async run() {
        await this.turnosRepositorio.conectar()
        const resultado = await this.turnosRepositorio.listar()
        await this.turnosRepositorio.desconectar()
        return resultado
    }
}