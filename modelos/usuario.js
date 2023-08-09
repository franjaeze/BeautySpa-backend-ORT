const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String, required: true,
    },
    apellido: {
        type: String, required: true,
    },
    dni: {
        type: Number, required: true,
    },
    telefono: {
        type: Number, required: true,
    },
    fechaNacimiento: {
        type: Number, required: true,
    },
    email: {
        type: String, required: true,
    }
},
{ timestamps: true });

module.exports = mongoose.model("usuario", UsuarioSchema);
