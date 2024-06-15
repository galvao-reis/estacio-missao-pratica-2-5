import { Injectable } from '@angular/core';
import { Livro } from './livro';

Injectable({
  providedIn: 'root'
})

interface LivroMongo {
  _id : string | null,
  codEditora : number,
  titulo : string,
  resumo : string,
  autores : string[]
}
export class ControleLivrosService {
  baseUrl = 'http://localhost:3030/livros'

  constructor() { }

  async obterLivros(){
    const response = await fetch(this.baseUrl)
    const json = await response.json()
    console.log(json)
    return json.data.map( (livro:any) => {
      return new Livro( 
        livro._id,
        livro.codEditora,
        livro.titulo,
        livro.resumo,
        livro.autores)
    } );
  }
  async incluir(livro:Livro){
    const mongo:LivroMongo = {
      _id : null,
      titulo : livro.titulo,
      codEditora : livro.codEditora,
      resumo : livro.resumo,
      autores : livro.autores,
    }
    const options:RequestInit = {
      method : "POST",
      headers:{
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(mongo),
    }
    const response = await fetch(this.baseUrl,options)
    const json = await response.json()
    return json.ok as boolean
    }

  async excluir(cod:string){
    const url = `${this.baseUrl}/${cod}`
    const options:RequestInit = {
      method : "DELETE",
    }
    const response = await fetch(url,options)
    const json = await response.json()
    return json.ok as boolean
    }

}
