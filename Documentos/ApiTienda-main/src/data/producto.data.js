const producto = require('../models/producto.model');

exports.findProducto = async (filter,projection) => {
    try {
        if (!projection) return await producto.findOne(filter);
        else return await producto.findOne(filter,projection);
    } catch (error) {
        return error;
    }
}

exports.createProducto = async (productoInfo) => {
    try {
        return new producto(productoInfo).save();
    } catch (error) {
        return error;
    }
}