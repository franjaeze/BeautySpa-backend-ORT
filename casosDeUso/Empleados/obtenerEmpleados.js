const EmpleadosRepositorio = require('../../repositorio/empleadosRepositorio');

module.exports = class ObtenerEmpleados {
    constructor() {
        this.empleadosRepositorio = new EmpleadosRepositorio()
    }


    async run() {
        await this.empleadosRepositorio.conectar()
        const resultado = await this.empleadosRepositorio.listar()
        await this.empleadosRepositorio.desconectar()
        return resultado
    }
}