const Livro = require('./livro-schema')

const obterLivros = async () => {
    const livro = await Livro.find();
    return {data : livro};
}

const incluir = async (livro) => {
    const novoLivro = new Livro(livro);
    const result = await novoLivro.save();
    return result;
}

const excluir = async (codigo) => {
    const result = await Livro.deleteOne({_id : codigo});
    return result; 
}

module.exports = {
    obterLivros,
    incluir,
    excluir
}