const EmpleadosRepositorio = require('../../repositorio/empleadosRepositorio');

module.exports = class ModificarEmpleado {
    constructor(empleadoID, datosEmpleado) {
        this.empleadoID = empleadoID;
        this.datosEmpleado = datosEmpleado;
        this.empleadosRepositorio = new EmpleadosRepositorio()
    }

    
    async run() {
        await this.empleadosRepositorio.conectar()
        const empleadoModificado = await this.empleadosRepositorio.modificar(this.empleadoID, this.datosEmpleado);
        await this.empleadosRepositorio.desconectar()
        return empleadoModificado
    }
}