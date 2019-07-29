var express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser')

var app = express()
var port = 8000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//adiciona rotas, configurações de bd e controllers na aplicação
consign()
    .include('app/routes')
    .then('config/database.js')
    .into(app);

app.listen(port, function(){
    console.log('Server ON port: ' + port)
});

module.exports = app