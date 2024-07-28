const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const cors = require('cors');


//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const lenguageRoutes = require('./routes/lenguageRoutes');
const aspirantRoutes = require('./routes/aspirantsRoutes');
const areaRoutes = require('./routes/areaRoutes');
//const experienceRoutes = require('./routes/experienceRoutes');
//const moviesRoutes = require('./routes/moviesRoutes');
//const genresRoutes = require('./routes/genresRoutes');

//Aquí llamo a la ruta de las api de movies
 const apiAspirantsRouter = require('./routes/api/apirants');
 const apiProfessionsRouter = require('./routes/api/professions');
 const apiAreasRouter = require('./routes/api/areas');
 const apiSearchRouter = require('./routes/api/search');
// //Aquí llamo a la ruta de las api de actors
// const apiGenresRouter = require('./routes/api/genres')
// //Aquí llamo a la ruta de las api de actors
// const apiActorsRouter = require('./routes/api/actors')


// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/lenguage', lenguageRoutes);
app.use('/aspirant', aspirantRoutes);
//app.use('/experienceRoutes', experienceRoutes);
app.use('/area', areaRoutes);

// app.use(moviesRoutes);
// app.use(genresRoutes);
// //Aquí creo la colección de mis recursos de movies (APIs)
app.use('/api/aspirants',apiAspirantsRouter);
app.use('/api/professions',apiProfessionsRouter);
app.use('/api/areas',apiAreasRouter);
app.use('/api/search',apiSearchRouter);


//Activando el servidor desde express
app.listen('3001', () => console.log('Servidor corriendo en el puerto 3001'));
