const mongoose = require("../config/connection");

const habitacionSchema = new mongoose.Schema({
    numero: {
        type: Number, 
        required: true 
    },
    
    tipo: { 
        type: String,
        required: true, 
        maxLength: 20 
    },
   
    estado: { 
        type: String, 
        required: true, 
        maxLength: 10 
    }
}, { versionKey: false });

module.exports = mongoose.model("Habitacion", habitacionSchema);
