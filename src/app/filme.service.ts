import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  API_URL = 'https://www.omdbapi.com?apikey=d3c5689c' /**primeira variável*/
  constructor(private http: HttpClient) { }

  buscarPeloTitulo(titulo:string):Observable<Filme> { /**observable: vários tipos de requisição */
    return this.http.get<Filme>(`${this.API_URL}&t=${titulo}`);
  }
}
