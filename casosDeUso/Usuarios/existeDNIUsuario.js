const UsuariosRepositorio = require('../../repositorio/usuariosRepositorio');

module.exports = class ExisteDNIUsuario {
    constructor(DNIUsuario) {
        this.DNI = DNIUsuario;
        this.usuariosRepositorio = new UsuariosRepositorio()

    }

    async run() {
        await this.usuariosRepositorio.conectar();
        const existe = await this.usuariosRepositorio.existeDNI(this.DNI);

        await this.usuariosRepositorio.desconectar();
        return existe;
    }
};