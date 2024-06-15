const express = require('express')
const router = express.Router();
const LivroDao = require('../modelo/livro-dao')

const obterLivros = LivroDao.obterLivros;
const incluir = LivroDao.incluir;
const excluir = LivroDao.excluir;

router.get('/', async (req, res) =>{
    const livros = await obterLivros();
    res.json(livros);
})

router.post('/', async (req, res) => {
    const livro = req.body;
    const result = await incluir(livro)
    if (result) {
        res.json({mensagem : 'Livro Incluído com Sucesso'})
    }
    else{
        res.json({mensagem : 'Falha ao incluir o Livro'})
    }
})

router.delete('/:_id', async (req,res)=>{
    const codigo = req.params._id;
    const result = await excluir(codigo);
    if (result.deletedCount > 0){
        res.json( {mensagem : 'Livro excluido com sucesso'})
    }
    else{
        res.json( {mensagem : 'Falha ao excluir Livro'})
    }
})

module.exports = router