import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Value } from '../model/Value';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Value[]> {
     return this.http.get<Value[]>("https://desafiotitan.herokuapp.com/valor");
  }

  getById(id: number): Observable<Value> {
    return this.http.get<Value>(`https://desafiotitan.herokuapp.com/valor/${id}`)
  }
}
