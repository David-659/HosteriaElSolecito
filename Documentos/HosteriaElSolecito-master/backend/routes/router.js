const exp = require('express')
const router = exp.Router();
const controladorCliente = require('../controllers/cliente.controller')

router.get('/index',controladorCliente.listarProductos);

router.get('/', (req, res) => {
  res.render('pages/index');
});

router.get('/admin', (req, res) => {
  res.render('pages/admin');
});

router.get('/galeria', (req, res) => {
  res.render('pages/Galeria');
});

router.get('/habitaciones', (req, res) => {
  res.render('pages/Habitaciones');
});

router.get('/login', (req, res) => {
  res.render('pages/Login');
});

router.get('/menu', (req, res) => {
  res.render('pages/menu');
});

router.get('/nosotros', (req, res) => {
  res.render('pages/Nosotros');
});

router.get('/register', (req, res) => {
  res.render('pages/Register');
});

router.get('/reservas', (req, res) => {
  res.render('pages/Reservas');
});

router.get('/reservas2', (req, res) => {
  res.render('pages/Reservas2');
});

router.get('/servicios', (req, res) => {
  res.render('pages/Servicios');
});

module.exports = router;
