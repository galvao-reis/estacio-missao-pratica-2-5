const banco = require('mongoose')

const options = {
    dbName : "livraria",
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

banco.connect('mongodb://localhost:27017', options);

module.exports = banco