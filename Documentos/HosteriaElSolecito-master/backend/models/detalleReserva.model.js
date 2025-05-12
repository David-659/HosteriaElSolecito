const mongoose = require("../config/connection");


const detalleReservaSchema = new mongoose.Schema({
    cantidad: { 
        type: Number, 
        required: true, 
        min: 1 
    },
    
    precioUnico: { 
        type: Number, 
        required: true 
    },
    
    idHabitacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Habitacion',
        required: true 
    },
    
    idReserva: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Reserva', 
        required: true 
    }
},  { versionKey: false });

module.exports = mongoose.model("DetalleReserva", detalleReservaSchema);