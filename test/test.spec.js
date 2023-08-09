let chai = require('chai')
let expect = chai.expect

const Empleado = require('../modelos/empleado.js')
const Turno = require('../modelos/turno.js')
const Servicio = require('../modelos/servicio.js')
const Usuario = require('../modelos/usuario.js')

const empleadosRepositorio = require('../repositorio/empleadosRepositorio.js')
const serviciosRepositorio = require('../repositorio/serviciosRepositorio.js')
const turnosRepositorio = require('../repositorio/turnosRepositorio.js')
const usuariosRepositorio = require('../repositorio/usuariosRepositorio.js')

class Empresa {
    constructor(razonSocial, cuit, email) {
        this.razonSocial = razonSocial
        this.cuit = cuit
        this.email = email
    }
}


const empleado1 = new Empleado(1, 4231234, 1, "Mateo", "Bellomo", 123456789, "25/01/2000", "mateo@email.com", "25/02/2015", "Habilitado", 1)
const empleado2 = new Empleado(2, 4237456, 2, "Fran", "Veron", 123456654, "03/10/2001", "fran@email.com", "25/02/2016", "Habilitado", 1)
const usuario1 = new Usuario(1, 42354154, "Camila", "Szesko", "1234574", "13/01/2001", "camila@email.com")
const miEmpresa = new Empresa("BeautySpa", 1155331114, "beautySpa@gmail.com")
const servicio1 = new Servicio(1, 1, "Masaje Tailandes", 60, 8000, "Alto masaje")
const turno1 = new Turno(1, null, null, 1, 4231234, new Date('2023-05-19T16:00:00.000Z'), "Disponible")
const turno2 = new Turno(2, null, null, 1, 4231234, new Date('2023-02-19T16:00:00.000Z'), "Disponible")
const turno3 = new Turno(3, null, null, 1, 4231234, new Date('2023-02-15T16:00:00.000Z'),  "Disponible")

const empleados = new empleadosRepositorio()
const turnos = new turnosRepositorio()
const servicios = new serviciosRepositorio()
const usuarios = new usuariosRepositorio()


empleados.guardarEmpleado(empleado1)
empleados.guardarEmpleado(empleado2)
usuarios.guardarUsuario(usuario1)
servicios.guardarServicio(servicio1)
turnos.guardarTurno(turno1)
turnos.guardarTurno(turno2)
turnos.guardarTurno(turno3)


// El log de la 46 si funciona pero el de la 53 no

//console.log(empleados.obtenerEmpleado(1));



 describe('El repositorio empleados', function(){
    it('Tiene empleados', function(){
        expect(empleados.cantidadEmpleados()).to.above(0)
        //console.log(empleados.obtenerEmpleado(1));
    })


     /*  it('Usuario registrado', function(){
        let dniExiste = 42354154
        expect(empleados.usuarioExistente(dniExiste)).to.not.be.undefined
    })   */
})    
 
/* 

describe('El objeto servicio1', function(){
    it('Tiene una duracion mayor a 30 minutos', function(){
   
       expect(miEmpresa.servicios[0].duracion).above(30)
        
    })
})
*/


/*
describe('El objeto turno1', function(){
    it('Esta a tiempo de ser modificado o eliminado', function(){

        const fechaHoraLocal = new Date()
        const fechaHoraGMTMenos3 = new Date(fechaHoraLocal.getTime() - (fechaHoraLocal.getTimezoneOffset() * 60 * 1000))

        console.log(turnos.turnos[0]);

        let resultado = turnos.turnos[0].esMayorA24hs(fechaHoraGMTMenos3)
          
        expect(resultado).to.be.true
        
    })

     it('Esta disponible', function(){
        expect(miEmpresa.turnos[0].estado).to.equal('Disponible')
    })

    it('No se puede eliminar', function(){
        const fechaHoraLocal = new Date()
        const fechaHoraGMTMenos3 = new Date(fechaHoraLocal.getTime() - (fechaHoraLocal.getTimezoneOffset() * 60 * 1000))

        let resultado = miEmpresa.turnos[1].estaVigente(fechaHoraGMTMenos3)

        expect(resultado).to.be.true
    })  

}) */
 

