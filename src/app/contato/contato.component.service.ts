import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from './contato.component.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private apiUrl = 'https://www.admmaster.com.br/api/Contato';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  addHero(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato, this.httpOptions);
  }
}
