import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras:Array<Editora>= [
    {codEditora:1,nome:"Editora Um"},
    {codEditora:2,nome:"Editora Dois"},
    {codEditora:3,nome:"Editora Três"},
    {codEditora:4,nome:"Editora Quatro"}
  ]
  
  getEditoras = ():Array<Editora> => {
    return this.editoras
  }
  getNomeEditora = (codEditora:number):string | undefined => {
    const match = this.editoras.filter( (editora):boolean => {
      return editora.codEditora === codEditora
    })
    const editora = match.pop()
    return editora?.nome
  }


  constructor() { }
}
