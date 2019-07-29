var request = require('request')

module.exports.validation = function validation(req, res, next){
    var planetName = req.body.name
    if(planetName){
        request('https://swapi.co/api/planets/?search='+planetName, function (error, response, body) {
            if(error){
                res.status(400).send(error)
            }else{
                var hasResult = JSON.parse(body).count
                if(hasResult){
                    var resultsFilms = JSON.parse(body).results[0].films
                    req.body.films = resultsFilms.length
                }else{
                    res.status(400).send({msg: 'Informe um nome de planeta válido.'})
                }
            }
            next()
        })
    }else{
        next()
    }
}