const mongoose = require("../config/connection");

const servicioSchema = new mongoose.Schema({
    nombre: { type: String, required: true, maxLength: 50 },
    descripcion: { type: String, required: true, maxLength: 100 },
    precio: { type: Number, required: true },
    ubicacion: { type: String, required: true, maxLength: 100 },
    stock: { type: Number, required: true, min: 0 }
}, { versionKey: false });

const Servicio = mongoose.model("Servicio", servicioSchema);