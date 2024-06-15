const banco = require('./conexao.js')

const livroSchema = new banco.Schema({
    _id : banco.Schema.Types.ObjectId,
    titulo : String,
    codEditora : Number,
    resumo : String,
    autores : [String],
})

module.exports = banco.model('livros',livroSchema);