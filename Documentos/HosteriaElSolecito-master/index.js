const exp = require('express');
require('dotenv').config()
const enrutador = require('./backend/routes/router')

const app = exp();

app.use(exp.json());


app.use('/v1',enrutador)

const path = require('path')
app.use(exp.static(path.join(__dirname,'frontend/views/static')));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./frontend/views'));


app.listen(process.env.PORT || 8080, ()=> {
    console.log(`servidor corriendo en puerto: ${process.env.PORT}`);
});
