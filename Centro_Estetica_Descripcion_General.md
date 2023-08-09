# 2023-TP2-BE-21E-Sistema de turnos "Beauty Spa" 💄 	💅
# Integrantes: Paola Yanina Quiñonez, Mateo Agustin Bellomo, Camila Belen Szesko y Francisco Javier Ezequiel Veron

# 0. Descripcion General de la Situacion 📍

Actualmente el Centro de estetica "Beauty Spa" gestiona sus turnos de manera telefonica / whatsapp/ presencial, lo cual ocasiona una sobrecarga de trabajo a la recepcion. Ademas el manejo de la agenda de los turnos diarios se realiza a traves de una tabla de excel, generando a veces inconsistencia de datos por omision de registros. Todo esto causa un deterioro en el control de la empresa y desgaste en la relacion con sus empleados/clientes.

<hr />

# 1. Introducción 📍

"Beauty Spa" es una solucion web que permitira a los usuarios clientes del Centro de Estetica "Beauty Spa" gestionar sus turnos de manera online para los diferentes servicios ofrecidos: Masajes, Tratamientos de Belleza y Pestañas. Ademas, permitira a los usuarios administradores gestionar los turnos virtuales, asignar turnos presenciales y llevar un control periodico de la agenda del centro de estetica.

<hr />

# 2. Requerimientos del sistema 📍

## 2.1 Funcionales

- Permitir a los usuarios clientes registrarse con dni(usuario), correo electronico, nombre, apellido, telefono y fecha de nacimiento.
- Los clientes deben seleccionar un dia, una hora para sacar su turno, servicio y profesional en caso de que corresponda.
- Mostrar informacion de los servicios, incluyendo los valores y duracion.
- Permitir a los usuarios seleccionar el turno segun el dia y la hora deseada.
- Enviar un mail con la confirmacion del turno.
- Permitir a los usuarios modificar los turnos.
- Permitir a los usuarios cancelar los turnos.
- Permitir a los usuarios clientes ver su historial de turnos y a los usuarios administradores ver los historiales de todos los clientes.
- Precargar turnos disponibles de cada profesional y servicio.

## 2.2 No funcionales

- El sistema debe ser fácil de usar y navegar.
- El sistema debe ser seguro y proteger la información del usuario.
- El sistema debe ser escalable y capaz de manejar una gran cantidad de tráfico.
- El sistema debe ser rápido y responder rápidamente a las solicitudes de los usuarios.

<hr />

# 3. Reglas de negocio 📍

## 3.1 Reglas de reserva de turnos

- El usuario debe tener estar registrado.
- Los clientes pueden modificar sus turnos futuros con 24 hs de anticipacion de la fecha y hora del turno.
- Los clientes pueden cancelar sus turnos futuros con 24 hs de anticipacion de la fecha y hora del turno.
- El usuario cliente no puede sacar turnos para otras personas.
- El usuario administrador tiene habilitada puede reservar turno para otras personas.
- No se puede reservar un turno en un horario que ya hay otro turno agendado para el mimso profesional.
- No se puede reservar un turno en un horario o dia que el local este cerrado o no disponible.

## 3.2 Reglas de control de agenda

- Los turnos solo son válidos para el/los servicio/s y la hora reservada.
- Se debe marcar el presente una vez que el cliente tome el turno(cambio de estado del turno), en caso de que no se marque el presente, el cliente sera penalizado.
- El administrador puede despenalizar a los clientes.
- El administrador puede cambiar el estado del turno de ausente a presente, no viceversa.
- El administrador no puede eliminar un turno que ya pasó.
- Para que el administrador pueda asignar un turno desde la agenda a un cliente se le solicitara el DNI, en caso de que no se encuentre, se le pedira los demas datos de registro.
- No se ofrecen turnos que ya esten reservados.

<hr />

# 4. Conclusión 📍

Desde el usuario cliente con nuestra solucion web vamos a darle una gran mejora de experiencia al momento de sacar turno, logrando gestionar sus turnos de una manera online, haciendo que el proceso sea mas agil y comodo.

Para el usuario administrador le permitira un control mas eficiente de la agenda de turnos, evitando la sobrecarga de trabajo en la recepcion y reduciendo la posibilidad de errores en la gestion de turnos.

<hr />

# 5. Entidades 📍

**Usuario**

```

- Dni
- Nombre
- Apellido
- Telefono
- FechaNacimiento
- Email

```

**Empleado**

```

- Dni
- IdEmpresa
- Nombre
- Apellido
- Telefono
- FechaNacimiento
- Email
- FechaIngreso
- Estado
- TipoServicio

```

**Turno**

```

- Id
- DniUsuario
- DniEmpleadoRegistro
- IdServicio
- DniProfesional
- FechaHora
- Estado

```

**Servicio**

```

- Id
- Nombre
- Duracion
- Valor
- Detalle
- TipoServicio

```

**Empresa**

```

- Id
- RazonSocial
- Telefono
- Email
- FechaAlta

```

