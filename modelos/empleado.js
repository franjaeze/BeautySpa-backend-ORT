const mongoose = require("mongoose");

const EmpleadoSchema = new mongoose.Schema({
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
    fechaIngreso: {
        type: Date, required: true,
    },
    estado: {
        type: Boolean, required: true,
    },
    email: {
        type: String, required: true,
    },
    idTipoServicio: {
        type: Number, required: true,
    }
},
    { timestamps: true });

module.exports = mongoose.model("empleado", EmpleadoSchema);