const TurnosRepositorio = require('../../repositorio/turnosRepositorio');

module.exports = class CancelarTurno {
  constructor(turno) {
    this.turno = turno;
    this.fechaHoraActual = new Date();
    this.turnosRepositorio = new TurnosRepositorio();
  }

  async run() {
    await this.turnosRepositorio.conectar();
   console.log(this.turno)
    console.log(`fecha actual ${this.fechaHoraActual} fecha del turno ${this.turno.fechaHora}`)  
    const esMayorA24hs = () => {
      const diffInMs = Math.abs(this.fechaHoraActual - this.turno.fechaHora);
      const diffInHours = diffInMs / (1000 * 60 * 60);
      return diffInHours > 24;
    };

    const mayorA24hs = esMayorA24hs();
    console.log(mayorA24hs + " mayorA24hs");

    if (mayorA24hs) {
      const actualizacion = { "estado": 'Disponible', "dniUsuario": "" };
      const modificacion = await this.turnosRepositorio.modificar(this.turno._id, actualizacion);
      console.log(JSON.stringify(modificacion) + "Turno linea 28 canclearTirno");
      //const turno = await this.turnosRepositorio.buscar(this.idTurno);
      await this.turnosRepositorio.desconectar();
      console.log(modificacion + 'resutlado de modificacion')
      return modificacion;

    }

    await this.turnosRepositorio.desconectar();
    return false;
  }
};