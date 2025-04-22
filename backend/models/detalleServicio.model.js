const mongoose = require("../config/connection");


const detalleServicioSchema = new mongoose.Schema({
    cantidad: { 
        type: Number, 
        required: true,
        min: 1 
    },
    
    idServicio: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Servicio', 
        required: true 
    },
    
    idDetalleReserva: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'DetalleReserva', 
        required: true 
    }
}, { versionKey: false });

module.exports = mongoose.model("DetalleServicio", detalleServicioSchema);