import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root' /**pode ser acessado por qualquer componente, dentro do módulo principal */
})
export class FilmeService {
  API_URL = 'https://www.omdbapi.com?apikey=d3c5689c' /**primeira variável*/
  constructor(private http: HttpClient) { }

  buscarPeloTitulo(titulo:string):
                  Observable<Filme> { /**observable: retorna um objeto, a partir de vários tipos de requisição */
    return this.http.get<Filme>
    (`${this.API_URL}&t=${titulo}`); /**consulta http do tipo get */
  }
}
