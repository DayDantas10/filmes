import { Component } from '@angular/core';
import { FormBuilder, 
        FormGroup, 
        Validators } from '@angular/forms';

@Component({
  selector: 'app-busca-filmes',
  templateUrl: './busca-filmes.component.html',
  styleUrl: './busca-filmes.component.css'
})
export class BuscaFilmesComponent {

  formBusca: FormGroup 
  constructor(private fb: FormBuilder){
    this.formBusca = this.fb.group({
      titulo: ['', [Validators.required,
                    Validators.minLength(2)]] /*Digitar pelo menos 1 letra*/
    })
  }

  buscar(){
    const titulo = this.formBusca.value.titulo /*retorna um objeto json*/

    console.log(titulo)
  }

}
