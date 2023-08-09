const mongoose= require("mongoose");

const ServicioSchema= new mongoose.Schema ({
    nombre: {
        type: String, required:true,
    },
    duracion: {
        type: Number, required:true,
    },
    valor: {
        type: Number, required:true,
    },
    detalle: {
        type: String, required:true,
    },
    tipoDeServicio: {
        type: String, required:true,
    }
},
{ timestamps:true});

module.exports = mongoose.model ("servicio", ServicioSchema);
