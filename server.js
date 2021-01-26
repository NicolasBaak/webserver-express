const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

const app = express();
app.use( express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS engine
app.set('view engine', 'hbs');

app.get('/',  (req, res) => {
    res.render('home',{
        Nombre: 'Nicolas Alejandro'
    });

})
 
app.get('/about',  (req, res) => {
    res.render('about');
})
 

app.get('/data',(req, res)=>{
    res.send('Hola Data');
})
app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puesto ${ port }`);
})