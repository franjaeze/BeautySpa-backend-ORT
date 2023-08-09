const mongoose= require("mongoose");

const TurnoSchema= new mongoose.Schema ({
    dniUsuario: {
        type: String, required:true,
    },
    dniEmpleadoRegistro: {
        type: String, required:true,
    },
    idServicio: {
        type: Number, required:true, 
    },
    dniProfesional: {
        type: Number, required:true,
    },
    fechaHora: {
        type: Date, required:true,
    },
    estado: {
        type: String, required:true,
    }
},
{ timestamps:true});

module.exports = mongoose.model ("turno", TurnoSchema);

