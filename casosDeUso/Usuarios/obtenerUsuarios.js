const UsuariosRepositorio = require('../../repositorio/usuariosRepositorio');

module.exports = class ObtenerUsuarios {
    constructor() {
        this.usuariosRepositorio = new UsuariosRepositorio()
    }


    async run() {
        await this.usuariosRepositorio.conectar()
        const resultado = await this.usuariosRepositorio.listar()
        await this.usuariosRepositorio.desconectar()
        return resultado
    }
}