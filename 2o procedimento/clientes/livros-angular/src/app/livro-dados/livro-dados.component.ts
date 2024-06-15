import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent implements OnInit {
  public livro:Livro = new Livro('',1,'','',[])

  public autoresForm:string = ''
  public editoras:Array<Editora> = []


  constructor(private servEditora:ControleEditoraService, private servLivro:ControleLivrosService, private router:Router){
    this.servEditora = servEditora
    this.servLivro = servLivro
    this.router = router
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras()
  }

  incluir = ():void=>{
    this.livro.autores = this.autoresForm.split('\n')
    console.log(this.livro)
    this.servLivro.incluir(this.livro).then( ()=> {
      this.router.navigateByUrl('/lista')
    })
  }
}
