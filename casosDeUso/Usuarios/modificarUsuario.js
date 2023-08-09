const UsuariosRepositorio = require('../../repositorio/usuariosRepositorio');

module.exports = class ModificarUsuario {
  constructor(usuarioID, datosUsuario) {
    this.usuarioID = usuarioID;
    this.datosUsuario = datosUsuario;
    this.usuariosRepositorio = new UsuariosRepositorio()

  }


  async run() {
    await this.usuariosRepositorio.conectar();
    const usuarioModificado = await this.usuariosRepositorio.modificar(this.usuarioID, this.datosUsuario);
    const usuario = await this.usuariosRepositorio.buscarPorId(this.usuarioID);
    await this.usuariosRepositorio.desconectar();
    return usuario;
  }
}
