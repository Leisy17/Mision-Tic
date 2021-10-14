const express = require('express');
const path = require('path');
const morgan = require ('morgan');
const mongoose = require('mongoose');
const app = express();

// connection to db
mongoose.connect('mongodb://localhost/crud-mongo')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

// rutas de importacion
const indexRoutes = require('./routes/index');

// configuracion
app.set('port',process.env.PORT || 8000)
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

// rutas
app.use('/', indexRoutes);

// servidor 
app.listen(app.get('port'), ()=>{
    console.log('Server en puerto');
});
