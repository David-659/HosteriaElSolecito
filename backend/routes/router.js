const exp = require('express')
const router = exp.Router();
const controladorCliente = require('../controllers/cliente.controller')

router.get('/index',controladorCliente.listarProductos);

router.get("/", (req,res) => {
    res.render('pages/index')    
})

module.exports = router