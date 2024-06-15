import { json } from "stream/consumers";
import {Livro} from "@/classes/modelo/Livro"


// const livros:Array<Livro> = [
    //     {codigo: 123, codEditora:1, titulo:'Livro dos Numeros 1', resumo:'Um livro mostrando todos os numeros 1 do mundo',autores : ['O. Melhor', 'A. Maioral']},
    //     {codigo: 456, codEditora:2, titulo:'Os numeros pares', resumo:'Um compilado de números pares', autores : ['D. Ois', 'Dra. A. Mais', 'P. Ares']},
    //     {codigo: 789, codEditora:3, titulo:'Três nunca é demais', resumo:'Um livro de imagens mostrando objetos em grupos de três.', autores : ['T. Res', 'T. Riade']},
    // ]
    
    export interface LivroMongo {
        _id : string | null;
        codEditora : number;
        titulo : string;
        resumo : string;
        autores : [string];
    }
    
    export class ControleLivro{
    baseURL = "http://localhost:3030/livros"

    async obterLivros() : Promise<LivroMongo> {
        const response = await fetch(this.baseURL);
        const json = await response.json();
        const livros = json.data.map( (livro: any) => {
            return new Livro(
                livro._id,
                livro.codEditora,
                livro.titulo,
                livro.resumo,
                livro.autores
            ) as LivroMongo;
        } )
        return livros;
    }

    async incluir(livro:Livro) : Promise<boolean>{
        const livroMongo = livro as LivroMongo;
        livroMongo._id = null;
        const options = {
            method: "POST",
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(livroMongo)
        }
        const response = await fetch(this.baseURL, options)
        const content = await response.json()
        return content.ok as boolean
    }

    async excluir(codigo:string) : Promise<boolean>{
        const url = this.baseURL + '/' + codigo;
        const response = await fetch(url, {method: "DELETE"})
        const content = await response.json()
        return content.ok as boolean 
    }
}