const modeloProducto = require('../models/cliente.model')

exports.listarProductos = async (req, res) => {
    let listaProductos = await modeloProducto.find();
    console.log(listaProductos)
    if (listaProductos) {
        //res.status(200).json(listaProductos)
        res.render('/pages/index',{
            clientes:listaProductos,
        }) //corregir aqui para que sepa que es productos
    }else {
        res.status(500).json({error})
    }
};
