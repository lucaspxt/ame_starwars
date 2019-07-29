const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
module.exports = mongoose.connect('mongodb://localhost/ame_starwars', {useNewUrlParser: true})

