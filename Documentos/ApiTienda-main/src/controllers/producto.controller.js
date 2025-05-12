const modeloProducto = require('../models/producto.model')
dbProducto = require('../data/producto.data')

exports.listarProductos = async (req, res) => {
    try {
        let listaProductos = await modeloProducto.find();
        console.log(listaProductos)
        if (listaProductos) {
            //res.status(200).json(listaProductos)
            res.render('pages/index',{listaProductos}) //corregir aqui para que sepa que es productos
        }else {
            res.status(500).json({error})
        }
    } catch (error) {
        console.error(error);
        return res.render('500',{error:error    })
    }
};

exports.buscarProductos = async (req, res) => {
    try{
        let buscarProductos = await modeloProducto.find({"referencia": req.params.ref });
        console.log(buscarProductos)
        if (buscarProductos) {
            res.status(200).json(buscarProductos)
        }else {
            res.status(500).json({error})
        }
    } catch (error) {
        console.error(error);
        return res.render('500',{error:error    })
    }
};

exports.agregarProductos = async (req, res) => {
    try{
        const productoRegistered = await dbProducto.findProducto({nombre: nombre});
        if (productoRegistered) {
            return res.status(400).json({error: 'este libro ya esta registrado'})
        }
        const producto = await dbProducto.createProducto(req.body);
        return res.status(200).json({mensaje: "Producto registrado con exito!! "})
    } catch (error) {
        console.error(error);
        return res.render('500',{error: error, })
    }
}

exports.editarProductos = async (req, res) => {
    try{
        const productoEditado = {
            referencia: req.params.ref,
            nombre: req.body.nom,
            precio: req.body.precio,
        }
        let editarProductos = await modeloProducto.findOneAndUpdate({referencia: req.params.x}, productoEditado);
        if (editarProductos) {
            res.status(200).json(editarProductos)
        }else {
            res.status(500).json({error})
        }
    } catch (error) {
        console.error(error);
        return res.render('500',{error:error    })
    }
}

exports.elimimarProductos =  async (req, res) => {
    try{
        console.log(req.params.id,req.body.ref)
        let elimimarProductos = await modeloProducto.findOneAndDelete({referencia:req.params.ref});
        if (elimimarProductos) {
            res.status(200).json(elimimarProductos)
        }else {
            res.status(500).json({error})
        }
    } catch (error) {
        console.error(error);
        return res.render('500',{error:error    })
    }
}