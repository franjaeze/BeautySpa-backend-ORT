const UsuariosRepositorio = require('../../repositorio/usuariosRepositorio');
const ExisteDNIUsuario = require('../Usuarios/existeDNIUsuario');


module.exports = class CrearUsuario {
  constructor(usuario) {
    this.usuario = usuario;
    this.usuariosRepositorio = new UsuariosRepositorio();
  }


  async run() {
    try {
      await this.usuariosRepositorio.conectar();
      const dniExistente = new ExisteDNIUsuario(this.usuario.dni);
      let resultado = null;
      const existe = await dniExistente.run();
      console.log(existe + "existe");
      if (existe) {
        reutrn ('Error al crear el usuario, Usuario con ese Dni ya existe')
      } else {
        resultado = await this.usuariosRepositorio.guardar(this.usuario);
       return resultado;
      }

      await this.usuariosRepositorio.desconectar();

    } catch (error) {
      console.error('Error al crear el usuario:', error);
      throw new Error('Error al crear el usuario');
    }
  }

}