const UsuariosRepositorio = require('../../repositorio/usuariosRepositorio');


module.exports = class BuscarUsuario {
  constructor(usuarioID) {
    this.usuarioID = usuarioID;
    this.usuariosRepositorio = new UsuariosRepositorio()

  }

  async run() {
    try {
      await this.usuariosRepositorio.conectar();
      const usuarioBuscado = await this.usuariosRepositorio.buscarPorId(this.usuarioID);
      return usuarioBuscado;
    } catch (error) {
      console.error('Error al buscar el usuario por ID:', error);
      return null;
    } finally {
      await this.usuariosRepositorio.desconectar();
    }
  }

}