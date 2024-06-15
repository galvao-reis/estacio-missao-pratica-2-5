import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, LivroDadosComponent, LivroListaComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ControleEditoraService, ControleLivrosService],
})
export class AppComponent {
  title = 'livros-angular';
}
