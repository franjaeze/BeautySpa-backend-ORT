const UsuariosRepositorio = require('../../repositorio/usuariosRepositorio');

module.exports = class EliminarUsuario {
  constructor(usuarioID) {
    this.usuarioID = usuarioID;
    this.usuariosRepositorio = new UsuariosRepositorio()

  }


  async run() {
    try {
      await this.usuariosRepositorio.conectar();
      const resultado = await this.usuariosRepositorio.eliminar(this.usuarioID)
      return resultado;
    } catch (error) {
      console.error('Error al eliminar el usuario', error);
      return null;
    } finally {
      await this.usuariosRepositorio.desconectar();
    }
  }


}