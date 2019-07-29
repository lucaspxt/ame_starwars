const restful = require('node-restful'),
    mongoose = restful.mongoose

const planetSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true, index: true},
    climate: {type: String, required: true},
    terrain: {type: String, required: true},
    films: {type: Number}
})

module.exports = restful.model('planete', planetSchema)

