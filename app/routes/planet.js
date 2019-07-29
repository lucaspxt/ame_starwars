const Planet = require('../models/planet')
const controller = require('../controllers/planet')

module.exports = function(application){
    Planet.methods(['get', 'post', 'put', 'delete'])

    Planet.before('post', controller.validation).before('put', controller.validation)

    Planet.register(application, '/planet')
}