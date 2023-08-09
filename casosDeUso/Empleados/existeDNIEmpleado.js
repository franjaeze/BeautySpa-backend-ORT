const EmpleadosRepositorio = require('../../repositorio/empleadosRepositorio');

module.exports = class ExisteDNIEmpleado {
    constructor(DNIEmpleado) {
        this.DNI = DNIEmpleado;
        this.empleadosRepositorio = new EmpleadosRepositorio()

    }

    async run() {
        await this.empleadosRepositorio.conectar();
        const existe = await this.empleadosRepositorio.existeDNI(this.DNI);

        await this.empleadosRepositorio.desconectar();
        return existe;
    }
};