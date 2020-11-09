//var Control = require('./Control');
//var Coordinacion= require('./Coordinacion');
const path = require('path');
const axios = require('axios');
const express = require('express');
//const session = require('express-session');
//const bodyParser = require('body-parser');
//const logger = require('morgan');
const app=express();
//const session = require('express-session');
const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

//app = express();
/*app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });
*/
/*app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
*/
//app.use(logger('dev'));

/*app.use(session({
  secret: 'secret word',
  resave: false,
  saveUninitialized: true
}));

var cord = new Coordinacion("116", "tec", "San Jose.com", "asd", "090123", "dasd", "asd", "asd", "asd");

const control = new Control(cord);

app.post('/guardarZona', (req, res) => {
    control.prueba(req.body, res);
})

//Funcion para guardar un miembro en la base de datos
app.post('/guardarMiembro', (req, res) => {
  control.guardarMiembro(req.body,res);
})

//Funcion para guardar un miembro en la base de datos
app.post('/guardarAsesor', (req, res) => {
  control.guardarAsesor(req.body,res);
})

app.post('/asignarMiembro', (req, res) => {
  control.asignarMiembro(req.body,res);
})


//Funcion para traer todas las zonas
app.post("/allZonas",(req,res)=>{
  control.allZonas(req, res);
})

app.post('/cambiarMiembroGrup', (req, res) => {
  control.cambiarMiembroGrupo(res);
  })
  
app.post("/allRama",(req, res)=>{
  control.allRama(req,res);
})

app.post("/allPersona",(req, res)=>{
  control.allPersona(req,res);
})

app.post("/guardarRama",(req, res)=>{
  control.crearRama(req.body,res);
})

app.post("/allGrupos",(req, res)=>{
  control.allGrupos(req,res);
})

app.get("/getSesion",(req, res)=>{
  res.send(req.session);
  res.end();
})

app.post("/allAsesores",(req, res)=>{
  control.allAsesores(req,res);
})

app.post("/logIn",(req, res)=>{
  control.logIn(req,res);
})

app.get('/cerrarSesion', function (req, res) {
  control.cerrarSesion(req,res);
})
*/
app.get('/jobs', async (req, res) => {
  try {
    let { description = '', full_time, location = '', page = 1 } = req.query;

    description = description ? encodeURIComponent(description) : '';
    location = location ? encodeURIComponent(location) : '';
    full_time = full_time === 'true' ? '&full_time=true' : '';
    if (page) {
      page = parseInt(page);
      page = isNaN(page) ? '' : `&page=${page}`;
    }
    const query = `https://jobs.github.com/positions.json?description=${description}&location=${location}${full_time}${page}`;
    const result = await axios.get(query);
    res.send(result.data);
  } catch (error) {
    res.status(400).send('Error while getting list of jobs.Try again later.');
  }
});

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));

