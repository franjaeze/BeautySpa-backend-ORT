const ServiciosRepositorio = require('../../repositorio/serviciosRepositorio');

module.exports = class ModificarServicio {
    constructor(servicioId, datosServicio) {
        this.servicioId = servicioId;
        this.datosServicio = datosServicio;
        this.serviciosRepositorio = new ServiciosRepositorio()

    }


    async run() {
        await this.serviciosRepositorio.conectar()
        const servicioModificado = await this.serviciosRepositorio.modificar(this.servicioId, this.datosServicio);
        const servicio = await this.serviciosRepositorio.buscarPorId(this.servicioId);
        await this.serviciosRepositorio.desconectar()
        return servicio
    }
}