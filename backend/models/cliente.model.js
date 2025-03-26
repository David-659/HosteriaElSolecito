const mongoose = require("../config/connection");

// Cliente
const clienteSchema = new mongoose.Schema({
    cedula: { 
        type: Number, 
        required: true, 
        unique: true 
    },
   
    nombre: { 
        type: String, 
        required: true, 
        maxLength: 20 
    },
   
    apellido: { 
        type: String, 
        required: true, 
        maxLength: 20 
    },
   
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        maxLength: 100 
    },
    
    telefono: { 
        type: Number, 
        required: true, 
        maxLength: 10 
    }
}, { versionKey: false });

const Cliente = mongoose.model("Cliente", clienteSchema);
module.exports = Cliente;

