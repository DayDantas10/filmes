import { Component } from '@angular/core';
import { FormBuilder, 
        FormGroup, 
        Validators } from '@angular/forms';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-busca-filmes',
  templateUrl: './busca-filmes.component.html',
  styleUrl: './busca-filmes.component.css'
})
export class BuscaFilmesComponent {

  formBusca: FormGroup 
  filme: Filme | undefined
  constructor(private fb: FormBuilder,
              private fs: FilmeService){
    this.formBusca = this.fb.group({
      titulo: ['', [Validators.required,
                    Validators.minLength(2)]] /*Digitar pelo menos 1 letra*/
    })
  }

  buscar(){
    const titulo = this.formBusca.value.titulo /*retorna um objeto json*/
    this.fs.buscarPeloTitulo(titulo).subscribe(
      res=> { /** resposta concreta ou vazia */
        this.filme = res.Search /**resposta da requisição atribuída ao objeto filme */
      }
    )
  }

}
